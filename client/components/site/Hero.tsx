import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden"
      aria-label="Featured bouquet"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=2070&auto=format&fit=crop)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent" />
      <div className="container relative z-10 h-full flex flex-col items-start justify-end pb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
          Fresh Flowers, Fresh Feelings
        </h1>
        <p className="mt-4 max-w-xl text-base md:text-lg text-foreground/80">
          Hand-picked bouquets delivered with care. Simple, elegant, and made to brighten your day.
        </p>
        <div className="mt-6">
          <Button asChild size="lg">
            <Link to="/shop">Shop Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
