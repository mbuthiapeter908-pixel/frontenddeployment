// client/src/services/api.js
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://backenddeployment-production-e95b.up.railway.app/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.log(`🚀 Making ${config.method?.toUpperCase()} request to: ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - FIXED: Return response.data directly
api.interceptors.response.use(
  (response) => {
    return response.data; // This returns the data directly
  },
  (error) => {
    console.error('❌ API Error:', error.response?.data || error.message);
    
    if (error.response?.status === 401) {
      throw new Error('Please sign in to continue');
    } else if (error.response?.status === 404) {
      throw new Error('Resource not found');
    } else if (error.response?.status === 500) {
      throw new Error('Server error. Please try again later.');
    } else if (error.code === 'ECONNABORTED') {
      throw new Error('Request timeout. Please check your connection.');
    } else if (error.message === 'Network Error') {
      throw new Error('Cannot connect to server. Please check your internet connection.');
    } else {
      throw new Error(error.response?.data?.message || 'Something went wrong');
    }
  }
);

// Posts API (Blog Posts)
export const postsAPI = {
  // Get all posts with pagination and filters
  getAll: (params = {}) => api.get('/posts', { params }),
  
  // Get single post by ID or slug
  getById: (id) => api.get(`/posts/${id}`),
  
  // Create new post
  create: (postData) => api.post('/posts', postData),
  
  // Update post
  update: (id, postData) => api.put(`/posts/${id}`, postData),
  
  // Delete post
  delete: (id) => api.delete(`/posts/${id}`),
  
  // Search posts
  search: (query, params = {}) => api.get('/posts/search', { 
    params: { q: query, ...params } 
  }),
  
  // Get popular posts
  getPopular: (limit = 10) => api.get('/posts/popular', { params: { limit } }),
  
  // Add comment to post
  addComment: (postId, commentData) => api.post(`/posts/${postId}/comments`, commentData),
  
  // Toggle like on post
  toggleLike: (postId) => api.post(`/posts/${postId}/like`),
};

// Categories API (Blog Categories)
export const categoriesAPI = {
  // Get all categories
  getAll: () => api.get('/categories'),
  
  // Get single category by ID or slug
  getById: (id) => api.get(`/categories/${id}`),
  
  // Create new category
  create: (categoryData) => api.post('/categories', categoryData),
  
  // Update category
  update: (id, categoryData) => api.put(`/categories/${id}`, categoryData),
  
  // Delete category
  delete: (id) => api.delete(`/categories/${id}`),
};

// Auth API
export const authAPI = {
  // Get current user profile
  getProfile: () => api.get('/auth/me'),
  
  // Update user profile
  updateProfile: (profileData) => api.put('/auth/profile', profileData),
};

// Health check
export const healthAPI = {
  check: () => api.get('/health'),
};

// Legacy compatibility - if you need the old service structure
export const postService = {
  getAllPosts: async (page = 1, limit = 10, category = null) => {
    let url = `/posts?page=${page}&limit=${limit}`;
    if (category) {
      url += `&category=${category}`;
    }
    const response = await api.get(url);
    return response;
  },

  getPost: async (idOrSlug) => {
    return api.get(`/posts/${idOrSlug}`);
  },

  createPost: async (postData) => {
    return api.post('/posts', postData);
  },

  updatePost: async (id, postData) => {
    return api.put(`/posts/${id}`, postData);
  },

  deletePost: async (id) => {
    return api.delete(`/posts/${id}`);
  },

  addComment: async (postId, commentData) => {
    return api.post(`/posts/${postId}/comments`, commentData);
  },

  toggleLike: async (postId) => {
    return api.post(`/posts/${postId}/like`);
  },

  searchPosts: async (query, page = 1, limit = 10) => {
    return api.get(`/posts/search?q=${query}&page=${page}&limit=${limit}`);
  },

  getPopularPosts: async (limit = 10) => {
    return api.get(`/posts/popular?limit=${limit}`);
  },
};

export const categoryService = {
  getAllCategories: async () => {
    return api.get('/categories');
  },

  getCategory: async (idOrSlug) => {
    return api.get(`/categories/${idOrSlug}`);
  },

  createCategory: async (categoryData) => {
    return api.post('/categories', categoryData);
  },
};

export const authService = {
  getCurrentUser: async () => {
    return api.get('/auth/me');
  },

  updateProfile: async (profileData) => {
    return api.put('/auth/profile', profileData);
  },
};

export const healthCheck = async () => {
  return api.get('/health');
};

export default api;