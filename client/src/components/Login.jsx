import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      console.log("login okay", response.data);
      window.location.href = "/home";
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-300">
      <div className="bg-slate-400  rounded-[20px] w-[40vh] h-[40vh] flex flex-col items-start justify-start text-white relative p-8">
        <h1 className="text-4xl font-sans font-medium text-slate-800">
          Signup
        </h1>
        <form onSubmit={handlelogin}>
          <div className="mt-4 ">
            <div className="mb-4 ">
              <label htmlFor="name" className="block text-s text-slate-800">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className=" w-full border-none text-black mt-2 h-10 px-4 py-1  rounded-lg"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4 w-full">
              <label htmlFor="name" className="block text-s text-slate-800">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className=" border-none text-2xl text-black mt-2 h-10 px-2 py-1 rounded-lg"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center mt-4">
              <button className="bg-rose-800 mt-2 flex justify-center text-white px-4 py-2 rounded-md">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
