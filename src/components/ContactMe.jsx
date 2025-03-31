import React, { useState } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const ContactMe = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({ email: false, message: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({ email: false, message: false });
    
    // Simple validation
    let hasErrors = false;
    if (!email) {
      setErrors(prev => ({ ...prev, email: true }));
      hasErrors = true;
    }
    if (!message) {
      setErrors(prev => ({ ...prev, message: true }));
      hasErrors = true;
    }
    
    if (hasErrors) return;
    
    // Form submission logic would go here
    // For now, just show success message
    setShowSuccess(true);
    setEmail('');
    setMessage('');
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center py-12 px-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-6">
          <h3 className="text-white uppercase tracking-wide text-lg font-medium">Get in touch</h3>
        </div>

        <div className="bg-black border border-gray-800 rounded-2xl p-8 md:p-10">
          {/* Contact Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <a 
              href="mailto:jatanmathasoliya@gmail.com"
              className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-4 px-6 rounded-xl flex justify-center items-center transition duration-300"
            >
              <EnvelopeIcon className="w-5 h-5 mr-2" />
              <span>jatanmathasoliya@gmail.com</span>
            </a>
            
            <a 
              href="https://wa.me/+7567582534" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-4 px-6 rounded-xl flex justify-center items-center transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="text-gray-500 text-center mb-6">Or send a message</div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className={`w-full bg-gray-900 border ${errors.email ? 'border-red-500' : 'border-transparent'} rounded-xl p-4 text-white focus:outline-none focus:border-red-500`}
              />
            </div>
            <div className="mb-5">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                rows="5"
                className={`w-full bg-gray-900 border ${errors.message ? 'border-red-500' : 'border-transparent'} rounded-xl p-4 text-white focus:outline-none focus:border-red-500 resize-y`}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-xl transition duration-300"
            >
              Send Message
            </button>
            
            {showSuccess && (
              <div className="text-green-500 text-center mt-4">
                Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;