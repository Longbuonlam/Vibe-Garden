import { useState, useMemo } from "react";
import ProductCard from "@/components/site/ProductCard";
import { Pagination } from "@/components/ui/pagination";
import { products } from "@/data/products";

const PRODUCTS_PER_PAGE = 6;

export default function Shop() {
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    return products.slice(startIndex, endIndex);
  }, [currentPage]);

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Shop</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Browse our curated selection of fresh, seasonal bouquets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="py-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
