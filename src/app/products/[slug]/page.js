import ProductHero from "@/components/Products/ProductHero";
import { productsData } from "@/lib/productsData";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const product = productsData[slug];
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.modelName} - ${product.subcategory} | Sanma`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  // Only generate static params for dynamic routes (not ocula and yoko-nevu)
  return [
    { slug: "capla" },
    { slug: "glo-i" },
    { slug: "vispro" },
    { slug: "crisp-i" },
  ];
}

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = productsData[slug];

  if (!product) {
    return (
      <div className="w-full py-32 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Product Not Found</h1>
        <p className="text-gray-600 mt-4">
          The product you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  return <ProductHero productData={product} />;
}
