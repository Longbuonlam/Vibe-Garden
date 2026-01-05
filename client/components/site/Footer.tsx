import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-secondary/40 border-t">
      {/* Main Footer Content */}
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Column 1: Brand */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-foreground">
              TIỆM HOA CÓ NÀNG
            </h3>
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/about"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Giới thiệu về chúng tôi
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Liên hệ với chúng tôi
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 2: Policies */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-foreground">
              CHÍNH SÁCH CHUNG
            </h3>
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/policy/payment"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Chính sách thanh toán
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/policy/inspection"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Chính sách kiểm hàng
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/policy/privacy"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Chính sách bảo mật
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/policy/delivery"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Chính sách giao hàng
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/policy/return-refund"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Chính sách đổi trả
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/policy/obligations"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Nghĩa vụ của người bán và khách hàng
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-foreground">
              HỖ TRỢ KHÁCH HÀNG
            </h3>
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/faqs"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Câu hỏi thường gặp
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/guide/shopping"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Hướng dẫn mua hàng
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/guide/payment"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Hướng dẫn thanh toán
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-foreground">
              LIÊN HỆ
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-sm">
                  Số nhà 21, ngõ 92, đường Chùa Võ, Dương Nội, Hà Nội
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="tel:0902189216"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  0902189216
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:tiemhoaconang@gmail.com"
                  className="text-foreground hover:text-primary transition-colors text-sm break-all"
                >
                  tiemhoaconang@gmail.com
                </a>
              </li>
              <li className="flex gap-4 pt-2">
                <a
                  href="https://www.facebook.com/people/Ti%E1%BB%87m-hoa-c%C3%B3-n%C3%A0ng/61581625951395/"
                  aria-label="Facebook"
                  className="text-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/tiemhoaconang?igsh=ZWV4aDFoNXRiYzQw"
                  aria-label="Instagram"
                  className="text-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t bg-background">
        <div className="container py-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tiệm hoa Có Nàng. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
