import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, AlertTriangle, Heart, User, CreditCard, Smartphone } from 'lucide-react';

export const TermsAndConditions = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections = [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>By creating an account, accessing, or using any part of the Fitxi app, you acknowledge that you have read, understood, and agree to comply with and be bound by these Terms. These Terms constitute a legally binding agreement between you and PulseInnovas.</p>
          <p>If you do not agree with any part of these Terms, you must not use the App.</p>
        </div>
      )
    },
    {
      id: 'services',
      title: '2. Services Provided',
      icon: <Smartphone className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>The Fitxi App offers a comprehensive range of features designed to support your fitness and well-being journey:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Nutrition & Diet</h4>
              <ul className="text-sm space-y-1 text-blue-700">
                <li>• Personalized diet plans based on calorie burn</li>
                <li>• AI-powered food photo calorie estimation</li>
                <li>• Nutrition tracking and progress logs</li>
                <li>• Grocery lists and meal planning</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Fitness & Wellness</h4>
              <ul className="text-sm space-y-1 text-green-700">
                <li>• Exercise recommendations for gym & home</li>
                <li>• AI-powered yoga trainer & tai chi</li>
                <li>• Guided meditation & breathing exercises</li>
                <li>• Water & sleep guidance</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'eligibility',
      title: '3. Eligibility and User Accounts',
      icon: <User className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="font-semibold text-amber-800">Age Requirement</p>
            <p className="text-amber-700">You must be at least 18 years old to use the App.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Account Responsibilities:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Provide accurate, current, and complete information during registration</li>
              <li>• Keep your account information updated and accurate</li>
              <li>• Maintain the confidentiality of your account password</li>
              <li>• Notify us immediately of any unauthorized account use</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'subscription',
      title: '4. Subscription Plans',
      icon: <CreditCard className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border-2 border-blue-200 rounded-lg p-4 text-center">
              <h4 className="font-bold text-blue-600 text-lg">Monthly Plan</h4>
              <p className="text-3xl font-bold text-gray-800 my-2">₹149<span className="text-sm font-normal">/month</span></p>
              <p className="text-sm text-gray-600">Full access to ALL features</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-4 text-center relative">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                POPULAR
              </div>
              <h4 className="font-bold text-lg">6-Month Plan</h4>
              <p className="text-3xl font-bold my-2">₹799<span className="text-sm font-normal"> total</span></p>
              <p className="text-sm opacity-90">Saves ₹95 + 1 month free</p>
            </div>
            <div className="bg-white border-2 border-green-200 rounded-lg p-4 text-center">
              <h4 className="font-bold text-green-600 text-lg">12-Month Plan</h4>
              <p className="text-3xl font-bold text-gray-800 my-2">₹1599<span className="text-sm font-normal"> total</span></p>
              <p className="text-sm text-gray-600">Saves ₹289 + 2 months free</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">Payment & Billing Information:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Payments charged at purchase confirmation and each renewal</li>
              <li>• Automatic renewal unless cancelled by you</li>
              <li>• Prices subject to change with prior notice</li>
              <li>• Cancel anytime through app settings</li>
              <li>• Refunds generally not provided for partial periods (except where required by law)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'free-version',
      title: '5. Free Ad-Supported Version',
      icon: <Smartphone className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">Free Version Features:</h4>
            <ul className="text-green-700 space-y-1">
              <li>• Diet-Only Mode: Basic diet recommendations</li>
              <li>• Meal logging functionality</li>
              <li>• Ad-supported to keep it free</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600">By using the free version, you agree to the display of in-app advertisements.</p>
        </div>
      )
    },
    {
      id: 'conduct',
      title: '6. User Conduct and Prohibited Activities',
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-800 mb-2">Prohibited Activities Include:</h4>
            <ul className="text-red-700 space-y-1 text-sm">
              <li>• Damaging, disabling, or impairing the App</li>
              <li>• Gaining unauthorized access to accounts or systems</li>
              <li>• Uploading unlawful, harmful, or objectionable content</li>
              <li>• Using automated systems (bots, spiders, etc.)</li>
              <li>• Misrepresenting identity or providing false information</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'health-disclaimer',
      title: '7. Health Disclaimers & Important Information',
      icon: <Heart className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-bold text-red-800 text-lg mb-2">⚠️ IMPORTANT MEDICAL DISCLAIMER</h4>
            <p className="text-red-700 font-semibold">Fitxi App is NOT a Medical Device and Does NOT Provide Medical Advice.</p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h5 className="font-semibold text-yellow-800 mb-2">General Health Information:</h5>
              <ul className="text-yellow-700 space-y-1 text-sm">
                <li>• All content is for informational and educational purposes only</li>
                <li>• Not a substitute for professional medical advice, diagnosis, or treatment</li>
                <li>• Always consult your physician for medical questions</li>
                <li>• Never ignore professional medical advice based on app content</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-800 mb-2">AI Features Disclaimer:</h5>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• AI calorie estimation is approximate and may not be entirely accurate</li>
                <li>• AI yoga/tai chi guidance is not a substitute for certified instruction</li>
                <li>• Always exercise in a safe environment</li>
                <li>• Consult healthcare professionals before starting new fitness programs</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Terms and Conditions</h1>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">Fitxi App</span>
              <span>•</span>
              <span>Last Updated: September 04, 2025</span>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
            <p className="text-gray-700 leading-relaxed">
              Welcome to Fitxi! These Terms and Conditions govern your access to and use of our fitness and wellness application. 
              By downloading, installing, or using the App, you agree to be bound by these Terms and our Privacy Policy.
            </p>
          </div>
        </div>

        {/* Expandable Sections */}
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-blue-600">{section.icon}</div>
                  <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
                </div>
                {expandedSections[section.id] ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {expandedSections[section.id] && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-4 text-gray-700">
                    {section.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Sections */}
        <div className="mt-8 space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Shield className="w-5 h-5 text-blue-600 mr-3" />
              Additional Terms
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">8. Intellectual Property</h3>
                <p className="text-sm text-gray-600">All content and functionality are exclusive property of PulseInnovas, protected by copyright and intellectual property laws.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">9. Limitation of Liability</h3>
                <p className="text-sm text-gray-600">PulseInnovas shall not be liable for indirect, incidental, or consequential damages arising from app use.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">10. Privacy Policy</h3>
                <p className="text-sm text-gray-600">Your use is governed by our Privacy Policy regarding collection and use of personal information.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">11. Changes to Terms</h3>
                <p className="text-sm text-gray-600">We reserve the right to modify these Terms with 30 days' notice for material changes.</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <div className="space-y-2">
              <p><strong>Email:</strong> info@pulseinnovas.com</p>
              <p><strong>Address:</strong> First Floor D-45, Site 4, Kasna Industrial Area, Alpha Greater Noida, Gautam Buddha Nagar, Uttar Pradesh - 201310</p>
              <p><strong>Governing Law:</strong> These Terms are governed by the laws of India</p>
            </div>
          </div>
        </div>

        {/* Footer Notice */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© 2025 PulseInnovas. All rights reserved.</p>
          <p className="mt-2">By using the Fitxi App, you acknowledge that you have read and understood these Terms and Conditions.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
