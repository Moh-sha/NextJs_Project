import React, { useState } from "react";
import axios from "axios";
//import HeaderForPage from "../Layout/headerpage";
//import FooterForPage from "../Layout/footer";
import dynamic from "next/dynamic";
const Title = dynamic(() => import("../Layout/Title"), {
  ssr: false,
});
export default function ProductSearch() {
  const [searchId, setSearchId] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:3000/admin/admincrudsearch/${searchId}`
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
     
      <div className="p-4">
        {" "}
        
        <h2 className="text-2xl font-bold mb-4">Search Product by ID</h2>
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
              <span className="font-semibold">User ID:</span> {userData.productID}
            </p>
            <p>
              <span className="font-semibold">Name:</span> {userData.name}
            </p>
            <p>
              <span className="font-semibold">Product Code:</span> {userData.code}
            </p>
            <p>
              <span className="font-semibold">Product Category:</span>{" "}
              {userData.category}
            </p>
            <p>
              <span className="font-semibold">Product Price:</span> {userData.price}
            </p>
          </div>
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
     
    </>
  );
}
