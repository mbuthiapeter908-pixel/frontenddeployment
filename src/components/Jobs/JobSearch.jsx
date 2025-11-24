import React, { useState } from 'react';
import { Search, MapPin, Filter, Sparkles } from 'lucide-react';
import Button from '../UI/Button';

const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search:', { searchTerm, location });
  };

  const quickFilters = ['Remote', 'Internship', 'Entry Level', 'Tech', 'Design', 'Marketing'];

  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Input */}
          <div className="flex-1 flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
            <Search className="h-5 w-5 text-blue-600" />
            <input
              type="text"
              placeholder="Job title, keywords, or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500 text-lg font-medium"
            />
          </div>

          {/* Location Input */}
          <div className="flex-1 flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
            <MapPin className="h-5 w-5 text-purple-600" />
            <input
              type="text"
              placeholder="City, state, or remote..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500 text-lg font-medium"
            />
          </div>

          {/* Search Button */}
          <Button 
            type="submit" 
            size="lg" 
            className="md:px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
          >
            <Search className="h-5 w-5 mr-2" />
            Find Jobs
          </Button>
        </div>

        {/* Quick Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-2 py-3 border-t border-gray-100 mt-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600 font-medium mb-3 sm:mb-0">
            <Filter className="h-4 w-4" />
            <span>Quick filters:</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
            {quickFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className="px-3 py-1 text-xs bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-full transition-all duration-200 hover:scale-105 font-medium border border-gray-200 hover:border-blue-300"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobSearch;