import { getCurrentUser, serverFetch } from "@/src/lib/api-client";
import { MyProductsClient } from "./_components/MyProductsClient";
import { cookies } from "next/headers";
import { UserRoles } from "shared";
import { redirect } from "next/navigation";
import { fetchDeveloperProducts } from "@/src/hooks/products";

export default async function MyProductsPage() {
  const cookieStore = await cookies();

  const currentUser = await getCurrentUser(cookieStore);

  if (!currentUser || currentUser.role !== UserRoles.DEVELOPER) {
    return redirect("/dashboard");
  }
  const developerProducts = await fetchDeveloperProducts(currentUser.id);

  return <MyProductsClient products={developerProducts} />;
}
