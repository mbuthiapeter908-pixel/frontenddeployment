import React from 'react';
import { MapPin, Clock, Building2, DollarSign, Heart, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '../UI/Badge';
import Button from '../UI/Button';

const JobCard = ({ job }) => {
  const {
    id,
    title,
    company,
    location,
    type,
    salary,
    postedDate,
    isRemote,
    isFeatured,
    isUrgent,
    logo
  } = job;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 group hover:shadow-2xl hover:border-blue-300 transition-all duration-500 hover:scale-105">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-gray-100">
            {logo ? (
              <img src={logo} alt={company} className="w-8 h-8 object-contain" />
            ) : (
              <Building2 className="h-6 w-6 text-blue-600" />
            )}
          </div>
          <div>
            <h3 className="font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300 text-lg">
              {title}
            </h3>
            <p className="text-blue-600 font-semibold">{company}</p>
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-2">
          {isFeatured && (
            <Badge variant="primary" className="bg-yellow-100 text-yellow-700 border border-yellow-200">
              ⭐ Featured
            </Badge>
          )}
          {isUrgent && (
            <Badge variant="danger" className="bg-red-100 text-red-700 border border-red-200">
              ⚡ Urgent
            </Badge>
          )}
        </div>
      </div>

      {/* Job Details */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-2 text-blue-500" />
          <span className="font-medium">{location}</span>
          {isRemote && (
            <Badge variant="success" className="ml-2 bg-green-100 text-green-700 border border-green-200">
              🌍 Remote
            </Badge>
          )}
        </div>
        
        <div className="flex items-center text-gray-600">
          <Clock className="h-4 w-4 mr-2 text-purple-500" />
          <span className="font-medium">{type}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <DollarSign className="h-4 w-4 mr-2 text-green-500" />
          <span className="font-medium">{salary}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-sm text-gray-500 font-medium">{postedDate}</span>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="!p-2 text-gray-400 hover:text-blue-600">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="!p-2 text-gray-400 hover:text-blue-600">
            <Share2 className="h-4 w-4" />
          </Button>
          <Link to={`/jobs/${id}`}>
            <Button variant="primary" size="sm" className="bg-blue-600 hover:bg-blue-700">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;