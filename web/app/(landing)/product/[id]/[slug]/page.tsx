import Footer from "@/app/(landing)/_components/Footer";
import Header from "@/app/(landing)/_components/Header";
import { UserAvatar } from "@/app/_shared-components/UserAvatar";
import { fetchProduct } from "@/src/hooks/products";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Chip } from "primereact/chip";
import { Divider } from "primereact/divider";
import { Image } from "primereact/image";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";

export default async function ProductPage(
  props: PageProps<"/product/[id]/[slug]">
) {
  const { id, slug } = await props.params;

  const product = await fetchProduct(id)
    .then((product) => {
      return (
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 bg-gray-50 p-2 sm:p-5">
            {/* Product */}
            <div className="bg-gray-100 p-5 md:p-10 rounded-4xl shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Product Info */}
                <div className="space-y-6">
                  {/* Product Header */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Tag
                        value={product.status}
                        severity={
                          product.status === "PUBLISHED"
                            ? "success"
                            : product.status === "DRAFT"
                              ? "warning"
                              : "secondary"
                        }
                      />
                      <Chip label={product.category} className="text-sm" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {product.name}
                    </h1>
                    <p className="text-gray-600 text-lg break-words">
                      {product.description}
                    </p>
                  </div>

                  {/* Developer Info & Product Details Side by Side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Developer Info */}
                    <Card className="shadow-sm">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900 mb-3">
                          Разработчик
                        </h3>
                        <div className="flex items-center gap-3">
                          <UserAvatar user={product.developer} />
                          <div>
                            <h4 className="font-medium text-gray-900">
                              {product.developer.firstName}{" "}
                              {product.developer.lastName}
                            </h4>
                            <div className="flex items-center gap-2 mt-1">
                              <Rating
                                value={product.developer.rating}
                                readOnly
                                cancel={false}
                              />
                              <span className="text-sm text-gray-600">
                                ({product.developer.rating})
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button
                          label="Contact Developer"
                          icon="pi pi-envelope"
                          className="p-button-outlined w-full"
                          size="small"
                        />
                      </div>
                    </Card>

                    {/* Product Details */}
                    <Card className="shadow-sm">
                      <div className="space-y-3">
                        <h3 className="font-semibold text-gray-900 mb-3">
                          Product Details
                        </h3>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Product ID</span>
                          <span className="font-mono text-sm">
                            {product.id}
                          </span>
                        </div>
                        <Divider className="my-2" />
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Created</span>
                          <span className="text-sm">
                            {new Date(product.createdAt).toLocaleDateString(
                              "ru"
                            )}
                          </span>
                        </div>
                        <Divider className="my-2" />
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Last Updated</span>
                          <span className="text-sm">
                            {new Date(product.updatedAt).toLocaleDateString(
                              "ru"
                            )}
                          </span>
                        </div>
                        {product.publishedAt && (
                          <>
                            <Divider className="my-2" />
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Published</span>
                              <span className="text-sm">
                                {new Date(
                                  product.publishedAt
                                ).toLocaleDateString()}
                              </span>
                            </div>
                          </>
                        )}
                      </div>
                    </Card>
                  </div>

                  {/* Pricing & Actions */}
                  <Card className="shadow-sm">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5">
                        <span className="text-2xl font-bold text-primary">
                          Стоимость {product.customizationPrice}₽
                        </span>
                        <span className="text-2xl font-bold text-primary">
                          Revenue Share {product.revenueShare}%
                        </span>
                        <span className="text-2xl font-bold text-primary">
                          Длительность Revenue Share{" "}
                          {product.revenueShareDuration} месяцев
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button
                          label="Get Started"
                          icon="pi pi-shopping-cart"
                          className="flex-1"
                          size="large"
                        />
                        <Button
                          label="View Documentation"
                          icon="pi pi-book"
                          className="p-button-outlined flex-1"
                          size="large"
                        />
                      </div>
                    </div>
                  </Card>

                  {/* Links */}
                  <Card title="Ссылки" className="shadow-sm">
                    <div className="flex flex-wrap gap-2">
                      {product.githubUrl && (
                        <Button
                          icon="pi pi-github"
                          label="GitHub"
                          className="p-button-outlined p-button-secondary"
                          onClick={() =>
                            window.open(product.githubUrl!, "_blank")
                          }
                        />
                      )}
                      {product.demoUrl && (
                        <Button
                          icon="pi pi-external-link"
                          label="Live Demo"
                          className="p-button-outlined p-button-help"
                          onClick={() =>
                            window.open(product.demoUrl!, "_blank")
                          }
                        />
                      )}
                      {product.videoUrl && (
                        <Button
                          icon="pi pi-play"
                          label="Video"
                          className="p-button-outlined p-button-warning"
                          onClick={() =>
                            window.open(product.videoUrl!, "_blank")
                          }
                        />
                      )}
                    </div>
                  </Card>
                </div>

                {/* Right Column - Features & Additional Content */}
                <div className="space-y-6 self-end">
                  {/* Features */}
                  <Card title="Изображения" className="shadow-sm">
                    <div className="grid auto-cols-max grid-flow-col overflow-auto gap-10">
                      {product.images.map((img) => (
                        <Image
                          key={img}
                          src={`http://${img}`}
                          alt="продукт"
                          width="500"
                        />
                      ))}
                    </div>
                  </Card>

                  {/* Technical Specifications */}
                  <Card title="Технические детали" className="shadow-sm">
                    <div className="grid md:grid-cols-[max-content_auto] gap-x-5 gap-y-3 items-center">
                      <p className="font-semibold text-lg ">
                        Разработчик указал технологии
                      </p>
                      <div className="flex flex-wrap items-center gap-3">
                        {product.techStack.map((tech) => (
                          <Chip label={tech} className="text-sm" />
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      );
    })
    .catch((err) => {
      return (
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 bg-gray-50">
            <div>Не удалось загрузить продукт</div>;
          </main>
          <Footer />
        </div>
      );
    });
  return product;
}
