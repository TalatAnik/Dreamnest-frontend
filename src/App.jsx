import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import RootLayout from './layout/RootLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import PropertiesPage from './pages/PropertiesPage.jsx';
import SearchResultsPage from './pages/SearchResultsPage.jsx';
import PropertyDetailPage from './pages/PropertyDetailPage.jsx';
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
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
