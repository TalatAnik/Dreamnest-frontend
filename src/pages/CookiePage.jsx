import React, { useState, useEffect } from 'react';
import Container from '../components/Container.jsx';
import Button from '../components/Button.jsx';

const CookiePage = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always true, cannot be disabled
    analytics: true,
    marketing: false,
    personalization: true
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Load saved preferences on component mount
  useEffect(() => {
    const savedPreferences = localStorage.getItem('cookiePreferences');
    if (savedPreferences) {
      setCookiePreferences({
        ...JSON.parse(savedPreferences),
        essential: true // Always ensure essential cookies are enabled
      });
    }
  }, []);

  const handlePreferenceChange = (category) => {
    if (category === 'essential') return; // Essential cookies cannot be disabled
    
    setCookiePreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      personalization: true
    };
    setCookiePreferences(allAccepted);
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleRejectAll = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      marketing: false,
      personalization: false
    };
    setCookiePreferences(onlyEssential);
    localStorage.setItem('cookiePreferences', JSON.stringify(onlyEssential));
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Cookie Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Last updated: September 27, 2025
            </p>
          </div>

          {/* Success Message */}
          {showSuccessMessage && (
            <div className="bg-green-100 dark:bg-green-900/30 border border-green-400 text-green-700 dark:text-green-300 px-4 py-3 rounded-lg mb-6">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Your cookie preferences have been saved successfully.
              </div>
            </div>
          )}

          {/* Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                What are Cookies?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, keeping you logged in, and analyzing how you use our platform.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <strong>Good to know:</strong> Cookies cannot harm your computer or access your personal files. They are simply small pieces of data that help websites function properly.
                </p>
              </div>
            </section>

            {/* Cookie Categories */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Types of Cookies We Use
              </h2>
              
              <div className="space-y-6">
                {/* Essential Cookies */}
                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-2">
                        🛡️ Essential Cookies
                      </h3>
                      <p className="text-red-800 dark:text-red-200 mb-3">
                        These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-red-900 dark:text-red-100 mb-1">What they do:</h4>
                          <ul className="text-sm text-red-800 dark:text-red-200 space-y-1">
                            <li>• Keep you logged in</li>
                            <li>• Remember your security settings</li>
                            <li>• Enable shopping cart functionality</li>
                            <li>• Provide secure access to your account</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-900 dark:text-red-100 mb-1">Examples:</h4>
                          <ul className="text-sm text-red-800 dark:text-red-200 space-y-1">
                            <li>• Authentication tokens</li>
                            <li>• Session management</li>
                            <li>• CSRF protection</li>
                            <li>• Load balancing</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center">
                        <span className="text-sm text-red-700 dark:text-red-300 mr-2">Always Active</span>
                        <div className="w-12 h-6 bg-red-200 dark:bg-red-800 rounded-full p-1">
                          <div className="w-4 h-4 bg-red-600 dark:bg-red-400 rounded-full ml-auto"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
                        📊 Analytics Cookies
                      </h3>
                      <p className="text-blue-800 dark:text-blue-200 mb-3">
                        These cookies help us understand how visitors interact with our website by collecting anonymous information about usage patterns.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">What they do:</h4>
                          <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                            <li>• Track page visits and user behavior</li>
                            <li>• Measure website performance</li>
                            <li>• Identify popular content</li>
                            <li>• Help us improve our services</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Providers:</h4>
                          <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                            <li>• Google Analytics</li>
                            <li>• Internal analytics</li>
                            <li>• Performance monitoring</li>
                            <li>• Error tracking</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => handlePreferenceChange('analytics')}
                        className="flex items-center"
                      >
                        <span className="text-sm text-blue-700 dark:text-blue-300 mr-2">
                          {cookiePreferences.analytics ? 'Enabled' : 'Disabled'}
                        </span>
                        <div className={`w-12 h-6 ${cookiePreferences.analytics ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'} rounded-full p-1 transition-colors`}>
                          <div className={`w-4 h-4 bg-white rounded-full transition-transform ${cookiePreferences.analytics ? 'translate-x-6' : ''}`}></div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-2">
                        📢 Marketing Cookies
                      </h3>
                      <p className="text-purple-800 dark:text-purple-200 mb-3">
                        These cookies are used to deliver advertisements more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">What they do:</h4>
                          <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                            <li>• Show relevant advertisements</li>
                            <li>• Prevent ad repetition</li>
                            <li>• Track ad performance</li>
                            <li>• Enable social media sharing</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">Partners:</h4>
                          <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                            <li>• Google Ads</li>
                            <li>• Facebook Pixel</li>
                            <li>• LinkedIn Ads</li>
                            <li>• Retargeting networks</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => handlePreferenceChange('marketing')}
                        className="flex items-center"
                      >
                        <span className="text-sm text-purple-700 dark:text-purple-300 mr-2">
                          {cookiePreferences.marketing ? 'Enabled' : 'Disabled'}
                        </span>
                        <div className={`w-12 h-6 ${cookiePreferences.marketing ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'} rounded-full p-1 transition-colors`}>
                          <div className={`w-4 h-4 bg-white rounded-full transition-transform ${cookiePreferences.marketing ? 'translate-x-6' : ''}`}></div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Personalization Cookies */}
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-2">
                        ⚙️ Personalization Cookies
                      </h3>
                      <p className="text-green-800 dark:text-green-200 mb-3">
                        These cookies allow us to remember choices you make and provide enhanced, more personalized features and content.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">What they do:</h4>
                          <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                            <li>• Remember your preferences</li>
                            <li>• Store language settings</li>
                            <li>• Personalize content recommendations</li>
                            <li>• Save search filters</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Examples:</h4>
                          <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                            <li>• Theme preference (dark/light)</li>
                            <li>• Property search preferences</li>
                            <li>• Notification settings</li>
                            <li>• Dashboard customization</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => handlePreferenceChange('personalization')}
                        className="flex items-center"
                      >
                        <span className="text-sm text-green-700 dark:text-green-300 mr-2">
                          {cookiePreferences.personalization ? 'Enabled' : 'Disabled'}
                        </span>
                        <div className={`w-12 h-6 ${cookiePreferences.personalization ? 'bg-green-600' : 'bg-gray-300 dark:bg-gray-600'} rounded-full p-1 transition-colors`}>
                          <div className={`w-4 h-4 bg-white rounded-full transition-transform ${cookiePreferences.personalization ? 'translate-x-6' : ''}`}></div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookie Management */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Manage Your Cookie Preferences
              </h2>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Cookie Preference Controls
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={handleAcceptAll}
                    variant="primary"
                    className="flex-1 min-w-[150px]"
                  >
                    Accept All Cookies
                  </Button>
                  <Button
                    onClick={handleRejectAll}
                    variant="secondary"
                    className="flex-1 min-w-[150px]"
                  >
                    Reject All (Essential Only)
                  </Button>
                  <Button
                    onClick={handleSavePreferences}
                    variant="outline"
                    className="flex-1 min-w-[150px]"
                  >
                    Save Custom Preferences
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Browser Cookie Controls
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  You can also control cookies through your browser settings. Here&apos;s how to manage cookies in popular browsers:
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Google Chrome</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Settings → Privacy and security → Cookies and other site data
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Firefox</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Options → Privacy & Security → Cookies and Site Data
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Safari</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Preferences → Privacy → Manage Website Data
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Microsoft Edge</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Settings → Cookies and site permissions → Cookies and site data
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Third Party Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Third-Party Cookies and Services
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We work with trusted partners who may also set cookies on your device. Here are the main third-party services we use:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Google Analytics</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Website analytics and performance tracking</p>
                    </div>
                    <div className="text-right">
                      <a 
                        href="https://policies.google.com/privacy" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                      >
                        Privacy Policy ↗
                      </a>
                      <p className="text-xs text-gray-500 dark:text-gray-500">Controlled by Analytics setting</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Stripe</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Secure payment processing</p>
                    </div>
                    <div className="text-right">
                      <a 
                        href="https://stripe.com/privacy" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                      >
                        Privacy Policy ↗
                      </a>
                      <p className="text-xs text-gray-500 dark:text-gray-500">Essential for payments</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Intercom</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Customer support and messaging</p>
                    </div>
                    <div className="text-right">
                      <a 
                        href="https://www.intercom.com/terms-and-policies#privacy" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                      >
                        Privacy Policy ↗
                      </a>
                      <p className="text-xs text-gray-500 dark:text-gray-500">Controlled by Personalization setting</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Updates and Contact */}
            <section className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Policy Updates and Contact
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Changes to This Policy
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    We may update this Cookie Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Questions or Concerns?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    If you have questions about our use of cookies or this policy, please contact us:
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div>
                      <strong className="text-gray-900 dark:text-white">Email:</strong>
                      <span className="text-blue-600 dark:text-blue-400 ml-1">privacy@dreamnest.com</span>
                    </div>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Phone:</strong>
                      <span className="text-gray-700 dark:text-gray-300 ml-1">+1 (555) 123-4567</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CookiePage;