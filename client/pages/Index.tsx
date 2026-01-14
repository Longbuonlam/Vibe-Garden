import Hero from "@/components/site/Hero";
import ProductCard from "@/components/site/ProductCard";
import { products as specialProducts } from "@/data/specialProducts";
import {
  BadgeCheck,
  Flower2,
  PackageCheck,
  RotateCcw,
  Star,
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

      {/* Purchase Policy / Trust Badges */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="bg-pink-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
              Chính sách mua hàng
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {/* Item 1: Quality */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-12 w-12 mb-4">
                  <BadgeCheck className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">100%</h3>
                <p className="text-sm text-muted-foreground">Hàng chất lượng</p>
              </div>

              {/* Item 2: Exchange/Return */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-12 w-12 mb-4">
                  <RotateCcw className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">Hỗ trợ</h3>
                <p className="text-sm text-muted-foreground">Đổi trả</p>
              </div>

              {/* Item 3: Fast Delivery */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-12 w-12 mb-4">
                  <Truck className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  Vận chuyển
                </h3>
                <p className="text-sm text-muted-foreground">Nhanh chóng</p>
              </div>

              {/* Item 4: Free Shipping */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-12 w-12 mb-4">
                  <PackageCheck className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  Miễn phí
                </h3>
                <p className="text-sm text-muted-foreground">
                  Vận chuyển
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="bg-pink-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-foreground mb-10">
              Tại sao nên chọn chúng tôi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <p className="text-foreground leading-relaxed">
                Tiệm hoa Có Nàng cam kết từng nhành hoa đều được tuyển chọn
                khắt khe từ những nhà vườn uy tín, đảm bảo độ tươi mới đạt
                chuẩn. Chúng tôi mang đến cho bạn những đóa hoa "tuyển chọn"
                chính hiệu, giữ trọn màu sắc rạng rỡ và hương thơm tự nhiên,
                giúp lan tỏa năng lượng tích cực đến không gian sống của bạn.
              </p>

              <p className="text-foreground leading-relaxed">
                Chúng tôi đặt trải nghiệm cảm xúc của khách hàng lên hàng đầu
                với tiêu chuẩn "3 KHÔNG": không sử dụng hoa cũ/héo, không dùng
                chất bảo quản hóa học gây hại và không rập khuôn mẫu mã đại
                trà. Mọi sản phẩm đều được kiểm soát nghiêm ngặt từ khâu xử lý
                gốc tại tiệm đến khi đóng gói để đảm bảo mỗi bó hoa khi đến tay
                bạn đều hoàn mỹ và bền lâu nhất.
              </p>

              <p className="text-foreground leading-relaxed">
                Sử dụng phong cách thiết kế hiện đại, tối giản nhưng đậm chất
                nghệ thuật, Tiệm hoa Có Nàng giúp mỗi sản phẩm trở thành một
                lời nhắn gửi tinh tế. Quy trình phối màu và chọn giấy gói được
                thực hiện thủ công chuyên nghiệp, không chỉ tôn lên vẻ đẹp
                nguyên bản của hoa mà còn thể hiện được gu thẩm mỹ độc bản và
                cá tính riêng biệt của người tặng.
              </p>

              <p className="text-foreground leading-relaxed">
                Chúng tôi hỗ trợ giao hàng siêu tốc tận cửa và đảm bảo đúng
                khung giờ "vàng" để món quà của bạn luôn là một bất ngờ trọn
                vẹn. Có Nàng sẵn sàng hỗ trợ đổi trả 1-1 hoặc điều chỉnh ngay
                lập tức nếu sản phẩm không đúng cam kết hoặc hư hỏng trong quá
                trình vận chuyển, mang lại sự an tâm và hài lòng tuyệt đối khi
                mua sắm tại tiệm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="bg-gradient-to-b from-pink-50 to-pink-100 rounded-2xl p-8 md:p-12">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center text-foreground mb-6">
                Đánh giá của khách hàng
              </h2>
              <div className="flex justify-center">
                <Flower2 className="h-8 w-8 text-primary" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Review Card 1 */}
              <div className="bg-white shadow-lg rounded-xl p-8">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-foreground text-center leading-relaxed mb-6">
                  "Mình vừa đặt một bó hoa thiết kế tại Tiệm hoa Có Nàng để
                  tặng sinh nhật bạn thân và thực sự rất hài lòng. Điều mình
                  ấn tượng nhất là phong cách gói hoa cực kỳ hiện đại,
                  'aesthetic' và lên ảnh rất xinh, khác hẳn với những kiểu bó
                  hoa đại trà ngoài chợ. Shop còn rất tinh tế khi chuẩn bị kèm
                  một tấm thiệp viết tay theo nội dung mình yêu cầu, nét chữ
                  rất đẹp và ấm áp. Bạn mình nhận được hoa khen mãi không thôi.
                  Chắc chắn mình sẽ ủng hộ Tiệm lâu dài cho các dịp sau!"
                </p>
                <p className="text-center font-bold text-foreground text-sm">
                  - Khách hàng thân thiết
                </p>
              </div>

              {/* Review Card 2 */}
              <div className="bg-white shadow-lg rounded-xl p-8">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-foreground text-center leading-relaxed mb-6">
                  "Là một người có thói quen mua hoa thả bình mỗi tuần, mình đã
                  trải nghiệm qua nhiều tiệm nhưng Tiệm hoa Có Nàng khiến mình
                  bất ngờ nhất. Dòng hoa thả bình của Tiệm được sơ chế cực kỳ
                  sạch sẽ, về chỉ việc cắm vào bình là xong. Hoa rất tươi, mình
                  để ở bàn làm việc mà sang ngày thứ 5 vẫn còn rạng rỡ và thơm
                  nhẹ. Với mức giá cực kỳ 'hạt dẻ' phù hợp với túi tiền sinh
                  viên và dân văn phòng mà chất lượng lại vượt mong đợi như thế
                  này thì thực sự rất hiếm. Dịch vụ giao hàng cũng rất đúng
                  giờ, hoa được bọc chống sốc kỹ nên lúc nhận không bị dập một
                  cánh nào."
                </p>
                <p className="text-center font-bold text-foreground text-sm">
                  - Khách hàng thân thiết
                </p>
              </div>

              {/* Review Card 3 */}
              <div className="bg-white shadow-lg rounded-xl p-8">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-foreground text-center leading-relaxed mb-6">
                  "Mình là người khá bận rộn nên rất ưu tiên việc đặt hàng
                  online nhanh chóng. Giao diện Website của Tiệm hoa Có Nàng
                  thực sự làm mình ấn tượng vì rất mượt, ảnh sản phẩm rõ nét và
                  quy trình thanh toán cực đơn giản. Lúc đầu cũng hơi lo vì mua
                  hoa online sợ hình một đằng hoa một nẻo, nhưng khi nhận hàng
                  thì bó hoa 'Đồng tiền' mình đặt còn đẹp hơn cả trong ảnh. Shop
                  đóng gói rất chắc chắn, có túi nước giữ ẩm ở gốc nên hoa đến
                  nơi vẫn tươi rói dù thời tiết Hà Nội đang khá nóng. Một điểm
                  cộng lớn cho sự chuyên nghiệp của các bạn sinh viên khởi
                  nghiệp!"
                </p>
                <p className="text-center font-bold text-foreground text-sm">
                  - Khách hàng thân thiết
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
