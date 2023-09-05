import React, { useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import Link from "next/link";
const Header = dynamic(() => import("../Layout/headerpage"), {
  ssr: false,
});
const NavigationPanel = dynamic(() => import("../Layout/navigation"), {
  ssr: false,
});
const FooterForPage = dynamic(() => import("../Layout/footer"), {
  ssr: false,
});
const Title = dynamic(() => import("../Layout/Title"), {
  ssr: false,
});

export default function ProductModify() {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const updatedProduct = {
      name: productName,
      code: productCode,
    };

    try {
      const response = await axios.put(
        `http://localhost:3000/admin/adminCrudUpdate/${productId}`,
        updatedProduct,
        {
          headers: {
            Authorization: `Bearer YOUR_ACCESS_TOKEN`, // Replace with your actual token
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
    <>
      <Header></Header>
      <div className="max-w-md mx-auto p-4">
        <h2 className="text-2xl font-bold">Product Modify</h2>
        <form onSubmit={handleFormSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block font-semibold mb-1">
              <b>Product ID:</b>
            </label>
            <input
              type="number"
              name="productId"
              placeholder="Enter Product ID"
              className="w-full p-2 border rounded"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
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
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1">
              <b>Code:</b>
            </label>
            <input
              type="text"
              name="code"
              placeholder="Enter Product code"
              className="w-full p-2 border rounded"
              value={productCode}
              onChange={(e) => setProductCode(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Update
          </button>
        </form>
        <div className="mt-4">
          <Link href="./dashboard">
            <button className="btn btn-ghost">Go Back</button>
          </Link>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <FooterForPage></FooterForPage>
    </>
  );
}
