import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Building2, DollarSign, ArrowLeft, Share2, Heart, Users, Calendar } from 'lucide-react';
import Button from '../components/UI/Button';
import Badge from '../components/UI/Badge';


import { SAMPLE_JOBS } from '../utils/constants';

const JobDetails = () => {
  const { id } = useParams();
  const job = SAMPLE_JOBS.find(j => j.id === parseInt(id));

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</div>
          <Link to="/jobs">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Jobs
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/jobs" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Jobs
        </Link>

        {/* Job Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-primary-600" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                  <p className="text-xl text-gray-600 font-medium">{job.company}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{job.location}</span>
                  {job.isRemote && (
                    <Badge variant="success" className="ml-2">
                      Remote
                    </Badge>
                  )}
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-5 w-5 mr-2" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>Posted {job.postedDate}</span>
                </div>
              </div>

              {job.isFeatured && (
                <Badge variant="primary" className="animate-pulse">
                  Featured Opportunity
                </Badge>
              )}
            </div>

            <div className="flex lg:flex-col gap-3">
              <Button variant="primary" size="lg" className="flex-1 lg:flex-none">
                Apply Now
              </Button>
              <Button variant="secondary" className="flex-1 lg:flex-none">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="ghost" className="flex-1 lg:flex-none">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Description */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Description</h2>
              <p className="text-gray-700 leading-relaxed">{job.description}</p>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {job.requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    {requirement}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Company Info */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">About {job.company}</h3>
              <p className="text-gray-600 text-sm mb-4">
                A leading company in their industry, focused on innovation and growth.
              </p>
              <div className="flex items-center text-gray-600 text-sm">
                <Users className="h-4 w-4 mr-2" />
                <span>50-200 employees</span>
              </div>
            </div>

            {/* Quick Apply */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Ready to Apply?</h3>
              <p className="text-primary-100 text-sm mb-4">
                This position receives many applications. Stand out with a great profile!
              </p>
              <Button variant="secondary" size="lg" className="w-full">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;