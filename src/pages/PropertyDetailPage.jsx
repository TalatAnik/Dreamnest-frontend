import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Container from '../components/Container.jsx';
import Button from '../components/Button.jsx';
import OpenStreetMap from '../components/OpenStreetMap.jsx';

export default function PropertyDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  // Mock property data - in real app this would come from API
  useEffect(() => {
    const fetchProperty = async () => {
      setLoading(true);
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock property data
      const mockProperty = {
        id: parseInt(id),
        title: 'Modern Luxury Apartment in Gulshan',
        location: 'Gulshan 2, Dhaka',
        fullAddress: 'House 45, Road 11, Block C, Gulshan 2, Dhaka 1212',
        price: 1800,
        originalPrice: 2000,
        bedrooms: 3,
        bathrooms: 2,
        sqft: 1600,
        propertyType: 'Apartment',
        furnished: 'Fully Furnished',
        parking: 'Yes (1 space)',
        balcony: '2 Balconies',
        floor: '8th Floor',
        totalFloors: 12,
        yearBuilt: 2020,
        available: true,
        availableFrom: '2025-10-01',
        deposit: 5400, // 3 months
        rating: 4.3,
        totalReviews: 28,
        featured: true,
        lastUpdated: '2025-09-20',
        description: `This stunning modern apartment offers the perfect blend of luxury and comfort in the heart of Gulshan. With floor-to-ceiling windows, you'll enjoy abundant natural light and breathtaking city views. The open-plan living area seamlessly connects to a fully equipped modern kitchen with premium appliances.

The master bedroom features an en-suite bathroom and walk-in closet, while two additional bedrooms provide flexibility for guests or home office space. Two private balconies offer outdoor relaxation with panoramic views of the city skyline.

Located in a premium residential building with 24/7 security, elevator access, and backup power. Walking distance to restaurants, shopping centers, and business districts.`,
        features: [
          'Air Conditioning',
          'High-Speed Internet',
          'Modern Kitchen',
          'Dishwasher',
          'Washing Machine',
          'Built-in Wardrobes',
          'City Views',
          'Natural Light',
          'Security System',
          'Elevator Access',
          'Backup Generator',
          'Parking Space'
        ],
        images: [
          'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/3555615/pexels-photo-3555615.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        nearbyPlaces: [
          { name: 'Gulshan 2 Circle', distance: '0.5 km', type: 'Shopping' },
          { name: 'American International School', distance: '1.2 km', type: 'Education' },
          { name: 'United Hospital', distance: '2.1 km', type: 'Healthcare' },
          { name: 'Gulshan Lake Park', distance: '0.8 km', type: 'Recreation' }
        ],
        contact: {
          name: 'Ahmed Real Estate',
          phone: '+880 1XXXXXXXXX',
          email: 'info@ahmedrealestate.com',
          whatsapp: '+880 1XXXXXXXXX'
        }
      };

      setProperty(mockProperty);
      setLoading(false);
    };

    fetchProperty();
  }, [id]);

  const StarRating = ({ rating, totalReviews, size = 'sm', clickable = false, onClick }) => {
    if (!rating) return null;
    
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);
    const starSize = size === 'lg' ? 'w-5 h-5' : 'w-4 h-4';

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className={`${starSize} text-yellow-400 fill-current`} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    // Half star
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

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className={`${starSize} text-gray-300 fill-current`} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    const content = (
      <div className="flex items-center gap-1">
        <div className="flex items-center gap-0.5">
          {stars}
        </div>
        {totalReviews > 0 && (
          <span className={`${size === 'lg' ? 'text-sm' : 'text-xs'} text-gray-600 dark:text-gray-400 ml-1`}>
            {rating.toFixed(1)} ({totalReviews} review{totalReviews !== 1 ? 's' : ''})
          </span>
        )}
      </div>
    );

    if (clickable && onClick) {
      return (
        <button 
          onClick={onClick}
          className="transition-all hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-md p-1 -m-1"
          title="View all reviews"
        >
          {content}
        </button>
      );
    }

    return content;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setShowLightbox(true);
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Container className="flex-1 py-8">
          <div className="animate-pulse">
            {/* Back button skeleton */}
            <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
            
            {/* Top Section - Two Column Skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Left Column - Image Gallery Skeleton */}
              <div className="space-y-4">
                {/* Main Image Skeleton */}
                <div className="h-96 lg:h-[500px] bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
                
                {/* Thumbnail Gallery Skeleton */}
                <div className="grid grid-cols-6 gap-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-16 lg:h-18 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                  ))}
                </div>
              </div>

              {/* Right Column - Details Skeleton */}
              <div className="space-y-4">
                {/* Title and location */}
                <div>
                  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
                
                {/* Pricing skeleton */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
                
                {/* Stats skeleton */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                  <div className="flex justify-between">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="text-center">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-1 w-6"></div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-8"></div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Features skeleton */}
                <div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
                  <div className="grid grid-cols-2 gap-1">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    ))}
                  </div>
                </div>
                
                {/* Description skeleton */}
                <div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-2"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Content skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Full description skeleton */}
                <div>
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-1/4"></div>
                  <div className="space-y-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    ))}
                  </div>
                </div>
                
                {/* Features skeleton */}
                <div>
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-1/3"></div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    ))}
                  </div>
                </div>
                
                {/* Map skeleton */}
                <div>
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-1/4"></div>
                  <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-16 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Sidebar skeleton */}
              <div className="space-y-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-48 bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="flex flex-col min-h-screen">
        <Container className="flex-1 py-8 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4m-4 0v-6a2 2 0 012-2h2a2 2 0 012 2v6m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Property Not Found</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              The property you&apos;re looking for doesn&apos;t exist or has been removed.
            </p>
            <Button onClick={() => navigate('/properties')}>
              Browse All Properties
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Lightbox Modal */}
      {showLightbox && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setShowLightbox(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative">
              <img
                src={property.images[currentImageIndex]}
                alt={`${property.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="text-center text-white mt-4">
              {currentImageIndex + 1} of {property.images.length}
            </div>
          </div>
        </div>
      )}

      <Container className="flex-1 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-6"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Results
        </button>

        {/* Top Section - Two Column Layout with Equal Heights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Image Gallery */}
          <div className="flex flex-col h-full">
            {/* Main Image - Increased Height */}
            <div className="relative flex-1">
              <img
                src={property.images[currentImageIndex]}
                alt={`${property.title} - Main view`}
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl cursor-pointer"
                onClick={() => openLightbox(currentImageIndex)}
              />
              
              {/* Featured Badge */}
              {property.featured && (
                <div className="absolute top-4 right-4 bg-accent-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                  Featured
                </div>
              )}

              {/* Navigation Arrows */}
              {property.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {property.images.length}
              </div>
            </div>

            {/* Thumbnail Gallery - Single Row */}
            <div className="grid grid-cols-6 gap-2 mt-4">
              {property.images.slice(0, 5).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-16 lg:h-18 rounded-lg overflow-hidden ${
                    index === currentImageIndex 
                      ? 'ring-2 ring-primary-500' 
                      : 'hover:opacity-75'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${property.title} - Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {index === currentImageIndex && (
                    <div className="absolute inset-0 bg-primary-500 bg-opacity-20"></div>
                  )}
                </button>
              ))}
              {property.images.length > 5 && (
                <button
                  onClick={() => openLightbox(5)}
                  className="relative h-16 lg:h-18 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="text-center">
                    <div className="text-xs font-medium text-gray-600 dark:text-gray-300">
                      +{property.images.length - 5}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">more</div>
                  </div>
                </button>
              )}
            </div>
          </div>

          {/* Right Column - Compact Layout */}
          <div className="flex flex-col justify-between h-full">
            {/* Header & Pricing Combined */}
            <div className="space-y-4">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {property.title}
                </h1>
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-600 dark:text-gray-400">
                    {property.location}
                  </p>
                </div>
                <StarRating 
                  rating={property.rating} 
                  totalReviews={property.totalReviews} 
                  clickable={true}
                  onClick={() => navigate(`/properties/${property.id}/reviews`)}
                />
              </div>

              {/* Compact Pricing */}
              <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl p-4">
                <div className="flex items-baseline gap-2 mb-1">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    ৳{property.price.toLocaleString()}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">/month</div>
                  {property.originalPrice > property.price && (
                    <div className="text-sm text-gray-500 line-through">
                      ৳{property.originalPrice.toLocaleString()}
                    </div>
                  )}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Security Deposit: ৳{property.deposit.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Compact Stats & Features Combined */}
            <div className="space-y-4">
              {/* Quick Stats - Inline */}
              <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {property.bedrooms}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Bed{property.bedrooms !== 1 ? 's' : ''}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {property.bathrooms}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Bath{property.bathrooms !== 1 ? 's' : ''}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {property.sqft}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    sqft
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {property.floor}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Floor
                  </div>
                </div>
              </div>

              {/* Key Features - Compact Grid */}
              <div>
                <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-2">Key Features</h3>
                <div className="grid grid-cols-2 gap-1 text-xs">
                  {property.features.slice(0, 8).map((feature, index) => (
                    <div key={index} className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                      <svg className="w-3 h-3 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Compact Description */}
            <div>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-2">Description</h3>
              <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {property.description.split('\n')[0].substring(0, 150)}
                {property.description.split('\n')[0].length > 150 && '...'}
                {property.description.split('\n').length > 1 && (
                  <div className="text-primary-600 dark:text-primary-400 font-medium mt-1 text-xs">
                    Read full description below
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Detailed Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Full Description */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Full Description</h2>
              <div className="text-gray-600 dark:text-gray-400 whitespace-pre-line leading-relaxed">
                {property.description}
              </div>
            </div>

            {/* All Features & Amenities */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">All Features & Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Property Details Grid */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Property Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Property Type</div>
                  <div className="font-medium text-gray-900 dark:text-white">{property.propertyType}</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Furnished</div>
                  <div className="font-medium text-gray-900 dark:text-white">{property.furnished}</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Parking</div>
                  <div className="font-medium text-gray-900 dark:text-white">{property.parking}</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Balcony</div>
                  <div className="font-medium text-gray-900 dark:text-white">{property.balcony}</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Floor</div>
                  <div className="font-medium text-gray-900 dark:text-white">{property.floor} of {property.totalFloors}</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Year Built</div>
                  <div className="font-medium text-gray-900 dark:text-white">{property.yearBuilt}</div>
                </div>
              </div>
            </div>

            {/* Location & Nearby Places */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Location & Nearby</h2>
              <div className="mb-4">
                <div className="text-gray-600 dark:text-gray-400 mb-2">{property.fullAddress}</div>
              </div>
              
              {/* Interactive OpenStreetMap */}
              <div className="mb-4">
                <OpenStreetMap
                  center={{ lat: 23.8103, lng: 90.4125 }}
                  zoom={15}
                  markers={[
                    {
                      position: { lat: 23.8103, lng: 90.4125 },
                      title: `${property.title} - ${property.location}`
                    }
                  ]}
                  className="w-full h-64 rounded-lg shadow-md"
                />
              </div>

              {/* Nearby Places */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.nearbyPlaces.map((place, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{place.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{place.type}</div>
                    </div>
                    <div className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                      {place.distance}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Contact & Pricing Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Primary Pricing Card */}
              <div className="bg-gradient-to-br from-white to-primary-50 dark:from-gray-800 dark:to-primary-900/20 rounded-2xl border-2 border-primary-100 dark:border-primary-800 p-6 shadow-xl">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                    ৳{property.price.toLocaleString()}/mo
                  </div>
                  {property.originalPrice > property.price && (
                    <div className="text-lg text-gray-500 line-through">
                      ৳{property.originalPrice.toLocaleString()}
                    </div>
                  )}
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Security Deposit: ৳{property.deposit.toLocaleString()}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Available from</span>
                    <span className="font-medium text-gray-900 dark:text-white bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded text-sm">
                      {new Date(property.availableFrom).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Last updated</span>
                    <span className="font-medium text-gray-900 dark:text-white text-sm">
                      {new Date(property.lastUpdated).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Contact Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Save Property
                  </Button>
                  {property.totalReviews > 0 && (
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => navigate(`/properties/${property.id}/reviews`)}
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.414L3 21l2.414-5.094A8.959 8.959 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                      </svg>
                      View All Reviews ({property.totalReviews})
                    </Button>
                  )}
                </div>
              </div>

              {/* Contact Information Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white text-lg">{property.contact.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Property Agent</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{property.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{property.contact.email}</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors cursor-pointer">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      <div>
                        <div className="text-gray-700 dark:text-gray-300 font-medium">WhatsApp</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{property.contact.whatsapp}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Property Stats Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Property Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Views this week
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">247</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      Saved by users
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">38</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Days on market
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">12</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                    Share Property
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Info
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 8a3 3 0 01-3-3V8a3 3 0 016 0v4a3 3 0 01-3 3z" />
                    </svg>
                    Schedule Visit
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Report Issue
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Floating Write Review Button */}
      <button
        onClick={() => navigate(`/reviews/write?property=${property.id}`)}
        className="fixed bottom-6 right-6 bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group z-50"
        title="Write a Review"
      >
        <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </button>
    </div>
  );
}