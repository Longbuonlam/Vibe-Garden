import Hero from "@/components/site/Hero";
import ProductCard from "@/components/site/ProductCard";
import { products } from "@/data/products";
import { Flower2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <Hero />

      {/* Product Grid */}
      <section className="container py-16 md:py-24">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Featured Bouquets
          </h2>
          <a
            href="/shop"
            className="text-primary text-sm md:text-base hover:underline"
          >
            View all
          </a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </section>

      {/* About */}
      <section className="border-y bg-secondary/40">
        <div className="container py-16 md:py-24 grid items-center gap-8 md:grid-cols-[auto_1fr]">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/70">
            <Flower2 className="h-6 w-6 text-accent-foreground" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              Our Promise
            </h3>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              At Petal & Stem, we craft minimal, elegant arrangements using the
              freshest seasonal blooms. Our mission is to make sending flowers
              effortless and meaningful—bringing joy, warmth, and a touch of
              nature to everyday moments.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              Get in Touch
            </h3>
            <p className="mt-2 text-muted-foreground">
              Questions or custom orders? Send us a message and we’ll get right
              back to you.
            </p>
            <form
              className="mt-8 grid grid-cols-1 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! We'll be in touch.");
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Name"
                  required
                  aria-label="Name"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  aria-label="Email"
                />
              </div>
              <Textarea
                name="message"
                placeholder="Message"
                required
                aria-label="Message"
                rows={6}
              />
              <div>
                <Button type="submit">Send Message</Button>
              </div>
            </form>
          </div>

          <div className="min-h-[300px] rounded-lg border bg-muted/40">
            <div className="h-full w-full grid place-items-center text-muted-foreground">
              <div className="text-center">
                <div className="mx-auto mb-3 h-14 w-14 rounded-full border-2 border-dashed border-muted-foreground/40" />
                <p>Map placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
