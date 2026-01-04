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
import { Star } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
}

interface Review {
  avatar_url: string;
  user_name: string;
  created_at: string;
  rating: number;
  comment: string;
}

const MOCK_DB: Product[] = [
  {
    id: "1",
    name: "H001 (15 bông/ bó)",
    price: 80,
    description:
      "Bó hoa tươi mới với 15 bông hoa được chọn lọc tỉ mỉ, mang đến vẻ đẹp tự nhiên và thanh lịch. Phù hợp cho các dịp đặc biệt hay chỉ để trang trí không gian sống của bạn.",
    image_url:
      "https://res.cloudinary.com/djoyvs0e3/image/upload/v1764357873/h001_kbrakv.png",
  },
  {
    id: "2",
    name: "H002 (10 bông/ bó)",
    price: 100,
    description:
      "Bó hoa thanh nhã với 10 bông hoa lựa chọn, đơn giản nhưng tinh tế. Thích hợp để gửi tặng người thân hoặc làm quà tặng sinh nhật.",
    image_url:
      "https://res.cloudinary.com/djoyvs0e3/image/upload/v1764357874/h002_yygrfl.png",
  },
  {
    id: "3",
    name: "H003 (10 bông/ bó)",
    price: 100,
    description:
      "Tuyển tập những bông hoa tinh tế với thiết kế tối giản, thích hợp cho không gian hiện đại. Mỗi bó là một câu chuyện được kể qua sắc hoa.",
    image_url:
      "https://res.cloudinary.com/djoyvs0e3/image/upload/v1764357873/h003_i1xv3n.png",
  },
  {
    id: "4",
    name: "H004 (10 bông/ bó)",
    price: 110,
    description:
      "Bó hoa độc đáo với 10 bông hoa được phối hợp hài hòa, mang đến vẻ đẹp rực rỡ và sống động. Lựa chọn hoàn hảo để làm nổi bật không gian của bạn.",
    image_url:
      "https://res.cloudinary.com/djoyvs0e3/image/upload/v1764357873/h004_zq01xa.png",
  },
  {
    id: "5",
    name: "H005",
    price: 100,
    description:
      "Bó hoa đa dạng với sự kết hợp của nhiều loại hoa khác nhau, tạo nên một tổng thể hài hòa và bắt mắt. Phù hợp cho mọi dịp lễ và sự kiện.",
    image_url:
      "https://res.cloudinary.com/djoyvs0e3/image/upload/v1764357873/h005_qgnff5.png",
  },
  {
    id: "6",
    name: "H006",
    price: 120,
    description:
      "Bó hoa sang trọng với thiết kế tinh xảo, mang đến vẻ đẹp quý phái và đẳng cấp. Lựa chọn lý tưởng để thể hiện tình cảm và sự trân trọng đối với người nhận.",
    image_url:
      "https://res.cloudinary.com/djoyvs0e3/image/upload/v1764357874/h006_pjqc2e.png",
  },
  {
    id: "7",
    name: "T001",
    price: 20,
    description:
      "Bó hoa tươi nhỏ gọn với thiết kế đơn giản, thích hợp để làm quà tặng hoặc trang trí bàn làm việc. Mỗi bông hoa được chọn lựa kỹ càng để đảm bảo độ tươi và đẹp.",
    image_url:
      "https://res.cloudinary.com/djoyvs0e3/image/upload/v1764357874/t001_jl9xzv.png",
  },
  {
    id: "8",
    name: "T002",
    price: 180,
    description:
      "Bó hoa tươi với thiết kế tinh tế, mang đến vẻ đẹp tự nhiên và thanh lịch. Phù hợp cho các dịp đặc biệt hay chỉ để trang trí không gian sống của bạn.",
    image_url:
      "https://res.cloudinary.com/djoyvs0e3/image/upload/v1764357874/t002_muf0q6.png",
  },
  {
    id: "9",
    name: "T003",
    price: 250,
    description:
      "Bó hoa tươi rực rỡ với sự kết hợp của nhiều loại hoa khác nhau, tạo nên một tổng thể hài hòa và bắt mắt. Phù hợp cho mọi dịp lễ và sự kiện.",
    image_url:
      "https://res.cloudinary.com/djoyvs0e3/image/upload/v1764357874/t003_udzmqo.png",
  },
  {
    id: "10",
    name: "T004",
    price: 500,
    description:
      "Bó hoa tươi sang trọng với thiết kế tinh xảo, mang đến vẻ đẹp quý phái và đẳng cấp. Lựa chọn lý tưởng để thể hiện tình cảm và sự trân trọng đối với người nhận.",
    image_url:
      "https://res.cloudinary.com/djoyvs0e3/image/upload/v1764357874/t004_srp2ek.png",
  },
  {
    id: "11",
    name: "T005",
    price: 450,
    description:
      "Bó hoa tươi độc đáo với 10 bông hoa được phối hợp hài hòa, mang đến vẻ đẹp rực rỡ và sống động. Lựa chọn hoàn hảo để làm nổi bật không gian của bạn.",
    image_url:
      "https://res.cloudinary.com/djoyvs0e3/image/upload/v1764357874/t005_ru12k0.png",
  },
  {
    id: "12",
    name: "T006",
    price: 800,
    description:
      "Bó hoa tươi lớn với thiết kế ấn tượng, thích hợp cho các sự kiện quan trọng hoặc làm quà tặng đặc biệt. Mỗi bông hoa được chăm sóc kỹ lưỡng để đảm bảo độ tươi lâu.",
    image_url:
      "https://res.cloudinary.com/djoyvs0e3/image/upload/v1764357875/t006_q4umrt.png",
  },
  {
    id: "13",
    name: "T007",
    price: 850,
    description:
      "Bó hoa tươi cao cấp với sự kết hợp tinh tế của các loại hoa quý, mang đến vẻ đẹp sang trọng và đẳng cấp. Lựa chọn hoàn hảo để thể hiện tình cảm sâu sắc và sự trân trọng.",
    image_url:
      "https://res.cloudinary.com/djoyvs0e3/image/upload/v1764357875/t007_wti3jo.png",
  },
];

const MOCK_REVIEWS: Review[] = [
  {
    avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anna",
    user_name: "Anna Nguyễn",
    created_at: "20/12/2024",
    rating: 5,
    comment:
      "Hoa rất tươi và đẹp! Giao hàng nhanh chóng, bó hoa được đóng gói cẩn thận. Tôi sẽ quay lại mua lần nữa!",
  },
  {
    avatar_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    user_name: "Marcus Trần",
    created_at: "18/12/2024",
    rating: 5,
    comment:
      "Tuyệt vời! Bó hoa chính xác như trong hình ảnh. Tình yêu của tôi rất hài lòng. Cảm ơn Tiệm hoa Có Nàng!",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }
        />
      ))}
    </div>
  );
}

function ReviewItem({ review }: { review: Review }) {
  return (
    <Card className="p-6 border">
      <div className="flex gap-4">
        <img
          src={review.avatar_url}
          alt={review.user_name}
          className="w-12 h-12 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-semibold text-foreground">
                {review.user_name}
              </p>
              <p className="text-xs text-muted-foreground">
                {review.created_at}
              </p>
            </div>
          </div>
          <div className="mt-2">
            <StarRating rating={review.rating} />
          </div>
          <p className="mt-3 text-sm text-foreground leading-relaxed">
            {review.comment}
          </p>
        </div>
      </div>
    </Card>
  );
}

function WriteReviewForm() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");

  // Display hovered rating if hovering, otherwise display selected rating
  const displayRating = hoveredRating || selectedRating;

  const handleSubmit = () => {
    toast.success("Cảm ơn bạn đã gửi đánh giá!");
    setSelectedRating(0);
    setComment("");
  };

  return (
    <Card className="p-6 border">
      <h3 className="text-lg font-semibold text-foreground mb-6">
        Gửi đánh giá của bạn
      </h3>

      <div className="space-y-6">
        {/* Rating Input */}
        <div>
          <label className="text-sm font-medium text-foreground block mb-3">
            Đánh giá của bạn
          </label>
          <div className="flex items-center gap-4">
            <div
              className="flex gap-2"
              onMouseLeave={() => setHoveredRating(0)}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setSelectedRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  className="focus:outline-none transition-transform hover:scale-110"
                >
                  <Star
                    size={28}
                    className={
                      star <= displayRating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                </button>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {displayRating}/5
            </span>
          </div>
        </div>

        {/* Comment Input */}
        <div>
          <label className="text-sm font-medium text-foreground block mb-3">
            Bình luận
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Chia sẻ cảm nhận..."
            rows={5}
            className="w-full px-4 py-3 border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#C08A92] focus:ring-opacity-50 resize-none"
          />
        </div>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          size="lg"
          className="w-full"
          style={{ backgroundColor: "#C08A92" }}
        >
          Gửi đánh giá
        </Button>
      </div>
    </Card>
  );
}

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
            <div
              className="w-12 h-1"
              style={{ backgroundColor: "#C08A92" }}
            ></div>

            {/* Price */}
            <div>
              <p
                className="text-2xl md:text-3xl font-bold"
                style={{ color: "#C08A92" }}
              >
                {product.price.toFixed(3)}đ
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
                    onChange={(e) =>
                      handleQuantityChange(parseInt(e.target.value) || 1)
                    }
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

      {/* Reviews Section */}
      <section className="bg-background">
        <div className="container py-12 md:py-16">
          <div className="space-y-8">
            {/* Section Header */}
            <div className="pb-2">
              <h2 className="text-2xl font-bold" style={{ color: "#C08A92" }}>
                Đánh giá từ khách hàng
              </h2>
            </div>

            {/* Review List */}
            <div className="space-y-6">
              {MOCK_REVIEWS.map((review, idx) => (
                <ReviewItem key={idx} review={review} />
              ))}
            </div>

            {/* Write Review Form */}
            <div className="pt-6 border-t">
              <WriteReviewForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
