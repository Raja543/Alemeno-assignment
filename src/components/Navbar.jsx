import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex items-center justify-center">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:underline">
            Course List
          </Link>
        </li>
        <li>
          <Link to="#" className="hover:underline">
            Course Details
          </Link>
        </li>
        <li>
          <Link to="#" className="hover:underline">
            Student List
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
