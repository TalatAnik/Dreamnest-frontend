import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import RootLayout from './layout/RootLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import PropertiesPage from './pages/PropertiesPage.jsx';
import SearchResultsPage from './pages/SearchResultsPage.jsx';
import PropertyDetailPage from './pages/PropertyDetailPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ServiceCategoryPage from './pages/ServiceCategoryPage.jsx';
import ServiceProviderProfilePage from './pages/ServiceProviderProfilePage.jsx';
import ServiceBookingFormPage from './pages/ServiceBookingFormPage.jsx';
import BookingConfirmationPage from './pages/BookingConfirmationPage.jsx';
import ReviewsOverviewPage from './pages/ReviewsOverviewPage.jsx';
import PropertyReviewsPage from './pages/PropertyReviewsPage.jsx';
import ServiceProviderReviewsPage from './pages/ServiceProviderReviewsPage.jsx';
import WriteReviewPage from './pages/WriteReviewPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import OwnerDashboardPage from './pages/OwnerDashboardPage.jsx';
import ServiceProviderDashboardPage from './pages/ServiceProviderDashboardPage.jsx';
import AdminDashboardPage from './pages/AdminDashboardPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import RenterProfilePage from './pages/RenterProfilePage.jsx';
import OwnerProfilePage from './pages/OwnerProfilePage.jsx';
import ProviderProfilePage from './pages/ProviderProfilePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<RootLayout />}> 
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/owner" element={<OwnerDashboardPage />} />
          <Route path="/dashboard/provider" element={<ServiceProviderDashboardPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/renter" element={<RenterProfilePage />} />
          <Route path="/profile/owner" element={<OwnerProfilePage />} />
          <Route path="/profile/provider" element={<ProviderProfilePage />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/properties/:id" element={<PropertyDetailPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:category" element={<ServiceCategoryPage />} />
          <Route path="/services/:category/:providerId" element={<ServiceProviderProfilePage />} />
          <Route path="/services/:category/:providerId/book" element={<ServiceBookingFormPage />} />
          <Route path="/services/:category/:providerId/reviews" element={<ServiceProviderReviewsPage />} />
          <Route path="/booking/confirmation/:bookingId" element={<BookingConfirmationPage />} />
          <Route path="/reviews" element={<ReviewsOverviewPage />} />
          <Route path="/reviews/write" element={<WriteReviewPage />} />
          <Route path="/properties/:id/reviews" element={<PropertyReviewsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
