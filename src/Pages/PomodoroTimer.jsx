import React, { useState, useEffect, useRef } from "react";

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("work"); // work, shortBreak, longBreak
  const [sessions, setSessions] = useState(0);
  const [completedSessions, setCompletedSessions] = useState(0);
  const [settings, setSettings] = useState({
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
    sessionsBeforeLongBreak: 4,
  });
  const [showSettings, setShowSettings] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            // Timer finished
            clearInterval(intervalRef.current);
            setIsRunning(false);

            // Play notification sound (if available)
            if (typeof window !== "undefined" && window.Notification) {
              new Notification("Pomodoro Timer", {
                body: `${
                  mode === "work" ? "Work session" : "Break session"
                } completed!`,
                icon: "/favicon.ico",
              });
            }

            // Auto-start next session
            handleSessionComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, mode]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(getTimeForMode(mode));
  };

  const getTimeForMode = (currentMode) => {
    switch (currentMode) {
      case "work":
        return settings.workTime * 60;
      case "shortBreak":
        return settings.shortBreakTime * 60;
      case "longBreak":
        return settings.longBreakTime * 60;
      default:
        return settings.workTime * 60;
    }
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    setTimeLeft(getTimeForMode(newMode));
    setIsRunning(false);
  };

  const handleSessionComplete = () => {
    if (mode === "work") {
      const newSessions = sessions + 1;
      setSessions(newSessions);
      setCompletedSessions((prev) => prev + 1);

      // Check if it's time for a long break
      if (newSessions % settings.sessionsBeforeLongBreak === 0) {
        switchMode("longBreak");
      } else {
        switchMode("shortBreak");
      }
    } else {
      // Break completed, start work session
      switchMode("work");
    }
  };

  const updateSettings = (newSettings) => {
    setSettings(newSettings);
    setTimeLeft(getTimeForMode(mode));
    setShowSettings(false);
  };

  const getModeColor = () => {
    switch (mode) {
      case "work":
        return "bg-red-500";
      case "shortBreak":
        return "bg-green-500";
      case "longBreak":
        return "bg-blue-500";
      default:
        return "bg-red-500";
    }
  };

  const getModeText = () => {
    switch (mode) {
      case "work":
        return "Work Session";
      case "shortBreak":
        return "Short Break";
      case "longBreak":
        return "Long Break";
      default:
        return "Work Session";
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Pomodoro Timer
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Timer */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-center">
                {/* Mode Indicator */}
                <div
                  className={`inline-block px-4 py-2 rounded-full text-white font-medium mb-6 ${getModeColor()}`}
                >
                  {getModeText()}
                </div>

                {/* Timer Display */}
                <div className="text-8xl font-bold text-gray-800 mb-8 font-mono">
                  {formatTime(timeLeft)}
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
                  <div
                    className={`h-3 rounded-full transition-all duration-1000 ${getModeColor()}`}
                    style={{
                      width: `${
                        ((getTimeForMode(mode) - timeLeft) /
                          getTimeForMode(mode)) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>

                {/* Controls */}
                <div className="flex justify-center space-x-4 mb-6">
                  {!isRunning ? (
                    <button
                      onClick={startTimer}
                      className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
                    >
                      Start
                    </button>
                  ) : (
                    <button
                      onClick={pauseTimer}
                      className="px-8 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors font-medium"
                    >
                      Pause
                    </button>
                  )}
                  <button
                    onClick={resetTimer}
                    className="px-8 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
                  >
                    Reset
                  </button>
                </div>

                {/* Mode Switcher */}
                <div className="flex justify-center space-x-2">
                  <button
                    onClick={() => switchMode("work")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      mode === "work"
                        ? "bg-red-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    Work
                  </button>
                  <button
                    onClick={() => switchMode("shortBreak")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      mode === "shortBreak"
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    Short Break
                  </button>
                  <button
                    onClick={() => switchMode("longBreak")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      mode === "longBreak"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    Long Break
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Session Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Session Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Session:</span>
                  <span className="font-medium">{sessions + 1}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Completed Sessions:</span>
                  <span className="font-medium text-green-600">
                    {completedSessions}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Next Long Break:</span>
                  <span className="font-medium">
                    {settings.sessionsBeforeLongBreak -
                      (sessions % settings.sessionsBeforeLongBreak)}{" "}
                    sessions
                  </span>
                </div>
              </div>
            </div>

            {/* Settings */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  Settings
                </h3>
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  {showSettings ? "Hide" : "Edit"}
                </button>
              </div>

              {showSettings ? (
                <SettingsForm
                  settings={settings}
                  onSave={updateSettings}
                  onCancel={() => setShowSettings(false)}
                />
              ) : (
                <div className="space-y-2 text-sm text-gray-600">
                  <div>Work: {settings.workTime} min</div>
                  <div>Short Break: {settings.shortBreakTime} min</div>
                  <div>Long Break: {settings.longBreakTime} min</div>
                  <div>
                    Sessions before long break:{" "}
                    {settings.sessionsBeforeLongBreak}
                  </div>
                </div>
              )}
            </div>

            {/* Tips */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Tips</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Focus on one task during work sessions</li>
                <li>• Take breaks to maintain productivity</li>
                <li>• Use long breaks for longer activities</li>
                <li>• Track your completed sessions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Settings Form Component
const SettingsForm = ({ settings, onSave, onCancel }) => {
  const [localSettings, setLocalSettings] = useState(settings);

  const handleSave = () => {
    onSave(localSettings);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Work Time (minutes)
        </label>
        <input
          type="number"
          min="1"
          max="60"
          value={localSettings.workTime}
          onChange={(e) =>
            setLocalSettings({
              ...localSettings,
              workTime: parseInt(e.target.value),
            })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Short Break (minutes)
        </label>
        <input
          type="number"
          min="1"
          max="30"
          value={localSettings.shortBreakTime}
          onChange={(e) =>
            setLocalSettings({
              ...localSettings,
              shortBreakTime: parseInt(e.target.value),
            })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Long Break (minutes)
        </label>
        <input
          type="number"
          min="1"
          max="60"
          value={localSettings.longBreakTime}
          onChange={(e) =>
            setLocalSettings({
              ...localSettings,
              longBreakTime: parseInt(e.target.value),
            })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Sessions before Long Break
        </label>
        <input
          type="number"
          min="1"
          max="10"
          value={localSettings.sessionsBeforeLongBreak}
          onChange={(e) =>
            setLocalSettings({
              ...localSettings,
              sessionsBeforeLongBreak: parseInt(e.target.value),
            })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex space-x-2">
        <button
          onClick={handleSave}
          className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Save
        </button>
        <button
          onClick={onCancel}
          className="flex-1 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
