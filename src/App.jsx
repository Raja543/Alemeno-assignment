import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import CourseList from "./pages/CourseList";
import CourseDetails from "./pages/CourseDetails";
import Navbar from "./components/Navbar";
import StudentDashboard from "./pages/StudentDashboard";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/course" />} />
        <Route path="/course" element={<CourseList />} />
        <Route path="/course/:courseId" element={<CourseDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
