import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import Button from '../components/Button';

const ServiceProviderDashboardPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Mock service data
  const services = [
    {
      id: 1,
      title: "Deep House Cleaning",
      category: "Cleaning",
      price: 80,
      duration: "3-4 hours",
      active: true,
      bookingsThisMonth: 12,
      avgRating: 4.9
    },
    {
      id: 2,
      title: "Office Cleaning",
      category: "Cleaning", 
      price: 120,
      duration: "2-3 hours",
      active: true,
      bookingsThisMonth: 8,
      avgRating: 4.7
    },
    {
      id: 3,
      title: "Post-Construction Cleanup",
      category: "Cleaning",
      price: 200,
      duration: "4-6 hours", 
      active: false,
      bookingsThisMonth: 0,
      avgRating: 5.0
    }
  ];

  // Mock booking data
  const upcomingBookings = [
    {
      id: 1,
      service: "Deep House Cleaning",
      customer: "Rashida Ahmed",
      date: "Oct 28, 2025",
      time: "9:00 AM",
      location: "Gulshan 2, Dhaka",
      price: 80,
      status: "confirmed",
      customerPhone: "+880-1234-567890"
    },
    {
      id: 2,
      service: "Office Cleaning", 
      customer: "Tech Solutions Ltd",
      date: "Oct 30, 2025",
      time: "6:00 PM",
      location: "Banani Commercial Area",
      price: 120,
      status: "pending",
      customerPhone: "+880-1987-654321"
    },
    {
      id: 3,
      service: "Deep House Cleaning",
      customer: "Mr. Rahman",
      date: "Nov 2, 2025", 
      time: "10:00 AM",
      location: "Dhanmondi 15",
      price: 80,
      status: "confirmed",
      customerPhone: "+880-1555-123456"
    }
  ];

  // Mock recent bookings/earnings
  const recentBookings = [
    {
      id: 1,
      service: "Deep House Cleaning",
      customer: "Sarah Khan",
      date: "Oct 25, 2025",
      earnings: 80,
      rating: 5,
      status: "completed"
    },
    {
      id: 2, 
      service: "Office Cleaning",
      customer: "StartUp Hub",
      date: "Oct 23, 2025",
      earnings: 120,
      rating: 4,
      status: "completed"
    },
    {
      id: 3,
      service: "Deep House Cleaning", 
      customer: "Ali Hassan",
      date: "Oct 20, 2025",
      earnings: 80,
      rating: 5,
      status: "completed"
    }
  ];

  // Mock reviews needing response
  const reviewsNeedingResponse = [
    {
      id: 1,
      service: "Deep House Cleaning",
      customer: "Fatima Ahmed", 
      rating: 4,
      comment: "Good service but arrived 15 minutes late. Otherwise thorough cleaning job.",
      date: "Oct 24, 2025"
    },
    {
      id: 2,
      service: "Office Cleaning",
      customer: "Business Center",
      rating: 5, 
      comment: "Excellent work! Very professional team and attention to detail.",
      date: "Oct 22, 2025"
    }
  ];

  // Calculate totals
  const totalEarnings = recentBookings.reduce((sum, booking) => sum + booking.earnings, 0) + 1540; // Additional past earnings
  const completedJobs = recentBookings.length + 21; // Additional past jobs
  const avgRating = 4.8;
  const activeServices = services.filter(s => s.active).length;

  useEffect(() => {
    // Check if user is logged in and has service_provider role
    const userData = localStorage.getItem('dreamnest-user');
    if (!userData) {
      navigate('/login');
      return;
    }

    const parsedUser = JSON.parse(userData);
    if (parsedUser.role !== 'service_provider') {
      navigate('/dashboard');
      return;
    }

    setUser(parsedUser);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('userToken');
    navigate('/');
  };

  const handleToggleService = (serviceId) => {
    // In a real app, this would make an API call
    const service = services.find(s => s.id === serviceId);
    alert(`${service.title} ${service.active ? 'deactivated' : 'activated'}`);
  };

  const handleRespondToReview = (reviewId) => {
    // In a real app, this would open a response modal
    alert(`Opening response form for review ${reviewId}`);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <Container>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome back, {user.name}!
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Service Provider Dashboard
              {user.companyName && <span> • {user.companyName}</span>}
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => navigate('/profile')}>
              Profile
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              Sign Out
            </Button>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {completedJobs}
              </div>
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Completed Jobs
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {upcomingBookings.length}
              </div>
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Upcoming Bookings
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                ৳{totalEarnings.toLocaleString()}
              </div>
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Total Earnings
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {avgRating.toFixed(1)}
              </div>
              <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Service Rating
            </div>
          </div>
        </div>

        {/* Services Management & Upcoming Bookings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Service Portfolio Management */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Service Portfolio ({activeServices} active)
              </h2>
              <Button 
                size="sm"
                onClick={() => alert('Add new service functionality coming soon')}
              >
                Add Service
              </Button>
            </div>
            
            <div className="space-y-4">
              {services.map((service) => (
                <div key={service.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {service.category} • ৳{service.price} • {service.duration}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        service.active 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                          : 'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300'
                      }`}>
                        {service.active ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span>{service.bookingsThisMonth} bookings this month</span>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>{service.avgRating}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleToggleService(service.id)}
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {service.active ? 'Deactivate' : 'Activate'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Bookings */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Upcoming Bookings ({upcomingBookings.length})
              </h2>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => alert('Calendar view coming soon')}
              >
                View Calendar
              </Button>
            </div>
            
            <div className="space-y-4">
              {upcomingBookings.map((booking) => (
                <div key={booking.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {booking.service}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {booking.customer}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        ৳{booking.price}
                      </p>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        booking.status === 'confirmed' 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                          : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div>📅 {booking.date} at {booking.time}</div>
                    <div>📍 {booking.location}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <a 
                      href={`tel:${booking.customerPhone}`}
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      📞 Call Customer
                    </a>
                    <div className="flex gap-2">
                      {booking.status === 'pending' && (
                        <button className="text-sm text-green-600 dark:text-green-400 hover:underline">
                          Accept
                        </button>
                      )}
                      <button className="text-sm text-gray-600 dark:text-gray-400 hover:underline">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Earnings & Reviews Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Recent Earnings */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Recent Earnings
              </h2>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => alert('Full earnings report coming soon')}
              >
                View Report
              </Button>
            </div>
            
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {booking.service}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {booking.customer} • {booking.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600 dark:text-green-400">
                      +৳{booking.earnings}
                    </p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-3 h-3 ${
                            i < booking.rating 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews Needing Response */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Reviews Needing Response
              </h2>
              {reviewsNeedingResponse.length > 0 && (
                <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 text-xs px-2 py-1 rounded-full">
                  {reviewsNeedingResponse.length} pending
                </span>
              )}
            </div>
            
            {reviewsNeedingResponse.length > 0 ? (
              <div className="space-y-4">
                {reviewsNeedingResponse.map((review) => (
                  <div key={review.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {review.service}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {review.customer} • {review.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300 dark:text-gray-600'
                            }`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-900 dark:text-white mb-3">
                      &quot;{review.comment}&quot;
                    </p>
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => handleRespondToReview(review.id)}
                    >
                      Respond to Review
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                No reviews pending response
              </p>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Business Management Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button 
              variant="outline" 
              className="justify-start h-auto p-4"
              onClick={() => alert('Booking calendar management coming soon')}
            >
              <div className="flex flex-col items-start gap-2">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <div className="font-medium">Calendar</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Manage availability</div>
                </div>
              </div>
            </Button>

            <Button 
              variant="outline" 
              className="justify-start h-auto p-4"
              onClick={() => alert('Portfolio management coming soon')}
            >
              <div className="flex flex-col items-start gap-2">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <div>
                  <div className="font-medium">Portfolio</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Update work samples</div>
                </div>
              </div>
            </Button>

            <Button 
              variant="outline" 
              className="justify-start h-auto p-4"
              onClick={() => alert('Pricing management coming soon')}
            >
              <div className="flex flex-col items-start gap-2">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <div>
                  <div className="font-medium">Pricing</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Update rates</div>
                </div>
              </div>
            </Button>

            <Button 
              variant="outline" 
              className="justify-start h-auto p-4"
              onClick={() => navigate('/reviews')}
            >
              <div className="flex flex-col items-start gap-2">
                <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.438l-3.832 1.279a1 1 0 01-1.279-1.279L5.262 15.73A8.959 8.959 0 113 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                </svg>
                <div>
                  <div className="font-medium">Reviews</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">View all feedback</div>
                </div>
              </div>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceProviderDashboardPage;