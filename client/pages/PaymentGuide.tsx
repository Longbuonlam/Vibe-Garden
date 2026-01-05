export default function PaymentGuide() {
  return (
    <div className="bg-background">
      {/* Guide Content */}
      <section className="container py-12 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Hướng dẫn thanh toán
          </h1>

          <div className="space-y-8 text-foreground leading-relaxed">
            {/* Introduction */}
            <div>
              <p>
                Với những đơn đặt hoa Online tại Tiệm hoa Có Nàng, quý khách hàng có hai sự lựa chọn về hình thức thanh toán. Cụ thể là thanh toán trực tiếp bằng tiền mặt khi nhận được sản phẩm hoặc thanh toán bằng hình thức chuyển khoản. Với bất kỳ hình thức thanh toán nào, Tiệm hoa Có Nàng luôn mong muốn khách hàng có được sự trải nghiệm mua hàng tốt nhất, thoải mái và yên tâm trong quá trình đặt hoa.
              </p>
            </div>

            {/* Cash Payment Section */}
            <div className="border-l-4 border-primary pl-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📌</span>
                <span>Thanh toán trực tiếp khi nhận được hoa</span>
              </h2>
              <p>
                Hình thức thanh toán trực tiếp khi nhận được hoa: Quý khách hàng vui lòng kiểm tra kỹ càng ngay khi nhận được hoa từ bạn giao hàng. Nếu hoa đúng như mẫu yêu cầu và còn tươi nguyên trong quá trình vận chuyển, thì lúc này quý khách mới thanh toán tiền cho bạn giao hàng.
              </p>
            </div>

            {/* Bank Transfer Section */}
            <div className="border-l-4 border-primary pl-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📌</span>
                <span>Thanh toán chuyển khoản</span>
              </h2>
              
              <p className="mb-6">
                Tiếp nhận được đơn đặt hoa từ quý khách hàng, Tiệm hoa Có Nàng sẽ nhận được hình thức thanh toán của quý khách trong đơn đặt hàng. Ngay sau đó, nhân viên tư vấn sẽ liên hệ trực tiếp đến quý khách hàng để hướng dẫn thanh toán bằng hình thức chuyển khoản. Quý khách sẽ được hướng dẫn thanh toán chuyển khoản qua các số tài khoản sau:
              </p>

              {/* Bank Account Info */}
              <div className="bg-secondary/20 p-6 rounded-lg mb-6 border border-secondary/40">
                <h3 className="font-semibold mb-4 text-foreground">Ngân Hàng Vietcombank:</h3>
                <ul className="space-y-2 ml-4">
                  <li>
                    <span className="font-medium">Tài khoản số:</span> 0451000464457
                  </li>
                  <li>
                    <span className="font-medium">Chi nhánh:</span> Thành Công – Hà Nội
                  </li>
                  <li>
                    <span className="font-medium">Chủ tài khoản:</span> Trần Văn Quân
                  </li>
                </ul>
              </div>

              <p className="mb-4">
                Ngay sau khi nhận được các khoản tiền thanh toán của quý khách hàng, các bạn hỗ trợ viên sẽ liên hệ thông báo ghi nhận số tiền đặt hoa. Nếu quý khách hàng có bất kỳ sự thay đổi nào trong đơn đặt hoa, xin vui lòng thông báo sớm cho bộ phận chăm sóc khách hàng để được hỗ trợ kịp thời và nhanh nhất.
              </p>
            </div>

            {/* Closing Message */}
            <div className="mt-12 pt-8 border-t">
              <p>
                Tiệm hoa Có Nàng cảm ơn quý khách hàng đã ghé thăm, tin tưởng và lựa chọn chúng tôi làm nơi đặt niềm tin hoàn thiện món quà tinh thần này. Chất lượng sản phẩm và quy trình phục vụ hỗ trợ khách hàng của Tiệm hoa Có Nàng mong sẽ mang lại trải nghiệm mua hàng tốt nhất cho quý khách!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
