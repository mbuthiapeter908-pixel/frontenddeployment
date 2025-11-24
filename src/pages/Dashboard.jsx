import React from 'react';
import { useUser } from '@clerk/clerk-react';
import { Briefcase, Heart, FileText, Settings, Bell, Award, Rocket, Zap, TrendingUp, Star, Eye, Calendar } from 'lucide-react'; // Added Eye import
import Button from '../components/UI/Button';


const Dashboard = () => {
  const { user } = useUser();

  const stats = [
    { 
      label: 'Applications', 
      value: '12', 
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      trend: '+3 this week'
    },
    { 
      label: 'Saved Jobs', 
      value: '8', 
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      trend: '2 new'
    },
    { 
      label: 'Interviews', 
      value: '3', 
      icon: Calendar,
      color: 'from-green-500 to-emerald-500',
      trend: '1 upcoming'
    },
    { 
      label: 'Profile Views', 
      value: '45', 
      icon: Eye,
      color: 'from-purple-500 to-pink-500',
      trend: '+12 this month'
    }
  ];

  const recentActivity = [
    {
      action: 'Applied to',
      title: 'Frontend Developer at TechCorp',
      time: '2 hours ago',
      type: 'application',
      icon: Rocket
    },
    {
      action: 'Saved',
      title: 'UX Designer at CreativeStudio',
      time: '1 day ago',
      type: 'save',
      icon: Heart
    },
    {
      action: 'Profile viewed by',
      title: 'InnovateLab Recruiter',
      time: '2 days ago',
      type: 'view',
      icon: Eye
    }
  ];

  const recommendedJobs = [
    {
      title: "Full Stack Developer",
      company: "TechNova",
      location: "Remote",
      type: "Full-time",
      salary: "$85,000 - $110,000",
      match: "95%",
      urgent: true
    },
    {
      title: "Product Manager",
      company: "GrowthLabs",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$95,000 - $130,000",
      match: "88%",
      urgent: false
    }
  ];

  const progressItems = [
    { label: 'Profile Complete', progress: 85 },
    { label: 'Skills Added', progress: 70 },
    { label: 'Resume Updated', progress: 90 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-4xl font-black text-gray-900 mb-3">
                Welcome back, {user?.firstName || 'there'}! 👋
              </h1>
              <p className="text-xl text-gray-600 font-medium">
                Here's your job search progress and recommendations
              </p>
            </div>
            <div className="flex gap-3 mt-6 md:mt-0">
              <Button variant="secondary" className="border-2 border-gray-300 hover:border-gray-400">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="ghost" className="text-gray-600 hover:bg-gray-100">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} shadow-md`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  {stat.trend}
                </span>
              </div>
              <div>
                <p className="text-3xl font-black text-gray-900 mb-1">{stat.value}</p>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black text-gray-900 flex items-center">
                  <Zap className="h-5 w-5 text-yellow-500 mr-3" />
                  Recent Activity
                </h2>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-4 bg-gray-50 rounded-xl group hover:bg-blue-50 transition-colors duration-300"
                  >
                    <div className="p-2 bg-white rounded-lg shadow-sm mr-4">
                      <activity.icon className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">
                        {activity.action} <span className="text-blue-600">{activity.title}</span>
                      </p>
                      <p className="text-gray-500 text-sm">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Jobs */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                <Star className="h-5 w-5 text-yellow-500 mr-3 fill-current" />
                Recommended For You
              </h2>
              <div className="space-y-4">
                {recommendedJobs.map((job, index) => (
                  <div 
                    key={index} 
                    className="p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-black text-gray-900 text-lg">{job.title}</h3>
                        <p className="text-blue-600 font-semibold">{job.company}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {job.urgent && (
                          <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-bold">
                            ⚡ Urgent
                          </span>
                        )}
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">
                          {job.match} Match
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center">
                        📍 {job.location}
                      </span>
                      <span className="flex items-center">
                        💼 {job.type}
                      </span>
                      <span className="flex items-center">
                        💰 {job.salary}
                      </span>
                    </div>
                    <Button variant="primary" size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Apply Now
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
                <Rocket className="h-5 w-5 text-blue-600 mr-3" />
                Quick Actions
              </h2>
              <div className="space-y-3">
                <Button variant="primary" className="w-full justify-start bg-blue-600 hover:bg-blue-700">
                  <FileText className="h-4 w-4 mr-2" />
                  Update Resume
                </Button>
                <Button variant="secondary" className="w-full justify-start border-2 border-gray-300 hover:border-gray-400">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Browse Jobs
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gray-600 hover:bg-gray-100">
                  <Heart className="h-4 w-4 mr-2" />
                  Saved Jobs
                </Button>
              </div>
            </div>

            {/* Profile Progress */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-xl">
              <h3 className="text-xl font-black mb-4">Profile Strength</h3>
              <div className="space-y-4">
                {progressItems.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm font-semibold mb-2">
                      <span>{item.label}</span>
                      <span>{item.progress}%</span>
                    </div>
                    <div className="w-full bg-blue-500 rounded-full h-2">
                      <div 
                        className="bg-white h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="secondary" size="sm" className="w-full mt-4 font-bold">
                Complete Profile
              </Button>
            </div>

            {/* Achievement */}
            <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center mb-3">
                <Award className="h-6 w-6 mr-2" />
                <h3 className="text-xl font-black">Top Applicant</h3>
              </div>
              <p className="text-yellow-100 text-sm font-medium">
                You're in the top 10% of applicants! Keep up the great work!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;