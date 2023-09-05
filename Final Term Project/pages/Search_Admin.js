import React, { useState } from "react";
import axios from "axios";
import HeaderForPage from "../Layout/headerpage";
import FooterForPage from "../Layout/footer";
import Link from "next/link";
export default function Search_admin() {
  const [searchId, setSearchId] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:3000/admin/search/${searchId}`
      );
      setUserData(response.data);
    } catch (error) {
      if (error.response) {
        console.error("Server responded with status:", error.response.status);
        console.error("Error response data:", error.response.data);
      } else {
        console.error("Error:", error.message);
      }
      setUserData(null);
    }
  };

  return (
    <>
      <HeaderForPage></HeaderForPage>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Search Account by ID</h2>
        <form onSubmit={handleSubmit} className="mb-4">
          <div>
            <label className="block font-semibold">User ID: </label>
            <input
              type="text"
              placeholder="Enter User ID"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="border rounded-md p-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
          >
            Search
          </button>
        </form>
        {userData && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Search Result:</h3>
            <p>
              <span className="font-semibold">User ID:</span> {userData.adminID}
            </p>
            <p>
              <span className="font-semibold">Name:</span> {userData.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {userData.email}
            </p>
            <p>
              <span className="font-semibold">Password:</span>{" "}
              {userData.password}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {userData.phone}
            </p>
          </div>
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="mt-4">
        <Link href="./dashboard">
          <button className="btn btn-ghost">Go Back</button>
        </Link>
      </div>
      <br>
      </br>
      <br>
      </br>
      <br></br>
      <FooterForPage></FooterForPage>
    </>
  );
}
