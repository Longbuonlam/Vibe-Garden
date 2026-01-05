export default function DeliveryPolicy() {
  return (
    <div className="bg-background">
      {/* Policy Content */}
      <section className="container py-12 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Chính sách giao hàng
          </h1>

          <div className="space-y-8 text-foreground leading-relaxed">
            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                1. Phạm vi giao hàng
              </h2>
              <p>
                Để khách hàng có thể nhận hoa nhanh chóng và đảm bảo độ tươi,
                Tiệm hoa Có Nàng áp dụng dịch vụ giao hàng trong các quận nội
                thành Hà Nội. Nếu bạn đang ở khu vực ngoại thành hoặc các địa
                điểm xa hơn, vui lòng liên hệ với chúng tôi để được tư vấn
                phương án vận chuyển phù hợp nhất.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                2. Thời gian giao hàng
              </h2>
              <p>
                Chúng tôi hiểu rằng thời gian là yếu tố quan trọng để gửi trao
                yêu thương. Tiệm hoa Có Nàng cam kết giao hàng theo đúng khung
                giờ khách hàng đã chọn. Đối với các đơn hàng gấp, chúng tôi nỗ
                lực giao nhanh nhất trong vòng 1-2 giờ kể từ khi chốt đơn, giúp
                bạn kịp thời chuẩn bị cho các sự kiện hay dịp kỷ niệm quan
                trọng.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                3. Chi phí giao hàng
              </h2>
              <p>
                Phí giao hàng được tính dựa trên biểu phí thực tế của các ứng
                dụng vận chuyển (như Ahamove, GrabExpress...). Trước khi khách
                hàng hoàn thiện đơn hàng, chúng tôi sẽ thông báo chi phí giao
                hàng cụ thể để bạn nắm rõ. Chúng tôi luôn hỗ trợ tìm kiếm phương
                án ship tiết kiệm và an toàn nhất cho hoa.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                4. Trách nhiệm và bồi thường
              </h2>
              <p>
                Tiệm hoa Có Nàng cam kết giao sản phẩm đúng địa chỉ và trong
                tình trạng tươi đẹp, nguyên vẹn. Nếu có bất kỳ vấn đề nào về mất
                hàng, hoa bị dập nát hay hỏng hóc trong quá trình vận chuyển,
                chúng tôi sẽ chịu trách nhiệm xử lý (đổi mới hoặc hoàn tiền) cho
                khách hàng một cách nhanh chóng.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                5. Điều khoản bổ sung
              </h2>
              <p>
                Trong trường hợp bất khả kháng (thời tiết xấu, mưa bão, sự cố
                giao thông...), thời gian giao hàng có thể bị ảnh hưởng. Chúng
                tôi sẽ chủ động liên hệ thông báo cụ thể để khách hàng thông cảm
                và sắp xếp lại thời gian nhận hàng phù hợp.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mt-12 pt-8 border-t">
              <h2 className="text-xl font-semibold mb-4">6. Liên hệ</h2>
              <p className="mb-4">
                Chúng tôi luôn cập nhật tình trạng đơn hàng cho quý khách. Nếu
                có bất kỳ thay đổi nào, nhân viên sẽ gọi điện trực tiếp để thông
                báo.
              </p>
              <p className="mb-4">Mọi thắc mắc xin vui lòng liên hệ:</p>
              <ul className="space-y-2 ml-4">
                <li>– Tiệm hoa Có Nàng</li>
                <li>– Hotline: 0902189216</li>
                <li>– Email: tiemhoaconang@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
