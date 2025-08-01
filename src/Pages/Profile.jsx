import React from "react";

const Profile = () => {
  const userStats = {
    totalStudyHours: 156,
    completedTasks: 89,
    currentStreak: 12,
    averageScore: 87,
  };

  return (
    <div className="p-6 ai-bg-pattern min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="ai-title text-3xl font-bold mb-6">AI Profile</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="ai-card p-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">JS</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                  John Smith
                </h2>
                <p className="text-gray-500 mb-4">Computer Science Student</p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="ai-stat-card p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {userStats.totalStudyHours}
                </div>
                <div className="text-sm text-gray-500">Study Hours</div>
              </div>
              <div className="ai-stat-card p-4 text-center">
                <div className="text-2xl font-bold text-green-600">
                  {userStats.completedTasks}
                </div>
                <div className="text-sm text-gray-500">Tasks Done</div>
              </div>
              <div className="ai-stat-card p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">
                  {userStats.currentStreak}
                </div>
                <div className="text-sm text-gray-500">Day Streak</div>
              </div>
              <div className="ai-stat-card p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {userStats.averageScore}%
                </div>
                <div className="text-sm text-gray-500">Avg Score</div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Recent Activity
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">
                    Completed React Fundamentals module
                  </span>
                  <span className="text-sm text-gray-400 ml-auto">
                    2 hours ago
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">
                    Started Python for ML course
                  </span>
                  <span className="text-sm text-gray-400 ml-auto">
                    1 day ago
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-600">
                    Achieved 7-day study streak
                  </span>
                  <span className="text-sm text-gray-400 ml-auto">
                    3 days ago
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
