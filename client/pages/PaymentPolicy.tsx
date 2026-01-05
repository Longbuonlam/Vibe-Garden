export default function PaymentPolicy() {
  return (
    <div className="bg-background">
      {/* Policy Content */}
      <section className="container py-12 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Chính sách thanh toán
          </h1>

          <div className="space-y-8 text-foreground leading-relaxed">
            {/* Section I */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                I. Thanh toán tiền mặt tại cửa hàng
              </h2>
              <p>
                Khách hàng có thể đến trực tiếp cửa hàng của Tiệm hoa Có Nàng để đặt hàng và thanh toán. Lưu ý, khách hàng cần thanh toán toàn bộ số tiền trước khi đặt hàng để đảm bảo quyền lợi cho cả hai bên.
              </p>
            </div>

            {/* Section II */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                II. Thanh toán tại địa điểm giao hàng
              </h2>
              <p>
                Nếu khách hàng không thể đến cửa hàng, chúng tôi cũng cung cấp dịch vụ giao hàng tận nơi. Trong trường hợp này, khách hàng cần đặt cọc trước 50% số tiền khi đặt hàng. Số tiền còn lại khách hàng sẽ thanh toán với nhân viên giao hàng khi nhận hoa.
              </p>
            </div>

            {/* Section III */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                III. Thanh toán bằng chuyển khoản
              </h2>
              <p className="mb-4">
                Đối với các khách hàng ở xa hay ngại di chuyển, chúng tôi cung cấp phương thức thanh toán bằng chuyển khoản ngân hàng. Khách hàng cần chuyển khoản cọc trước 50% số tiền khi đặt hàng, sau đó thanh toán nốt số tiền còn lại với nhân viên giao hàng. Hoặc thanh toán toàn bộ 100% số tiền đơn hàng. Thông tin chi tiết về tài khoản ngân hàng của Tiệm hoa Có Nàng như sau:
              </p>
              <ul className="ml-6 space-y-2 mb-4">
                <li>– Ngân hàng: [Tên Ngân Hàng]</li>
                <li>– Số tài khoản: [Số Tài Khoản]</li>
                <li>– Tên chủ tài khoản: [Tên Chủ Tài Khoản]</li>
                <li>– Chi nhánh: [Tên Chi Nhánh]</li>
              </ul>
              <p className="mb-4">
                Vui lòng chuyển khoản đúng số tiền và ghi rõ mã đơn hàng hoặc số điện thoại trong phần nội dung chuyển khoản. Chúng tôi sẽ xác nhận đơn hàng của bạn sau khi nhận được tiền cọc.
              </p>
              <p className="italic border-l-4 border-primary/30 pl-4">
                Lưu ý: Tiệm hoa Có Nàng sẽ không chịu trách nhiệm về sai sót trong quá trình chuyển khoản hoặc chuyển khoản sai thông tin, khách hàng phải làm việc với ngân hàng để được xử lý ổn thỏa.
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">
                Để biết thêm thông tin chi tiết, xin vui lòng liên hệ với chúng tôi qua:
              </h3>
              <ul className="space-y-2">
                <li>
                  <span className="font-medium">Hotline:</span> 0902189216
                </li>
                <li>
                  <span className="font-medium">Email:</span> tiemhoaconang@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
