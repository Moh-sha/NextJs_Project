import Link from "next/link";

export default function ProductList() {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        <li>
          <Link href="/ProductList/Rose">Rose</Link>
        </li>
        <li>
          <Link href="/ProductList/SunFlower">Sun Flower</Link>
        </li>
        <li>
          <Link href="/ProductList/BlueRose">Blue Rose</Link>
        </li>
        <li>
          <Link href="/ProductList/Golap">Golap</Link>
        </li>
      </ul>
    </div>
  );
}
