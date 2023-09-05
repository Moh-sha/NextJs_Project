import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function AllAdmin() {
  const [jsonData, setJsonData] = useState(null);
  const router = useRouter();
  const adminid = router.query.id;

  useEffect(() => {
    fetchData();
  }, [adminid]); // Watch for changes in adminid

  async function fetchData() {
    if (!adminid) {
      console.error("Admin ID is missing.");
      return; // Return early if adminid is not available
    }

    try {
      const response = await axios.get(
        // Ensure that the URL is correctly formed with the adminid
        "http://localhost:3000/admin/search/" + adminid,
        {
          withCredentials: true,
        }
      );
      const jsonData = response.data;
      console.log(jsonData);
      setJsonData(jsonData);
    } catch (error) {
      console.error("Error fetching admin data:", error);
      // Output more detailed error information, if available
      console.log("Error response:", error.response);
      setJsonData(null); // Clear jsonData to handle errors
    }
  }

  const printObject = (jsonData) => {
    return (
      <div>
        <h2>id: {jsonData.id}</h2>
        <h2>name: {jsonData.name}</h2>
        <h2>email: {jsonData.email}</h2>
      </div>
    );
  };

  return (
    <>{jsonData != null ? printObject(jsonData) : <p>Loading or Error</p>}</>
  );
}
