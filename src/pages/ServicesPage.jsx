import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container.jsx';
import Button from '../components/Button.jsx';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  const [featuredProviders, setFeaturedProviders] = useState([]);

  // Mock data for service categories
  const serviceCategories = [
    {
      id: 'cleaning',
      name: 'Cleaning Services',
      icon: '🧽',
      description: 'Professional home and office cleaning',
      providersCount: 24,
      avgRating: 4.6,
      startingPrice: 2500
    },
    {
      id: 'maintenance',
      name: 'Maintenance & Repairs',
      icon: '🔧',
      description: 'Plumbing, electrical, and general repairs',
      providersCount: 18,
      avgRating: 4.4,
      startingPrice: 1500
    },
    {
      id: 'painting',
      name: 'Painting Services',
      icon: '🎨',
      description: 'Interior and exterior painting',
      providersCount: 12,
      avgRating: 4.5,
      startingPrice: 8000
    },
    {
      id: 'security',
      name: 'Security Services',
      icon: '🛡️',
      description: 'Security guards and surveillance',
      providersCount: 15,
      avgRating: 4.7,
      startingPrice: 12000
    },
    {
      id: 'moving',
      name: 'Moving Services',
      icon: '📦',
      description: 'Packing, moving, and storage',
      providersCount: 8,
      avgRating: 4.3,
      startingPrice: 5000
    },
    {
      id: 'gardening',
      name: 'Gardening & Landscaping',
      icon: '🌱',
      description: 'Garden maintenance and landscaping',
      providersCount: 10,
      avgRating: 4.6,
      startingPrice: 3000
    }
  ];

  // Mock data for featured providers
  const mockFeaturedProviders = [
    {
      id: 'clean-pro-1',
      name: 'CleanPro Bangladesh',
      category: 'cleaning',
      rating: 4.8,
      reviewsCount: 156,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80',
      services: ['Deep Cleaning', 'Regular Cleaning', 'Office Cleaning'],
      startingPrice: 2500,
      verified: true,
      responseTime: '< 2 hours',
      completedJobs: 324
    },
    {
      id: 'fix-masters-1',
      name: 'FixMasters',
      category: 'maintenance',
      rating: 4.6,
      reviewsCount: 89,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80',
      services: ['Plumbing', 'Electrical', 'AC Repair'],
      startingPrice: 1500,
      verified: true,
      responseTime: '< 1 hour',
      completedJobs: 198
    },
    {
      id: 'paint-experts-1',
      name: 'Paint Experts',
      category: 'painting',
      rating: 4.7,
      reviewsCount: 67,
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&q=80',
      services: ['Interior Painting', 'Exterior Painting', 'Wall Decoration'],
      startingPrice: 8000,
      verified: true,
      responseTime: '< 4 hours',
      completedJobs: 145
    },
    {
      id: 'secure-guard-1',
      name: 'SecureGuard Services',
      category: 'security',
      rating: 4.9,
      reviewsCount: 203,
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&q=80',
      services: ['Security Guards', 'CCTV Installation', 'Access Control'],
      startingPrice: 12000,
      verified: true,
      responseTime: '< 30 minutes',
      completedJobs: 412
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      setServices(serviceCategories);
      setFeaturedProviders(mockFeaturedProviders);
      setLoading(false);
    };

    fetchData();
  }, []);

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.id === selectedCategory);

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
            {/* Header skeleton */}
            <div className="text-center mb-12">
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-80 mx-auto"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-96 mx-auto"></div>
            </div>

            {/* Categories filter skeleton */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="h-10 bg-gray-200 dark:bg-gray-700 rounded-full w-32"></div>
              ))}
            </div>

            {/* Service categories skeleton */}
            <div className="mb-16">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-48 bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
                ))}
              </div>
            </div>

            {/* Featured providers skeleton */}
            <div>
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-56 mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-80 bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Container className="flex-1 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Connect with trusted service providers for all your home and property needs
          </p>
        </div>

        {/* Service Type Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All Services
          </button>
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        {/* Service Categories Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Service Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group block"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {service.providersCount} providers
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <StarRating rating={service.avgRating} />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {service.avgRating}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Starting at</p>
                    <p className="text-lg font-bold text-primary-600 dark:text-primary-400">
                      ৳{service.startingPrice.toLocaleString()}
                    </p>
                  </div>
                </div>
                
                <Button className="w-full mt-4" variant="outline">
                  View Providers
                </Button>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Service Providers */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Featured Service Providers
            </h2>
            <Button variant="outline">
              View All Providers
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProviders.map((provider) => (
              <Link
                key={provider.id}
                to={`/services/${provider.category}/${provider.id}`}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group block"
              >
                <div className="relative">
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {provider.verified && (
                    <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Verified
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {provider.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <StarRating rating={provider.rating} />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {provider.rating} ({provider.reviewsCount})
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Response: {provider.responseTime}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {provider.completedJobs} jobs completed
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {provider.services.slice(0, 2).map((service, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                    {provider.services.length > 2 && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        +{provider.services.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Starting at</p>
                      <p className="text-lg font-bold text-primary-600 dark:text-primary-400">
                        ৳{provider.startingPrice.toLocaleString()}
                      </p>
                    </div>
                    <Button size="sm">
                      Contact
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 mt-16 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Service?</h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Tell us about your specific requirements and we&apos;ll connect you with the right service provider.
          </p>
          <Button variant="outline" className="bg-white text-primary-600 border-white hover:bg-primary-50">
            Request Custom Service
          </Button>
        </div>
      </Container>
    </div>
  );
}