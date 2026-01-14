import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* Collect.chat Chatbot Widget */}
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `(function(w, d) { w.CollectId = "695a046473f4a6284093d586"; var h = d.head || d.getElementsByTagName("head")[0]; var s = d.createElement("script"); s.setAttribute("type", "text/javascript"); s.async=true; s.setAttribute("src", "https://collectcdn.com/launcher.js"); h.appendChild(s); })(window, document);`,
        }}
      />
    </div>
  );
}
