import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 z-30 flex h-16 w-full items-center justify-center bg-red-300 py-2 drop-shadow-md">
      <Link to="/" className="text-4xl font-bold tracking-wider">
        Navbar
      </Link>
    </nav>
  );
}

export default Navbar;
