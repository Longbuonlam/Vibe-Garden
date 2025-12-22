import { useState, useMemo } from "react";
import { useSearchParams, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
}

const MOCK_DB: Product[] = [
  {
    id: "1",
    name: "H001 (15 bông/ bó)",
    price: 80000,
    description:
      "Bó hoa tươi mới với 15 bông hoa được chọn lọc tỉ mỉ, mang đến vẻ đẹp tự nhiên và thanh lịch. Phù hợp cho các dịp đặc biệt hay chỉ để trang trí không gian sống của bạn.",
    image_url:
      "https://res.cloudinary.com/djoyvs0e3/image/upload/v1764357873/h001_kbrakv.png",
  },
  {
    id: "2",
    name: "H002 (10 bông/ bó)",
    price: 100000,
    description:
      "Bó hoa thanh nhã với 10 bông hoa lựa chọn, đơn giản nhưng tinh tế. Thích hợp để gửi tặng người thân hoặc làm quà tặng sinh nhật.",
    image_url:
      "https://res.cloudinary.com/djoyvs0e3/image/upload/v1764357874/h002_yygrfl.png",
  },
  {
    id: "3",
    name: "H003 (10 bông/ bó)",
    price: 100000,
    description:
      "Tuyển tập những bông hoa tinh tế với thiết kế tối giản, thích hợp cho không gian hiện đại. Mỗi bó là một câu chuyện được kể qua sắc hoa.",
    image_url:
      "https://res.cloudinary.com/djoyvs0e3/image/upload/v1764357873/h003_i1xv3n.png",
  },
];

export default function ProductDetail() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id") || MOCK_DB[0].id;
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = useMemo(() => {
    return MOCK_DB.find((p) => p.id === productId) || MOCK_DB[0];
  }, [productId]);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image_url,
    });
    toast.success(`${product.name} đã được thêm vào giỏ hàng!`);
    setQuantity(1);
  };

  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Breadcrumb */}
      <div className="container py-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <NavLink to="/">Trang chủ</NavLink>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <NavLink to="/shop">Sản phẩm</NavLink>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Product Detail */}
      <section className="container py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column: Image */}
          <div className="flex items-center justify-center bg-secondary/20 rounded-lg overflow-hidden">
            <div className="w-full aspect-[4/5]">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col justify-start space-y-6">
            {/* Title */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-serif text-foreground">
                {product.name}
              </h1>
            </div>

            {/* Divider */}
            <div className="w-12 h-1" style={{ backgroundColor: "#C08A92" }}></div>

            {/* Price */}
            <div>
              <p className="text-2xl md:text-3xl font-bold" style={{ color: "#C08A92" }}>
                {product.price.toLocaleString("vi-VN")}đ
              </p>
            </div>

            {/* Description */}
            <div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Add to Cart Section */}
            <div className="pt-4 space-y-4">
              {/* Quantity */}
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium">Số lượng:</label>
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="px-3 py-2 text-muted-foreground hover:bg-secondary transition-colors"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                    className="w-12 text-center border-l border-r outline-none"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="px-3 py-2 text-muted-foreground hover:bg-secondary transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="w-full md:w-auto"
                style={{ backgroundColor: "#C08A92" }}
              >
                Thêm vào giỏ hàng
              </Button>
            </div>

            {/* Additional Info */}
            <div className="pt-8 border-t space-y-3 text-sm text-muted-foreground">
              <p>✓ Hoa tươi, được chọn lọc tỉ mỉ</p>
              <p>✓ Giao hàng nhanh chóng</p>
              <p>✓ Hỗ trợ khách hàng 24/7</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
