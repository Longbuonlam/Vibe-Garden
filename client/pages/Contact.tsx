import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return; // prevent double submissions

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    let success = false;
    try {
      const resp = await fetch('https://vibe-garden.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await resp.json().catch(() => null);

      if (!resp.ok || !data || data.success === false) {
        const msg = data?.error || data?.message || 'Failed to send message';
        throw new Error(msg);
      }

      success = true;
      toast.success("Message sent! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      const message = (err as any)?.message || 'Failed to send message';
      toast.error(message);
    } finally {
      // only reset submitting flag if submission failed; otherwise keep as false to allow next sends
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Liên hệ với chúng tôi
            </h2>
            <p className="text-muted-foreground mb-8">
              Bạn có câu hỏi hoặc yêu cầu tùy chỉnh? Hãy gửi tin nhắn cho chúng
              tôi.
              <br />
              Kết nối với chúng tôi qua các nền tảng mạng xã hội để nhận được
              câu trả lời trong thời gian sớm nhất.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Họ và tên
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tên của bạn"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Tin nhắn
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Tin nhắn của bạn"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                size="lg"
              >
                Gửi tin nhắn
              </Button>
            </form>
          </div>

          <div className="flex items-start justify-center md:items-center">
            <div className="flex flex-col w-full max-w-sm">
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.facebook.com/people/Ti%E1%BB%87m-hoa-c%C3%B3-n%C3%A0ng/61581625951395/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                    <Facebook className="h-6 w-6 text-foreground" />
                    <span className="text-base font-medium text-foreground">
                      Tiệm hoa có nàng
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/tiemhoaconang?igsh=ZWV4aDFoNXRiYzQw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                    <Instagram className="h-6 w-6 text-foreground" />
                    <span className="text-base font-medium text-foreground">
                      Tiệm hoa có nàng
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.threads.com/@tiemhoaconang?xmt=AQF0vIha1sciTZ8_pQkfJrD1DjLFpKyW-Mx0cDMbEQVBZP0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                    <img
                      src="https://res.cloudinary.com/djoyvs0e3/image/upload/v1764353897/thread_fb81ba.jpg"
                      alt="Threads"
                      className="h-6 w-6 object-contain"
                      loading="lazy"
                    />
                    <span className="text-base font-medium text-foreground">
                      Tiệm hoa có nàng
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.tiktok.com/@tiemhoaconang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                    <img
                      src="https://res.cloudinary.com/djoyvs0e3/image/upload/v1764354005/tiktok_izyuw9.webp"
                      alt="TikTok"
                      className="h-6 w-6 object-contain"
                      loading="lazy"
                    />
                    <span className="text-base font-medium text-foreground">
                      Tiệm hoa có nàng
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:tiemhoaconang@gmail.com"
                  className="group"
                >
                  <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                    <Mail className="h-6 w-6 text-foreground" />
                    <div className="flex flex-col">
                      <span className="text-base font-medium text-foreground">
                        tiemhoaconang@gmail.com
                      </span>
                    </div>
                  </div>
                </a>

                <a
                  href="tel:0902189216"
                  className="group"
                >
                  <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                    <Phone className="h-6 w-6 text-foreground" />
                    <div className="flex flex-col">
                      <span className="text-base font-medium text-foreground">
                        0902189216
                      </span>
                    </div>
                  </div>
                </a>

                <div className="group">
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors cursor-default">
                    <MapPin className="h-6 w-6 text-foreground flex-shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-base font-medium text-foreground">
                        Số nhà 21, ngõ 92, đường Chùa Võ, Dương Nội, Hà Nội
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
