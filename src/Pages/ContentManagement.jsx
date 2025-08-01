import React, { useState } from "react";

const ContentManagement = () => {
  const [activeTab, setActiveTab] = useState("notes");
  const [folders, setFolders] = useState([
    { id: 1, name: "React Fundamentals", color: "blue", items: 5 },
    { id: 2, name: "Mathematics", color: "green", items: 3 },
    { id: 3, name: "Physics", color: "purple", items: 2 },
    { id: 4, name: "Data Science", color: "orange", items: 4 },
  ]);

  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "React Components Notes",
      content: "Components are the building blocks...",
      folder: "React Fundamentals",
      type: "text",
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "Calculus Formulas",
      content: "Derivative rules and integration...",
      folder: "Mathematics",
      type: "text",
      date: "2024-01-14",
    },
    {
      id: 3,
      title: "Physics Mechanics",
      content: "Newton's laws and motion...",
      folder: "Physics",
      type: "text",
      date: "2024-01-13",
    },
  ]);

  const [lectures, setLectures] = useState([
    {
      id: 1,
      title: "React Hooks Tutorial",
      url: "https://youtube.com/watch?v=example1",
      folder: "React Fundamentals",
      type: "youtube",
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "Calculus Lecture 1",
      url: "https://youtube.com/watch?v=example2",
      folder: "Mathematics",
      type: "youtube",
      date: "2024-01-14",
    },
    {
      id: 3,
      title: "Physics Lab Notes",
      url: "https://drive.google.com/file/example3",
      folder: "Physics",
      type: "pdf",
      date: "2024-01-13",
    },
  ]);

  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    folder: "",
    type: "text",
  });

  const [newLecture, setNewLecture] = useState({
    title: "",
    url: "",
    folder: "",
    type: "youtube",
  });

  const [showNoteForm, setShowNoteForm] = useState(false);
  const [showLectureForm, setShowLectureForm] = useState(false);
  const [showFolderForm, setShowFolderForm] = useState(false);
  const [newFolder, setNewFolder] = useState({ name: "", color: "blue" });

  const colors = [
    "blue",
    "green",
    "purple",
    "orange",
    "red",
    "yellow",
    "pink",
    "indigo",
  ];

  const addNote = () => {
    if (newNote.title && newNote.content) {
      const note = {
        id: Date.now(),
        ...newNote,
        date: new Date().toISOString().split("T")[0],
      };
      setNotes([...notes, note]);
      setNewNote({ title: "", content: "", folder: "", type: "text" });
      setShowNoteForm(false);
    }
  };

  const addLecture = () => {
    if (newLecture.title && newLecture.url) {
      const lecture = {
        id: Date.now(),
        ...newLecture,
        date: new Date().toISOString().split("T")[0],
      };
      setLectures([...lectures, lecture]);
      setNewLecture({ title: "", url: "", folder: "", type: "youtube" });
      setShowLectureForm(false);
    }
  };

  const addFolder = () => {
    if (newFolder.name) {
      const folder = {
        id: Date.now(),
        ...newFolder,
        items: 0,
      };
      setFolders([...folders, folder]);
      setNewFolder({ name: "", color: "blue" });
      setShowFolderForm(false);
    }
  };

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-800 border-blue-200",
      green: "bg-green-100 text-green-800 border-green-200",
      purple: "bg-purple-100 text-purple-800 border-purple-200",
      orange: "bg-orange-100 text-orange-800 border-orange-200",
      red: "bg-red-100 text-red-800 border-red-200",
      yellow: "bg-yellow-100 text-yellow-800 border-yellow-200",
      pink: "bg-pink-100 text-pink-800 border-pink-200",
      indigo: "bg-indigo-100 text-indigo-800 border-indigo-200",
    };
    return colorMap[color] || colorMap.blue;
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    // Here you would typically upload files to backend
    console.log("Files to upload:", files);
    alert(`${files.length} file(s) uploaded successfully!`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Content Management
          </h1>
          <p className="text-gray-600">
            Organize your study materials, notes, and lecture resources
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab("notes")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "notes"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                📝 Notes
              </button>
              <button
                onClick={() => setActiveTab("lectures")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "lectures"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                🎥 Lectures
              </button>
              <button
                onClick={() => setActiveTab("folders")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "folders"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                📁 Folders
              </button>
              <button
                onClick={() => setActiveTab("upload")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "upload"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                📤 Upload Files
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* Notes Tab */}
            {activeTab === "notes" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-700">
                    Study Notes
                  </h2>
                  <button
                    onClick={() => setShowNoteForm(true)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Add Note
                  </button>
                </div>

                {showNoteForm && (
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-medium text-gray-700 mb-4">
                      Create New Note
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Title *
                        </label>
                        <input
                          type="text"
                          value={newNote.title}
                          onChange={(e) =>
                            setNewNote((prev) => ({
                              ...prev,
                              title: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Note title..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Folder
                        </label>
                        <select
                          value={newNote.folder}
                          onChange={(e) =>
                            setNewNote((prev) => ({
                              ...prev,
                              folder: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select folder...</option>
                          {folders.map((folder) => (
                            <option key={folder.id} value={folder.name}>
                              {folder.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Content *
                      </label>
                      <textarea
                        value={newNote.content}
                        onChange={(e) =>
                          setNewNote((prev) => ({
                            ...prev,
                            content: e.target.value,
                          }))
                        }
                        rows="6"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Write your notes here..."
                      />
                    </div>
                    <div className="flex space-x-3">
                      <button
                        onClick={addNote}
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                      >
                        Save Note
                      </button>
                      <button
                        onClick={() => setShowNoteForm(false)}
                        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {notes.map((note) => (
                    <div
                      key={note.id}
                      className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-medium text-gray-800">
                          {note.title}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {note.date}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                        {note.content}
                      </p>
                      {note.folder && (
                        <span
                          className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getColorClasses(
                            folders.find((f) => f.name === note.folder)
                              ?.color || "blue"
                          )}`}
                        >
                          {note.folder}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Lectures Tab */}
            {activeTab === "lectures" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-700">
                    Lecture Resources
                  </h2>
                  <button
                    onClick={() => setShowLectureForm(true)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Add Lecture
                  </button>
                </div>

                {showLectureForm && (
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-medium text-gray-700 mb-4">
                      Add Lecture Resource
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Title *
                        </label>
                        <input
                          type="text"
                          value={newLecture.title}
                          onChange={(e) =>
                            setNewLecture((prev) => ({
                              ...prev,
                              title: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Lecture title..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Type
                        </label>
                        <select
                          value={newLecture.type}
                          onChange={(e) =>
                            setNewLecture((prev) => ({
                              ...prev,
                              type: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="youtube">YouTube Video</option>
                          <option value="pdf">PDF Document</option>
                          <option value="link">External Link</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        URL/Link *
                      </label>
                      <input
                        type="url"
                        value={newLecture.url}
                        onChange={(e) =>
                          setNewLecture((prev) => ({
                            ...prev,
                            url: e.target.value,
                          }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="https://..."
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Folder
                      </label>
                      <select
                        value={newLecture.folder}
                        onChange={(e) =>
                          setNewLecture((prev) => ({
                            ...prev,
                            folder: e.target.value,
                          }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select folder...</option>
                        {folders.map((folder) => (
                          <option key={folder.id} value={folder.name}>
                            {folder.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex space-x-3">
                      <button
                        onClick={addLecture}
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                      >
                        Add Lecture
                      </button>
                      <button
                        onClick={() => setShowLectureForm(false)}
                        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {lectures.map((lecture) => (
                    <div
                      key={lecture.id}
                      className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-medium text-gray-800">
                          {lecture.title}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {lecture.date}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 mb-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            lecture.type === "youtube"
                              ? "bg-red-100 text-red-800"
                              : lecture.type === "pdf"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {lecture.type === "youtube"
                            ? "🎥"
                            : lecture.type === "pdf"
                            ? "📄"
                            : "🔗"}{" "}
                          {lecture.type}
                        </span>
                        {lecture.folder && (
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getColorClasses(
                              folders.find((f) => f.name === lecture.folder)
                                ?.color || "blue"
                            )}`}
                          >
                            {lecture.folder}
                          </span>
                        )}
                      </div>
                      <a
                        href={lecture.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 text-sm font-medium"
                      >
                        Open Resource →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Folders Tab */}
            {activeTab === "folders" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-700">
                    Organize Folders
                  </h2>
                  <button
                    onClick={() => setShowFolderForm(true)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Create Folder
                  </button>
                </div>

                {showFolderForm && (
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-medium text-gray-700 mb-4">
                      Create New Folder
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Folder Name *
                        </label>
                        <input
                          type="text"
                          value={newFolder.name}
                          onChange={(e) =>
                            setNewFolder((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Folder name..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Color
                        </label>
                        <div className="flex space-x-2">
                          {colors.map((color) => (
                            <button
                              key={color}
                              onClick={() =>
                                setNewFolder((prev) => ({ ...prev, color }))
                              }
                              className={`w-8 h-8 rounded-full border-2 ${
                                newFolder.color === color
                                  ? "border-gray-800"
                                  : "border-gray-300"
                              } ${getColorClasses(color).split(" ")[0]}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <button
                        onClick={addFolder}
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                      >
                        Create Folder
                      </button>
                      <button
                        onClick={() => setShowFolderForm(false)}
                        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {folders.map((folder) => (
                    <div
                      key={folder.id}
                      className={`border rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow ${getColorClasses(
                        folder.color
                      )}`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-medium">{folder.name}</h3>
                        <span className="text-xs opacity-75">
                          {folder.items} items
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm opacity-75">📁 Folder</span>
                        <button className="text-xs opacity-75 hover:opacity-100">
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Upload Tab */}
            {activeTab === "upload" && (
              <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-6">
                  Upload Files
                </h2>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                    accept=".pdf,.doc,.docx,.txt,.mp4,.mov,.jpg,.png"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <svg
                      className="mx-auto h-16 w-16 text-gray-400"
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
                    <p className="mt-4 text-lg text-gray-600">
                      Click to upload files
                    </p>
                    <p className="text-sm text-gray-500">
                      PDF, DOC, TXT, MP4, MOV, JPG, PNG up to 50MB
                    </p>
                  </label>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-700 mb-4">
                    Upload Options
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">📄</div>
                      <h4 className="font-medium text-gray-800">Documents</h4>
                      <p className="text-sm text-gray-500">
                        PDF, DOC, TXT files
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🎥</div>
                      <h4 className="font-medium text-gray-800">Videos</h4>
                      <p className="text-sm text-gray-500">MP4, MOV files</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🖼️</div>
                      <h4 className="font-medium text-gray-800">Images</h4>
                      <p className="text-sm text-gray-500">JPG, PNG files</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentManagement;
