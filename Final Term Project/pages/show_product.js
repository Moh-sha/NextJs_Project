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
              <td>Product Name</td>
              <td>Product Code</td>
              <td>Admin ID</td>
              <td>Category</td>
              <td>Description</td>
              <td>Price</td>

              <th></th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item.productID}>
                <td>{item.adminID}</td>
                <td>{item.name}</td>
                <td>{item.code}</td>

                <td>{item.adminID}</td>
                <td>{item.category}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
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
  const response = await axios.get("http://localhost:3000/admin/getadmincrud");
  const data = await response.data;

  return { props: { data } };
}
