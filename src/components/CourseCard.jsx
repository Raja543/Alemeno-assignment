import React from "react";

const CourseCard = ({ course, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
      onClick={() => onClick(course)}
    >
      <img
        src={course.thumbnail}
        alt={course.name}
        className="w-full h-32 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{course.name}</h2>
        <p className="text-gray-700 mb-4">{course.description}</p>
        <p className="text-gray-500">Instructor: {course.instructor}</p>
        <p className="text-gray-500">Duration: {course.duration}</p>
        <p className="text-gray-500">Schedule: {course.schedule}</p>
        <p className="text-gray-500">Location: {course.location}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
