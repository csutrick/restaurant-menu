import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

import Auth from "../../utils/auth.js";

const LoginForm = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, loading }] = useMutation(LOGIN_USER);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      console.log(data);
      Auth.login(data.login.token);
      navigate("/");
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex w-96 flex-col items-center justify-center rounded-2xl bg-red-300 p-4 drop-shadow-lg">
      <h2 className="mb-6 whitespace-nowrap border-b-4 border-white px-6 pb-1 text-4xl font-bold tracking-wider text-white drop-shadow-md">
        Login Page
      </h2>
      <form
        className="flex-col items-start justify-center"
        onSubmit={handleFormSubmit}
      >
        {/* Email field */}
        <label
          className="mb-1 text-sm font-bold text-gray-700 drop-shadow-md"
          htmlFor="username"
        >
          Email:
        </label>
        <input
          className="mb-2 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow drop-shadow-md focus:outline-none"
          id="email"
          placeholder="Your email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
        {/* Password field */}
        <label
          className="text-sm font-bold text-gray-700 drop-shadow-md"
          htmlFor="password"
        >
          Password:
        </label>
        <input
          className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow drop-shadow-md focus:outline-none"
          id="password"
          placeholder="******"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
        {/* Login Button */}
        <div className="mt-8 flex w-full justify-center">
          <button
            className="rounded-lg bg-white px-8 py-2 text-lg font-bold text-gray-600 drop-shadow-md transition-all duration-100 ease-in hover:scale-105 hover:bg-gray-300 hover:drop-shadow-lg"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
      {loading && (
        <div className="text-lg font-bold tracking-wider text-white drop-shadow-md">
          Loading...
        </div>
      )}
      {error && (
        <div className="text-lg font-bold tracking-wider text-red-400">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default LoginForm;
