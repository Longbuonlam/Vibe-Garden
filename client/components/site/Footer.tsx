import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tiệm hoa Có Nàng.
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a
            href="https://www.facebook.com/people/Ti%E1%BB%87m-hoa-c%C3%B3-n%C3%A0ng/61581625951395/"
            aria-label="Facebook"
            className="hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/tiemhoaconang?igsh=ZWV4aDFoNXRiYzQw"
            aria-label="Instagram"
            className="hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
