import React, { useState } from "react";

const ProgressTracker = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("week");
  const [selectedMetric, setSelectedMetric] = useState("time");

  // Sample data
  const progressData = {
    time: {
      week: [2.5, 3.2, 1.8, 4.1, 2.9, 3.5, 2.7],
      month: [
        2.5, 3.2, 1.8, 4.1, 2.9, 3.5, 2.7, 3.8, 2.4, 3.1, 4.2, 2.6, 3.3, 2.8,
        3.9, 2.1, 3.6, 2.3, 4.0, 2.7, 3.4, 2.9, 3.7, 2.5, 3.2, 2.8, 3.5, 2.6,
        3.1, 2.9,
      ],
      year: [15, 18, 22, 19, 25, 28, 24, 26, 30, 27, 29, 32],
    },
    completion: {
      week: [75, 82, 68, 90, 78, 85, 72],
      month: [
        75, 82, 68, 90, 78, 85, 72, 88, 76, 83, 91, 79, 86, 74, 89, 71, 87, 73,
        92, 77, 84, 70, 88, 75, 82, 69, 86, 72, 89, 76,
      ],
      year: [78, 82, 85, 79, 88, 91, 84, 87, 93, 86, 89, 92],
    },
    quiz: {
      week: [85, 92, 78, 95, 88, 90, 82],
      month: [
        85, 92, 78, 95, 88, 90, 82, 94, 86, 91, 96, 89, 93, 84, 95, 87, 92, 83,
        97, 88, 94, 85, 96, 86, 93, 84, 95, 87, 94, 89,
      ],
      year: [87, 90, 93, 88, 95, 97, 91, 94, 98, 92, 96, 99],
    },
  };

  const studyPlans = [
    {
      id: 1,
      title: "React Fundamentals",
      subject: "Computer Science",
      progress: 75,
      plannedHours: 20,
      actualHours: 15,
      quizScores: [85, 92, 78, 95],
    },
    {
      id: 2,
      title: "Calculus Advanced",
      subject: "Mathematics",
      progress: 60,
      plannedHours: 25,
      actualHours: 18,
      quizScores: [88, 85, 92, 87],
    },
    {
      id: 3,
      title: "Physics Mechanics",
      subject: "Physics",
      progress: 90,
      plannedHours: 15,
      actualHours: 14,
      quizScores: [92, 95, 89, 94],
    },
    {
      id: 4,
      title: "Data Science Basics",
      subject: "Data Science",
      progress: 45,
      plannedHours: 30,
      actualHours: 12,
      quizScores: [78, 82, 85, 80],
    },
  ];

  const calendarData = [
    { date: "2024-01-01", hours: 2.5, completed: true },
    { date: "2024-01-02", hours: 3.2, completed: true },
    { date: "2024-01-03", hours: 1.8, completed: true },
    { date: "2024-01-04", hours: 0, completed: false },
    { date: "2024-01-05", hours: 4.1, completed: true },
    { date: "2024-01-06", hours: 2.9, completed: true },
    { date: "2024-01-07", hours: 3.5, completed: true },
    { date: "2024-01-08", hours: 2.7, completed: true },
    { date: "2024-01-09", hours: 3.8, completed: true },
    { date: "2024-01-10", hours: 0, completed: false },
    { date: "2024-01-11", hours: 2.4, completed: true },
    { date: "2024-01-12", hours: 3.1, completed: true },
    { date: "2024-01-13", hours: 4.2, completed: true },
    { date: "2024-01-14", hours: 2.6, completed: true },
    { date: "2024-01-15", hours: 3.3, completed: true },
  ];

  const getMetricLabel = () => {
    switch (selectedMetric) {
      case "time":
        return "Study Hours";
      case "completion":
        return "Completion %";
      case "quiz":
        return "Quiz Score %";
      default:
        return "Study Hours";
    }
  };

  const getMetricColor = () => {
    switch (selectedMetric) {
      case "time":
        return "bg-blue-500";
      case "completion":
        return "bg-green-500";
      case "quiz":
        return "bg-purple-500";
      default:
        return "bg-blue-500";
    }
  };

  const getMetricHoverColor = () => {
    switch (selectedMetric) {
      case "time":
        return "hover:bg-blue-600";
      case "completion":
        return "hover:bg-green-600";
      case "quiz":
        return "hover:bg-purple-600";
      default:
        return "hover:bg-blue-600";
    }
  };

  const currentData = progressData[selectedMetric][selectedTimeframe];
  const average =
    Math.round(
      (currentData.reduce((a, b) => a + b, 0) / currentData.length) * 10
    ) / 10;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Progress Tracker
          </h1>
          <p className="text-gray-600">
            Monitor your learning progress and study consistency
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  Total Study Hours
                </p>
                <p className="text-2xl font-bold text-gray-900">156</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  Avg Completion
                </p>
                <p className="text-2xl font-bold text-gray-900">82%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  Avg Quiz Score
                </p>
                <p className="text-2xl font-bold text-gray-900">89%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 rounded-lg">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  Study Streak
                </p>
                <p className="text-2xl font-bold text-gray-900">12 days</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Progress Chart */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-700">
                Progress Analytics
              </h2>
              <div className="flex space-x-2">
                <select
                  value={selectedMetric}
                  onChange={(e) => setSelectedMetric(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="time">Study Hours</option>
                  <option value="completion">Completion %</option>
                  <option value="quiz">Quiz Score %</option>
                </select>
                <select
                  value={selectedTimeframe}
                  onChange={(e) => setSelectedTimeframe(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="week">Week</option>
                  <option value="month">Month</option>
                  <option value="year">Year</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>{getMetricLabel()}</span>
                <span>Average: {average}</span>
              </div>
            </div>

            <div className="h-64 flex items-end justify-between space-x-2">
              {currentData.map((value, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className={`w-full ${getMetricColor()} ${getMetricHoverColor()} rounded-t transition-all duration-300`}
                    style={{
                      height: `${(value / Math.max(...currentData)) * 200}px`,
                    }}
                  ></div>
                  <span className="text-xs text-gray-500 mt-2">
                    {selectedTimeframe === "week"
                      ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]
                      : selectedTimeframe === "month"
                      ? index + 1
                      : [
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "May",
                          "Jun",
                          "Jul",
                          "Aug",
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec",
                        ][index]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Study Plans Progress */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">
              Study Plans Progress
            </h2>
            <div className="space-y-4">
              {studyPlans.map((plan) => (
                <div
                  key={plan.id}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-medium text-gray-800">
                        {plan.title}
                      </h3>
                      <p className="text-sm text-gray-500">{plan.subject}</p>
                    </div>
                    <span className="text-sm font-medium text-blue-600">
                      {plan.progress}%
                    </span>
                  </div>

                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{plan.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${plan.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Time: </span>
                      <span className="font-medium">
                        {plan.actualHours}h / {plan.plannedHours}h
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Quiz Avg: </span>
                      <span className="font-medium">
                        {Math.round(
                          plan.quizScores.reduce((a, b) => a + b, 0) /
                            plan.quizScores.length
                        )}
                        %
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Calendar View */}
        <div className="mt-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">
              Study Calendar
            </h2>
            <div className="grid grid-cols-7 gap-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-medium text-gray-600 py-2"
                >
                  {day}
                </div>
              ))}

              {calendarData.map((day, index) => (
                <div
                  key={index}
                  className={`aspect-square border border-gray-200 rounded-lg p-2 text-center ${
                    day.completed
                      ? "bg-green-50 border-green-200"
                      : "bg-gray-50"
                  }`}
                >
                  <div className="text-xs text-gray-600 mb-1">
                    {new Date(day.date).getDate()}
                  </div>
                  {day.completed ? (
                    <div className="text-xs font-medium text-green-600">
                      {day.hours}h
                    </div>
                  ) : (
                    <div className="text-xs text-gray-400">-</div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-50 border border-green-200 rounded"></div>
                <span className="text-gray-600">Studied</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-50 border border-gray-200 rounded"></div>
                <span className="text-gray-600">No Study</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Analytics */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Time vs Planned */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Time Spent vs Planned
            </h3>
            <div className="space-y-4">
              {studyPlans.map((plan) => {
                const efficiency = Math.round(
                  (plan.actualHours / plan.plannedHours) * 100
                );
                return (
                  <div
                    key={plan.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">
                        {plan.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {plan.actualHours}h / {plan.plannedHours}h
                      </p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`text-sm font-medium ${
                          efficiency >= 100
                            ? "text-green-600"
                            : efficiency >= 80
                            ? "text-yellow-600"
                            : "text-red-600"
                        }`}
                      >
                        {efficiency}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quiz Performance */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Quiz Performance
            </h3>
            <div className="space-y-4">
              {studyPlans.map((plan) => {
                const avgScore = Math.round(
                  plan.quizScores.reduce((a, b) => a + b, 0) /
                    plan.quizScores.length
                );
                return (
                  <div
                    key={plan.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">
                        {plan.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {plan.quizScores.length} quizzes taken
                      </p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`text-sm font-medium ${
                          avgScore >= 90
                            ? "text-green-600"
                            : avgScore >= 80
                            ? "text-yellow-600"
                            : "text-red-600"
                        }`}
                      >
                        {avgScore}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
