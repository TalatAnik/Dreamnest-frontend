import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import Container from '../components/Container.jsx';
import Button from '../components/Button.jsx';

export default function ServiceCategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(true);
  const [providers, setProviders] = useState([]);
  const [filteredProviders, setFilteredProviders] = useState([]);
  const [sortBy, setSortBy] = useState('rating');
  const [availabilityFilter, setAvailabilityFilter] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  // Service categories data
  const serviceCategories = {
    cleaning: {
      name: 'Cleaning Services',
      icon: '🧽',
      description: 'Professional home and office cleaning services'
    },
    maintenance: {
      name: 'Maintenance & Repairs',
      icon: '🔧',
      description: 'Plumbing, electrical, and general repair services'
    },
    painting: {
      name: 'Painting Services',
      icon: '🎨',
      description: 'Interior and exterior painting services'
    },
    security: {
      name: 'Security Services',
      icon: '🛡️',
      description: 'Security guards and surveillance services'
    },
    moving: {
      name: 'Moving Services',
      icon: '📦',
      description: 'Packing, moving, and storage services'
    },
    gardening: {
      name: 'Gardening & Landscaping',
      icon: '🌱',
      description: 'Garden maintenance and landscaping services'
    }
  };

  // Mock providers data
  const mockProviders = {
    cleaning: [
      {
        id: 'clean-pro-1',
        name: 'CleanPro Bangladesh',
        rating: 4.8,
        reviewsCount: 156,
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80',
        services: ['Deep Cleaning', 'Regular Cleaning', 'Office Cleaning', 'Post Construction Cleaning'],
        startingPrice: 2500,
        hourlyRate: 400,
        verified: true,
        availability: 'available',
        responseTime: '< 2 hours',
        completedJobs: 324,
        yearsExperience: 5,
        description: 'Professional cleaning service with eco-friendly products and experienced staff.',
        coverage: ['Dhaka', 'Chittagong', 'Sylhet'],
        certifications: ['ISO 9001', 'Green Cleaning Certified']
      },
      {
        id: 'sparkle-clean-1',
        name: 'Sparkle & Shine',
        rating: 4.6,
        reviewsCount: 89,
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80',
        services: ['Home Cleaning', 'Deep Cleaning', 'Move-in/Move-out'],
        startingPrice: 2000,
        hourlyRate: 350,
        verified: true,
        availability: 'busy',
        responseTime: '< 4 hours',
        completedJobs: 198,
        yearsExperience: 3,
        description: 'Reliable residential cleaning service with attention to detail.',
        coverage: ['Dhaka', 'Gazipur'],
        certifications: ['Bonded & Insured']
      },
      {
        id: 'premium-clean-1',
        name: 'Premium Clean Solutions',
        rating: 4.9,
        reviewsCount: 203,
        image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&q=80',
        services: ['Luxury Home Cleaning', 'Office Cleaning', 'Event Cleanup'],
        startingPrice: 3500,
        hourlyRate: 600,
        verified: true,
        availability: 'available',
        responseTime: '< 1 hour',
        completedJobs: 412,
        yearsExperience: 8,
        description: 'Premium cleaning service for luxury homes and corporate offices.',
        coverage: ['Dhaka', 'Chittagong', 'Sylhet', 'Khulna'],
        certifications: ['ISO 9001', 'OSHA Certified', 'Green Cleaning']
      }
    ],
    maintenance: [
      {
        id: 'fix-masters-1',
        name: 'FixMasters',
        rating: 4.6,
        reviewsCount: 89,
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80',
        services: ['Plumbing', 'Electrical', 'AC Repair', 'Appliance Repair'],
        startingPrice: 1500,
        hourlyRate: 800,
        verified: true,
        availability: 'available',
        responseTime: '< 1 hour',
        completedJobs: 198,
        yearsExperience: 6,
        description: 'Expert technicians for all your home maintenance needs.',
        coverage: ['Dhaka', 'Chittagong'],
        certifications: ['Licensed Electrician', 'Certified Plumber']
      },
      {
        id: 'quick-fix-1',
        name: 'QuickFix Solutions',
        rating: 4.4,
        reviewsCount: 67,
        image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&q=80',
        services: ['Emergency Repairs', 'Plumbing', 'Electrical'],
        startingPrice: 1200,
        hourlyRate: 600,
        verified: false,
        availability: 'available',
        responseTime: '< 30 minutes',
        completedJobs: 145,
        yearsExperience: 4,
        description: '24/7 emergency repair service for urgent maintenance issues.',
        coverage: ['Dhaka'],
        certifications: ['Basic Electrician']
      }
    ]
  };

  const currentCategory = serviceCategories[category] || serviceCategories.cleaning;
  const categoryProviders = mockProviders[category] || mockProviders.cleaning;

  useEffect(() => {
    const fetchProviders = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      setProviders(categoryProviders);
      setFilteredProviders(categoryProviders);
      setLoading(false);
    };

    fetchProviders();
  }, [category]);

  useEffect(() => {
    let filtered = [...providers];

    // Apply availability filter
    if (availabilityFilter !== 'all') {
      filtered = filtered.filter(provider => provider.availability === availabilityFilter);
    }

    // Apply price range filter
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'low':
          filtered = filtered.filter(provider => provider.startingPrice < 2000);
          break;
        case 'medium':
          filtered = filtered.filter(provider => provider.startingPrice >= 2000 && provider.startingPrice < 3000);
          break;
        case 'high':
          filtered = filtered.filter(provider => provider.startingPrice >= 3000);
          break;
      }
    }

    // Apply sorting
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.startingPrice - b.startingPrice);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.startingPrice - a.startingPrice);
        break;
      case 'reviews':
        filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
        break;
      case 'experience':
        filtered.sort((a, b) => b.yearsExperience - a.yearsExperience);
        break;
    }

    setFilteredProviders(filtered);
  }, [providers, sortBy, availabilityFilter, priceRange]);

  const StarRating = ({ rating, size = 'sm', clickable = false, onClick }) => {
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

    const content = (
      <div className="flex items-center gap-0.5">
        {stars}
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

  const AvailabilityBadge = ({ availability }) => {
    const badges = {
      available: {
        color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
        text: 'Available Now'
      },
      busy: {
        color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
        text: 'Busy'
      },
      unavailable: {
        color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
        text: 'Unavailable'
      }
    };

    const badge = badges[availability] || badges.available;

    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${badge.color}`}>
        <div className={`w-2 h-2 rounded-full ${availability === 'available' ? 'bg-green-500' : availability === 'busy' ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
        {badge.text}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Container className="flex-1 py-8">
          <div className="animate-pulse">
            {/* Breadcrumb skeleton */}
            <div className="flex items-center gap-2 mb-6">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
            </div>

            {/* Header skeleton */}
            <div className="mb-8">
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-80"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-96"></div>
            </div>

            {/* Filters skeleton */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
              ))}
            </div>

            {/* Providers skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Container className="flex-1 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
          <Link to="/services" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            Services
          </Link>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-900 dark:text-white font-medium">
            {currentCategory.name}
          </span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center text-4xl">
              {currentCategory.icon}
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                {currentCategory.name}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">
                {currentCategory.description}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <span>{filteredProviders.length} providers found</span>
            <span>•</span>
            <span>Starting from ৳{Math.min(...filteredProviders.map(p => p.startingPrice)).toLocaleString()}</span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="rating">Sort by Rating</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="reviews">Most Reviews</option>
            <option value="experience">Most Experience</option>
          </select>

          <select
            value={availabilityFilter}
            onChange={(e) => setAvailabilityFilter(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="all">All Availability</option>
            <option value="available">Available Now</option>
            <option value="busy">Busy</option>
          </select>

          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="all">All Prices</option>
            <option value="low">Under ৳2,000</option>
            <option value="medium">৳2,000 - ৳3,000</option>
            <option value="high">Over ৳3,000</option>
          </select>
        </div>

        {/* Providers Grid */}
        {filteredProviders.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No providers found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Try adjusting your filters to see more results.
            </p>
            <Button
              onClick={() => {
                setSortBy('rating');
                setAvailabilityFilter('all');
                setPriceRange('all');
              }}
              variant="outline"
            >
              Clear All Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProviders.map((provider) => (
              <div
                key={provider.id}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="relative">
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <AvailabilityBadge availability={provider.availability} />
                  </div>
                  {provider.verified && (
                    <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Verified
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {provider.name}
                    </h3>
                    <div className="text-right">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Starting at</p>
                      <p className="text-lg font-bold text-primary-600 dark:text-primary-400">
                        ৳{provider.startingPrice.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <StarRating 
                      rating={provider.rating} 
                      clickable={true}
                      onClick={() => navigate(`/services/${category}/${provider.id}/reviews`)}
                    />
                    <button
                      onClick={() => navigate(`/services/${category}/${provider.id}/reviews`)}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors"
                    >
                      {provider.rating} ({provider.reviewsCount} reviews)
                    </button>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {provider.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Response: {provider.responseTime}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {provider.yearsExperience} years experience
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {provider.coverage.join(', ')}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {provider.services.slice(0, 3).map((service, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                    {provider.services.length > 3 && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        +{provider.services.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Link
                      to={`/services/${category}/${provider.id}`}
                      className="flex-1"
                    >
                      <Button className="w-full" size="sm">
                        View Profile
                      </Button>
                    </Link>
                    
                    {/* Role-based action button */}
                    {user && user.role === 'service_provider' ? (
                      <Button variant="outline" size="sm" disabled>
                        Colleague
                      </Button>
                    ) : isAuthenticated ? (
                      <Button variant="outline" size="sm">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Contact
                      </Button>
                    ) : (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => navigate('/login')}
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        Sign In
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}