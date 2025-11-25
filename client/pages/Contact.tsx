import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Facebook, Instagram, Figma, Music } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
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
              Bạn có câu hỏi hoặc yêu cầu tùy chỉnh? Hãy gửi tin nhắn cho chúng tôi.<br />
              Kết nối với chúng tôi qua các nền tảng mạng xã hội để nhận được câu trả lời trong thời gian sớm nhất.
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
              <div className="flex flex-col gap-4">
              <a
                href="https://facebook.com"
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
                href="https://instagram.com"
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
                href="https://threads.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                  <svg
                    className="h-6 w-6 text-foreground"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <path d="M12 3v9m0 9v-9m6 0a6 6 0 1 0-12 0 6 6 0 0 0 12 0" />
                  </svg>
                  <span className="text-base font-medium text-foreground">
                    Tiệm hoa có nàng
                  </span>
                </div>
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                  <Music className="h-6 w-6 text-foreground" />
                  <span className="text-base font-medium text-foreground">
                    Tiệm hoa có nàng
                  </span>
                </div>
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
