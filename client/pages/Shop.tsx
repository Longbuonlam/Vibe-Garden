import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/site/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

const ITEMS_PER_VIEW = 4;

export default function Shop() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, products.length - ITEMS_PER_VIEW) : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + ITEMS_PER_VIEW >= products.length
        ? 0
        : Math.min(prev + 1, products.length - ITEMS_PER_VIEW)
    );
  };

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + ITEMS_PER_VIEW
  );
  const canShowPrevious = currentIndex > 0;
  const canShowNext = currentIndex + ITEMS_PER_VIEW < products.length;

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Shop</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Browse our curated selection of fresh, seasonal bouquets.
        </p>
      </div>

      <div className="relative w-full px-16">
        <div className="grid grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background border-2 hover:bg-accent"
          onClick={handlePrevious}
          disabled={!canShowPrevious}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background border-2 hover:bg-accent"
          onClick={handleNext}
          disabled={!canShowNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
