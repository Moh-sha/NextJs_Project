import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const Title = dynamic(() => import("../Layout/Title"), {
  ssr: false,
});

import { useAuth } from "./session/authcontext";
const Header = dynamic(() => import("../Layout/headerpage"), {
  ssr: false,
});
const Footer = dynamic(() => import("../Layout/footer"), {
  ssr: false,
});

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and password are required");
    } else if (!isValidEmail(email)) {
      setError("Invalid email address");
    } else {
      const res = await doSignIn(email, password);
      console.log(res);
    }
  };

  async function doSignIn(email, password) {
    try {
      const response = await axios.post(
        "http://localhost:3000/admin/signin",
        {
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          withCredentials: true,
        }
      );
      if (response.data === true) {
        console.log("cookie: " + document.cookie);
        login(email, document.cookie);
        router.push("./dashboard");
      } else {
        setError("Invalid user");
      }
      return response.data;
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  const isValidEmail = (email) => {
    const emailPattern = /^\S+@\S+\.\S+$/;
    return emailPattern.test(email);
  };

  return (
    <>
    <Title page="Login"> </Title>
      <Header></Header>
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-xs">
          <p className="text-4xl font-bold mb-4">Login</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                className="input input-bordered w-full"
                onChange={handleChangeEmail}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                className="input input-bordered w-full"
                onChange={handleChangePassword}
              />
            </div>
            <br />
            <a href="./Signup">Create An Account</a>

            {error && <p className="text-red-500">{error}</p>}
            <button className="btn btn-primary w-full" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
