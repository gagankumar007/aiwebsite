import React from 'react';
import { Activity, Apple, Download, Calendar, Dumbbell, Droplets, Moon, Clock, Target } from 'lucide-react';

function AppPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white">
            {/* Header */}
            <header className="p-6">
                <div className="flex items-center">
                    <Activity className="h-8 w-8 mr-3" />
                    <h1 className="text-2xl font-bold tracking-wide">PULSEINNOVAS</h1>
                </div>
            </header>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
                                FiTXi
                            </h2>
                            <p className="text-xl md:text-2xl leading-relaxed mb-8 text-blue-100">
                                The ultimate fitness companion for your personalized fitness
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="space-y-6">
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                                <p className="text-lg leading-relaxed">
                                    Diet plans based on calories spent till that time of the day, curated from around 300 plans including diets that promote anti-ageing, anti-exidation, medical diets for heart attacks, diabetes, hypertension
                                </p>
                            </div>
                            
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                                <p className="text-lg leading-relaxed">
                                    Exercise recommendations for gym and non-gym goers
                                </p>
                            </div>
                            
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                                <p className="text-lg leading-relaxed">
                                    Water and sleep recommendations for a healthy and productive life
                                </p>
                            </div>
                            
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                                <p className="text-lg leading-relaxed">
                                    AI-powered, available on subscription
                                </p>
                            </div>
                            
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                                <p className="text-lg leading-relaxed">
                                    To be released soon on Play Store
                                </p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-8">
                            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center">
                                <Download className="h-5 w-5 mr-2" />
                                Download Soon
                            </button>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center">
                                <Apple className="h-5 w-5 mr-2" />
                                Coming to App Store
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Phone Mockup */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            {/* Phone Frame */}
                            <div className="bg-gray-800 rounded-3xl p-2 shadow-2xl">
                                <div className="bg-gradient-to-b from-blue-400 to-blue-500 rounded-2xl overflow-hidden" style={{width: '280px', height: '580px'}}>
                                    {/* Status Bar */}
                                    <div className="flex justify-between items-center p-4 text-white text-sm">
                                        <span className="font-semibold">9:41</span>
                                        <div className="flex items-center space-x-1">
                                            <div className="flex space-x-1">
                                                <div className="w-1 h-3 bg-white rounded-full"></div>
                                                <div className="w-1 h-3 bg-white rounded-full"></div>
                                                <div className="w-1 h-3 bg-white rounded-full"></div>
                                                <div className="w-1 h-3 bg-white rounded-full"></div>
                                            </div>
                                            <div className="w-4 h-2 bg-white rounded-sm"></div>
                                            <div className="w-6 h-3 bg-white rounded-sm"></div>
                                        </div>
                                    </div>

                                    {/* App Content */}
                                    <div className="px-6 py-4">
                                        <h3 className="text-xl font-medium mb-8">Good Morning, John</h3>
                                        
                                        {/* Calorie Counter */}
                                        <div className="text-center mb-8">
                                            <div className="text-5xl font-bold mb-2">1350</div>
                                            <div className="text-sm opacity-80">kcal</div>
                                        </div>

                                        {/* Diet Plan Section */}
                                        <div className="bg-white bg-opacity-20 rounded-2xl p-4 mb-6">
                                            <h4 className="font-semibold mb-3">Diet Plan</h4>
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <div className="font-medium">Breakfast</div>
                                                    <div className="text-sm opacity-80">Based on current location</div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="font-semibold">300 kcal</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Exercise Section */}
                                        <div className="bg-white bg-opacity-20 rounded-2xl p-4 mb-6">
                                            <h4 className="font-semibold mb-3">Exercise</h4>
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <div className="font-medium">Strength Training</div>
                                                    <div className="text-sm opacity-80">45 min</div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="font-semibold">45 min</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Recommendations */}
                                        <div className="mb-4">
                                            <h4 className="font-semibold mb-3">Recommendations</h4>
                                            <div className="flex space-x-3">
                                                <div className="bg-white bg-opacity-20 rounded-xl p-3 flex-1 text-center">
                                                    <Droplets className="h-6 w-6 mx-auto mb-2" />
                                                    <div className="text-sm">8 glasses</div>
                                                </div>
                                                <div className="bg-white bg-opacity-20 rounded-xl p-3 flex-1 text-center">
                                                    <Moon className="h-6 w-6 mx-auto mb-2" />
                                                    <div className="text-sm">7-8 hr</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="bg-white bg-opacity-20 rounded-2xl p-6 mb-4">
                            <Target className="h-12 w-12 mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2">Smart Goals</h3>
                            <p className="text-sm opacity-80">Personalized fitness targets based on your lifestyle</p>
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <div className="bg-white bg-opacity-20 rounded-2xl p-6 mb-4">
                            <Calendar className="h-12 w-12 mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2">Daily Planning</h3>
                            <p className="text-sm opacity-80">Complete meal and workout plans for every day</p>
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <div className="bg-white bg-opacity-20 rounded-2xl p-6 mb-4">
                            <Dumbbell className="h-12 w-12 mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2">Smart Workouts</h3>
                            <p className="text-sm opacity-80">AI-powered exercise recommendations</p>
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <div className="bg-white bg-opacity-20 rounded-2xl p-6 mb-4">
                            <Clock className="h-12 w-12 mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2">Real-time Tracking</h3>
                            <p className="text-sm opacity-80">Monitor your progress throughout the day</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="container mx-auto px-6 py-8 text-center text-blue-100">
                <div className="flex items-center justify-center mb-4">
                    <Activity className="h-6 w-6 mr-2" />
                    <span className="font-medium">PulseInnovas © 2024. All rights reserved.</span>
                </div>
                <p className="text-sm opacity-80">Revolutionary AI-powered fitness solutions coming soon.</p>
            </footer>
        </div>
    );
}

export default AppPage;