import React from 'react';
import Container from '../components/Container.jsx';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Terms of Service
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
                Agreement to Terms
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Welcome to DreamNest. These Terms of Service (&quot;Terms&quot;) govern your use of our platform and services. By accessing or using DreamNest, you agree to be bound by these Terms.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <strong>Important:</strong> If you do not agree to these Terms, you may not access or use our services.
                </p>
              </div>
            </section>

            {/* Description of Service */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Description of Service
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                DreamNest is an online platform that connects property owners, renters, and service providers in the real estate ecosystem. Our services include:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">For Renters</h3>
                  <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
                    <li>• Property search and discovery</li>
                    <li>• Rental application submission</li>
                    <li>• Service provider booking</li>
                    <li>• Review and rating system</li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">For Property Owners</h3>
                  <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                    <li>• Property listing management</li>
                    <li>• Tenant application processing</li>
                    <li>• Property maintenance coordination</li>
                    <li>• Revenue tracking and analytics</li>
                  </ul>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">For Service Providers</h3>
                  <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
                    <li>• Business profile management</li>
                    <li>• Service booking management</li>
                    <li>• Client communication tools</li>
                    <li>• Earnings and performance tracking</li>
                  </ul>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Platform Features</h3>
                  <ul className="text-orange-800 dark:text-orange-200 text-sm space-y-1">
                    <li>• Secure payment processing</li>
                    <li>• Identity verification system</li>
                    <li>• 24/7 customer support</li>
                    <li>• Dispute resolution services</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* User Accounts */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                User Accounts and Registration
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Account Requirements
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                    <li>You must be at least 18 years old to create an account</li>
                    <li>You must provide accurate and complete information</li>
                    <li>You are responsible for maintaining account security</li>
                    <li>You may not create multiple accounts to circumvent restrictions</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Verification Process
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Certain account types require identity verification:
                  </p>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                    <ul className="text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
                      <li>• Property owners must verify property ownership</li>
                      <li>• Service providers must verify business credentials</li>
                      <li>• High-value transactions may require additional verification</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* User Conduct */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                User Conduct and Prohibited Activities
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Acceptable Use
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    You agree to use DreamNest only for lawful purposes and in accordance with these Terms. You agree not to:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                      🚫 Content Violations
                    </h4>
                    <ul className="text-red-800 dark:text-red-200 text-sm space-y-1">
                      <li>• Post false or misleading information</li>
                      <li>• Upload inappropriate or offensive content</li>
                      <li>• Violate intellectual property rights</li>
                      <li>• Share personal information of others</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                      🚫 Platform Abuse
                    </h4>
                    <ul className="text-red-800 dark:text-red-200 text-sm space-y-1">
                      <li>• Create fake accounts or impersonate others</li>
                      <li>• Manipulate reviews or ratings</li>
                      <li>• Spam or harass other users</li>
                      <li>• Attempt to circumvent platform fees</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                      🚫 Technical Violations
                    </h4>
                    <ul className="text-red-800 dark:text-red-200 text-sm space-y-1">
                      <li>• Use automated systems or bots</li>
                      <li>• Interfere with platform functionality</li>
                      <li>• Access unauthorized areas</li>
                      <li>• Reverse engineer our software</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                      🚫 Legal Violations
                    </h4>
                    <ul className="text-red-800 dark:text-red-200 text-sm space-y-1">
                      <li>• Discriminate based on protected characteristics</li>
                      <li>• Engage in fraudulent activities</li>
                      <li>• Violate local housing laws</li>
                      <li>• Money laundering or tax evasion</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Payment Terms and Fees
              </h2>
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                    Platform Fees
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong className="text-green-900 dark:text-green-100">Property Owners:</strong>
                      <p className="text-green-800 dark:text-green-200">3% service fee on rental transactions</p>
                    </div>
                    <div>
                      <strong className="text-green-900 dark:text-green-100">Service Providers:</strong>
                      <p className="text-green-800 dark:text-green-200">5% service fee on booking transactions</p>
                    </div>
                    <div>
                      <strong className="text-green-900 dark:text-green-100">Renters:</strong>
                      <p className="text-green-800 dark:text-green-200">No fees for browsing and basic services</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Payment Processing
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                    <li>All payments are processed through secure third-party processors</li>
                    <li>Platform fees are automatically deducted from transactions</li>
                    <li>Refunds are subject to our refund policy and applicable laws</li>
                    <li>You are responsible for any taxes on your transactions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Property Listings */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Property Listings and Services
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Listing Requirements
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                    <li>All information must be accurate and up-to-date</li>
                    <li>Photos must genuinely represent the property</li>
                    <li>Pricing must comply with local fair housing laws</li>
                    <li>Properties must meet local safety and habitability standards</li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    Service Provider Standards
                  </h3>
                  <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                    <li>• Maintain valid licenses and insurance</li>
                    <li>• Provide services as described in listings</li>
                    <li>• Respond to inquiries in a timely manner</li>
                    <li>• Comply with professional standards and regulations</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Liability and Disclaimers */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Liability and Disclaimers
              </h2>
              <div className="space-y-4">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                    ⚠️ Platform Disclaimer
                  </h3>
                  <p className="text-yellow-800 dark:text-yellow-200 text-sm mb-2">
                    DreamNest is a platform that facilitates connections between users. We are not a party to the actual rental agreements or service contracts between users.
                  </p>
                  <ul className="text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
                    <li>• We do not guarantee the quality or safety of properties or services</li>
                    <li>• We are not responsible for the actions of platform users</li>
                    <li>• Users are responsible for verifying information independently</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Limitation of Liability
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    To the maximum extent permitted by law, DreamNest&apos;s liability for any claims arising from your use of the platform is limited to the fees you have paid to us in the 12 months preceding the claim.
                  </p>
                </div>
              </div>
            </section>

            {/* Dispute Resolution */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Dispute Resolution
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Internal Resolution Process
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Contact Support</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Report the issue through our support system</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">2</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Investigation</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">We review evidence and communicate with all parties</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">3</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Resolution</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">We provide a decision and implement any necessary actions</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Arbitration Agreement
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Any disputes not resolved through our internal process will be settled through binding arbitration in accordance with the rules of the American Arbitration Association.
                  </p>
                </div>
              </div>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Account Termination
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Voluntary Termination
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    You may terminate your account at any time by:
                  </p>
                  <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                    <li>• Contacting customer support</li>
                    <li>• Using the account deletion feature</li>
                    <li>• Completing all pending transactions first</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Platform Termination
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                    We may terminate accounts for:
                  </p>
                  <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                    <li>• Violation of these Terms</li>
                    <li>• Fraudulent or illegal activity</li>
                    <li>• Repeated policy violations</li>
                    <li>• Extended account inactivity</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We reserve the right to modify these Terms at any time. We will notify you of significant changes through:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                <li>Email notification 30 days before changes take effect</li>
                <li>Prominent notice on the platform</li>
                <li>In-app notifications for mobile users</li>
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  <strong>Continued use of the platform after changes constitute acceptance of the new Terms.</strong>
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong className="text-gray-900 dark:text-white">Legal Team:</strong>
                  <p className="text-blue-600 dark:text-blue-400">legal@dreamnest.com</p>
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Phone:</strong>
                  <p className="text-gray-700 dark:text-gray-300">+1 (555) 123-4567</p>
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Address:</strong>
                  <p className="text-gray-700 dark:text-gray-300">
                    Legal Department<br />
                    DreamNest Inc.<br />
                    123 Legal Plaza<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TermsPage;