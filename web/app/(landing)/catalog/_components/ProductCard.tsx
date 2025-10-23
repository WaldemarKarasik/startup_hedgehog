import { GetCatalogSuccess } from "@/src/lib/api-client";
import Link from "next/link";

export const ProductCard = ({
  product,
}: {
  product: GetCatalogSuccess["data"][number];
}) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <img src={`http://${product.images[0]}`} height={600} width={500} />
      <p>{product.name}</p>
    </Link>
  );
};
