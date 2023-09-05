import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function CreateAccountPage() {
  const router = useRouter();
  const [firstName, setfname] = useState("");

  const [email, setemail] = useState("");

  const [password, setpassword] = useState("");

  const handleChangefname = (e) => {
    setfname(e.target.value);
  };

  const handleChangeemail = (e) => {
    setemail(e.target.value);
  };

  const handleChangepass = (e) => {
    setpassword(e.target.value);
  };

  function setvalue() {
    const DataofForm = {
      name: firstName,

      email: email,

      password: password,
    };
    return DataofForm;
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = setvalue();

    await ForSignUp(data);
  };

  async function ForSignUp(DataofForm) {
    try {
      const response = await axios.post(
        "http://localhost:3000/admin/signup",
        DataofForm
      );
      console.log(response.data);
      RegiEvent();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>
        <h2>Create Account </h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <b>Admin Name: </b>
            <input
              type="text"
              name="name"
              onChange={handleChangefname}
              placeholder="Enter Name"
              required
            />
          </div>
          <br></br>
          <div>
            <b>Admin Email: </b>
            <input
              type="text"
              name="email"
              required
              onChange={handleChangeemail}
              placeholder="Enter Email..."
            />
          </div>
          <br></br>
          <div>
            <b>Admin Password: </b>
            <input
              type="password"
              name="password"
              onChange={handleChangepass}
              placeholder="Enter password..."
              minLength="8"
              required
            />
          </div>
          <br></br>

          <button type="submit">Register</button>
        </form>
        <div>
          <Link href="/"></Link>
        </div>
      </div>
    </>
  );
}
