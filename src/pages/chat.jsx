import React from 'react';
import { 
  BiSearch, 
  BiTime,
  BiLayer,
  BiGrid,
  BiMessageRounded,
  BiMenu,
  BiLink,
  BiFile,
  BiChevronRight
} from 'react-icons/bi';

const SearchInterface = () => {
  return (
    <div className="flex h-screen bg-white">
      {/* Left Sidebar */}
      <div className="w-16 border-r border-gray-200 flex flex-col items-center py-4 space-y-4">
        <div className="text-gray-500 hover:text-gray-700 cursor-pointer"><BiSearch size={20} /></div>
        <div className="text-gray-500 hover:text-gray-700 cursor-pointer"><BiTime size={20} /></div>
        <div className="text-gray-500 hover:text-gray-700 cursor-pointer"><BiLayer size={20} /></div>
        <div className="text-gray-500 hover:text-gray-700 cursor-pointer"><BiGrid size={20} /></div>
        <div className="text-gray-500 hover:text-gray-700 cursor-pointer"><BiMessageRounded size={20} /></div>
        <div className="text-gray-500 hover:text-gray-700 cursor-pointer"><BiMenu size={20} /></div>
        <div className="text-gray-500 hover:text-gray-700 cursor-pointer"><BiLink size={20} /></div>
        <div className="text-gray-500 hover:text-gray-700 cursor-pointer"><BiFile size={20} /></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="w-8 h-8 bg-black"></div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Connections 3</span>
            <button className="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              Invite
            </button>
          </div>
        </div>

        {/* Welcome Section */}
        <h1 className="text-xl font-semibold mb-4">Hello!</h1>
        
        {/* Search Input */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="How can I help?"
            className="w-full p-4 border border-gray-200 rounded-lg pr-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center space-x-2">
            <button className="text-gray-500 hover:text-gray-700">All connections</button>
            <button className="p-2 text-gray-500 hover:text-gray-700"><BiSearch size={20} /></button>
            <button className="p-2 text-gray-500 hover:text-gray-700"><BiChevronRight size={20} /></button>
          </div>
        </div>

        {/* Try Asking Section */}
        <div className="mb-8">
          <h2 className="text-xs font-medium text-gray-500 mb-4 uppercase tracking-wide">Try asking</h2>
          <button className="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            latest issue on #design channel
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-2">
            <h3 className="font-medium">Add a connection</h3>
            <p className="text-sm text-gray-500">Connect your data sources.</p>
            <button className="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              Connect
            </button>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium">Configure connections</h3>
            <p className="text-sm text-gray-500">Learn how to easily connect your information sources.</p>
            <button className="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              Watch
            </button>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium">Explore Search</h3>
            <p className="text-sm text-gray-500">Discover how Qatalog helps you find answers instantly.</p>
            <button className="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              Watch
            </button>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium">Invite your team</h3>
            <p className="text-sm text-gray-500">Give your team instant access to Qatalog.</p>
            <button className="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              Invite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInterface;