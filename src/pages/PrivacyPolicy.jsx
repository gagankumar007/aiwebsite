import React, { useState } from 'react';
import { Shield, Eye, Lock, Users, Globe, Phone, ChevronDown, ChevronUp, Database, AlertCircle, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const dataTypes = [
    {
      category: "Account Information",
      description: "Name, email address, and password for account creation",
      icon: <Users className="w-4 h-4 text-blue-500" />
    },
    {
      category: "Health Data",
      description: "Height, weight, age, sex, BMI, and lifestyle factors",
      icon: <FileText className="w-4 h-4 text-green-500" />
    },
    {
      category: "Goals & Preferences",
      description: "Weight objectives, meal times, gym habits, and dietary restrictions",
      icon: <Eye className="w-4 h-4 text-purple-500" />
    },
    {
      category: "Location & Culture",
      description: "Location and cultural context for personalized meal suggestions",
      icon: <Globe className="w-4 h-4 text-orange-500" />
    },
    {
      category: "Optional Data",
      description: "Blood pressure, ambient temperature, and movement data for AI training",
      icon: <Database className="w-4 h-4 text-red-500" />
    }
  ];

  const userRights = [
    { title: "Right to Access", description: "Request access to your personal information we hold" },
    { title: "Right to Rectification", description: "Correct any inaccurate or incomplete information" },
    { title: "Right to Erasure", description: "Request deletion of your personal information" },
    { title: "Right to Restriction", description: "Limit how we process your information" },
    { title: "Right to Data Portability", description: "Receive your data in a machine-readable format" },
    { title: "Right to Object", description: "Object to processing in certain situations" },
    { title: "Right to Withdraw Consent", description: "Withdraw consent for data processing at any time" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-12 h-12 text-blue-600 mr-3" />
              <h1 className="text-4xl font-bold text-gray-800">Privacy Policy</h1>
            </div>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-6">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">Fitxi App</span>
              <span>•</span>
              <span className="font-medium">Effective Date: July 21, 2025</span>
            </div>
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-6 border border-blue-200">
              <p className="text-gray-700 leading-relaxed">
                Fitxi is committed to protecting your privacy. This Privacy Policy explains how we collect, use, 
                disclose, and protect your information when you use our personalized nutrition and exercise coaching system.
              </p>
            </div>
          </div>
        </div>

        {/* Information We Collect */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Database className="w-6 h-6 text-blue-600 mr-3" />
            Information We Collect
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {dataTypes.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="flex items-start space-x-3">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{item.category}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Detailed Collection Info */}
          <div className="mt-8 space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Detailed Data Collection</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
                <div>
                  <p><strong>Anthropometric:</strong> Height (cm), Weight (kg) for BMI calculation</p>
                  <p><strong>Demographics:</strong> Age and sex for metabolic adjustments</p>
                  <p><strong>Health Goals:</strong> Weight loss/gain/maintain objectives</p>
                </div>
                <div>
                  <p><strong>Medical Info:</strong> Conditions, allergies for safety personalization</p>
                  <p><strong>Activity Data:</strong> Steps walked, gym habits, lifestyle factors</p>
                  <p><strong>AI Training:</strong> Body movement for yoga/tai chi feedback</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How We Use Information */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Eye className="w-6 h-6 text-green-600 mr-3" />
            How We Use Your Information
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">Service Personalization</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Compute BMI and calorie needs</li>
                <li>• Tailor meal suggestions</li>
                <li>• Customize exercise routines</li>
                <li>• Provide safety alerts</li>
              </ul>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-semibold text-purple-800 mb-2">Algorithm Improvement</h3>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Refine nutrition algorithms</li>
                <li>• Enhance exercise recommendations</li>
                <li>• Improve AI accuracy</li>
                <li>• Optimize user experience</li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h3 className="font-semibold text-orange-800 mb-2">Health & Safety</h3>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Flag risky foods/exercises</li>
                <li>• Send health alerts</li>
                <li>• Provide hydration guidance</li>
                <li>• Monitor blood pressure</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Sharing */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Lock className="w-6 h-6 text-red-600 mr-3" />
            How We Share Your Information
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-800 font-semibold text-center">
              🔒 We do NOT sell your personal information to third parties
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Limited Sharing Circumstances:</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-800">With Your Consent</p>
                    <p className="text-sm text-gray-600">Only when you give explicit permission</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-800">Legal Requirements</p>
                    <p className="text-sm text-gray-600">Court orders or government requests</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-800">Safety Protection</p>
                    <p className="text-sm text-gray-600">Preventing fraud or investigating violations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-3">Anonymized Data</h3>
              <p className="text-sm text-gray-600">
                We may share aggregated or anonymized data that cannot identify you personally 
                for research, analytical, or statistical purposes.
              </p>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Users className="w-6 h-6 text-purple-600 mr-3" />
            Your Rights
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {userRights.map((right, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-purple-300 transition-colors">
                <h3 className="font-semibold text-gray-800 mb-1">{right.title}</h3>
                <p className="text-sm text-gray-600">{right.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-purple-50 border border-purple-200 rounded-lg p-4">
            <p className="text-purple-700 text-sm">
              <strong>To exercise these rights,</strong> please contact us using the information in the Contact Us section below.
            </p>
          </div>
        </div>

        {/* Additional Policies */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <AlertCircle className="w-5 h-5 text-orange-500 mr-2" />
              Children's Privacy
            </h3>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <p className="text-orange-800 font-semibold">Age Restriction: 16+</p>
              <p className="text-sm text-orange-700 mt-2">
                Our service is not intended for individuals under 16. We don't knowingly collect 
                personal information from children under 16.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Globe className="w-5 h-5 text-blue-500 mr-2" />
              International Transfers
            </h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 font-semibold">Global Service</p>
              <p className="text-sm text-blue-700 mt-2">
                Your information may be stored in any country where we have facilities, 
                with reasonable security measures in place.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Phone className="w-6 h-6 mr-3" />
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Get in Touch</h3>
              <div className="space-y-2">
                <p><strong>Email:</strong> info@pulseinnovas.com</p>
                <p><strong>Governed by:</strong> Laws of India</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Our Address</h3>
              <p className="text-sm leading-relaxed">
                First Floor D-45, Site 4, Kasna Industrial Area<br />
                Alpha Greater Noida, Gautam Buddha Nagar<br />
                Uttar Pradesh - 201310, India
              </p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-blue-400">
            <p className="text-sm opacity-90">
              <strong>Policy Updates:</strong> We may update this Privacy Policy from time to time. 
              Material changes will be notified with 30+ days notice.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>© 2025 Fitxi by PulseInnovas. All rights reserved.</p>
          <p className="mt-2">Your privacy and data security are our top priorities.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;