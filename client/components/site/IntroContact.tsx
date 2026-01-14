export default function IntroContact() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              Tiệm hoa Có Nàng
            </h2>

            <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">
              Tại đây, chúng tôi trân quý từng nhành hoa, và cũng trân quý từng
              lời góp ý từ khách hàng. Mang đến sắc hoa tươi thắm cùng những
              trải nghiệm cảm xúc trọn vẹn và tinh tế nhất cho mỗi người yêu hoa
              chính là sứ mệnh của chúng tôi.
            </p>

            <p className="text-base md:text-lg text-foreground leading-relaxed">
              Dù bạn đang băn khoăn về cách chọn mẫu hoa phù hợp cho dịp kỷ
              niệm, cần tư vấn một thiết kế mang dấu ấn cá nhân, hay muốn chia
              sẻ cảm nhận về dịch vụ của chúng tôi, đừng ngần ngại liên hệ nhé.
              'Có Nàng' luôn sẵn lòng lắng nghe và đồng hành cùng bạn trao gửi
              yêu thương.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center">
            <div className="w-full rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://res.cloudinary.com/djoyvs0e3/image/upload/v1763996942/04cab5b8-acff-40c4-a05e-7dc31a327097_th6hdi.jpg"
                alt="Tiệm hoa Có Nàng flower arrangement"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
