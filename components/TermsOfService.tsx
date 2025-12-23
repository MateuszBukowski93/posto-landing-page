import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const TermsOfService: React.FC = () => {
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
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By using the IF App Mobile application, the user accepts these Terms of Service. If you do not agree to these terms, please do not use the application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Service Description</h2>
            <p>
              IF App Mobile is a mobile application for tracking intermittent fasting. The application offers tools for monitoring fasting sessions, tracking weight, and managing fasting plans.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Use of the Application</h2>
            <p>The user agrees to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the application in accordance with its intended purpose</li>
              <li>Not take actions that may disrupt the application's operation</li>
              <li>Not attempt to gain unauthorized access to the application</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Liability</h2>
            <p>
              The application is provided "as is" without any warranties. The user uses the application at their own risk. We are not liable for any damages resulting from the use of the application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. User Data</h2>
            <p>
              All user data is stored locally on the device. The user is responsible for backing up their data. We are not responsible for data loss.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Intellectual Property</h2>
            <p>
              All intellectual property rights to the application belong to us. The user may not copy, modify, or distribute the application without our consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Changes to Terms</h2>
            <p>
              We reserve the right to make changes to these Terms of Service. Users will be informed of any changes through application updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Termination</h2>
            <p>
              We may suspend or terminate the user's access to the application at any time if the user violates these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Contact</h2>
            <p>
              For questions regarding the Terms of Service, please contact us through the form in the application or on the Contact Support page.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

