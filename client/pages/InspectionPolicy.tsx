export default function InspectionPolicy() {
  return (
    <div className="bg-background">
      {/* Policy Content */}
      <section className="container py-12 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Chính sách kiểm hàng
          </h1>

          <div className="space-y-8 text-foreground leading-relaxed">
            {/* Section I */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                I. Quyền lợi của khách hàng
              </h2>
              <p>
                Tại Tiệm hoa Có Nàng, chúng tôi cam kết bảo vệ quyền lợi của
                khách hàng khi đặt hoa. Dưới đây là chính sách kiểm hàng hỗ trợ
                khách hàng được kiểm tra và đồng kiểm với nhân viên giao hàng
                khi nhận hàng.
              </p>
            </div>

            {/* Section II */}
            <div>
              <h2 className="text-xl font-semibold mb-6">
                II. Quy trình kiểm hàng
              </h2>

              <div className="space-y-6">
                {/* Subsection 1 */}
                <div>
                  <h3 className="font-semibold mb-3">
                    1. Nhận hàng và kiểm tra
                  </h3>
                  <p className="mb-4">
                    Khi nhận đơn hàng từ nhân viên giao hàng, khách hàng được
                    phép mở ra để kiểm tra ngoại quan về sản phẩm trước khi
                    thanh toán.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>
                      <span className="font-medium">
                        – Xác nhận đúng sản phẩm:
                      </span>{" "}
                      Xem sản phẩm có đúng như mẫu hoa khách hàng đã đặt hay
                      không? Số lượng, loại hoa, giấy gói có giống với mô tả
                      không?
                    </li>
                    <li>
                      <span className="font-medium">
                        – Kiểm tra tình trạng:
                      </span>{" "}
                      Hoa có bị dập nát, gãy cành, héo úa trong quá trình vận
                      chuyển không?
                    </li>
                  </ul>
                </div>

                {/* Subsection 2 */}
                <div>
                  <h3 className="font-semibold mb-3">2. Xác nhận đồng kiểm</h3>
                  <p>
                    Khách hàng xác nhận đã kiểm tra hoa còn tươi, nguyên vẹn và
                    nhận đầy đủ sản phẩm (bao gồm thiệp, phụ kiện nếu có). Điều
                    này đảm bảo khách hàng sử dụng hết những quyền lợi được
                    hưởng trong chính sách đồng kiểm của Tiệm hoa Có Nàng trước
                    khi ký nhận.
                  </p>
                </div>

                {/* Subsection 3 */}
                <div>
                  <h3 className="font-semibold mb-3">
                    3. Phản hồi nếu có vấn đề
                  </h3>
                  <p>
                    Nếu khi đồng kiểm khách hàng thấy sản phẩm không đúng hoặc
                    có dấu hiệu hư hỏng, khách hàng có quyền từ chối nhận hàng
                    và yêu cầu đổi trả mà không mất phí giao hàng.
                  </p>
                </div>
              </div>
            </div>

            {/* Section III */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">III. Liên hệ</h3>
              <p className="mb-4">
                Để biết thêm thông tin chi tiết, xin vui lòng liên hệ với chúng
                tôi qua:
              </p>
              <ul className="space-y-2">
                <li>
                  <span className="font-medium">Hotline:</span> 0902189216
                </li>
                <li>
                  <span className="font-medium">Email:</span>{" "}
                  tiemhoaconang@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
