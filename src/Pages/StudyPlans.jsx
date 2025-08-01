import React from "react";
import { Link } from "react-router-dom";

const StudyPlans = () => {
  const studyPlans = [
    {
      id: 1,
      title: "Web Development: React Fundamentals",
      subject: "Computer Science",
      dueDate: "Aug 10, 2024",
      progress: 60,
      description: "Learn React basics, components, and state management",
    },
    {
      id: 2,
      title: "Data Science: Python for ML",
      subject: "Data Science",
      dueDate: "Aug 15, 2024",
      progress: 30,
      description: "Master Python libraries for machine learning",
    },
    {
      id: 3,
      title: "Mathematics: Advanced Calculus",
      subject: "Mathematics",
      dueDate: "Aug 20, 2024",
      progress: 80,
      description: "Study limits, derivatives, and integrals",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Study Plans</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studyPlans.map((plan) => (
            <div key={plan.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  {plan.title}
                </h3>
                <span className="text-sm text-blue-500 font-medium">
                  {plan.subject}
                </span>
              </div>

              <p className="text-gray-600 mb-4">{plan.description}</p>

              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-500 mb-1">
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

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Due: {plan.dueDate}
                </span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                  Continue
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            to="/create-plan"
          >
            Create New Study Plan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudyPlans;
