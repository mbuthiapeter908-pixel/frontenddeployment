import React from 'react';
import { X, Filter } from 'lucide-react';
import Button from '../UI/Button';
import { JOB_TYPES, JOB_CATEGORIES } from '../../utils/constants';

const JobFilter = ({ filters, setFilters }) => {
  const handleTypeChange = (type) => {
    const newTypes = filters.type.includes(type)
      ? filters.type.filter(t => t !== type)
      : [...filters.type, type];
    
    setFilters({ ...filters, type: newTypes });
  };

  const handleCategoryChange = (category) => {
    const newCategories = filters.category.includes(category)
      ? filters.category.filter(c => c !== category)
      : [...filters.category, category];
    
    setFilters({ ...filters, category: newCategories });
  };

  const clearFilters = () => {
    setFilters({
      type: [],
      category: [],
      location: '',
      remote: false,
      salaryRange: [0, 200000]
    });
  };

  const hasActiveFilters = filters.type.length > 0 || 
                          filters.category.length > 0 || 
                          filters.location || 
                          filters.remote;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sticky top-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-blue-600" />
          <h3 className="text-lg font-black text-gray-900">Filters</h3>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-gray-500 hover:text-gray-700 !p-2"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Job Type */}
      <div className="mb-6">
        <h4 className="font-bold text-gray-900 mb-3 text-lg">Job Type</h4>
        <div className="space-y-2">
          {JOB_TYPES.map(type => (
            <label key={type} className="flex items-center group cursor-pointer">
              <input
                type="checkbox"
                checked={filters.type.includes(type)}
                onChange={() => handleTypeChange(type)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 group-hover:border-blue-300"
              />
              <span className="ml-3 text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                {type}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Category */}
      <div className="mb-6">
        <h4 className="font-bold text-gray-900 mb-3 text-lg">Category</h4>
        <div className="space-y-2">
          {JOB_CATEGORIES.map(category => (
            <label key={category} className="flex items-center group cursor-pointer">
              <input
                type="checkbox"
                checked={filters.category.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 group-hover:border-blue-300"
              />
              <span className="ml-3 text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Remote Work */}
      <div className="mb-6">
        <label className="flex items-center group cursor-pointer">
          <input
            type="checkbox"
            checked={filters.remote}
            onChange={(e) => setFilters({ ...filters, remote: e.target.checked })}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 group-hover:border-blue-300"
          />
          <span className="ml-3 text-gray-700 font-bold group-hover:text-blue-600 transition-colors">
            🌍 Remote Only
          </span>
        </label>
      </div>

      {/* Location */}
      <div className="mb-6">
        <h4 className="font-bold text-gray-900 mb-3 text-lg">Location</h4>
        <input
          type="text"
          placeholder="City, state, or zip code"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-medium hover:border-blue-300 transition-colors"
        />
      </div>

      {hasActiveFilters && (
        <Button 
          variant="primary" 
          className="w-full bg-blue-600 hover:bg-blue-700 font-bold"
          onClick={clearFilters}
        >
          Clear All Filters
        </Button>
      )}
    </div>
  );
};

export default JobFilter;