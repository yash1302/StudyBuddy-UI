import React, { useState } from "react";

const Flashcards = () => {
  const [activeMode, setActiveMode] = useState("flashcards"); // flashcards, quiz
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResults, setQuizResults] = useState(null);

  const [flashcards, setFlashcards] = useState([
    {
      id: 1,
      question: "What is React?",
      answer:
        "React is a JavaScript library for building user interfaces, particularly single-page applications.",
      tags: ["important", "react", "frontend"],
      difficulty: "easy",
      category: "React Fundamentals",
    },
    {
      id: 2,
      question: "What is a Component in React?",
      answer:
        "A component is a reusable piece of UI that can accept props and return React elements.",
      tags: ["important", "react", "component"],
      difficulty: "medium",
      category: "React Fundamentals",
    },
    {
      id: 3,
      question: "What is the derivative of x²?",
      answer: "The derivative of x² is 2x.",
      tags: ["formula", "calculus", "mathematics"],
      difficulty: "easy",
      category: "Mathematics",
    },
    {
      id: 4,
      question: "What is Newton's First Law?",
      answer:
        "An object at rest stays at rest and an object in motion stays in motion unless acted upon by an external force.",
      tags: ["important", "physics", "newton"],
      difficulty: "medium",
      category: "Physics",
    },
    {
      id: 5,
      question: "What is a Hook in React?",
      answer:
        "Hooks are functions that allow you to use state and other React features in functional components.",
      tags: ["important", "react", "hooks"],
      difficulty: "medium",
      category: "React Fundamentals",
    },
  ]);

  const [newCard, setNewCard] = useState({
    question: "",
    answer: "",
    tags: [],
    difficulty: "medium",
    category: "",
  });

  const [showAddForm, setShowAddForm] = useState(false);
  const [newTag, setNewTag] = useState("");

  const availableTags = [
    "important",
    "formula",
    "revisit",
    "react",
    "frontend",
    "component",
    "hooks",
    "calculus",
    "mathematics",
    "physics",
    "newton",
  ];
  const categories = [
    "React Fundamentals",
    "Mathematics",
    "Physics",
    "Data Science",
    "Computer Science",
  ];

  const filteredCards = flashcards.filter((card) => {
    if (selectedTags.length === 0) return true;
    return selectedTags.some((tag) => card.tags.includes(tag));
  });

  const currentCard = filteredCards[currentCardIndex];

  const nextCard = () => {
    if (currentCardIndex < filteredCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setShowAnswer(false);
    }
  };

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setShowAnswer(false);
    }
  };

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    setCurrentCardIndex(0);
  };

  const addCard = () => {
    if (newCard.question && newCard.answer) {
      const card = {
        id: Date.now(),
        ...newCard,
        tags: newCard.tags,
      };
      setFlashcards([...flashcards, card]);
      setNewCard({
        question: "",
        answer: "",
        tags: [],
        difficulty: "medium",
        category: "",
      });
      setShowAddForm(false);
    }
  };

  const addTag = () => {
    if (newTag && !newCard.tags.includes(newTag)) {
      setNewCard((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag],
      }));
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove) => {
    setNewCard((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const startQuiz = () => {
    setQuizAnswers({});
    setQuizResults(null);
    setCurrentCardIndex(0);
  };

  const submitQuiz = () => {
    const results = {
      total: filteredCards.length,
      correct: 0,
      answers: quizAnswers,
    };

    filteredCards.forEach((card, index) => {
      if (quizAnswers[index] === card.answer) {
        results.correct++;
      }
    });

    setQuizResults(results);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "text-green-600 bg-green-100";
      case "medium":
        return "text-yellow-600 bg-yellow-100";
      case "hard":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Flashcards</h1>
          <p className="text-gray-600">
            Master your knowledge with interactive flashcards and quizzes
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveMode("flashcards")}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  activeMode === "flashcards"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                📚 Flashcards
              </button>
              <button
                onClick={() => setActiveMode("quiz")}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  activeMode === "quiz"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                🧠 Quiz Mode
              </button>
            </div>
            <button
              onClick={() => setShowAddForm(true)}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Add Card
            </button>
          </div>

          {/* Tag Filters */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Filter by Tags:
            </h3>
            <div className="flex flex-wrap gap-2">
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedTags.includes(tag)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {filteredCards.length}
              </div>
              <div className="text-sm text-blue-600">Total Cards</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {
                  filteredCards.filter((card) =>
                    card.tags.includes("important")
                  ).length
                }
              </div>
              <div className="text-sm text-green-600">Important</div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">
                {
                  filteredCards.filter((card) => card.tags.includes("formula"))
                    .length
                }
              </div>
              <div className="text-sm text-yellow-600">Formulas</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">
                {
                  filteredCards.filter((card) => card.tags.includes("revisit"))
                    .length
                }
              </div>
              <div className="text-sm text-purple-600">Revisit</div>
            </div>
          </div>
        </div>

        {/* Add Card Form */}
        {showAddForm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">
              Add New Flashcard
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Question *
                </label>
                <textarea
                  value={newCard.question}
                  onChange={(e) =>
                    setNewCard((prev) => ({
                      ...prev,
                      question: e.target.value,
                    }))
                  }
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your question..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Answer *
                </label>
                <textarea
                  value={newCard.answer}
                  onChange={(e) =>
                    setNewCard((prev) => ({ ...prev, answer: e.target.value }))
                  }
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter the answer..."
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={newCard.category}
                  onChange={(e) =>
                    setNewCard((prev) => ({
                      ...prev,
                      category: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select category...</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Difficulty
                </label>
                <select
                  value={newCard.difficulty}
                  onChange={(e) =>
                    setNewCard((prev) => ({
                      ...prev,
                      difficulty: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags
              </label>
              <div className="flex flex-wrap gap-2 mb-3">
                {newCard.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                  >
                    {tag}
                    <button
                      onClick={() => removeTag(tag)}
                      className="ml-2 text-blue-600 hover:text-blue-800"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Add a tag..."
                />
                <button
                  onClick={addTag}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={addCard}
                className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              >
                Add Card
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Flashcards Mode */}
        {activeMode === "flashcards" && filteredCards.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <div className="text-sm text-gray-500 mb-2">
                Card {currentCardIndex + 1} of {filteredCards.length}
              </div>
              <div className="flex justify-center space-x-2 mb-4">
                {currentCard.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                    currentCard.difficulty
                  )}`}
                >
                  {currentCard.difficulty}
                </span>
              </div>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-8 mb-8 min-h-64 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-medium text-gray-800 mb-4">
                    {showAnswer ? "Answer:" : "Question:"}
                  </h3>
                  <p className="text-lg text-gray-700">
                    {showAnswer ? currentCard.answer : currentCard.question}
                  </p>
                </div>
              </div>

              <div className="flex justify-center space-x-4 mb-8">
                <button
                  onClick={() => setShowAnswer(!showAnswer)}
                  className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  {showAnswer ? "Show Question" : "Show Answer"}
                </button>
              </div>

              <div className="flex justify-between items-center">
                <button
                  onClick={prevCard}
                  disabled={currentCardIndex === 0}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ← Previous
                </button>
                <button
                  onClick={nextCard}
                  disabled={currentCardIndex === filteredCards.length - 1}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Quiz Mode */}
        {activeMode === "quiz" && (
          <div className="bg-white rounded-lg shadow-md p-8">
            {!quizResults ? (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Quiz Mode
                  </h2>
                  <p className="text-gray-600">
                    Test your knowledge with these questions
                  </p>
                  <button
                    onClick={startQuiz}
                    className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Start Quiz
                  </button>
                </div>

                {filteredCards.length > 0 && (
                  <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-6">
                      <div className="text-sm text-gray-500 mb-2">
                        Question {currentCardIndex + 1} of{" "}
                        {filteredCards.length}
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{
                            width: `${
                              ((currentCardIndex + 1) / filteredCards.length) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-8 mb-8">
                      <h3 className="text-xl font-medium text-gray-800 mb-6">
                        {filteredCards[currentCardIndex].question}
                      </h3>
                      <textarea
                        value={quizAnswers[currentCardIndex] || ""}
                        onChange={(e) =>
                          setQuizAnswers((prev) => ({
                            ...prev,
                            [currentCardIndex]: e.target.value,
                          }))
                        }
                        rows="6"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Write your answer here..."
                      />
                    </div>

                    <div className="flex justify-between items-center">
                      <button
                        onClick={prevCard}
                        disabled={currentCardIndex === 0}
                        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        ← Previous
                      </button>

                      {currentCardIndex === filteredCards.length - 1 ? (
                        <button
                          onClick={submitQuiz}
                          className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                        >
                          Submit Quiz
                        </button>
                      ) : (
                        <button
                          onClick={nextCard}
                          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                        >
                          Next →
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Quiz Results
                </h2>
                <div className="bg-green-50 rounded-lg p-8 mb-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {quizResults.correct}/{quizResults.total}
                  </div>
                  <div className="text-lg text-green-600">
                    {Math.round(
                      (quizResults.correct / quizResults.total) * 100
                    )}
                    % Correct
                  </div>
                </div>
                <button
                  onClick={() => setQuizResults(null)}
                  className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  Take Quiz Again
                </button>
              </div>
            )}
          </div>
        )}

        {filteredCards.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-500">
              No flashcards found. Add some cards to get started!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Flashcards;
