export default function About() {
  return (
    <div className="bg-white">
      {/* Section 1: Intro (Image Left - Text Right) */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm aspect-square rounded-2xl overflow-hidden bg-pink-100 flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/djoyvs0e3/image/upload/v1768396544/logo_rbnnvz.jpg"
                  alt="Tiệm hoa Có Nàng signature bouquet"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                Về chúng tôi
              </h1>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Tiệm Hoa Có Nàng – một tiệm hoa thương mại điện tử được thành
                lập với sứ mệnh đơn giản: Mang những đóa hoa tươi rạng rỡ và
                tinh khôi nhất từ vườn ươm đến trực tiếp không gian sống và tâm
                hồn của mỗi khách hàng.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Tiệm Hoa Có Nàng không chỉ bán hoa; chúng tôi trao gửi những
                thông điệp yêu thương chân thành và liệu pháp 'chữa lành' nhẹ
                nhàng vào từng nhành hoa trao tay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Core Values (Images Left - Text Right) */}
      <section className="py-20 md:py-32 bg-pink-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Images */}
            <div className="flex flex-col gap-6 relative">
              <div className="w-full rounded-2xl overflow-hidden bg-gray-200 h-82">
                <img
                  src="https://res.cloudinary.com/djoyvs0e3/image/upload/v1768396804/image1_uuokj1.jpg"
                  alt="Fresh flowers from garden"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
                Giá trị cốt lõi
              </h2>

              <div className="space-y-10">
                {/* Value 1 */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Tươi Mới Từ Vườn Ươm
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Mọi đóa hoa đều được tuyển chọn kỹ lưỡng từ các nhà vườn uy
                    tín, đảm bảo độ tươi rạng rỡ và sức sống bền bỉ nhất. Chúng
                    tôi xây dựng niềm tin bằng cam kết về chất lượng hoa loại 1,
                    được nhập mới và sơ chế cẩn thận mỗi ngày.
                  </p>
                </div>

                {/* Value 2 */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Tận Tâm Trong Từng Thông Điệp
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Đặt cảm xúc và sự hài lòng của khách hàng làm trung tâm.
                    Chúng tôi nỗ lực cung cấp dịch vụ giao hoa hỏa tốc, chỉn chu
                    trong từng khâu đóng gói và hỗ trợ nhiệt thành để mỗi món
                    quà trao đi đều mang trọn vẹn tâm tình người tặng.
                  </p>
                </div>

                {/* Value 3 */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Thẩm Mỹ Và Tinh Tế
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Chúng tôi cam kết mang đến những mẫu hoa được thiết kế độc
                    bản, bắt kịp xu hướng hiện đại và tối giản. Mỗi sản phẩm là
                    sự kết hợp hài hòa giữa nghệ thuật sắp đặt và màu sắc, đảm
                    bảo mang lại trải nghiệm thẩm mỹ tuyệt vời nhất cho không
                    gian của bạn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Commitment (Text Left - Images Right) */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
                Cam kết
              </h2>

              <div className="space-y-10">
                {/* Commitment 1 */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Chất Lượng Tươi Mới Là Ưu Tiên
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Chúng tôi cam kết 100% hoa được tuyển chọn mới mỗi ngày,
                    KHÔNG sử dụng các hóa chất bảo quản độc hại gây ảnh hưởng
                    đến sức khỏe người dùng. Đảm bảo mỗi bó hoa khi trao tay bạn
                    luôn giữ được vẻ đẹp rạng rỡ, hương thơm tự nhiên và độ bền
                    tốt nhất.
                  </p>
                </div>

                {/* Commitment 2 */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Nguồn Gốc & Trách Nhiệm Cộng Đồng
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Chúng tôi làm việc trực tiếp với các nhà vườn uy tín, ưu
                    tiên những nguồn cung tuân thủ quy trình canh tác bền vững,
                    thân thiện với môi trường. Bên cạnh đó, "Có Nàng" cam kết sử
                    dụng các vật liệu bao bì dễ tái chế, góp phần giảm thiểu rác
                    thải nhựa. Lựa chọn chúng tôi là bạn đang ủng hộ một mô hình
                    kinh doanh tử tế và có trách nhiệm với hệ sinh thái.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Images */}
            <div className="flex flex-col gap-6 relative">
              <div className="w-full rounded-2xl overflow-hidden bg-gray-200 h-82">
                <img
                  src="https://res.cloudinary.com/djoyvs0e3/image/upload/v1768396805/image2_y45f3h.jpg"
                  alt="Fresh petals and quality flowers"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
