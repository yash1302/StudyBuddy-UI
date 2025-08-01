import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout/>,
        children:[
            {path:"/login", element:<Login />},
            {path:"/signup", element:<Signup />},
            {path:"/dashboard", element:<Dashboard />},
            {path:"/create-plan", element:<CreateStudyPlan />},
            {path:"/study-plans", element:<StudyPlans />},
            {path:"/content", element:<ContentManagement />},
            {path:"/flashcards", element:<Flashcards />},
            {path:"/todo", element:<TodoList />},
            {path:"/pomodoro", element:<PomodoroTimer />},
            {path:"/progress", element:<ProgressTracker />},
            {path:"/profile", element:<Profile />},
            {path:"/settings", element:<Settings />}
        ]
    }
])