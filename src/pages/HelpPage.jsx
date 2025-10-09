import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const HelpPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(null);

  const helpTopics = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Learn the basics of using DreamNest',
      icon: '🚀',
      color: 'bg-green-500',
      articles: [
        {
          title: 'Creating Your Account',
          description: 'Step-by-step guide to signing up and setting up your profile',
          readTime: '3 min read',
          content: `
            <h3>Creating Your DreamNest Account</h3>
            <p>Getting started with DreamNest is quick and easy. Follow these steps:</p>
            <ol>
              <li><strong>Visit the Registration Page:</strong> Click the "Register" button in the top navigation</li>
              <li><strong>Choose Your User Type:</strong> Select whether you're a renter, property owner, or service provider</li>
              <li><strong>Fill in Basic Information:</strong> Enter your name, email, and phone number</li>
              <li><strong>Create a Strong Password:</strong> Use a combination of letters, numbers, and symbols</li>
              <li><strong>Verify Your Account:</strong> Check your email for a verification link</li>
              <li><strong>Complete Your Profile:</strong> Add additional information to improve your experience</li>
            </ol>
            <p><strong>Pro Tips:</strong></p>
            <ul>
              <li>Use a clear profile photo to build trust with other users</li>
              <li>Complete all profile sections to increase your credibility</li>
              <li>Keep your contact information up to date</li>
            </ul>
          `
        },
        {
          title: 'Understanding User Types',
          description: 'Learn about different user roles and their features',
          readTime: '5 min read',
          content: `
            <h3>DreamNest User Types</h3>
            <p>DreamNest supports four different user types, each with specific features:</p>
            
            <h4>1. Renter</h4>
            <p>Perfect for individuals looking for rental properties and home services.</p>
            <ul>
              <li>Browse and search verified properties</li>
              <li>Save favorite properties to your wishlist</li>
              <li>Book home services from verified providers</li>
              <li>Leave reviews and ratings</li>
              <li>Track your rental and service history</li>
            </ul>
            
            <h4>2. Property Owner</h4>
            <p>Ideal for landlords and property managers.</p>
            <ul>
              <li>List multiple properties</li>
              <li>Manage rental applications</li>
              <li>Communicate with potential tenants</li>
              <li>Track property performance</li>
              <li>Access property management tools</li>
            </ul>
            
            <h4>3. Service Provider</h4>
            <p>For professionals offering home services.</p>
            <ul>
              <li>Create service listings</li>
              <li>Manage bookings and schedules</li>
              <li>Build your professional portfolio</li>
              <li>Track earnings and performance</li>
              <li>Get verified badges</li>
            </ul>
            
            <h4>4. Admin</h4>
            <p>Platform administrators with full access.</p>
            <ul>
              <li>Manage all users and content</li>
              <li>Verify properties and service providers</li>
              <li>Monitor platform activity</li>
              <li>Handle disputes and issues</li>
            </ul>
          `
        },
        {
          title: 'Navigating the Platform',
          description: 'Get familiar with DreamNest\'s main features and navigation',
          readTime: '4 min read',
          content: `
            <h3>Platform Navigation Guide</h3>
            <p>Understanding how to navigate DreamNest will help you get the most out of the platform.</p>
            
            <h4>Main Navigation Menu</h4>
            <ul>
              <li><strong>Home:</strong> Platform overview and featured content</li>
              <li><strong>Properties:</strong> Browse all available rental properties</li>
              <li><strong>Services:</strong> Explore home services and providers</li>
              <li><strong>Reviews:</strong> Read community reviews and testimonials</li>
            </ul>
            
            <h4>Your Dashboard</h4>
            <p>Access your personalized dashboard to:</p>
            <ul>
              <li>View your account activity</li>
              <li>Manage saved properties or bookings</li>
              <li>Update your profile information</li>
              <li>Track your interactions and history</li>
            </ul>
            
            <h4>Search and Filters</h4>
            <p>Use our advanced search features to:</p>
            <ul>
              <li>Search by location, price, or keywords</li>
              <li>Apply filters to narrow down results</li>
              <li>Save search preferences for future use</li>
              <li>Get notifications for new matches</li>
            </ul>
          `
        }
      ]
    },
    {
      id: 'properties',
      title: 'Property Help',
      description: 'Everything about finding and renting properties',
      icon: '🏠',
      color: 'bg-blue-500',
      articles: [
        {
          title: 'How to Search for Properties',
          description: 'Master our property search and filtering system',
          readTime: '6 min read',
          content: `
            <h3>Effective Property Searching</h3>
            <p>Finding the perfect property is easy when you know how to use our search tools effectively.</p>
            
            <h4>Basic Search</h4>
            <ol>
              <li>Enter your desired location in the search bar</li>
              <li>Set your budget range using the price filter</li>
              <li>Select number of bedrooms and bathrooms</li>
              <li>Choose property type (apartment, house, etc.)</li>
            </ol>
            
            <h4>Advanced Filters</h4>
            <p>Use additional filters to refine your search:</p>
            <ul>
              <li><strong>Amenities:</strong> Parking, gym, security, etc.</li>
              <li><strong>Property Features:</strong> Balcony, furnished, pet-friendly</li>
              <li><strong>Location Preferences:</strong> Near metro, schools, hospitals</li>
              <li><strong>Availability:</strong> Immediate or future move-in dates</li>
            </ul>
            
            <h4>Saving and Organizing</h4>
            <ul>
              <li>Save properties to your favorites list</li>
              <li>Create custom lists for different needs</li>
              <li>Set up alerts for new properties matching your criteria</li>
              <li>Share property links with family or friends</li>
            </ul>
            
            <h4>Pro Tips</h4>
            <ul>
              <li>Be flexible with your location criteria</li>
              <li>Consider properties slightly above your budget</li>
              <li>Check the property's neighborhood and transport links</li>
              <li>Read all reviews and ratings carefully</li>
            </ul>
          `
        },
        {
          title: 'Property Viewing Guide',
          description: 'Tips for scheduling and conducting property viewings',
          readTime: '5 min read',
          content: `
            <h3>Making the Most of Property Viewings</h3>
            <p>Property viewings are crucial for making the right rental decision. Here's how to do them effectively.</p>
            
            <h4>Before the Viewing</h4>
            <ul>
              <li>Schedule viewings during different times of day</li>
              <li>Prepare a list of questions to ask the owner</li>
              <li>Research the neighborhood and local amenities</li>
              <li>Bring a friend or family member for a second opinion</li>
            </ul>
            
            <h4>What to Check During Viewing</h4>
            <ul>
              <li><strong>Structural:</strong> Walls, ceiling, floors for damage</li>
              <li><strong>Plumbing:</strong> Water pressure, drainage, leaks</li>
              <li><strong>Electrical:</strong> Light switches, outlets, wiring</li>
              <li><strong>Security:</strong> Locks, windows, building access</li>
              <li><strong>Storage:</strong> Closets, cabinets, storage space</li>
              <li><strong>Natural Light:</strong> Window placement and lighting</li>
            </ul>
            
            <h4>Questions to Ask the Owner</h4>
            <ul>
              <li>What utilities are included in the rent?</li>
              <li>What is the security deposit amount?</li>
              <li>Are pets allowed in the property?</li>
              <li>How is maintenance handled?</li>
              <li>What are the neighborhood's safety measures?</li>
              <li>When is the earliest move-in date?</li>
            </ul>
            
            <h4>After the Viewing</h4>
            <ul>
              <li>Take notes about each property</li>
              <li>Compare properties using consistent criteria</li>
              <li>Follow up with the owner if interested</li>
              <li>Get all agreements in writing</li>
            </ul>
          `
        },
        {
          title: 'Understanding Rental Agreements',
          description: 'Key points to consider in rental contracts',
          readTime: '7 min read',
          content: `
            <h3>Rental Agreement Essentials</h3>
            <p>Understanding your rental agreement is crucial for a smooth rental experience.</p>
            
            <h4>Key Sections to Review</h4>
            <ul>
              <li><strong>Rent Amount and Payment Terms:</strong> Monthly rent, due date, late fees</li>
              <li><strong>Security Deposit:</strong> Amount, conditions for return</li>
              <li><strong>Lease Duration:</strong> Start and end dates, renewal terms</li>
              <li><strong>Utilities and Services:</strong> What's included and what you pay</li>
              <li><strong>Maintenance Responsibilities:</strong> Who handles what repairs</li>
            </ul>
            
            <h4>Important Clauses</h4>
            <ul>
              <li><strong>Early Termination:</strong> Conditions and penalties</li>
              <li><strong>Property Modifications:</strong> What changes are allowed</li>
              <li><strong>Guest Policy:</strong> Rules about visitors and subletting</li>
              <li><strong>Property Use:</strong> Residential vs. commercial use restrictions</li>
            </ul>
            
            <h4>Before Signing</h4>
            <ul>
              <li>Read the entire agreement carefully</li>
              <li>Ask questions about unclear terms</li>
              <li>Negotiate terms if necessary</li>
              <li>Keep copies of all documents</li>
              <li>Take photos of the property's condition</li>
            </ul>
            
            <h4>Red Flags to Watch For</h4>
            <ul>
              <li>Requests for large upfront payments</li>
              <li>No written agreement or receipt</li>
              <li>Unreasonable restrictions or rules</li>
              <li>Unclear maintenance responsibilities</li>
              <li>No proper identification from the owner</li>
            </ul>
          `
        }
      ]
    },
    {
      id: 'services',
      title: 'Service Booking',
      description: 'Guide to booking and managing home services',
      icon: '🔧',
      color: 'bg-purple-500',
      articles: [
        {
          title: 'How to Book Home Services',
          description: 'Complete guide to booking services through DreamNest',
          readTime: '5 min read',
          content: `
            <h3>Booking Home Services Made Easy</h3>
            <p>Our platform makes it simple to find and book reliable home services.</p>
            
            <h4>Finding the Right Service Provider</h4>
            <ol>
              <li><strong>Browse Categories:</strong> Select the service type you need</li>
              <li><strong>Compare Providers:</strong> Review ratings, prices, and portfolios</li>
              <li><strong>Check Availability:</strong> Look for providers available on your preferred dates</li>
              <li><strong>Read Reviews:</strong> See what other customers have experienced</li>
            </ol>
            
            <h4>Booking Process</h4>
            <ol>
              <li>Click "Book Now" on your chosen provider</li>
              <li>Fill in service details and requirements</li>
              <li>Select your preferred date and time</li>
              <li>Provide your contact information</li>
              <li>Submit your booking request</li>
            </ol>
            
            <h4>After Booking</h4>
            <ul>
              <li>You'll receive a booking confirmation</li>
              <li>The service provider will contact you to confirm details</li>
              <li>You can track your booking status in your dashboard</li>
              <li>Receive reminders before your appointment</li>
            </ul>
            
            <h4>Preparation Tips</h4>
            <ul>
              <li>Clear the work area before the provider arrives</li>
              <li>Prepare a list of specific requirements</li>
              <li>Ensure someone is available to let the provider in</li>
              <li>Have your payment method ready</li>
            </ul>
          `
        },
        {
          title: 'Service Provider Verification',
          description: 'How we ensure service provider quality and safety',
          readTime: '4 min read',
          content: `
            <h3>Our Service Provider Verification Process</h3>
            <p>We take your safety and satisfaction seriously. All service providers undergo thorough verification.</p>
            
            <h4>Background Verification</h4>
            <ul>
              <li><strong>Identity Verification:</strong> Government ID and address proof</li>
              <li><strong>Criminal Background Check:</strong> Police clearance certificate</li>
              <li><strong>Professional Credentials:</strong> Trade licenses and certifications</li>
              <li><strong>Insurance Coverage:</strong> Public liability insurance verification</li>
            </ul>
            
            <h4>Skill Assessment</h4>
            <ul>
              <li>Portfolio review and skill evaluation</li>
              <li>Customer reference checks</li>
              <li>On-site skill demonstration (for selected services)</li>
              <li>Ongoing performance monitoring</li>
            </ul>
            
            <h4>Quality Assurance</h4>
            <ul>
              <li>Regular customer feedback monitoring</li>
              <li>Quality spot-checks and inspections</li>
              <li>Continuous training and development programs</li>
              <li>Immediate action on customer complaints</li>
            </ul>
            
            <h4>Verification Badges</h4>
            <p>Look for these badges when choosing service providers:</p>
            <ul>
              <li><strong>✓ Verified:</strong> Basic identity and background verified</li>
              <li><strong>⭐ Premium:</strong> High customer ratings and performance</li>
              <li><strong>🛡️ Insured:</strong> Comprehensive insurance coverage</li>
              <li><strong>🎖️ Expert:</strong> Advanced skills and experience certified</li>
            </ul>
          `
        },
        {
          title: 'Managing Your Service Bookings',
          description: 'Track and manage your service appointments',
          readTime: '3 min read',
          content: `
            <h3>Managing Your Service Bookings</h3>
            <p>Keep track of all your service bookings and communications in one place.</p>
            
            <h4>Your Service Dashboard</h4>
            <p>Access your service dashboard to:</p>
            <ul>
              <li>View upcoming appointments</li>
              <li>Track booking status and progress</li>
              <li>Communicate with service providers</li>
              <li>Access booking history and receipts</li>
            </ul>
            
            <h4>Booking Status Explained</h4>
            <ul>
              <li><strong>Pending:</strong> Waiting for provider confirmation</li>
              <li><strong>Confirmed:</strong> Appointment scheduled and confirmed</li>
              <li><strong>In Progress:</strong> Service provider is working</li>
              <li><strong>Completed:</strong> Service finished, ready for review</li>
              <li><strong>Cancelled:</strong> Booking cancelled by either party</li>
            </ul>
            
            <h4>Making Changes</h4>
            <ul>
              <li><strong>Reschedule:</strong> Contact provider at least 24 hours in advance</li>
              <li><strong>Modify Requirements:</strong> Update service details through messaging</li>
              <li><strong>Cancel Booking:</strong> Follow cancellation policy for refunds</li>
              <li><strong>Add Services:</strong> Request additional services during the visit</li>
            </ul>
            
            <h4>Communication</h4>
            <ul>
              <li>Use the built-in messaging system</li>
              <li>Keep all communication on the platform for record-keeping</li>
              <li>Be clear about your expectations and requirements</li>
              <li>Report any issues immediately</li>
            </ul>
          `
        }
      ]
    },
    {
      id: 'account',
      title: 'Account Management',
      description: 'Manage your profile, settings, and preferences',
      icon: '⚙️',
      color: 'bg-orange-500',
      articles: [
        {
          title: 'Profile Setup and Management',
          description: 'Optimize your profile for better experiences',
          readTime: '4 min read',
          content: `
            <h3>Creating an Effective Profile</h3>
            <p>A complete profile helps build trust and improves your experience on DreamNest.</p>
            
            <h4>Essential Profile Information</h4>
            <ul>
              <li><strong>Profile Photo:</strong> Clear, recent photo of yourself</li>
              <li><strong>Contact Information:</strong> Phone number and email address</li>
              <li><strong>Personal Details:</strong> Full name and basic information</li>
              <li><strong>Preferences:</strong> Property and service preferences</li>
            </ul>
            
            <h4>For Renters</h4>
            <ul>
              <li>Add your rental budget range</li>
              <li>Specify preferred locations</li>
              <li>Include lifestyle preferences (pet-friendly, near transport, etc.)</li>
              <li>Add employment or income information for credibility</li>
            </ul>
            
            <h4>For Property Owners</h4>
            <ul>
              <li>Upload business registration documents</li>
              <li>Add multiple contact methods</li>
              <li>Include property management experience</li>
              <li>Add business address and hours</li>
            </ul>
            
            <h4>For Service Providers</h4>
            <ul>
              <li>Upload professional certifications</li>
              <li>Add portfolio images and project descriptions</li>
              <li>Include service areas and specialties</li>
              <li>Add business insurance information</li>
            </ul>
            
            <h4>Privacy Settings</h4>
            <ul>
              <li>Control who can see your contact information</li>
              <li>Manage notification preferences</li>
              <li>Set communication preferences</li>
              <li>Configure privacy levels for different profile sections</li>
            </ul>
          `
        },
        {
          title: 'Security and Privacy',
          description: 'Keep your account safe and secure',
          readTime: '5 min read',
          content: `
            <h3>Account Security Best Practices</h3>
            <p>Protecting your account and personal information is our top priority.</p>
            
            <h4>Password Security</h4>
            <ul>
              <li>Use a strong, unique password for your DreamNest account</li>
              <li>Include uppercase, lowercase, numbers, and special characters</li>
              <li>Change your password regularly</li>
              <li>Never share your password with others</li>
              <li>Use a password manager for better security</li>
            </ul>
            
            <h4>Two-Factor Authentication</h4>
            <ul>
              <li>Enable 2FA for an extra layer of security</li>
              <li>Use SMS or authenticator app methods</li>
              <li>Keep backup codes in a safe place</li>
              <li>Update your phone number if it changes</li>
            </ul>
            
            <h4>Privacy Protection</h4>
            <ul>
              <li>Review and adjust privacy settings regularly</li>
              <li>Be cautious about sharing personal information</li>
              <li>Use our messaging system instead of personal contact details</li>
              <li>Report suspicious behavior immediately</li>
            </ul>
            
            <h4>Safe Communication</h4>
            <ul>
              <li>Keep all initial communications on the platform</li>
              <li>Be wary of requests for immediate meetings or payments</li>
              <li>Verify identity before sharing sensitive information</li>
              <li>Trust your instincts about suspicious interactions</li>
            </ul>
            
            <h4>Account Recovery</h4>
            <ul>
              <li>Keep your email address updated</li>
              <li>Set up security questions</li>
              <li>Keep backup contact methods current</li>
              <li>Know how to reset your password if needed</li>
            </ul>
          `
        }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      description: 'Common issues and how to resolve them',
      icon: '🛠️',
      color: 'bg-red-500',
      articles: [
        {
          title: 'Common Login Issues',
          description: 'Resolve login and access problems',
          readTime: '3 min read',
          content: `
            <h3>Troubleshooting Login Problems</h3>
            <p>Can't access your account? Here are the most common solutions.</p>
            
            <h4>Forgot Password</h4>
            <ol>
              <li>Click "Forgot Password" on the login page</li>
              <li>Enter your registered email address</li>
              <li>Check your email for reset instructions</li>
              <li>Follow the link to create a new password</li>
              <li>Log in with your new password</li>
            </ol>
            
            <h4>Account Locked</h4>
            <p>If your account is locked due to multiple failed login attempts:</p>
            <ul>
              <li>Wait 15 minutes before trying again</li>
              <li>Use the password reset option</li>
              <li>Contact support if the issue persists</li>
              <li>Check for any security notifications in your email</li>
            </ul>
            
            <h4>Email Not Recognized</h4>
            <ul>
              <li>Double-check the spelling of your email</li>
              <li>Try any alternative email addresses you might have used</li>
              <li>Check if you registered using social login</li>
              <li>Contact support with your phone number for account recovery</li>
            </ul>
            
            <h4>Two-Factor Authentication Issues</h4>
            <ul>
              <li>Ensure your phone has good reception</li>
              <li>Check if your phone number is up to date</li>
              <li>Try using backup codes if available</li>
              <li>Contact support to temporarily disable 2FA</li>
            </ul>
          `
        },
        {
          title: 'Search and Navigation Issues',
          description: 'Fix problems with searching and browsing',
          readTime: '4 min read',
          content: `
            <h3>Improving Search and Navigation</h3>
            <p>Get better results and smoother navigation with these tips.</p>
            
            <h4>Search Not Showing Results</h4>
            <ul>
              <li>Check your spelling and try different keywords</li>
              <li>Remove some filters to broaden your search</li>
              <li>Try searching in nearby areas</li>
              <li>Clear your browser cache and cookies</li>
              <li>Refresh the page and try again</li>
            </ul>
            
            <h4>Filters Not Working</h4>
            <ul>
              <li>Clear all filters and apply them one by one</li>
              <li>Check if you have conflicting filter settings</li>
              <li>Try using fewer filters at once</li>
              <li>Refresh the page to reset filters</li>
            </ul>
            
            <h4>Page Loading Slowly</h4>
            <ul>
              <li>Check your internet connection</li>
              <li>Close unnecessary browser tabs</li>
              <li>Clear your browser cache</li>
              <li>Try using a different browser</li>
              <li>Disable browser extensions temporarily</li>
            </ul>
            
            <h4>Images Not Loading</h4>
            <ul>
              <li>Check your internet connection speed</li>
              <li>Refresh the page</li>
              <li>Clear browser cache and cookies</li>
              <li>Try viewing in an incognito/private window</li>
              <li>Contact support if the issue persists</li>
            </ul>
          `
        },
        {
          title: 'Booking and Payment Issues',
          description: 'Resolve problems with bookings and transactions',
          readTime: '5 min read',
          content: `
            <h3>Booking and Payment Troubleshooting</h3>
            <p>Having trouble with bookings or payments? Here's how to resolve common issues.</p>
            
            <h4>Booking Request Not Going Through</h4>
            <ul>
              <li>Ensure all required fields are completed</li>
              <li>Check that your selected date is available</li>
              <li>Verify your contact information is correct</li>
              <li>Try booking again after a few minutes</li>
              <li>Contact the service provider directly</li>
            </ul>
            
            <h4>Payment Declined</h4>
            <ul>
              <li>Check that your card details are correct</li>
              <li>Ensure you have sufficient funds</li>
              <li>Verify that your card supports online payments</li>
              <li>Try a different payment method</li>
              <li>Contact your bank if the issue continues</li>
            </ul>
            
            <h4>Not Receiving Booking Confirmations</h4>
            <ul>
              <li>Check your email spam/junk folder</li>
              <li>Verify your email address is correct</li>
              <li>Check your notification preferences</li>
              <li>Add our email to your contacts</li>
              <li>Check your booking status in your dashboard</li>
            </ul>
            
            <h4>Refund Issues</h4>
            <ul>
              <li>Review the cancellation policy for your booking</li>
              <li>Contact the service provider first</li>
              <li>Check your dashboard for refund status</li>
              <li>Allow 3-5 business days for processing</li>
              <li>Contact support if refund is delayed</li>
            </ul>
            
            <h4>Service Provider Not Responding</h4>
            <ul>
              <li>Wait 24 hours for initial response</li>
              <li>Try contacting through different methods</li>
              <li>Check if they have specific response hours</li>
              <li>Contact our support team for assistance</li>
              <li>Consider booking with an alternative provider</li>
            </ul>
          `
        }
      ]
    }
  ];

  const filteredTopics = useMemo(() => {
    if (!searchTerm) return helpTopics;
    
    return helpTopics.map(topic => ({
      ...topic,
      articles: topic.articles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(topic => topic.articles.length > 0);
  }, [searchTerm]);

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    setSearchTerm('');
  };

  const handleBackToTopics = () => {
    setSelectedTopic(null);
  };

  if (selectedTopic) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Topic Header */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-12">
          <Container>
            <div className="max-w-4xl mx-auto">
              <button
                onClick={handleBackToTopics}
                className="flex items-center gap-2 text-blue-100 hover:text-white mb-4 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Help Topics
              </button>
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 ${selectedTopic.color} rounded-2xl flex items-center justify-center text-2xl`}>
                  {selectedTopic.icon}
                </div>
                <div>
                  <h1 className="text-4xl font-bold mb-2">{selectedTopic.title}</h1>
                  <p className="text-xl text-blue-100">{selectedTopic.description}</p>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Articles List */}
        <Container className="py-12">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {selectedTopic.articles.map((article, index) => (
                <details key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                  <summary className="cursor-pointer px-8 py-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          {article.description}
                        </p>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          {article.readTime}
                        </span>
                      </div>
                      <svg className="w-6 h-6 text-gray-400 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-8 pb-8 border-t border-gray-200 dark:border-gray-700">
                    <div 
                      className="prose dark:prose-invert max-w-none mt-6"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Help & Support Center
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find guides, tutorials, and answers to help you get the most out of DreamNest
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search help articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 text-gray-900 bg-white bg-opacity-90 backdrop-blur-sm rounded-xl border-0 focus:ring-2 focus:ring-white focus:bg-opacity-100 text-lg"
                />
                <svg className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-16">
        <div className="max-w-6xl mx-auto">
          {searchTerm && (
            <div className="mb-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <div>
                      <p className="text-blue-800 dark:text-blue-200 font-medium">
                        Search results for &quot;{searchTerm}&quot;
                      </p>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">
                        Found articles in {filteredTopics.length} categor{filteredTopics.length !== 1 ? 'ies' : 'y'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Help Topics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTopics.map((topic) => (
              <div
                key={topic.id}
                onClick={() => handleTopicSelect(topic)}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1 group"
              >
                <div className={`w-16 h-16 ${topic.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                  {topic.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {topic.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {topic.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {topic.articles.length} article{topic.articles.length !== 1 ? 's' : ''}
                  </span>
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {filteredTopics.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We couldn&apos;t find any help articles matching your search.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                Clear search and show all topics
              </button>
            </div>
          )}
        </div>
      </Container>

      {/* Quick Links */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Need More Help?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Can&apos;t find what you&apos;re looking for? Try these options
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                to="/faq"
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <div className="text-4xl mb-4">❓</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Frequently Asked Questions
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Browse our comprehensive FAQ section
                </p>
              </Link>
              
              <Link
                to="/contact"
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Contact Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Get personalized help from our team
                </p>
              </Link>
              
              <a
                href="https://wa.me/8801700000000"
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  WhatsApp Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Quick help via WhatsApp messaging
                </p>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HelpPage;