import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  FiBarChart2, 
  FiGrid, 
  FiClock, 
  FiEdit3, 
  FiFolder, 
  FiTrendingUp, 
  FiCheckSquare, 
  FiZap, 
  FiTarget, 
} from "react-icons/fi";
import { FaBrain,FaRocket } from "react-icons/fa";

const Home = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      title: "AI-Powered Study Planning",
      description:
        "Intelligent course planning with personalized recommendations",
      icon: FaBrain,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Smart Progress Tracking",
      description: "Advanced analytics and insights for your learning journey",
      icon: FiBarChart2,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Adaptive Flashcards",
      description: "AI-generated flashcards that adapt to your learning pace",
      icon: FiGrid,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Focus Timer with AI",
      description: "Smart Pomodoro timer with productivity insights",
      icon: FiClock,
      gradient: "from-orange-500 to-red-500",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen ai-bg-pattern relative overflow-hidden flex flex-col">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl ai-float"></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl ai-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-3xl ai-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col">
        {/* Header */}
        <div className="text-center pt-20 pb-16 px-6">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="ai-title text-6xl md:text-7xl font-bold mb-6">
              StudyBuddy AI
            </h1>
            <p className="ai-subtitle text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your intelligent study companion powered by AI to revolutionize
              your learning experience
            </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/dashboard" className="ai-button text-lg px-8 py-4 flex items-center space-x-2">
              <FaRocket className="w-5 h-5" />
              <span>Get Started</span>
            </Link>
            <Link
              to="/create-plan"
              className="ai-button text-lg px-8 py-4 flex items-center space-x-2"
              style={{ background: "var(--ai-gradient-2)" }}
            >
              <FiEdit3 className="w-5 h-5" />
              <span>Create Plan</span>
            </Link>
          </div>
          </div>
        </div>

        {/* Feature Showcase */}
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <div className="text-center mb-16">
            <h2 className="ai-title text-4xl font-bold mb-4">
              AI-Powered Features
            </h2>
            <p className="ai-subtitle text-lg">
              Experience the future of learning with our intelligent tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className={`ai-card p-6 text-center transition-all duration-500 ${
                    currentFeature === index ? "ai-glow scale-105" : "scale-100"
                  }`}
                >
                  <div
                    className={`mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
                  >
                    <IconComponent className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="ai-stat-card text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                10K+
              </div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div className="ai-stat-card text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="ai-stat-card text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-gray-600">Study Hours</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <div className="text-center mb-12">
            <h2 className="ai-title text-4xl font-bold mb-4">
              Start Learning Today
            </h2>
            <p className="ai-subtitle text-lg">Choose your path to success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              to="/create-plan"
              className="ai-card p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <FiEdit3 className="w-16 h-16 mx-auto text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Create Study Plan
              </h3>
              <p className="text-gray-600 mb-4">
                Build personalized learning paths with AI assistance
              </p>
              <div className="ai-button inline-block">Get Started</div>
            </Link>

            <Link
              to="/flashcards"
              className="ai-card p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <FiGrid className="w-16 h-16 mx-auto text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Smart Flashcards
              </h3>
              <p className="text-gray-600 mb-4">
                AI-generated cards that adapt to your learning
              </p>
              <div
                className="ai-button inline-block"
                style={{ background: "var(--ai-gradient-3)" }}
              >
                Start Learning
              </div>
            </Link>

            <Link
              to="/pomodoro"
              className="ai-card p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <FiClock className="w-16 h-16 mx-auto text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Focus Timer
              </h3>
              <p className="text-gray-600 mb-4">
                AI-powered productivity sessions
              </p>
              <div
                className="ai-button inline-block"
                style={{ background: "var(--ai-gradient-4)" }}
              >
                Start Timer
              </div>
            </Link>

            <Link
              to="/content"
              className="ai-card p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <FiFolder className="w-16 h-16 mx-auto text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Content Hub
              </h3>
              <p className="text-gray-600 mb-4">
                Organize and manage your study materials
              </p>
              <div
                className="ai-button inline-block"
                style={{ background: "var(--ai-gradient-5)" }}
              >
                Explore
              </div>
            </Link>

            <Link
              to="/progress"
              className="ai-card p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <FiTrendingUp className="w-16 h-16 mx-auto text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Progress Analytics
              </h3>
              <p className="text-gray-600 mb-4">
                Track your learning journey with insights
              </p>
              <div
                className="ai-button inline-block"
                style={{ background: "var(--ai-gradient-2)" }}
              >
                View Progress
              </div>
            </Link>

            <Link
              to="/todo"
              className="ai-card p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <FiCheckSquare className="w-16 h-16 mx-auto text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Task Manager
              </h3>
              <p className="text-gray-600 mb-4">
                Smart task organization and tracking
              </p>
              <div
                className="ai-button inline-block"
                style={{ background: "var(--ai-gradient-3)" }}
              >
                Manage Tasks
              </div>
            </Link>
          </div>
        </div>

        {/* AI Features Highlight */}
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <div className="ai-card p-12 text-center">
            <h2 className="ai-title text-4xl font-bold mb-6">
              Powered by Advanced AI
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4">
                  <FaBrain className="w-12 h-12 mx-auto text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Machine Learning
                </h3>
                <p className="text-gray-600">
                  Adaptive algorithms that learn from your study patterns
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <FiTarget className="w-12 h-12 mx-auto text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Personalization
                </h3>
                <p className="text-gray-600">
                  Tailored recommendations based on your learning style
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <FiZap className="w-12 h-12 mx-auto text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Real-time Insights
                </h3>
                <p className="text-gray-600">
                  Instant feedback and progress analysis
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-12 border-t border-gray-200">
          <p className="text-gray-600 mb-4">
            Ready to transform your learning experience?
          </p>
          <Link to="/dashboard" className="ai-button text-lg px-8 py-4 flex items-center space-x-2 mx-auto w-fit">
            <FaRocket className="w-5 h-5" />
            <span>Launch StudyBuddy AI</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
