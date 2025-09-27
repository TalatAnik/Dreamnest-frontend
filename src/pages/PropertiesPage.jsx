import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import Container from '../components/Container.jsx';
import Button from '../components/Button.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import PropertyCard from '../components/PropertyCard.jsx';

export default function PropertiesPage() {
  const { user } = useAuth();
  const [filters, setFilters] = useState({
    search: '',
    location: '',
    priceMin: '',
    priceMax: '',
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    sortBy: 'relevance'
  });

  const [showFilters, setShowFilters] = useState(false);
  const [viewStyle, setViewStyle] = useState('grid'); // 'grid' or 'list'

  // Mock property data - only available properties
  const mockProperties = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Modern ${['Apartment', 'House', 'Condo', 'Studio'][i % 4]} ${i + 1}`,
    location: ['Dhaka, Gulshan', 'Chittagong, GEC', 'Sylhet, Zindabazar', 'Rajshahi, New Market'][i % 4],
    price: [1200, 1800, 2200, 850, 1500, 2000, 1100, 1650, 1950, 900, 1350, 1750][i],
    bedrooms: [2, 3, 1, 2, 3, 4, 1, 2, 3, 1, 2, 3][i],
    bathrooms: [1, 2, 1, 1, 2, 3, 1, 2, 2, 1, 1, 2][i],
    sqft: [1200, 1800, 800, 1100, 1600, 2200, 750, 1350, 1900, 650, 1000, 1550][i],
    image: `https://images.pexels.com/photos/${[1396122, 2121121, 2102587, 2343468, 2462015, 3555615, 2102586, 3288103, 3288100, 2462016, 2121120, 2343469][i]}/pexels-photo-${[1396122, 2121121, 2102587, 2343468, 2462015, 3555615, 2102586, 3288103, 3288100, 2462016, 2121120, 2343469][i]}.jpeg?auto=compress&cs=tinysrgb&w=800`,
    featured: i < 3,
    available: true, // All properties are available now
    // Rating data - some properties don't have ratings (simulating real-world scenario)
    rating: i % 5 === 0 ? null : Number((3.5 + (i * 0.2) % 2).toFixed(1)), // Some properties without ratings
    totalReviews: i % 5 === 0 ? 0 : Math.floor(Math.random() * 50) + 3 // Reviews count (0 for no ratings)
  }));

  const propertyTypes = ['Any Type', 'Apartment', 'House', 'Condo', 'Studio'];
  const bedroomOptions = ['Any', '1', '2', '3', '4+'];
  const bathroomOptions = ['Any', '1', '2', '3+'];
  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' }
  ];

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section with Search */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-b border-gray-200/60 dark:border-gray-700">
        <Container className="py-12 md:py-16">
          <div className="text-center mb-8">
            <SectionHeading 
              title={
                user && user.role === 'owner' 
                  ? "Property Portfolio Management"
                  : user && user.role === 'admin'
                    ? "Property Administration Dashboard"
                    : "Find Your Perfect Property"
              }
              subtitle={
                user && user.role === 'owner'
                  ? "Manage your property listings and track performance across all locations"
                  : user && user.role === 'admin'
                    ? "Monitor and manage all properties in the platform"
                    : `Discover amazing properties in prime locations across Bangladesh${user ? ` - Welcome back, ${user.name || user.email?.split('@')[0]}!` : ''}`
              }
              align="center"
            />
            {user && user.role === 'owner' && (
              <div className="mt-4">
                <Button variant="primary" className="mr-3">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add New Property
                </Button>
                <Button variant="outline">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  View Analytics
                </Button>
              </div>
            )}
          </div>

          {/* Enhanced Search Bar - Full Width */}
          <div className="w-full">
            <div className="relative">
              <div className="flex flex-col lg:flex-row items-stretch bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 dark:border-gray-700/50 overflow-hidden">
                {/* Search Input */}
                <div className="flex-1 relative">
                  <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search by location, property type..."
                    value={filters.search}
                    onChange={(e) => handleFilterChange('search', e.target.value)}
                    className="w-full h-14 pl-12 pr-4 text-base placeholder:text-gray-500 dark:placeholder:text-gray-400 text-gray-900 dark:text-white bg-transparent focus:outline-none border-0"
                  />
                </div>
                
                {/* Quick Filters */}
                <div className="flex items-center gap-2 px-4 lg:px-0 lg:border-l border-gray-200 dark:border-gray-600">
                  <select
                    value={filters.propertyType}
                    onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                    className="h-14 px-3 text-sm bg-transparent text-gray-700 dark:text-gray-300 focus:outline-none border-0"
                  >
                    {propertyTypes.map(type => (
                      <option key={type} value={type === 'Any Type' ? '' : type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Search Button */}
                <Button 
                  size="lg"
                  className="h-14 px-8 rounded-none lg:rounded-r-2xl bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 shadow-none"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <Container className="py-8 flex-1">
        <div className="flex flex-col lg:flex-row gap-8 items-start max-w-full">
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden w-full max-w-full">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
              </svg>
              Filters & Sort
              <svg className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
          </div>

          {/* Filters Sidebar */}
          <aside className={`lg:block ${showFilters ? 'block' : 'hidden'} w-full lg:w-80 lg:flex-shrink-0`}>
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl border border-gray-200/60 dark:border-gray-700/60 p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
                </svg>
                Filters
              </h3>

              <div className="space-y-6">
                {/* Location Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Enter city or area"
                    value={filters.location}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Price Range (৳/month)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={filters.priceMin}
                      onChange={(e) => handleFilterChange('priceMin', e.target.value)}
                      className="min-w-0 px-2 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={filters.priceMax}
                      onChange={(e) => handleFilterChange('priceMax', e.target.value)}
                      className="min-w-0 px-2 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
                    />
                  </div>
                </div>

                {/* Bedrooms */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Bedrooms
                  </label>
                  <select
                    value={filters.bedrooms}
                    onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    {bedroomOptions.map(option => (
                      <option key={option} value={option === 'Any' ? '' : option}>{option}</option>
                    ))}
                  </select>
                </div>

                {/* Bathrooms */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Bathrooms
                  </label>
                  <select
                    value={filters.bathrooms}
                    onChange={(e) => handleFilterChange('bathrooms', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    {bathroomOptions.map(option => (
                      <option key={option} value={option === 'Any' ? '' : option}>{option}</option>
                    ))}
                  </select>
                </div>

                {/* Clear Filters */}
                <Button
                  variant="outline"
                  onClick={() => setFilters({
                    search: '',
                    location: '',
                    priceMin: '',
                    priceMax: '',
                    propertyType: '',
                    bedrooms: '',
                    bathrooms: '',
                    sortBy: 'relevance'
                  })}
                  className="w-full"
                >
                  Clear All Filters
                </Button>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 min-w-0 w-full lg:w-auto overflow-hidden">
            {/* Results Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4 w-full">
              <div className="text-center lg:text-left">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {mockProperties.length} Properties Found
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Showing results for all locations
                </p>
              </div>

              {/* View Controls and Sort */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-end">
                {/* View Style Toggle */}
                <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
                  <button
                    onClick={() => setViewStyle('grid')}
                    className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      viewStyle === 'grid'
                        ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                    aria-label="Grid view"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    Grid
                  </button>
                  <button
                    onClick={() => setViewStyle('list')}
                    className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      viewStyle === 'list'
                        ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                    aria-label="List view"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                    List
                  </button>
                </div>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-2">
                  <label className="text-sm text-gray-600 dark:text-gray-400">Sort by:</label>
                  <select
                    value={filters.sortBy}
                    onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Properties Display - Grid/List View */}
            <div className="mb-8 w-full">
              <div className={viewStyle === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' 
                : 'grid grid-cols-1 gap-4'
              }>
                {mockProperties.map((property) => (
                  <PropertyCard 
                    key={property.id}
                    property={property}
                    viewStyle={viewStyle}
                    onViewDetails={(property) => {
                      console.log('View details for:', property.title);
                      // TODO: Navigate to property detail page
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-200/60 dark:border-gray-700/60">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Showing 1-12 of 247 properties
              </p>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </Button>
                
                <div className="flex items-center gap-1">
                  {[1, 2, 3, '...', 21].map((page, i) => (
                    <button
                      key={i}
                      className={`px-3 py-1 text-sm rounded-md transition-colors ${
                        page === 1
                          ? 'bg-primary-600 text-white'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                      disabled={page === '...'}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                
                <Button variant="outline" size="sm">
                  Next
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
}