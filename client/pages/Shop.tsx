import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/site/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { products2 } from "@/data/products2";

const ITEMS_PER_VIEW = 4;

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export default function Shop() {
  const [currentIndexFirst, setCurrentIndexFirst] = useState(0);
  const [currentIndexSecond, setCurrentIndexSecond] = useState(0);

  const handlePrevious = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    source: readonly Product[] = products as readonly Product[],
  ) => {
    setter((prev) =>
      prev === 0 ? Math.max(0, source.length - ITEMS_PER_VIEW) : prev - 1,
    );
  };

  const handleNext = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    source: readonly Product[] = products as readonly Product[],
  ) => {
    setter((prev) =>
      prev + ITEMS_PER_VIEW >= source.length
        ? 0
        : Math.min(prev + 1, source.length - ITEMS_PER_VIEW),
    );
  };

  const getVisibleProducts = (
    currentIndex: number,
    source: readonly Product[] = products as readonly Product[],
  ) => source.slice(currentIndex, currentIndex + ITEMS_PER_VIEW) as readonly Product[];

  const canShowPrevious = (currentIndex: number) => currentIndex > 0;
  const canShowNext = (currentIndex: number, source: readonly Product[] = products as readonly Product[]) =>
    currentIndex + ITEMS_PER_VIEW < source.length;

  const visibleProductsFirst = getVisibleProducts(currentIndexFirst, products);
  const visibleProductsSecond = getVisibleProducts(currentIndexSecond, products2);

  return (
    <div className="space-y-12 mt-16 mb-20">
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
              onClick={() => handlePrevious(setCurrentIndexSecond, products2)}
              disabled={!canShowPrevious(currentIndexSecond)}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background border-2 hover:bg-accent"
              onClick={() => handleNext(setCurrentIndexSecond, products2)}
              disabled={!canShowNext(currentIndexSecond, products2)}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
