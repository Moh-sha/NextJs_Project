import React, { useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
const Title = dynamic(() => import("../Layout/Title"), {
  ssr: false,
});

export default function ProductModify() {
  //const [message, setMessage] = useState("");
  //const [error, setError] = useState("");
  const [adminId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [email, setProductCode] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const updatedProduct = {
      name: productName,
      email: email,
    };

    try {
      const response = await axios.put(
        `http://localhost:3000/admin/adminUpdate/${adminId}`,
        updatedProduct,
        {
          headers: {
            Authorization: `Bearer YOUR_ACCESS_TOKEN`,
          },
        }
      );

      if (response.data.message) {
        setMessage("Product updated successfully");
        setError("");
      } else {
        setError("Error updating product");
        setMessage("");
      }
    } catch (error) {
      console.error("Error sending data to the server:", error);
      setMessage("");
      setError("Error updating product");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold">Admin Modify</h2>
      <form onSubmit={handleFormSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block font-semibold mb-1">
            <b>Admin ID:</b>
          </label>
          <input
            type="number"
            name="productId"
            placeholder="Enter Product ID"
            className="w-full p-2 border rounded"
            value={adminId}
            onChange={(e) => setProductId(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">
            <b>Name:</b>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Product Name"
            className="w-full p-2 border rounded"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">
            <b>Email :</b>
          </label>
          <input
            type="text"
            name="code"
            placeholder="Enter Product code"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setProductCode(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
}
