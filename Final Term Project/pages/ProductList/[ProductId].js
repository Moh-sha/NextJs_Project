import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { product } = router.query;

  return (
    <div>
      <h1>{product} Details</h1>
    </div>
  );
}
