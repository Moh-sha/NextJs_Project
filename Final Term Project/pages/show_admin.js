import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import FooterForPage from "../Layout/footer";
import HeaderForPage from "../Layout/headerpage";
import dynamic from "next/dynamic";
const Title = dynamic(() => import("../Layout/Title"), {
  ssr: false,
});
export default function GetUsers({ data }) {
  return (
    <>
      <HeaderForPage></HeaderForPage>
      <br />
      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th></th>
              <td>Admin Name</td>
              <td>Admin Email</td>
              <td>Admin Password</td>
              <td>Personal Indentification Number ID</td>
              <td>Admin Phone</td>
              <td>Admin Picture</td>

              <th></th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item.productID}>
                <td>{item.adminID}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>

                <td>{item.password}</td>
                <td>{item.personalIdentificationNumberID}</td>
                <td>{item.phone}</td>
                <td>{item.filename}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <FooterForPage></FooterForPage>
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/admin/getIndex");
  const data = await response.data;

  return { props: { data } };
}
