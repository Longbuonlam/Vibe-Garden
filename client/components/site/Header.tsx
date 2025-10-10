import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/auth/AuthContext";

const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"
  }`;

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-full bg-accent" aria-hidden />
          <span className="text-lg font-semibold tracking-tight">Petal & Stem</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navLinkClasses} end>
            Home
          </NavLink>
          <NavLink to="/shop" className={navLinkClasses}>
            Shop
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses}>
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="secondary" size="icon" aria-label="Open cart">
            <ShoppingCart />
          </Button>
          {user ? (
            <Button
              variant="ghost"
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              Logout
            </Button>
          ) : (
            <Button variant="ghost" asChild>
              <Link to="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
