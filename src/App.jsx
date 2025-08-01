import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navigation from "./components/Navigation";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import CreateStudyPlan from "./Pages/CreateStudyPlan";
import StudyPlans from "./Pages/StudyPlans";
import ContentManagement from "./Pages/ContentManagement";
import Flashcards from "./Pages/Flashcards";
import TodoList from "./Pages/TodoList";
import PomodoroTimer from "./Pages/PomodoroTimer";
import ProgressTracker from "./Pages/ProgressTracker";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Navigation />
          <main className="lg:ml-64 pt-16">
            <div className="p-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/create-plan" element={<CreateStudyPlan />} />
                <Route path="/study-plans" element={<StudyPlans />} />
                <Route path="/content" element={<ContentManagement />} />
                <Route path="/flashcards" element={<Flashcards />} />
                <Route path="/todo" element={<TodoList />} />
                <Route path="/pomodoro" element={<PomodoroTimer />} />
                <Route path="/progress" element={<ProgressTracker />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Profile />} />
              </Routes>
            </div>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
