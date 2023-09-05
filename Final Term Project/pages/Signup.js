import { useState } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles
import dynamic from "next/dynamic";
const Title = dynamic(() => import("../Layout/Title"), {
  ssr: false,
});

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleChangeFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    if (
      !fullName ||
      !email ||
      !password ||
      !confirmPassword ||
      !phone ||
      !file
    ) {
      setError("All fields are required");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      try {
        postData();
        alert("Account Create Successfully!");
      } catch (e) {
        setError(e);
      }
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setPhone("");
      setFile(null);
      setError("");
    }
  };

  async function postData() {
    try {
      const formData = new FormData();
      formData.append("name", fullName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("phone", phone);
      formData.append("image", file);
      const response = await axios.post(
        "http://localhost:3000/admin/signup",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-semibold mb-4">Registration Form</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 border rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1">
            {" "}
            Name
          </label>
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleChangeFullName}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        {/* ... */}
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
        {/* ... */}
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block font-medium mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
        {/* ... */}
        <div className="mb-4">
          <label htmlFor="phone" className="block font-medium mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChangePhone}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
        {/* ... */}
        <div className="mb-4">
          <label htmlFor="myfile" className="block font-medium mb-1">
            Upload File
          </label>
          <input
            type="file"
            id="myfile"
            name="myfile"
            onChange={handleChangeFile}
            className="w-full"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
}
