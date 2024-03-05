import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Auth from "../../utils/auth";

function Footer() {
  const navigate = useNavigate();

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    navigate("/");
  };

  return (
    <footer className="flex h-72 w-full flex-col items-center justify-center bg-red-300 py-4">
      <div className="flex flex-row flex-nowrap items-center justify-center">
        {Auth.loggedIn() ? (
          <Link to="/login" className="text-2xl font-bold" onClick={logout}>
            Logout
          </Link>
        ) : (
          <Link to="/login" className="text-2xl font-bold">
            Login
          </Link>
        )}
      </div>
      <p className="mt-4 text-6xl font-bold tracking-wider">Footer</p>
    </footer>
  );
}

export default Footer;
