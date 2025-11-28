export default function About() {
  return (
    <div className="bg-background">
      {/* Section 1: Page Header Strip */}
      <div className="w-full bg-[#F5F5F5]">
        <div className="container py-6 text-center">
          <h1 className="text-lg md:text-xl font-bold text-foreground uppercase">
            VỀ TIỆM HOA CÓ NÀNG
          </h1>
        </div>
      </div>

      {/* Section 2: Brand Introduction */}
      <section className="container py-12 md:py-16">
        <div className="w-full mx-auto text-left space-y-6">
          <p className="text-base md:text-lg">
            <span className="font-semibold italic">Tiệm hoa Có Nàng</span>{' '}
            là nơi lưu giữ những khoảnh khắc dịu dàng, nơi mỗi bó hoa được chọn lọc và chăm chút để kể một câu chuyện riêng.
          </p>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Tiệm hoa Có Nàng là một tiệm hoa online được tạo nên từ tình yêu dành cho cái đẹp và những khoảnh khắc dịu dàng trong đời sống. Chúng tôi chọn lựa những đóa hoa tươi theo mùa, kết hợp với phong cách thiết kế tối giản – tinh tế, để mỗi sản phẩm không chỉ là một bó hoa, mà là một cảm xúc được gửi gắm.
          </p>
        </div>
      </section>

      {/* Section 3: Hero Banner (Visual Break) */}
      <div className="w-full">
        <div className="container">
          <img
            src="https://res.cloudinary.com/djoyvs0e3/image/upload/v1763996942/04cab5b8-acff-40c4-a05e-7dc31a327097_th6hdi.jpg"
            alt="Banner flowers"
            className="w-full h-[220px] md:h-[320px] object-cover rounded-md"
          />
        </div>
      </div>

      {/* Section 4: Detailed Columns (stacked vertically) */}
      <section className="container py-12 md:py-16">
        <div className="w-full mx-auto space-y-10 text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#C08A92' }}>
              CÂU CHUYỆN KHỞI NGUỒN
            </h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed">
              Tiệm hoa Có Nàng được tạo nên từ niềm đam mê và tình yêu dành cho cái đẹp. Chúng tôi tin rằng sự tối giản và tinh tế trong thiết kế giúp tôn vinh vẻ đẹp tự nhiên của hoa, cùng với sự chăm chút trong từng chi tiết để mang đến sản phẩm độc đáo và đầy cảm xúc.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#C08A92' }}>
              SỨ MỆNH CỦA CHÚNG TÔI
            </h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed">
              Sứ mệnh của chúng tôi là mang đến những kết nối ấm áp giữa con người qua sắc hoa và hương hoa. Mỗi bó hoa là một thông điệp, và chúng tôi hy vọng giúp bạn gửi gắm những cảm xúc chân thành tới người thân yêu.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
