import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/site/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

const ITEMS_PER_VIEW = 4;

export default function Shop() {
  const [currentIndexFirst, setCurrentIndexFirst] = useState(0);
  const [currentIndexSecond, setCurrentIndexSecond] = useState(0);

  const handlePrevious = (setter) => {
    setter((prev) =>
      prev === 0 ? Math.max(0, products.length - ITEMS_PER_VIEW) : prev - 1,
    );
  };

  const handleNext = (setter) => {
    setter((prev) =>
      prev + ITEMS_PER_VIEW >= products.length
        ? 0
        : Math.min(prev + 1, products.length - ITEMS_PER_VIEW),
    );
  };

  const getVisibleProducts = (currentIndex) =>
    products.slice(currentIndex, currentIndex + ITEMS_PER_VIEW);
  const canShowPrevious = (currentIndex) => currentIndex > 0;
  const canShowNext = (currentIndex) =>
    currentIndex + ITEMS_PER_VIEW < products.length;

  const visibleProductsFirst = getVisibleProducts(currentIndexFirst);
  const visibleProductsSecond = getVisibleProducts(currentIndexSecond);

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Sản phẩm</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Khám phá vườn hoa tươi của Tiệm hoa Có Nàng.
        </p>
      </div>

      <div className="space-y-16">
        <div>
          <h2 className="text-2xl font-bold mb-6 ml-16">Hoa thả bình</h2>
          <div className="relative w-full px-16">
            <div className="grid grid-cols-4 gap-6">
              {visibleProductsFirst.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background border-2 hover:bg-accent"
              onClick={() => handlePrevious(setCurrentIndexFirst)}
              disabled={!canShowPrevious(currentIndexFirst)}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background border-2 hover:bg-accent"
              onClick={() => handleNext(setCurrentIndexFirst)}
              disabled={!canShowNext(currentIndexFirst)}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 ml-16">Bó hoa tươi</h2>
          <div className="relative w-full px-16">
            <div className="grid grid-cols-4 gap-6">
              {visibleProductsSecond.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background border-2 hover:bg-accent"
              onClick={() => handlePrevious(setCurrentIndexSecond)}
              disabled={!canShowPrevious(currentIndexSecond)}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background border-2 hover:bg-accent"
              onClick={() => handleNext(setCurrentIndexSecond)}
              disabled={!canShowNext(currentIndexSecond)}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
