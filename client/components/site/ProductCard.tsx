import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ name, price, image }: Product) {
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
          <Button size="sm">Add to Cart</Button>
        </div>
      </CardContent>
    </Card>
  );
}
