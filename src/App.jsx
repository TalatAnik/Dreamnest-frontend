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
import NotFoundPage from './pages/NotFoundPage.jsx';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<RootLayout />}> 
          <Route path="/" element={<HomePage />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/properties/:id" element={<PropertyDetailPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:category" element={<ServiceCategoryPage />} />
          <Route path="/services/:category/:providerId" element={<ServiceProviderProfilePage />} />
          <Route path="/services/:category/:providerId/book" element={<ServiceBookingFormPage />} />
          <Route path="/booking/confirmation/:bookingId" element={<BookingConfirmationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
