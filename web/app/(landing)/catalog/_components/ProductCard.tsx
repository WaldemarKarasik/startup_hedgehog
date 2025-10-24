import { UserAvatar } from "@/app/_shared-components/UserAvatar";
import { GetCatalogSuccess } from "@/src/lib/api-client";
import Link from "next/link";
import { Avatar } from "primereact/avatar";
import { Rating } from "primereact/rating";

export const ProductCard = ({
  product,
}: {
  product: GetCatalogSuccess["data"][number];
}) => {
  return (
    <Link
      prefetch={false}
      href={`/product/${product.id}/${product.slug}`}
      className=" p-10 rounded-4xl bg-gray-100 hover:bg-gray-200 transition duration-200"
    >
      <img src={`http://${product.images[0]}`} className="rounded-2xl" />
      <div className="flex flex-wrap gap-1.5 items-center mt-3">
        <p className="text-lg font-semibold line-clamp-1">{product.name}</p>
        <p className="text-gray-500 text-sm font-medium">{product.category}</p>
      </div>

      <p className="text-gray-500 break-words line-clamp-2">
        {product.description}
      </p>
      {/* Tech stack */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {product.techStack.map((tech) => (
          <span key={tech} className="py-1.5 px-2 bg-slate-200 rounded-2xl ">
            {tech}
          </span>
        ))}
      </div>
      {/* Pricing */}
      <div className="mt-3 pt-2 space-y-2 border-t-2 border-primary-100">
        <p className="break-words ">
          <span className="font-medium">Стоимость кастомизации:</span>{" "}
          {product.customizationPrice}₽
        </p>
        <p className="break-words">
          <span className="font-medium">Revenue Share:</span>{" "}
          {product.revenueShare}% на {product.revenueShareDuration} месяцев
        </p>
      </div>
      {/* Developer */}
      <div className="flex-1 mt-3">
        <div className="flex items-center gap-1.5">
          {/* <img src={product.developer.avatar}/> */}
          <UserAvatar user={product.developer} />
          <p className="">
            {product.developer.firstName + " " + product.developer.lastName}
          </p>
          <Rating value={product.developer.rating} readOnly cancel={false} />
        </div>
      </div>
    </Link>
  );
};
