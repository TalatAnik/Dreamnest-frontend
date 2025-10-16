import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Container from '../components/Container.jsx';
import Button from '../components/Button.jsx';

// API call helper
const apiCall = async (endpoint, options = {}) => {
  const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
  const url = `${baseURL}${endpoint}`;

  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(url, config);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Network error' }));
    throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export default function ServiceProviderReviewsPage() {
  const { providerId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [provider, setProvider] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewSummary, setReviewSummary] = useState(null);
  const [showReviewForm, setShowReviewForm] = useState(false);

  // Fetch provider and reviews data
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch provider profile (Note: /api/services/providers/${providerId} endpoint doesn't exist yet)
      // Using profile endpoint as fallback
      const profileResponse = await apiCall(`/upload/profile/${providerId}`);

      if (profileResponse.status === 'success') {
        const userData = profileResponse.data;
        // Transform user data to provider format (limited data available)
        setProvider({
          id: userData.id,
          name: `${userData.firstName} ${userData.lastName}`,
          image: userData.avatar ? `${import.meta.env.VITE_API_URL || 'http://localhost:3000'}${userData.avatar}` : '/images/default-avatar.jpg',
          coverImage: '/images/services/default-cover.jpg', // Default cover
          category: 'Service Provider',
          rating: 0, // Would need to calculate from reviews
          totalReviews: userData._count?.reviews || 0,
          completedJobs: 0, // Not available in profile
          responseTime: 'Unknown', // Not available
          verified: true // Assume verified for now
        });
      }

      // For reviews, we would need to get all services by this provider first, then get reviews for each service
      // This is complex, so for now we'll show empty reviews with a note
      setReviews([]);
      setReviewSummary({
        totalReviews: 0,
        averageRating: 0,
        ratingDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
      });

    } catch (err) {
      setError(err.message);
      console.error('Error fetching service provider reviews:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (providerId) {
      fetchData();
    }
  }, [providerId]);

  const StarRating = ({ rating, size = 'sm' }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const starSize = size === 'lg' ? 'w-5 h-5' : 'w-4 h-4';

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className={`${starSize} text-yellow-400 fill-current`} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className={`relative ${starSize}`}>
          <svg className={`absolute ${starSize} text-gray-300 fill-current`} viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <div className="absolute inset-0 w-1/2 overflow-hidden">
            <svg className={`${starSize} text-yellow-400 fill-current`} viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className={`${starSize} text-gray-300 fill-current`} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return (
      <div className="flex items-center gap-0.5">
        {stars}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Container className="flex-1 py-8">
          <div className="animate-pulse">
            {/* Breadcrumb skeleton */}
            <div className="flex items-center gap-2 mb-6">
              {[...Array(4)].map((_, i) => (
                <React.Fragment key={i}>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                  {i < 3 && <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4"></div>}
                </React.Fragment>
              ))}
            </div>

            {/* Provider header skeleton */}
            <div className="flex items-start gap-6 mb-8">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
              <div className="flex-1">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-80"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-48"></div>
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
              </div>
            </div>

            {/* Reviews skeleton */}
            <div className="space-y-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen">
        <Container className="flex-1 py-8 text-center">
          <div className="w-24 h-24 mx-auto mb-4 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Error Loading Reviews
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{error}</p>
          <Button onClick={fetchData}>Try Again</Button>
        </Container>
      </div>
    );
  }

  if (!provider) {
    return (
      <div className="flex flex-col min-h-screen">
        <Container className="flex-1 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Service Provider Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The service provider you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link to="/services">
            <Button>Back to Services</Button>
          </Link>
        </Container>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Container className="flex-1 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 overflow-x-auto">
          <Link to="/services" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors whitespace-nowrap">
            Services
          </Link>
          <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link to={`/services/${provider.category}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors whitespace-nowrap">
            <span className="hidden sm:inline">{provider.category} Services</span>
            <span className="sm:hidden">{provider.category}</span>
          </Link>
          <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link to={`/services/${provider.category}/${providerId}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors whitespace-nowrap truncate max-w-20 sm:max-w-none">
            {provider.name}
          </Link>
          <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-900 dark:text-white font-medium whitespace-nowrap">
            Reviews
          </span>
        </nav>

        {/* Provider Header */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-8">
          <img
            src={provider.image}
            alt={provider.name}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover mx-auto sm:mx-0"
          />
          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 mb-2">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Reviews for {provider.name}
              </h1>
              {provider.verified && (
                <span className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full flex items-center gap-1">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="hidden sm:inline">Verified Provider</span>
                  <span className="sm:hidden">Verified</span>
                </span>
              )}
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 mb-4">
              <div className="flex items-center gap-2">
                <StarRating rating={provider.rating} size="lg" />
                <span className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                  {provider.rating}
                </span>
                <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  ({provider.totalReviews} reviews)
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                <span>{provider.completedJobs} jobs</span>
                <span className="hidden sm:inline text-gray-500">•</span>
                <span className="hidden sm:inline">Response: {provider.responseTime}</span>
              </div>
            </div>
            <Button onClick={() => setShowReviewForm(true)} className="w-full sm:w-auto">
              Write Review
            </Button>
          </div>
        </div>

        {/* Review Summary */}
        {reviewSummary && reviewSummary.totalReviews > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Review Summary
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Overall Rating */}
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {reviewSummary.averageRating.toFixed(1)}
                </div>
                <StarRating rating={reviewSummary.averageRating} size="lg" />
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Based on {reviewSummary.totalReviews} reviews
                </p>
              </div>

              {/* Rating Breakdown */}
              <div className="space-y-3">
                {[5, 4, 3, 2, 1].map((stars) => {
                  const count = reviewSummary.ratingDistribution[stars] || 0;
                  const percentage = reviewSummary.totalReviews > 0 ? (count / reviewSummary.totalReviews) * 100 : 0;

                  return (
                    <div key={stars} className="flex items-center gap-3">
                      <div className="flex items-center gap-1 min-w-0">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {stars}
                        </span>
                        <svg className="w-4 h-4 text-yellow-400 fill-current flex-shrink-0" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400 min-w-0">
                        {count}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Reviews List */}
        <div className="space-y-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6"
            >
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 font-semibold">
                    {review.authorInitials}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {review.author}
                      </h4>
                      {review.verified && (
                        <span className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs px-2 py-1 rounded-full">
                          Verified Customer
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span>{review.service}</span>
                      <span>•</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                </div>
                
                <StarRating rating={review.rating} size="lg" />
              </div>

              {/* Review Content */}
              <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                {review.title}
              </h5>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {review.content}
              </p>

              {/* Project Details */}
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 mb-4">
                <h6 className="font-medium text-gray-900 dark:text-white mb-2">
                  Project Details:
                </h6>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {review.projectDetails}
                </p>
              </div>

              {/* Work Samples */}
              {/* Review Photos */}
              {review.photos && review.photos.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                  {review.photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`Review photo ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg border border-gray-200 dark:border-gray-600 hover:opacity-75 transition-opacity cursor-pointer"
                      onClick={() => {
                        // In a real app, this would open a lightbox
                        window.open(photo, '_blank');
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Aspect Ratings - Compact Version */}
              <div className="flex flex-wrap gap-3 mb-6 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                {Object.entries(review.aspects).map(([aspect, rating]) => {
                  const aspectLabels = {
                    punctuality: 'Punctuality',
                    professionalism: 'Professionalism',
                    quality: 'Quality',
                    communication: 'Communication',
                    valueForMoney: 'Value'
                  };
                  
                  return (
                    <div key={aspect} className="flex items-center gap-2 text-sm">
                      <span className="text-gray-600 dark:text-gray-400 font-medium">
                        {aspectLabels[aspect]}:
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {rating.toFixed(1)}
                        </span>
                        <div className={`w-2 h-2 rounded-full ${
                          rating >= 4.5 ? 'bg-green-500' :
                          rating >= 3.5 ? 'bg-yellow-500' :
                          rating >= 2.5 ? 'bg-orange-500' : 'bg-red-500'
                        }`}></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Provider Response */}
              {review.providerResponse && (
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src={provider.image}
                      alt={provider.name}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="font-medium text-blue-900 dark:text-blue-100">
                      Response from {provider.name}
                    </span>
                    <span className="text-sm text-blue-600 dark:text-blue-400">
                      {review.providerResponse.date}
                    </span>
                  </div>
                  <p className="text-blue-800 dark:text-blue-200">
                    {review.providerResponse.content}
                  </p>
                </div>
              )}

              {/* Review Actions */}
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <button className="flex items-center gap-1 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  Helpful ({review.helpful})
                </button>
                
                <div className="flex items-center gap-4">
                  <button className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    Share
                  </button>
                  <button className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    Report
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Reviews */}
        <div className="text-center mt-12">
          <Button variant="outline">
            Load More Reviews
          </Button>
        </div>

        {/* Review Form Modal would go here if showReviewForm is true */}
        {showReviewForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Write a Review for {provider.name}
                </h3>
                <button
                  onClick={() => setShowReviewForm(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="text-center py-8">
                <p className="text-gray-600 dark:text-gray-400">
                  Review form would be implemented here with service selection, rating, photos upload, and detailed feedback form.
                </p>
                <Button 
                  className="mt-4"
                  onClick={() => setShowReviewForm(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}