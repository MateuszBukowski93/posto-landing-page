import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const ContactSupport: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`${formData.subject}: ${formData.name}`);
    const body = encodeURIComponent(
      `Full Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:support@ifapp.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    
    alert('Thank you for contacting us! We have opened your email application. Send the message to contact us.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Contact Support</h1>
        <p className="text-gray-600 text-lg mb-12">
          Have questions or need help? Contact us through the form below.
        </p>
        
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 shadow-lg w-full">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                placeholder="john.doe@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              >
                <option value="">Select a subject</option>
                <option value="technical">Technical issue</option>
                <option value="feature">Feature suggestion</option>
                <option value="privacy">Privacy question</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent resize-none"
                placeholder="Describe your problem or question..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-400 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-green-200 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-12 p-8 bg-green-50 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Alternative Contact Methods</h2>
          <div className="space-y-3 text-gray-700">
            <p><strong>Email:</strong> support@ifapp.com</p>
            <p><strong>Response Time:</strong> 24-48 hours</p>
            <p className="text-sm text-gray-600">
              For urgent technical issues, please provide a detailed description of the problem in the form above.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

