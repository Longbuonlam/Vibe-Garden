import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import UserMenu from "@/components/site/UserMenu";
import CartDropdown from "@/components/site/CartDropdown";

const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"
  }`;

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span
            className="inline-block h-8 w-8 rounded-full bg-accent"
            aria-hidden
          />
          <span className="text-lg font-semibold tracking-tight">
            Tiệm hoa có nàng
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navLinkClasses} end>
            Trang chủ
          </NavLink>
          <NavLink to="/shop" className={navLinkClasses}>
            Sản phẩm
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            Về chúng tôi
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses}>
            Liên hệ
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <CartDropdown />
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
