import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { useMemo } from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, name, price, image }: Product) {
  const { addItem, items, updateQuantity } = useCart();

  const cartItem = useMemo(
    () => items.find((item) => item.id === id),
    [items, id]
  );

  const currentQuantity = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    addItem({ id, name, price, image });
    toast.success(`${name} added to cart!`);
  };

  const handleIncrease = () => {
    updateQuantity(id, currentQuantity + 1);
  };

  const handleDecrease = () => {
    if (currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1);
    } else {
      updateQuantity(id, 0);
    }
  };

  return (
    <Card className="overflow-hidden group">
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-base">{name}</h3>
            <p className="text-sm text-muted-foreground">${price.toFixed(2)}</p>
          </div>
          {!cartItem ? (
            <Button size="sm" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          ) : (
            <div className="flex items-center gap-2 bg-primary/10 rounded-md px-2 py-1">
              <button
                onClick={handleDecrease}
                className="inline-flex items-center justify-center w-6 h-6 text-primary hover:bg-primary/20 rounded transition-colors"
              >
                −
              </button>
              <span className="w-6 text-center text-sm font-semibold text-primary">
                {currentQuantity}
              </span>
              <button
                onClick={handleIncrease}
                className="inline-flex items-center justify-center w-6 h-6 text-primary hover:bg-primary/20 rounded transition-colors"
              >
                +
              </button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
