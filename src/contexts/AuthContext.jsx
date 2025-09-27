import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock user database - in real app this would come from API
  const mockUsers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'renter@dreamnest.com',
      role: 'renter',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
      joinDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'Sarah Ahmed',
      email: 'owner@dreamnest.com',
      role: 'owner',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9211e20?w=150&q=80',
      joinDate: '2023-08-22'
    },
    {
      id: 3,
      name: 'Karim Rahman',
      email: 'provider@dreamnest.com',
      role: 'service_provider',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
      joinDate: '2023-11-10'
    },
    {
      id: 4,
      name: 'Admin User',
      email: 'admin@dreamnest.com',
      role: 'admin',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&q=80',
      joinDate: '2023-01-01'
    }
  ];

  // Initialize auth state from localStorage on mount
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedUser = localStorage.getItem('dreamnest-user');
        const storedToken = localStorage.getItem('dreamnest-token');
        
        if (storedUser && storedToken) {
          // Simulate token validation delay
          await new Promise(resolve => setTimeout(resolve, 500));
          
          const parsedUser = JSON.parse(storedUser);
          // In real app, would validate token with API here
          setUser(parsedUser);
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        // Clear invalid stored data
        localStorage.removeItem('dreamnest-user');
        localStorage.removeItem('dreamnest-token');
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Mock login function
  const login = async (credentials) => {
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Find user by email and password
      const foundUser = mockUsers.find(
        u => u.email === credentials.email
      );
      
      if (!foundUser) {
        throw new Error('Invalid email or password');
      }
      
      // In real app, would verify password hash
      // For mock, accept 'password123' for all users except admin
      const validPassword = foundUser.role === 'admin' ? 'admin123' : 'password123';
      if (credentials.password !== validPassword) {
        throw new Error('Invalid email or password');
      }
      
      // Create mock JWT token
      const mockToken = btoa(JSON.stringify({
        userId: foundUser.id,
        role: foundUser.role,
        exp: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
      }));
      
      // Store user and token
      localStorage.setItem('dreamnest-user', JSON.stringify(foundUser));
      localStorage.setItem('dreamnest-token', mockToken);
      
      setUser(foundUser);
      return foundUser;
      
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Mock registration function
  const register = async (userData) => {
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Check if email already exists
      const existingUser = mockUsers.find(u => u.email === userData.email);
      if (existingUser) {
        throw new Error('Email already registered');
      }
      
      // Create new user
      const newUser = {
        id: mockUsers.length + 1,
        name: userData.name,
        email: userData.email,
        role: userData.role || 'renter',
        avatar: `https://images.unsplash.com/photo-${1472099645785 + Math.floor(Math.random() * 1000)}-5658abf4ff4e?w=150&q=80`,
        joinDate: new Date().toISOString().split('T')[0]
      };
      
      // Add to mock database (in real app, would call API)
      mockUsers.push(newUser);
      
      // Create mock JWT token
      const mockToken = btoa(JSON.stringify({
        userId: newUser.id,
        role: newUser.role,
        exp: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
      }));
      
      // Store user and token
      localStorage.setItem('dreamnest-user', JSON.stringify(newUser));
      localStorage.setItem('dreamnest-token', mockToken);
      
      setUser(newUser);
      return newUser;
      
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('dreamnest-user');
    localStorage.removeItem('dreamnest-token');
    setUser(null);
  };

  // Update user profile
  const updateUser = (userData) => {
    if (!user) return;
    
    const updatedUser = { ...user, ...userData };
    localStorage.setItem('dreamnest-user', JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  // Check if user has specific role
  const hasRole = (role) => {
    return user?.role === role;
  };

  // Check if user has any of the specified roles
  const hasAnyRole = (roles) => {
    return user && roles.includes(user.role);
  };

  // Get user display name
  const getDisplayName = () => {
    if (!user) return '';
    return user.name || user.email.split('@')[0];
  };

  const value = {
    // User state
    user,
    isAuthenticated: !!user,
    isLoading,
    
    // Authentication methods
    login,
    logout,
    register,
    updateUser,
    
    // Helper methods
    hasRole,
    hasAnyRole,
    getDisplayName
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Helper hook for role-based conditional rendering
export function useAuthRole(requiredRole) {
  const { user, isAuthenticated } = useAuth();
  return {
    hasAccess: isAuthenticated && user?.role === requiredRole,
    isAuthenticated,
    userRole: user?.role
  };
}

// Helper hook for multi-role access
export function useAuthRoles(requiredRoles) {
  const { user, isAuthenticated } = useAuth();
  return {
    hasAccess: isAuthenticated && requiredRoles.includes(user?.role),
    isAuthenticated,
    userRole: user?.role
  };
}