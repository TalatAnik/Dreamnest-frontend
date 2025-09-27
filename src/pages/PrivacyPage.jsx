import React from 'react';
import Container from '../components/Container.jsx';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Last updated: September 27, 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Introduction
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                At DreamNest, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                By using DreamNest, you consent to the data practices described in this policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Information We Collect
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Personal Information
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    <li>Name, email address, and phone number</li>
                    <li>Profile information and preferences</li>
                    <li>Payment information and billing details</li>
                    <li>Government-issued identification for verification</li>
                    <li>Property ownership documents and certifications</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Usage Information
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    <li>Search queries and property preferences</li>
                    <li>Booking history and service interactions</li>
                    <li>Reviews and ratings you provide</li>
                    <li>Communication records with other users</li>
                    <li>Platform usage patterns and analytics</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Technical Information
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Operating system and screen resolution</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Location data (with your permission)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                How We Use Your Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                    Service Operations
                  </h3>
                  <ul className="text-blue-800 dark:text-blue-200 space-y-1 text-sm">
                    <li>• Process bookings and payments</li>
                    <li>• Verify user identities</li>
                    <li>• Facilitate communication</li>
                    <li>• Provide customer support</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">
                    Platform Improvement
                  </h3>
                  <ul className="text-green-800 dark:text-green-200 space-y-1 text-sm">
                    <li>• Personalize recommendations</li>
                    <li>• Analyze usage patterns</li>
                    <li>• Develop new features</li>
                    <li>• Ensure platform security</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">
                    Communication
                  </h3>
                  <ul className="text-purple-800 dark:text-purple-200 space-y-1 text-sm">
                    <li>• Send booking confirmations</li>
                    <li>• Notify about account activity</li>
                    <li>• Share platform updates</li>
                    <li>• Marketing communications</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-3">
                    Legal Compliance
                  </h3>
                  <ul className="text-orange-800 dark:text-orange-200 space-y-1 text-sm">
                    <li>• Meet regulatory requirements</li>
                    <li>• Prevent fraud and abuse</li>
                    <li>• Resolve disputes</li>
                    <li>• Enforce terms of service</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Information Sharing and Disclosure
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4 bg-red-50 dark:bg-red-900/20 p-4 rounded">
                  <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                    We DO NOT sell your personal information to third parties.
                  </h3>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We may share your information only in the following circumstances:
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <div>
                      <strong className="text-gray-900 dark:text-white">With your consent:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> When you explicitly agree to share information with specific parties.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Service providers:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> Trusted partners who help us operate our platform (payment processors, cloud hosting, analytics).</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Legal requirements:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> When required by law, court order, or government request.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Business transfers:</strong>
                      <span className="text-gray-700 dark:text-gray-300"> In connection with mergers, acquisitions, or asset sales.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Data Security
              </h2>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We implement industry-standard security measures to protect your information:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technical Safeguards</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• SSL/TLS encryption</li>
                      <li>• Secure data storage</li>
                      <li>• Regular security audits</li>
                      <li>• Multi-factor authentication</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Administrative Safeguards</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Access controls</li>
                      <li>• Employee training</li>
                      <li>• Privacy policies</li>
                      <li>• Incident response procedures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Your Privacy Rights
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Access & Portability</h3>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Request a copy of your personal data in a machine-readable format.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Correction</h3>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Update or correct inaccurate personal information we have about you.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Deletion</h3>
                  <p className="text-sm text-purple-800 dark:text-purple-200">
                    Request deletion of your personal data, subject to legal obligations.
                  </p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Opt-Out</h3>
                  <p className="text-sm text-orange-800 dark:text-orange-200">
                    Unsubscribe from marketing communications at any time.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We use cookies and similar technologies to enhance your experience. You can manage your cookie preferences through your browser settings or our 
                <a href="/cookies" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                  Cookie Policy
                </a>.
              </p>
            </section>

            {/* Updates */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Policy Updates
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We may update this Privacy Policy periodically. We will notify you of significant changes by:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                <li>Email notification to your registered email address</li>
                <li>Prominent notice on our platform</li>
                <li>In-app notifications</li>
              </ul>
            </section>

            {/* Contact */}
            <section className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Us About Privacy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have questions about this Privacy Policy or how we handle your personal information, please contact us:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong className="text-gray-900 dark:text-white">Email:</strong>
                  <p className="text-blue-600 dark:text-blue-400">privacy@dreamnest.com</p>
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Phone:</strong>
                  <p className="text-gray-700 dark:text-gray-300">+1 (555) 123-4567</p>
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Mail:</strong>
                  <p className="text-gray-700 dark:text-gray-300">
                    Privacy Officer<br />
                    DreamNest Inc.<br />
                    123 Privacy Lane<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Response Time:</strong> We will respond to your privacy-related inquiries within 30 days of receipt.
                </p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPage;