import React from 'react';
import { XCircle, RefreshCw } from 'lucide-react';

const CancelRefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Cancellation and Refunds</h1>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">Fitxi App</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-8">
            
            {/* Cancellation Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <XCircle className="w-6 h-6 text-red-600 mr-3" />
                Cancellation
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>You may cancel your subscription at any time through the App's settings or your device's subscription management settings.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Cancellations will take effect at the end of your current billing period. You will continue to have access to the subscription features until the end of that period.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Refunds Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <RefreshCw className="w-6 h-6 text-green-600 mr-3" />
                Refunds
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Refunds are generally not provided for partially used subscription periods, except where required by applicable law.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>© 2025 Fitxi by PulseInnovas. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default CancelRefundPolicy;