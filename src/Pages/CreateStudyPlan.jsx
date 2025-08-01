import React, { useState } from "react";

const CreateStudyPlan = () => {
  const [studyPlan, setStudyPlan] = useState({
    title: "",
    subject: "",
    description: "",
    estimatedHours: "",
    difficulty: "medium",
    deadline: "",
    subtopics: [],
    notes: "",
    attachments: [],
  });

  const [newSubtopic, setNewSubtopic] = useState({
    title: "",
    description: "",
    estimatedTime: "",
    notes: "",
    lectureLink: "",
    customNotes: "",
  });

  const [showSubtopicForm, setShowSubtopicForm] = useState(false);

  const handleInputChange = (field, value) => {
    setStudyPlan((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addSubtopic = () => {
    if (newSubtopic.title.trim()) {
      setStudyPlan((prev) => ({
        ...prev,
        subtopics: [...prev.subtopics, { ...newSubtopic, id: Date.now() }],
      }));
      setNewSubtopic({
        title: "",
        description: "",
        estimatedTime: "",
        notes: "",
        lectureLink: "",
        customNotes: "",
      });
      setShowSubtopicForm(false);
    }
  };

  const removeSubtopic = (id) => {
    setStudyPlan((prev) => ({
      ...prev,
      subtopics: prev.subtopics.filter((subtopic) => subtopic.id !== id),
    }));
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setStudyPlan((prev) => ({
      ...prev,
      attachments: [...prev.attachments, ...files],
    }));
  };

  const saveStudyPlan = () => {
    // Here you would typically save to backend
    console.log("Study Plan:", studyPlan);
    alert("Study plan created successfully!");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Create Study Plan
          </h1>
          <p className="text-gray-600">
            Plan your learning journey with detailed structure and resources
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Basic Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">
              Basic Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Study Plan Title *
                </label>
                <input
                  type="text"
                  value={studyPlan.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., React Fundamentals Course"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  value={studyPlan.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Computer Science"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Estimated Hours *
                </label>
                <input
                  type="number"
                  value={studyPlan.estimatedHours}
                  onChange={(e) =>
                    handleInputChange("estimatedHours", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Difficulty Level
                </label>
                <select
                  value={studyPlan.difficulty}
                  onChange={(e) =>
                    handleInputChange("difficulty", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deadline
                </label>
                <input
                  type="date"
                  value={studyPlan.deadline}
                  onChange={(e) =>
                    handleInputChange("deadline", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={studyPlan.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe what you want to learn and achieve..."
                />
              </div>
            </div>
          </div>

          {/* Subtopics */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-700">Subtopics</h2>
              <button
                onClick={() => setShowSubtopicForm(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Add Subtopic
              </button>
            </div>

            {/* Subtopic Form */}
            {showSubtopicForm && (
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-medium text-gray-700 mb-4">
                  Add New Subtopic
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      value={newSubtopic.title}
                      onChange={(e) =>
                        setNewSubtopic((prev) => ({
                          ...prev,
                          title: e.target.value,
                        }))
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., React Components"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Estimated Time (hours)
                    </label>
                    <input
                      type="number"
                      value={newSubtopic.estimatedTime}
                      onChange={(e) =>
                        setNewSubtopic((prev) => ({
                          ...prev,
                          estimatedTime: e.target.value,
                        }))
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 2"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={newSubtopic.description}
                    onChange={(e) =>
                      setNewSubtopic((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    rows="2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Brief description of this subtopic..."
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lecture Link (YouTube/URL)
                  </label>
                  <input
                    type="url"
                    value={newSubtopic.lectureLink}
                    onChange={(e) =>
                      setNewSubtopic((prev) => ({
                        ...prev,
                        lectureLink: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://youtube.com/watch?v=..."
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Custom Notes
                  </label>
                  <textarea
                    value={newSubtopic.customNotes}
                    onChange={(e) =>
                      setNewSubtopic((prev) => ({
                        ...prev,
                        customNotes: e.target.value,
                      }))
                    }
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Important points, formulas, or notes for this session..."
                  />
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={addSubtopic}
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                  >
                    Add Subtopic
                  </button>
                  <button
                    onClick={() => setShowSubtopicForm(false)}
                    className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Subtopics List */}
            <div className="space-y-4">
              {studyPlan.subtopics.map((subtopic, index) => (
                <div
                  key={subtopic.id}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-medium text-gray-800">
                        {index + 1}. {subtopic.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {subtopic.description}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">
                        {subtopic.estimatedTime}h
                      </span>
                      <button
                        onClick={() => removeSubtopic(subtopic.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {subtopic.lectureLink && (
                    <div className="mb-2">
                      <a
                        href={subtopic.lectureLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 text-sm"
                      >
                        📹 Watch Lecture
                      </a>
                    </div>
                  )}
                  {subtopic.customNotes && (
                    <div className="bg-yellow-50 p-3 rounded-md">
                      <p className="text-sm text-gray-700 font-medium mb-1">
                        Notes:
                      </p>
                      <p className="text-sm text-gray-600">
                        {subtopic.customNotes}
                      </p>
                    </div>
                  )}
                </div>
              ))}
              {studyPlan.subtopics.length === 0 && (
                <p className="text-gray-500 text-center py-8">
                  No subtopics added yet. Click "Add Subtopic" to get started.
                </p>
              )}
            </div>
          </div>

          {/* General Notes */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              General Notes
            </h2>
            <textarea
              value={studyPlan.notes}
              onChange={(e) => handleInputChange("notes", e.target.value)}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add any general notes, important points, or study tips for this plan..."
            />
          </div>

          {/* File Attachments */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Attachments
            </h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
                accept=".pdf,.doc,.docx,.txt,.mp4,.mov"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="mt-2 text-sm text-gray-600">
                  Click to upload files
                </p>
                <p className="text-xs text-gray-500">
                  PDF, DOC, TXT, MP4, MOV up to 10MB
                </p>
              </label>
            </div>
            {studyPlan.attachments.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Uploaded Files:
                </h4>
                <div className="space-y-2">
                  {studyPlan.attachments.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-50 p-3 rounded-md"
                    >
                      <span className="text-sm text-gray-700">{file.name}</span>
                      <span className="text-xs text-gray-500">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Save Button */}
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => window.history.back()}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={saveStudyPlan}
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Create Study Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStudyPlan;
