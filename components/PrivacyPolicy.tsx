import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackToHome = () => {
    navigate('/', { state: { scrollFromBottom: true } });
  };

  return (
    <div className="w-full min-h-screen bg-white font-display antialiased text-gray-900">
      <Header />
      <div className="max-w-4xl mx-auto px-6 pt-4 pb-16 lg:pt-6 lg:pb-24">
        <Link 
          to="/" 
          onClick={(e) => {
            e.preventDefault();
            handleBackToHome();
          }}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors mb-12 text-base"
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p>
              This Privacy Policy sets out the rules for collecting, processing, and using personal data in the IF App Mobile application. The application has been designed with user privacy protection in mind.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Data Collected</h2>
            <p>The application collects the following data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fasting session data (start time, end time, plan)</li>
              <li>User weight data</li>
              <li>User preferences (notification settings, selected fasting plan)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Data Storage</h2>
            <p>
              All data is stored locally on the user's device. It is not transmitted to any external servers or shared with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Notifications</h2>
            <p>
              The application uses local notifications to remind users about the start and end of fasting periods. Notifications are sent only to the user's device and do not require internet access.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. User Rights</h2>
            <p>The user has the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access their data</li>
              <li>Delete all their data</li>
              <li>Disable notifications</li>
              <li>Change the fasting plan</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Security</h2>
            <p>
              The application uses secure methods to store data locally on the user's device. All data is encrypted and accessible only to the user.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Changes to Privacy Policy</h2>
            <p>
              We reserve the right to make changes to this Privacy Policy. Users will be informed of any changes through application updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Contact</h2>
            <p>
              For questions regarding the Privacy Policy, please contact us through the form in the application.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

