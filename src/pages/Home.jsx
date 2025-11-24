import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Rocket, Zap, Target, Users, Star, TrendingUp, PlayCircle, ArrowRight, Shield, Clock, Heart } from 'lucide-react';
import Button from '../components/UI/Button';
import JobSearch from '../components/Jobs/JobSearch';

const Home = () => {
  const features = [
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Lightning Fast Matching",
      description: "Our AI instantly connects you with perfect job opportunities based on your skills and preferences",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
      emoji: "🚀"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Smart Applications",
      description: "Apply to multiple jobs with one click using your optimized smart profile",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
      emoji: "⚡"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Career Roadmaps",
      description: "Get personalized career guidance and skill development recommendations",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      gradient: "bg-gradient-to-r from-green-500 to-emerald-500",
      emoji: "🎯"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Verified Companies",
      description: "All employers are thoroughly verified to ensure legitimate opportunities",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      gradient: "bg-gradient-to-r from-orange-500 to-red-500",
      emoji: "🛡️"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Get help anytime from our dedicated career support team",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      gradient: "bg-gradient-to-r from-indigo-500 to-purple-500",
      emoji: "⏰"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Youth Focused",
      description: "Specifically designed for students and young professionals",
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      gradient: "bg-gradient-to-r from-pink-500 to-rose-500",
      emoji: "❤️"
    }
  ];

  const stats = [
    { number: "15K+", label: "Active Jobs", icon: "💼", description: "Curated opportunities" },
    { number: "8K+", label: "Top Companies", icon: "🏢", description: "Trusted employers" },
    { number: "75K+", label: "Youth Hired", icon: "🎓", description: "Successful placements" },
    { number: "98%", label: "Success Rate", icon: "⭐", description: "User satisfaction" }
  ];

  const jobCategories = [
    { name: "Technology", icon: "💻", jobs: "2,340", color: "from-blue-500 to-cyan-500" },
    { name: "Design", icon: "🎨", jobs: "1,240", color: "from-purple-500 to-pink-500" },
    { name: "Marketing", icon: "📈", jobs: "1,890", color: "from-green-500 to-emerald-500" },
    { name: "Business", icon: "💼", jobs: "1,560", color: "from-orange-500 to-red-500" },
    { name: "Engineering", icon: "⚙️", jobs: "3,120", color: "from-indigo-500 to-purple-500" },
    { name: "Healthcare", icon: "🏥", jobs: "980", color: "from-pink-500 to-rose-500" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      image: "👩‍💻",
      text: "JobHub helped me land my dream job in just 2 weeks! The personalized recommendations were spot on.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Product Designer at Airbnb",
      image: "👨‍🎨",
      text: "As a recent grad, I was overwhelmed. JobHub made the job search process smooth and efficient.",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Marketing Manager at Shopify",
      image: "👩‍💼",
      text: "The career guidance and interview prep resources were game-changers for my career transition.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-purple-200 shadow-lg mb-8">
              <Star className="h-5 w-5 text-yellow-500 mr-2 fill-current" />
              <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                #1 Youth Job Platform 2025
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Launch
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
                Your Career With JobHub
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
              Discover <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">amazing opportunities</span> 
              <br />tailored for the next generation of talent ✨
            </p>
            
            {/* Job Search */}
            <div className="max-w-4xl mx-auto mb-12">
              <JobSearch />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/jobs">
                <Button size="lg" className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <Rocket className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Explore Jobs
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Button variant="secondary" size="lg" className="group border-2 border-blue-200 hover:border-blue-300 bg-white/80 backdrop-blur-sm">
                <PlayCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-semibold text-lg mb-1">{stat.label}</div>
                <div className="text-blue-200 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose JobHub Section - FIXED ICONS */}
      <section className="bg-white py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #000 2%, transparent 0%), radial-gradient(circle at 75px 75px, #000 2%, transparent 0%)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 mb-6">
              <Star className="h-5 w-5 text-yellow-500 mr-2 fill-current" />
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Why JobHub Stands Out 
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Built for <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Your Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've reimagined job searching with features designed specifically for today's youth
            </p>
          </div>

          {/* Features Grid - FIXED ICONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative"
              >
                {/* Animated Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                  {/* Icon Container - FIXED */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 text-2xl">
                      {feature.emoji}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>

                  {/* Progress Bar Effect */}
                  <div className="mt-6 w-full bg-gray-200 rounded-full h-1">
                    <div className={`h-1 rounded-full bg-gradient-to-r ${feature.color} transition-all duration-1000 group-hover:w-full w-3/4`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border-2 border-blue-100">
              <h3 className="text-3xl font-black text-gray-900 mb-4">
                Ready to experience the difference?
              </h3>
              <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
                Join thousands of young professionals who found their dream careers with JobHub
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/jobs">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 font-bold">
                    🚀 Get Started Free
                  </Button>
                </Link>
                <Button variant="secondary" size="lg" className="border-2 border-blue-200 hover:border-blue-300 font-bold">
                  📞 Book a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Explore by <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Category</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find your passion across diverse career paths and industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {jobCategories.map((category, index) => (
              <div 
                key={index}
                className="group text-center p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 relative z-10">
                  {category.icon}
                </div>
                <h3 className="font-black text-gray-900 mb-2 text-lg relative z-10">{category.name}</h3>
                <p className="text-blue-600 font-semibold relative z-10">{category.jobs} jobs</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Success <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from young professionals who launched their careers with JobHub
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 border-2 border-blue-100 group hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="font-black text-gray-900">{testimonial.name}</h4>
                    <p className="text-blue-600 font-semibold text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Your Dream Career Awaits
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the thousands of young professionals who transformed their careers with JobHub
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/jobs">
              <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold shadow-2xl">
                🚀 Start Your Journey
              </Button>
            </Link>
            <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10 font-bold">
              💼 For Employers
            </Button>
          </div>
          <p className="text-blue-200 text-sm mt-6">
            ✨ Free forever • No credit card required • Setup in 2 minutes
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;