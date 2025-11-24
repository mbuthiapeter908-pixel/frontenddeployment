// This file is now mostly deprecated since we're using real data
// Keeping it for fallback or default values

export const JOB_TYPES = [
  'Full-time',
  'Part-time',
  'Contract',
  'Internship',
  'Temporary',
  'Volunteer'
];

export const JOB_CATEGORIES = [
  'Technology',
  'Design',
  'Marketing',
  'Sales',
  'Business',
  'Customer Service',
  'Healthcare',
  'Education',
  'Engineering',
  'Finance',
  'Human Resources',
  'Operations'
];

// Fallback data in case API is not available
export const FALLBACK_JOBS = [
  {
    _id: 'fallback-1',
    title: "Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "Full-time",
    category: "Technology",
    salary: "$80,000 - $100,000",
    description: "We are looking for a skilled Frontend Developer...",
    requirements: ["React", "JavaScript", "CSS"],
    isRemote: true,
    isFeatured: true,
    isUrgent: false,
    createdAt: new Date().toISOString()
  }
];