import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Trash2, Plus, Minus, ArrowLeft } from "lucide-react";

export default function Cart() {
  const { items, total, removeItem, updateQuantity, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center py-12">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">
            Your Cart is Empty
          </h1>
          <p className="text-muted-foreground">
            Add some beautiful flowers to get started
          </p>
          <Link to="/shop">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Shopping Cart</h1>
        <Link to="/shop">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continue Shopping
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="border border-border rounded-lg p-4 flex gap-4 items-start"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-24 w-24 object-cover rounded-md"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-muted-foreground">
                  {item.price.toFixed(3)}đ mỗi đơn
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                    className="p-1 border border-border rounded hover:bg-accent"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value) || 1)
                    }
                    className="w-12 text-center border border-border rounded py-1"
                  />
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 border border-border rounded hover:bg-accent"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="text-right space-y-2">
                <div className="font-semibold text-lg">
                  {(item.price * item.quantity).toFixed(3)}đ
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-muted-foreground hover:text-destructive transition-colors p-2"
                  aria-label="Remove from cart"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="border border-border rounded-lg p-6 space-y-4 sticky top-24">
            <h2 className="text-xl font-semibold">Order Summary</h2>

            <div className="space-y-2 border-t border-border pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal:</span>
                <span>{total.toFixed(3)}đ</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping:</span>
                <span>Free</span>
              </div>
              {/* <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax:</span>
                <span>{(total * 0.1).toFixed(3)}đ</span>
              </div> */}
            </div>

            <div className="border-t border-border pt-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>{(total).toFixed(3)}đ</span>
              </div>
            </div>

            <Link to="/checkout" className="block">
              <Button className="w-full">Proceed to Checkout</Button>
            </Link>

            <button
              onClick={clearCart}
              className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
