export default function SellerBuyerObligations() {
  return (
    <div className="bg-background">
      {/* Policy Content */}
      <section className="container py-12 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Nghĩa vụ của người bán và khách hàng
          </h1>

          <div className="space-y-8 text-foreground leading-relaxed">
            {/* Section I */}
            <div>
              <h2 className="text-xl font-semibold mb-6">
                I. NGHĨA VỤ CỦA NGƯỜI BÁN (Tiệm hoa Có Nàng)
              </h2>
              <ol className="space-y-4 ml-4 list-decimal">
                <li>
                  Tư vấn và chốt đơn đúng mẫu hoa khách chọn, đóng gói cẩn thận để đảm bảo hoa tươi và an toàn trong quá trình vận chuyển.
                </li>
                <li>
                  Hỗ trợ và tạo điều kiện tối đa để khách hàng nhận được hoa sớm nhất có thể theo đúng giờ hẹn.
                </li>
                <li>
                  Theo dõi sát sao đơn hàng, chủ động liên hệ xử lý ngay nếu quá trình giao hàng gặp sự cố, đảm bảo không lỡ việc của khách hàng.
                </li>
                <li>
                  Chịu trách nhiệm giải quyết các vấn đề phát sinh liên quan đến lỗi sản phẩm hoặc lỗi dịch vụ từ phía Tiệm.
                </li>
                <li>
                  Tư vấn, hướng dẫn khách hàng cách chăm sóc, bảo quản để hoa giữ được độ tươi lâu nhất.
                </li>
                <li>
                  Cung cấp hoa đúng thời hạn, đúng mẫu và số lượng đã thỏa thuận sau khi Người mua đã hoàn tất nghĩa vụ thanh toán.
                </li>
                <li>
                  Cung cấp đầy đủ hóa đơn bán lẻ, chứng từ thanh toán (nếu có yêu cầu) cho khách hàng.
                </li>
              </ol>
            </div>

            {/* Section II */}
            <div>
              <h2 className="text-xl font-semibold mb-6">
                II. NGHĨA VỤ CỦA KHÁCH HÀNG
              </h2>
              <ol className="space-y-4 ml-4 list-decimal">
                <li>
                  Thực hiện đúng các quy trình đặt hàng và nhận hàng do Tiệm quy định.
                </li>
                <li>
                  Thanh toán đầy đủ, đúng hạn số tiền theo đơn đặt hàng đã chốt.
                </li>
                <li>
                  Cung cấp thông tin nhận hàng chính xác (Tên, Số điện thoại, Địa chỉ, Giờ nhận) và hỗ trợ nghe máy khi shipper giao hàng đến.
                </li>
              </ol>
            </div>

            {/* Section III */}
            <div className="mt-12 pt-8 border-t">
              <h2 className="text-xl font-semibold mb-4">
                III. LIÊN HỆ
              </h2>
              <p className="mb-4">
                Để biết thêm thông tin chi tiết, xin vui lòng liên hệ với chúng tôi qua:
              </p>
              <ul className="space-y-2 ml-4">
                <li>– Tiệm hoa Có Nàng</li>
                <li>– Hotline: 0902189216</li>
                <li>– Email: tiemhoaconang@gmail.com</li>
                <li>– Địa chỉ: Số nhà 21, ngõ 92, đường Chùa Võ, Dương Nội, Hà Nội</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
