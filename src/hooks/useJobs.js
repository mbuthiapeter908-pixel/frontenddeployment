import { useState, useEffect } from 'react';
import { jobsAPI } from '../services/api';

export const useJobs = (filters = {}) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState(null);

  const fetchJobs = async (params = {}) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await jobsAPI.getAll({
        page: 1,
        limit: 50,
        ...filters,
        ...params
      });
      
      setJobs(response.data);
      setPagination(response.pagination);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching jobs:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [filters.type, filters.category, filters.location, filters.remote]);

  const refetch = () => fetchJobs();

  const searchJobs = async (query, params = {}) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await jobsAPI.search(query, params);
      setJobs(response.data);
      setPagination(response.pagination);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { 
    jobs, 
    loading, 
    error, 
    pagination,
    refetch,
    searchJobs 
  };
};

export const useJob = (id) => {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        setError(null);
        
        const response = await jobsAPI.getById(id);
        setJob(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  return { job, loading, error };
};

export const useJobStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await jobsAPI.getStats();
        setStats(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { stats, loading, error };
};