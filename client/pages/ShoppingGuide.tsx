export default function ShoppingGuide() {
  return (
    <div className="bg-background">
      {/* Guide Content */}
      <section className="container py-12 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Hướng dẫn mua hàng
          </h1>

          <div className="space-y-8 text-foreground leading-relaxed">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-semibold flex-shrink-0">
                1
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">
                  Chọn loại hoa muốn mua
                </h2>
                <p>
                  Chọn loại hoa muốn mua, chọn số lượng, nhấn thêm vào giỏ hàng
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-semibold flex-shrink-0">
                2
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">
                  Xem giỏ hàng
                </h2>
                <p>
                  Nhấn xem giỏ hàng, tiếp tục nhấn chọn Đặt Hàng
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-semibold flex-shrink-0">
                3
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">
                  Kiểm tra thông tin
                </h2>
                <p>
                  Người dùng kiểm tra lại thông tin sản phẩm và số lượng sản phẩm, sau đó chọn Tiến Hành Đặt Hàng
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-semibold flex-shrink-0">
                4
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">
                  Nhập thông tin giao hàng
                </h2>
                <p>
                  Người dùng nhập thông tin giao hàng và địa chỉ giao hàng
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-semibold flex-shrink-0">
                5
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">
                  Hoàn tất đặt hàng
                </h2>
                <p>
                  Người dùng nhấn Đặt Hàng
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
