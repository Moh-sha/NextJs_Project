import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import dynamic from "next/dynamic";
const Title = dynamic(() => import("../Layout/Title"), {
  ssr: false,
});

const Header = dynamic(() => import("../Layout/headerpage"), {
  ssr: false,
});
const NavigationPanel = dynamic(() => import("../Layout/navigation"), {
  ssr: false,
});
const FooterForPage = dynamic(() => import("../Layout/footer"), {
  ssr: false,
});

export default function DeleteAdmin() {
  const [deleteId, setDeleteId] = useState("");

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/admin/adminDelete/${deleteId}`
      );
      alert("Account deleted successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while deleting the account.");
    }
  };

  return (
    <>
      <Header></Header>
      <Title page="Delete"> </Title>
      <div className="p-8">
        <h2 className="text-xl font-bold mb-4">Delete Account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium">Delete ID:</label>
            <input
              className="mt-1 p-2 border rounded w-full"
              type="text"
              placeholder="Enter id"
              value={deleteId}
              onChange={(e) => setDeleteId(e.target.value)}
            />
          </div>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            type="button"
            onClick={handleDelete}
          >
            Delete
          </button>
        </form>

        <div className="mt-4">
          <Link href="./dashboard">
            <button className="btn btn-Ghost">Go Back</button>
          </Link>
        </div>
      </div>
      <br></br>

      <br></br>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <FooterForPage></FooterForPage>
    </>
  );
}
