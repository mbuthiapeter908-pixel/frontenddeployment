import React, { useState, useEffect } from 'react';
import { Filter, Grid, List, Search, Rocket, RefreshCw } from 'lucide-react';
import JobCard from '../components/Jobs/JobCard';
import JobFilter from '../components/Jobs/JobFilter';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import Button from '../components/UI/Button';
import { useJobs } from '../hooks/useJobs';

const Jobs = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    type: [],
    category: [],
    location: '',
    remote: false,
  });

  // Transform filters for API - FIXED: Handle multiple selections properly
  const apiFilters = {};
  if (filters.type.length > 0) apiFilters.type = filters.type[0]; // Take first selection for now
  if (filters.category.length > 0) apiFilters.category = filters.category[0]; // Take first selection for now
  if (filters.location) apiFilters.location = filters.location;
  if (filters.remote) apiFilters.remote = 'true';

  const { jobs, loading, error, pagination, refetch } = useJobs(apiFilters);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 max-w-md mx-4">
          <div className="text-6xl mb-4">😞</div>
          <div className="text-2xl font-black text-gray-900 mb-4">Something went wrong</div>
          <div className="text-gray-600 mb-6">
            {error}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={refetch}
              className="bg-blue-600 hover:bg-blue-700 font-bold"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
            <Button 
              variant="secondary"
              onClick={() => window.location.reload()}
              className="border-2 border-gray-300 hover:border-gray-400"
            >
              Refresh Page
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const clearAllFilters = () => {
    setFilters({
      type: [],
      category: [],
      location: '',
      remote: false,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200 shadow-lg mb-6">
            <Rocket className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {pagination?.totalJobs || 'Many'} Amazing Opportunities
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Find Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dream Job</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Browse through curated opportunities from top companies
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <Button
            variant="secondary"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-3 bg-white border-2 border-blue-200 hover:border-blue-300 shadow-lg hover:shadow-xl font-bold transition-all duration-300"
          >
            <Filter className="h-4 w-4 text-blue-600" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
            {(filters.type.length > 0 || filters.category.length > 0 || filters.remote || filters.location) && (
              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                {filters.type.length + filters.category.length + (filters.remote ? 1 : 0) + (filters.location ? 1 : 0)}
              </span>
            )}
          </Button>

          <div className="flex items-center gap-2 bg-white rounded-2xl p-2 border-2 border-blue-100 shadow-lg">
            <Button
              variant={viewMode === 'grid' ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="!p-3 rounded-xl transition-all duration-300"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
              className="!p-3 rounded-xl transition-all duration-300"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="lg:w-80 animate-slide-in">
              <JobFilter filters={filters} setFilters={setFilters} />
            </div>
          )}

          {/* Job Listings */}
          <div className={`flex-1 transition-all duration-300 ${showFilters ? 'lg:ml-0' : ''}`}>
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <LoadingSpinner size="lg" />
                <span className="ml-4 text-blue-600 font-semibold">Loading jobs...</span>
              </div>
            ) : (
              <>
                {/* Results Info */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-gray-600 font-semibold">
                    Showing <span className="text-blue-600 font-black">{jobs.length}</span> jobs
                    {pagination && (
                      <span className="text-gray-500 text-sm ml-2">
                        (of {pagination.totalJobs})
                      </span>
                    )}
                  </p>
                  {(filters.type.length > 0 || filters.category.length > 0 || filters.remote || filters.location) && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={clearAllFilters}
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Clear Filters
                    </Button>
                  )}
                </div>

                {/* Jobs Grid/List */}
                <div className={
                  viewMode === 'grid' 
                    ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                    : 'space-y-6'
                }>
                  {jobs.map(job => (
                    <JobCard key={job._id} job={job} />
                  ))}
                </div>

                {/* Empty State */}
                {jobs.length === 0 && !loading && (
                  <div className="text-center py-16 bg-white rounded-3xl shadow-2xl border border-gray-200 animate-fade-in">
                    <div className="text-8xl mb-6">🔍</div>
                    <div className="text-3xl font-black text-gray-900 mb-4">No jobs found</div>
                    <div className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                      Try adjusting your filters or search terms to see more opportunities
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        variant="primary"
                        onClick={clearAllFilters}
                        className="bg-blue-600 hover:bg-blue-700 font-bold"
                      >
                        ✨ Clear All Filters
                      </Button>
                      <Button 
                        variant="secondary" 
                        className="border-2 border-gray-300 hover:border-gray-400"
                        onClick={refetch}
                      >
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Reload Jobs
                      </Button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        {jobs.length > 0 && !loading && (
          <div className="text-center mt-16 animate-fade-in-up">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-black mb-4">Want more opportunities?</h3>
              <p className="text-blue-100 text-lg mb-6">
                Set up personalized job alerts and never miss your dream job!
              </p>
              <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold">
                🔔 Create Job Alert
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;