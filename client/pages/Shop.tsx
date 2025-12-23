import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
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
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredProductsFirst = useMemo(
    () =>
      products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    [searchQuery],
  );

  const filteredProductsSecond = useMemo(
    () =>
      products2.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    [searchQuery],
  );

  const visibleProductsFirst = getVisibleProducts(currentIndexFirst, filteredProductsFirst as readonly Product[]);
  const visibleProductsSecond = getVisibleProducts(currentIndexSecond, filteredProductsSecond as readonly Product[]);

  return (
    <div className="space-y-12 mt-16 mb-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Sản phẩm</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Khám phá vườn hoa tươi của Tiệm hoa Có Nàng.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center px-4">
        <div className="relative w-full max-w-[500px]">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pr-12 rounded-full border-2 bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#C08A92] focus:ring-opacity-50 transition-all"
            style={{ borderColor: "#C08A92" }}
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
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
              onClick={() => handlePrevious(setCurrentIndexFirst, filteredProductsFirst as readonly Product[])}
              disabled={!canShowPrevious(currentIndexFirst)}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background border-2 hover:bg-accent"
              onClick={() => handleNext(setCurrentIndexFirst, filteredProductsFirst as readonly Product[])}
              disabled={!canShowNext(currentIndexFirst, filteredProductsFirst as readonly Product[])}
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
              onClick={() => handlePrevious(setCurrentIndexSecond, filteredProductsSecond as readonly Product[])}
              disabled={!canShowPrevious(currentIndexSecond)}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background border-2 hover:bg-accent"
              onClick={() => handleNext(setCurrentIndexSecond, filteredProductsSecond as readonly Product[])}
              disabled={!canShowNext(currentIndexSecond, filteredProductsSecond as readonly Product[])}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
