import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";
import PaymentPolicy from "./pages/PaymentPolicy";
import InspectionPolicy from "./pages/InspectionPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DeliveryPolicy from "./pages/DeliveryPolicy";
import ReturnRefundPolicy from "./pages/ReturnRefundPolicy";
import Layout from "./components/site/Layout";
import RequireAuth from "./auth/RequireAuth";
import { AuthProvider } from "./auth/AuthContext";
import { CartProvider } from "./context/CartContext";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <AuthProvider>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<Layout />}>
                  <Route
                    path="/"
                    element={
                      <RequireAuth>
                        <Index />
                      </RequireAuth>
                    }
                  />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/product" element={<ProductDetail />} />
                  <Route
                    path="/cart"
                    element={
                      <RequireAuth>
                        <Cart />
                      </RequireAuth>
                    }
                  />
                  <Route
                    path="/checkout"
                    element={
                      <RequireAuth>
                        <Checkout />
                      </RequireAuth>
                    }
                  />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/policy/payment" element={<PaymentPolicy />} />
                  <Route path="/policy/inspection" element={<InspectionPolicy />} />
                  <Route path="/policy/privacy" element={<PrivacyPolicy />} />
                  <Route path="/policy/delivery" element={<DeliveryPolicy />} />
                  <Route path="/policy/return-refund" element={<ReturnRefundPolicy />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}
