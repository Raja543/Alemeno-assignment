import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { courseId } = useParams();
  const [courseDetails, setCourseDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/data/${courseId}`
        );
        setCourseDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching course details:", error);
        setError("An error occurred while fetching course details.");
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mx-auto my-8 px-10">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img
          src={courseDetails.thumbnail}
          alt={courseDetails.name}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{courseDetails.name}</h2>
          <p className="text-gray-700 mb-4">{courseDetails.description}</p>
          <p className="text-gray-500">
            Instructor: {courseDetails.instructor}
          </p>
          <p className="text-gray-500">
            Enrollment Status: {courseDetails.enrollmentStatus}
          </p>
          <p className="text-gray-500">Duration: {courseDetails.duration}</p>
          <p className="text-gray-500">Schedule: {courseDetails.schedule}</p>
          <p className="text-gray-500">Location: {courseDetails.location}</p>

          {/* Display prerequisites */}
          {courseDetails.prerequisites && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Prerequisites:</h3>
              <ul>
                {courseDetails.prerequisites.map((prerequisite, index) => (
                  <li key={index}>{prerequisite}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Display syllabus */}
          {courseDetails.syllabus && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Syllabus:</h3>
              <ul>
                {courseDetails.syllabus.map((item) => (
                  <li key={item.week}>
                    <strong>Week {item.week}:</strong> {item.topic} -{" "}
                    {item.content}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
