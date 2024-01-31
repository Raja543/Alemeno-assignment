import React, { useState, useEffect } from "react";
import axios from "axios";

const StudentList = ({ courseId, onStudentClick }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/data`);
        // Concatenate all student names from all courses
        const allStudents = response.data.reduce((acc, course) => {
          return acc.concat(course.students.map((student) => student.name));
        }, []);

        setStudents(allStudents);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center my-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 my-4">Error: {error}</div>;
  }

  return (
    <ul className="list-disc pl-4">
      {students.map((student) => (
        <li
          key={student.email}
          className="cursor-pointer text-blue-500 hover:underline my-2"
          onClick={() => onStudentClick(student)}
        >
          {student.name}
        </li>
      ))}
    </ul>
  );
};

export default StudentList;
