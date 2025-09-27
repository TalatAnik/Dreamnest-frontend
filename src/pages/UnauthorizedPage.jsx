import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

const UnauthorizedPage = () => {
  const { user, logout } = useAuth();

  const handleGoToDashboard = () => {
    // Redirect to appropriate dashboard based on user role
    switch (user?.role) {
      case 'admin':
        return '/admin/dashboard';
      case 'owner':
        return '/dashboard/owner';
      case 'service_provider':
        return '/dashboard/provider';
      case 'renter':
        return '/dashboard/renter';
      default:
        return '/';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-red-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 text-center">
        {/* Error Icon */}
        <div className="w-20 h-20 mx-auto mb-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
          <svg 
            className="w-10 h-10 text-red-600 dark:text-red-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z" 
            />
          </svg>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Access Denied
        </h1>
        
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            You don&apos;t have permission to access this page.
          </p>
          
          {user && (
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Current account: <span className="font-medium text-gray-900 dark:text-white">{user.email}</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Role: <span className="font-medium capitalize text-gray-900 dark:text-white">
                  {user.role?.replace('_', ' ')}
                </span>
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {user ? (
            <>
              <Link
                to={handleGoToDashboard()}
                className="block w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
              >
                Go to My Dashboard
              </Link>
              
              <Link
                to="/"
                className="block w-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
              >
                Go to Home
              </Link>
              
              <button
                onClick={logout}
                className="block w-full bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-800/30 text-red-700 dark:text-red-400 font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
              >
                Switch Account
              </button>
            </>
          ) : (
            <div className="space-y-3">
              <Link
                to="/login"
                className="block w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
              >
                Sign In
              </Link>
              
              <Link
                to="/"
                className="block w-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
              >
                Go to Home
              </Link>
            </div>
          )}
        </div>

        {/* Help Text */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            If you believe this is an error, please contact support or try logging in with a different account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedPage;