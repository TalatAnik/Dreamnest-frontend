import React, { useState, useMemo } from 'react';
import Container from '../components/Container';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openItems, setOpenItems] = useState(new Set());

  const categories = [
    { id: 'all', name: 'All Questions', count: 28 },
    { id: 'general', name: 'General', count: 6 },
    { id: 'properties', name: 'Properties', count: 8 },
    { id: 'services', name: 'Services', count: 6 },
    { id: 'account', name: 'Account', count: 4 },
    { id: 'payments', name: 'Payments', count: 4 }
  ];

  const faqs = [
    // General
    {
      id: 1,
      category: 'general',
      question: 'What is DreamNest?',
      answer: 'DreamNest is Bangladesh&apos;s leading property rental platform that connects renters with verified properties and trusted home service providers. We make finding and maintaining your perfect home simple, transparent, and reliable.'
    },
    {
      id: 2,
      category: 'general',
      question: 'How do I get started on DreamNest?',
      answer: 'Getting started is easy! Simply create an account by clicking the &quot;Register&quot; button, choose your user type (renter, property owner, or service provider), and complete your profile. Once registered, you can start browsing properties or services immediately.'
    },
    {
      id: 3,
      category: 'general',
      question: 'Is DreamNest free to use?',
      answer: 'Yes, creating an account and browsing properties and services is completely free. We only charge small service fees for successful bookings and transactions to maintain our platform and ensure quality service.'
    },
    {
      id: 4,
      category: 'general',
      question: 'Which cities does DreamNest serve?',
      answer: 'We currently operate in major cities across Bangladesh including Dhaka, Chittagong, Sylhet, Rajshahi, Khulna, and Barishal. We&apos;re continuously expanding to serve more areas.'
    },
    {
      id: 5,
      category: 'general',
      question: 'How do I contact customer support?',
      answer: 'You can reach our customer support team through multiple channels: email (support@dreamnest.com), phone (+88 01700-000000), WhatsApp, or through our contact form. We respond to all inquiries within 24 hours.'
    },
    {
      id: 6,
      category: 'general',
      question: 'Is my personal information safe on DreamNest?',
      answer: 'Yes, we take data privacy and security very seriously. We use industry-standard encryption and security measures to protect your personal information. Read our Privacy Policy for detailed information about how we handle your data.'
    },

    // Properties
    {
      id: 7,
      category: 'properties',
      question: 'How do I search for properties?',
      answer: 'You can search for properties using our search bar on the homepage or properties page. Filter by location, price range, property type, number of bedrooms, and other preferences to find properties that match your needs.'
    },
    {
      id: 8,
      category: 'properties',
      question: 'Are all properties on DreamNest verified?',
      answer: 'Yes, every property listed on our platform goes through a verification process. Our team checks property details, photos, and ownership documents to ensure authenticity and quality before properties are listed.'
    },
    {
      id: 9,
      category: 'properties',
      question: 'How do I contact a property owner?',
      answer: 'Once you find a property you&apos;re interested in, you can contact the owner through our built-in messaging system, phone, or WhatsApp. All contact information is provided on the property detail page.'
    },
    {
      id: 10,
      category: 'properties',
      question: 'Can I schedule property viewings?',
      answer: 'Absolutely! You can request property viewings directly through the property listing page or by contacting the property owner. Many owners offer flexible viewing schedules including evenings and weekends.'
    },
    {
      id: 11,
      category: 'properties',
      question: 'What information should I prepare before contacting owners?',
      answer: 'Prepare details about your move-in timeline, budget, family size, occupation, and any specific requirements. Having this information ready helps owners understand if you&apos;re a good fit for their property.'
    },
    {
      id: 12,
      category: 'properties',
      question: 'How do I report issues with a property listing?',
      answer: 'If you notice any issues with a property listing (incorrect information, fake photos, etc.), you can report it using the &quot;Report&quot; button on the property page or contact our support team directly.'
    },
    {
      id: 13,
      category: 'properties',
      question: 'Can I save properties to view later?',
      answer: 'Yes! You can save properties to your favorites by clicking the heart icon on property cards. Access your saved properties anytime through your dashboard.'
    },
    {
      id: 14,
      category: 'properties',
      question: 'Do you have furnished and unfurnished options?',
      answer: 'Yes, we have both furnished and unfurnished properties. You can filter your search by furnishing status to find properties that match your preferences.'
    },

    // Services
    {
      id: 15,
      category: 'services',
      question: 'What types of home services are available?',
      answer: 'We offer a wide range of home services including cleaning, plumbing, electrical work, painting, appliance repair, pest control, interior design, and more. All service providers are background-checked and verified.'
    },
    {
      id: 16,
      category: 'services',
      question: 'How do I book a home service?',
      answer: 'Browse our services section, select the service you need, choose a provider, and fill out the booking form with your requirements and preferred time. The service provider will confirm your booking and provide additional details.'
    },
    {
      id: 17,
      category: 'services',
      question: 'Are service providers insured and background-checked?',
      answer: 'Yes, all service providers on our platform undergo background verification and are required to have appropriate insurance. We prioritize your safety and satisfaction.'
    },
    {
      id: 18,
      category: 'services',
      question: 'What if I&apos;m not satisfied with a service?',
      answer: 'If you&apos;re not satisfied with a service, contact us within 48 hours. We&apos;ll work with you and the service provider to resolve the issue, which may include a refund or having the work redone at no extra cost.'
    },
    {
      id: 19,
      category: 'services',
      question: 'Can I get quotes from multiple service providers?',
      answer: 'Yes, you can contact multiple service providers to compare quotes and services. We encourage getting multiple quotes for larger projects to ensure you get the best value.'
    },
    {
      id: 20,
      category: 'services',
      question: 'How do I leave a review for a service provider?',
      answer: 'After your service is completed, you&apos;ll receive a notification to leave a review. You can also access the review form through your dashboard under &quot;Service History&quot; or visit the service provider&apos;s profile page.'
    },

    // Account
    {
      id: 21,
      category: 'account',
      question: 'How do I update my profile information?',
      answer: 'Log into your account and go to your profile settings. You can update your personal information, contact details, preferences, and profile photo. Changes are saved automatically.'
    },
    {
      id: 22,
      category: 'account',
      question: 'How do I change my password?',
      answer: 'Go to your account settings and select &quot;Security&quot;. You can change your password by entering your current password and a new password. We recommend using a strong, unique password.'
    },
    {
      id: 23,
      category: 'account',
      question: 'Can I have multiple user accounts?',
      answer: 'Each person should have only one account, but you can have multiple user roles (for example, be both a renter and property owner) under the same account. Contact support if you need to merge existing accounts.'
    },
    {
      id: 24,
      category: 'account',
      question: 'How do I delete my account?',
      answer: 'If you wish to delete your account, contact our support team. Please note that deleting your account will permanently remove all your data, saved properties, booking history, and reviews.'
    },

    // Payments
    {
      id: 25,
      category: 'payments',
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including mobile banking (bKash, Nagad, Rocket), bank transfers, and cash payments. Specific payment options may vary by service provider.'
    },
    {
      id: 26,
      category: 'payments',
      question: 'Are there any hidden fees?',
      answer: 'No, we believe in transparent pricing. All fees are clearly displayed before you complete any booking or transaction. Our service fees are typically a small percentage of the transaction amount.'
    },
    {
      id: 27,
      category: 'payments',
      question: 'How do refunds work?',
      answer: 'Refund policies vary by service type and provider. Generally, cancellations made 24 hours before service appointments are eligible for full refunds. Check the specific cancellation policy for each booking.'
    },
    {
      id: 28,
      category: 'payments',
      question: 'Is it safe to make payments through DreamNest?',
      answer: 'Yes, all payments made through our platform use secure, encrypted payment processing. We don&apos;t store your payment information, and all transactions are protected by industry-standard security measures.'
    }
  ];

  const filteredFAQs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
      const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const expandAll = () => {
    setOpenItems(new Set(filteredFAQs.map(faq => faq.id)));
  };

  const collapseAll = () => {
    setOpenItems(new Set());
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find answers to common questions about using DreamNest
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search FAQs..."
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
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg sticky top-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Categories
                </h3>
                
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{category.name}</span>
                        <span className="text-sm bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded-full">
                          {category.id === 'all' ? faqs.length : category.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Expand/Collapse Controls */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex gap-2">
                    <button
                      onClick={expandAll}
                      className="flex-1 px-3 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                    >
                      Expand All
                    </button>
                    <button
                      onClick={collapseAll}
                      className="flex-1 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      Collapse All
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:w-3/4">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedCategory === 'all' ? 'All Questions' : categories.find(c => c.id === selectedCategory)?.name}
                  </h2>
                  <span className="text-gray-500 dark:text-gray-400">
                    {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''}
                  </span>
                </div>

                {searchTerm && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <div>
                        <p className="text-blue-800 dark:text-blue-200 font-medium">
                          Search results for &quot;{searchTerm}&quot;
                        </p>
                        <p className="text-blue-700 dark:text-blue-300 text-sm">
                          {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''} found
                        </p>
                      </div>
                      {searchTerm && (
                        <button
                          onClick={() => setSearchTerm('')}
                          className="ml-auto text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {filteredFAQs.length > 0 ? (
                <div className="space-y-4">
                  {filteredFAQs.map((faq) => (
                    <div key={faq.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                      <button
                        onClick={() => toggleItem(faq.id)}
                        className="w-full px-6 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                            {faq.question}
                          </h3>
                          <svg
                            className={`w-5 h-5 text-gray-500 transform transition-transform ${
                              openItems.has(faq.id) ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      
                      {openItems.has(faq.id) && (
                        <div className="px-6 pb-4 border-t border-gray-200 dark:border-gray-700">
                          <div className="pt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                            {faq.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    No results found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We couldn&apos;t find any FAQs matching your search criteria.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                  >
                    Clear filters and show all FAQs
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>

      {/* Still Need Help Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Can&apos;t find the answer you&apos;re looking for? Our support team is here to help.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="/contact"
                className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-30 transition-colors"
              >
                <div className="text-3xl mb-3">📧</div>
                <h3 className="font-semibold mb-2">Contact Form</h3>
                <p className="text-blue-100 text-sm">Send us a detailed message</p>
              </a>
              
              <a
                href="mailto:support@dreamnest.com"
                className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-30 transition-colors"
              >
                <div className="text-3xl mb-3">✉️</div>
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-blue-100 text-sm">support@dreamnest.com</p>
              </a>
              
              <a
                href="https://wa.me/8801700000000"
                className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-30 transition-colors"
              >
                <div className="text-3xl mb-3">💬</div>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-blue-100 text-sm">Quick chat support</p>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default FAQPage;