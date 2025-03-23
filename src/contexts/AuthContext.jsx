import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Check if the user is authenticated on component mount
  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('token');
      // If we have a token, consider the user authenticated
      if (token) {
        // Attempt to parse user data from localStorage if available
        const userData = localStorage.getItem('userData');
        try {
          const parsedUser = userData ? JSON.parse(userData) : null;
          setUser(parsedUser);
          setIsAuthenticated(true);
        } catch (err) {
          console.error('Error parsing user data:', err);
          localStorage.removeItem('userData');
          setUser(null);
        }
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
      setLoading(false);
    };
    
    checkAuthStatus();
  }, []);
  
  // Login function
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('https://api-easedrive.onrender.com/api/auth/login', {
        email,
        password
      });
      
      // Store token
      localStorage.setItem('token', response.data.token);
      
      // Store user data for future reference
      if (response.data.user) {
        localStorage.setItem('userData', JSON.stringify(response.data.user));
        setUser(response.data.user);
      } else {
        // If API doesn't return user details, store basic info
        const basicUser = { email };
        localStorage.setItem('userData', JSON.stringify(basicUser));
        setUser(basicUser);
      }
      
      // Set auth state
      setIsAuthenticated(true);
      return { success: true };
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      return {
        success: false,
        error: err.response?.data?.message || 'Login failed'
      };
    } finally {
      setLoading(false);
    }
  };
  
  // Register function
  const register = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('https://api-easedrive.onrender.com/api/auth/register', userData);
      return { success: true };
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      return {
        success: false,
        error: err.response?.data?.message || 'Registration failed'
      };
    } finally {
      setLoading(false);
    }
  };
  
  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    setIsAuthenticated(false);
    setUser(null);
  };
  
  // Context value
  const contextValue = {
    isAuthenticated,
    user,
    loading,
    error,
    login,
    register,
    logout
  };
  
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};