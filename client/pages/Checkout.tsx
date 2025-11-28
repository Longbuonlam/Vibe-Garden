import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function Checkout() {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
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
            Your Cart is Empty
          </h1>
          <Button onClick={() => navigate("/shop")}>Back to Shop</Button>
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
            <h1 className="text-3xl font-bold tracking-tight">Order Placed!</h1>
            <p className="text-lg text-muted-foreground">
              Your beautiful flowers are on their way!
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 space-y-2 text-sm text-left">
            <div>
              <p className="text-muted-foreground">Order Number:</p>
              <p className="font-semibold">
                #ORD{Math.floor(Math.random() * 1000000)}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Total Amount:</p>
              <p className="font-semibold text-lg">
                ${(total * 1.1).toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Estimated Delivery:</p>
              <p className="font-semibold">2-3 Business Days</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            You'll receive an email confirmation shortly with tracking details.
          </p>
          <Button onClick={() => navigate("/")} className="w-full">
            Continue Shopping
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
      const finalTotal = +(total * 1.1).toFixed(2);

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

      const resp = await fetch('/api/place-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await resp.json().catch(() => null);

      if (!resp.ok || !data || data.success === false) {
        const msg = data?.error || data?.message || 'Failed to place order';
        throw new Error(msg);
      }

      toast.success('Order placed successfully!');
      clearCart();
      setOrderPlaced(true);
    } catch (error) {
      const message = (error as any)?.message || 'Payment failed. Please try again.';
      toast.error(message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Shipping Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                disabled={isProcessing}
                required
                className="px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
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
              placeholder="Phone (Optional)"
              value={formData.phone}
              onChange={handleChange}
              disabled={isProcessing}
              className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Address</h2>
            <input
              type="text"
              name="address"
              placeholder="Street Address"
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
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                disabled={isProcessing}
                required
                className="px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="text"
                name="state"
                placeholder="State"
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
              placeholder="ZIP Code"
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
              Back to Cart
            </Button>
            <Button type="submit" disabled={isProcessing} className="flex-1">
              {isProcessing ? "Processing..." : "Place Order"}
              {!isProcessing && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </div>
        </form>

        <div className="lg:col-span-1">
          <div className="border border-border rounded-lg p-6 space-y-4 sticky top-24">
            <h2 className="text-xl font-semibold">Order Summary</h2>

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
                <span className="text-muted-foreground">Subtotal:</span>
                <span>{total.toFixed(3)}đ</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping:</span>
                <span>Free</span>
              </div>
              {/* <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax (10%):</span>
                <span>{(total * 0.1).toFixed(3)}đ</span>
              </div> */}
            </div>

            <div className="border-t border-border pt-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>{(total).toFixed(3)}đ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
