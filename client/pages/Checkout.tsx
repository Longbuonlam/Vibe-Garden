import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { CheckCircle, ArrowRight, QrCode } from "lucide-react";

export default function Checkout() {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderTotal, setOrderTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">
            Giỏ hàng của bạn đang trống
          </h1>
          <Button onClick={() => navigate("/shop")}>Quay lại cửa hàng</Button>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="text-center space-y-6 max-w-md">
          <div className="flex justify-center">
            <CheckCircle className="h-16 w-16 text-green-600" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">
              Đơn hàng đã được đặt!
            </h1>
            <p className="text-lg text-muted-foreground">
              Hoa đẹp của bạn đang trên đường đến!
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 space-y-2 text-sm text-left">
            <div>
              <p className="text-muted-foreground">Mã đơn hàng:</p>
              <p className="font-semibold">
                #ORD{Math.floor(Math.random() * 1000000)}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Tổng số tiền:</p>
              <p className="font-semibold text-lg">{orderTotal.toFixed(3)}đ</p>
            </div>
            <div>
              <p className="text-muted-foreground">Thời gian giao hàng:</p>
              <p className="font-semibold">2-3 Ngày</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Bạn sẽ nhận được email xác nhận với chi tiết đơn hàng của mình.
          </p>
          <Button onClick={() => navigate("/")} className="w-full">
            Tiếp tục mua sắm
          </Button>
        </div>
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.zipCode
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsProcessing(true);

    try {
      // Build request payload matching server `OrderRequestBody`
      const subtotal = total;
      const tax = +(total * 0.1).toFixed(2);
      const finalTotal = total;

      const payload = {
        shippingInfo: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          district: formData.state, // server expects `district`
          zipCode: formData.zipCode,
        },
        cartItems: items.map((it) => ({
          id: it.id,
          name: it.name,
          price: it.price,
          quantity: it.quantity,
          image: it.image,
        })),
        subtotal,
        tax,
        total: finalTotal,
      };

      const resp = await fetch(
        "https://vibe-garden.onrender.com/api/place-order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      const data = await resp.json().catch(() => null);

      if (!resp.ok || !data || data.success === false) {
        const msg = data?.error || data?.message || "Failed to place order";
        throw new Error(msg);
      }

      toast.success("Order placed successfully!");
      setOrderTotal(finalTotal);
      clearCart();
      setOrderPlaced(true);
    } catch (error) {
      const message =
        (error as any)?.message || "Payment failed. Please try again.";
      toast.error(message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Thanh toán</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Thông tin giao hàng</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="Họ"
                value={formData.firstName}
                onChange={handleChange}
                disabled={isProcessing}
                required
                className="px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Tên"
                value={formData.lastName}
                onChange={handleChange}
                disabled={isProcessing}
                required
                className="px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              disabled={isProcessing}
              required
              className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Số điện thoại"
              value={formData.phone}
              onChange={handleChange}
              disabled={isProcessing}
              className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Địa chỉ</h2>
            <input
              type="text"
              name="address"
              placeholder="Số nhà, tên đường"
              value={formData.address}
              onChange={handleChange}
              disabled={isProcessing}
              required
              className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="city"
                placeholder="Tỉnh/Thành phố"
                value={formData.city}
                onChange={handleChange}
                disabled={isProcessing}
                required
                className="px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="text"
                name="state"
                placeholder="Quận/Huyện"
                value={formData.state}
                onChange={handleChange}
                disabled={isProcessing}
                required
                className="px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <input
              type="text"
              name="zipCode"
              placeholder="Note bóng kính"
              value={formData.zipCode}
              onChange={handleChange}
              disabled={isProcessing}
              required
              className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/cart")}
              disabled={isProcessing}
              className="flex-1"
            >
              Quay lại giỏ hàng
            </Button>
            <Button type="submit" disabled={isProcessing} className="flex-1">
              {isProcessing ? "Đang xử lý..." : "Đặt hàng"}
              {!isProcessing && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </div>
        </form>

        <div className="lg:col-span-1">
          <div className="border border-border rounded-lg p-6 space-y-4 sticky top-24">
            <h2 className="text-xl font-semibold">Thông tin đơn hàng</h2>

            <div className="space-y-3 max-h-48 overflow-y-auto border-t border-border pt-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {item.name} x {item.quantity}
                  </span>
                  <span className="font-medium">
                    {(item.price * item.quantity).toFixed(3)}đ
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Số tiền tạm tính:</span>
                <span>{total.toFixed(3)}đ</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Phí vận chuyển:</span>
                <span>Miễn phí</span>
              </div>
              {/* <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax (10%):</span>
                <span>{(total * 0.1).toFixed(3)}đ</span>
              </div> */}
            </div>

            <div className="border-t border-border pt-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Tổng tiền:</span>
                <span>{total.toFixed(3)}đ</span>
              </div>
            </div>

            {/* Payment Methods Section */}
            <div className="my-6 space-y-4">
              <h3 className="text-lg font-semibold">Phương thức thanh toán</h3>

              {/* Radio Option 1: COD */}
              <div className="flex items-start gap-3">
                <input
                  type="radio"
                  id="payment-cod"
                  name="payment-method"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mt-1 h-4 w-4 cursor-pointer accent-primary"
                />
                <label htmlFor="payment-cod" className="flex-1 cursor-pointer">
                  <span className="block font-bold text-foreground">
                    Thanh toán khi nhận hàng
                  </span>
                </label>
              </div>

              {/* COD Description Box - Show when COD is selected */}
              {paymentMethod === "cod" && (
                <div className="ml-7 bg-gray-100 rounded-md p-3 mt-2">
                  <p className="text-sm text-gray-600">
                    Trả tiền mặt khi giao hàng.
                  </p>
                </div>
              )}

              {/* Radio Option 2: Bank Transfer / QR */}
              <div className="flex items-start gap-3">
                <input
                  type="radio"
                  id="payment-bank"
                  name="payment-method"
                  value="bank"
                  checked={paymentMethod === "bank"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mt-1 h-4 w-4 cursor-pointer accent-primary"
                />
                <label htmlFor="payment-bank" className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <span className="block font-bold text-foreground">
                      Chuyển khoản ngân hàng (Quét mã QR)
                    </span>
                    <QrCode className="h-4 w-4 text-primary" />
                  </div>
                </label>
              </div>

              {/* QR Code Section - Show when Bank Transfer is selected */}
              {paymentMethod === "bank" && (
                <div className="ml-7 border border-pink-200 rounded-lg p-4 mt-3 bg-pink-50">
                  <div className="flex justify-center mb-4">
                    <div className="w-32 h-32 bg-gray-200 rounded-md overflow-hidden flex items-center justify-center">
                      <img
                        src="https://res.cloudinary.com/djoyvs0e3/image/upload/v1763996942/04cab5b8-acff-40c4-a05e-7dc31a327097_th6hdi.jpg"
                        alt="QR Code"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-center text-xs italic text-gray-500">
                    Vui lòng quét mã để thanh toán. Nội dung chuyển khoản: [Mã
                    đơn hàng]
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
