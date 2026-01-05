export default function PrivacyPolicy() {
  return (
    <div className="bg-background">
      {/* Policy Content */}
      <section className="container py-12 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Chính sách bảo mật thông tin cá nhân
          </h1>

          <div className="space-y-8 text-foreground leading-relaxed">
            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                1. Mục đích và phạm vi thu thập thông tin
              </h2>
              <p>
                Việc thu thập dữ liệu trên website bao gồm: Họ tên, email, điện thoại, địa chỉ khách hàng trong mục liên hệ và giỏ hàng. Đây là các thông tin mà Tiệm hoa Có Nàng cần khách hàng cung cấp đầy đủ khi muốn mua sản phẩm để chúng tôi có thể liên hệ xác nhận lại nhằm đảm bảo quyền lợi cho khách hàng.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                2. Phạm vi sử dụng thông tin
              </h2>
              <p className="mb-4">
                Những thông tin mà khách hàng cung cấp sẽ được sử dụng vào mục đích:
              </p>
              <ul className="space-y-2 ml-4">
                <li>– Hỗ trợ hoàn thành giao dịch mua hoa và quà tặng.</li>
                <li>– Giải quyết khiếu nại, thắc mắc hoặc tư vấn về sản phẩm.</li>
                <li>– Cung cấp thông tin về các chương trình khuyến mãi, sản phẩm mới (nếu khách hàng đăng ký nhận tin).</li>
              </ul>
              <p className="mt-4">
                Chúng tôi cam kết không sử dụng thông tin cá nhân của khách hàng ngoài mục đích xác nhận và liên hệ có liên quan đến giao dịch tại Tiệm hoa Có Nàng.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                3. Thời gian lưu trữ thông tin
              </h2>
              <p>
                Thông tin cá nhân của khách hàng sẽ được lưu trữ cho đến khi khách hàng có yêu cầu hủy bỏ. Còn lại trong mọi trường hợp thông tin cá nhân sẽ được bảo mật trên máy chủ của Tiệm hoa Có Nàng.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                4. Đơn vị thu thập và quản lý thông tin
              </h2>
              <ul className="space-y-2 ml-4">
                <li>– Tiệm hoa Có Nàng</li>
                <li>– Địa chỉ: Số nhà 21, ngõ 92, đường Chùa Võ, Dương Nội, Hà Nội</li>
                <li>– Hotline: 0902189216</li>
                <li>– Email: tiemhoaconang@gmail.com</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                5. Phương tiện để người dùng tiếp cận và chỉnh sửa dữ liệu
              </h2>
              <p>
                Khách hàng có quyền yêu cầu kiểm tra, cập nhật, điều chỉnh hoặc hủy bỏ thông tin cá nhân của mình bằng cách liên hệ với ban quản trị website qua email: tiemhoaconang@gmail.com hoặc hotline: 0902189216.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                6. Cam kết bảo mật thông tin cá nhân
              </h2>
              <ul className="space-y-4 ml-4">
                <li>
                  – Thông tin cá nhân của khách hàng tại Tiệm hoa Có Nàng được cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân. Việc thu thập và sử dụng thông tin của mỗi khách hàng chỉ được thực hiện khi có sự đồng ý của khách hàng đó.
                </li>
                <li>
                  – Không sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên thứ 3 nào về thông tin cá nhân của khách hàng khi không có sự cho phép đồng ý từ khách hàng.
                </li>
                <li>
                  – Bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của khách hàng bao gồm thông tin hóa đơn kế toán chứng từ số hóa.
                </li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="mt-12 pt-8 border-t">
              <h2 className="text-xl font-semibold mb-4">
                7. Cơ chế giải quyết khiếu nại, tranh chấp
              </h2>
              <p>
                Tiệm hoa Có Nàng có trách nhiệm tiếp nhận và xử lý khiếu nại của khách hàng liên quan đến việc sử dụng thông tin cá nhân. Khi phát hiện thông tin cá nhân bị sử dụng sai mục đích hoặc phạm vi, khách hàng vui lòng gửi email khiếu nại đến tiemhoaconang@gmail.com hoặc gọi điện tới 0902189216 để được giải quyết và xử lý kịp thời.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
