import Hero from "@/components/site/Hero";
import ProductCard from "@/components/site/ProductCard";
import { products as specialProducts } from "@/data/specialProducts";
import {
  BadgeCheck,
  Flower2,
  PackageCheck,
  RotateCcw,
  Truck,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Index() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <Hero />

      {/* Product Grid */}
      <section className="container py-16 md:py-24">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Mặt hàng nổi bật
          </h2>
          <NavLink
            to="/shop"
            className="text-primary text-sm md:text-base hover:underline"
          >
            Xem tất cả
          </NavLink>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {specialProducts.slice(0, 6).map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </section>

      {/* About */}
      <section className="border-y bg-white">
        <div className="container py-16 md:py-24 grid items-center gap-8 md:grid-cols-[auto_1fr]">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/70">
            <Flower2 className="h-6 w-6 text-accent-foreground" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              Về Tiệm hoa Có Nàng
            </h3>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              Tiệm hoa Có Nàng là một tiệm hoa online được tạo nên từ tình yêu
              dành cho cái đẹp và những khoảnh khắc dịu dàng trong đời sống.
              Chúng tôi chọn lựa những đóa hoa tươi theo mùa, kết hợp với phong
              cách thiết kế tối giản – tinh tế, để mỗi sản phẩm không chỉ là một
              bó hoa, mà là một cảm xúc được gửi gắm. Với sự chăm chút trong
              từng chi tiết và sự thấu hiểu trong từng câu chuyện khách hàng
              muốn gửi đi, Tiệm hoa Có Nàng mong muốn mang đến những kết nối ấm
              áp giữa con người qua sắc hoa và hương hoa.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
