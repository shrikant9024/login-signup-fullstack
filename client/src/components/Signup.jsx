import React, { useState } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";
function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const history = useHistory();

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log({ name, email, password });
    try {
      const response = await axios.post("http://localhost:8000/signup", {
        name,
        email,
        password,
      });
      console.log("response succesfuul", response.data);
      window.location.href = "/login";
    } catch (error) {
      console.log("all the fields are required", error);
      throw error;
    }
    console.log({ name, password, email });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-300">
      <div className="bg-slate-400 rounded-[20px] w-[40vh] h-[50vh] flex flex-col items-start justify-start text-white relative p-8">
        <h1 className="text-4xl font-sans font-medium text-slate-800">
          Signup
        </h1>
        <form onSubmit={handleSignup}>
          <div className="mt-4 w-full">
            <div className="mb-4">
              <label htmlFor="name" className="block text-s text-slate-800">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border-none text-black mt-2 h-10 px-2 py-1 w-full rounded-lg"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-s text-slate-800">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-none text-black mt-2 h-10 px-2 py-1 w-full rounded-lg"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-s text-slate-800">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border-none text-2xl text-black mt-2 h-10 px-2 py-1 w-full rounded-lg"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="" className="text-slate-900 text-sm ">
                Already have an account?{" "}
                <span>
                  {" "}
                  <a href="/login" className="underline">
                    Sign in
                  </a>{" "}
                </span>
              </label>
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-rose-800 mt-2 flex justify-center text-white px-4 py-2 rounded-md"
              >
                Signup
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
