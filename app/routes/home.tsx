import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export function meta() {
  return [{ title: "Vasudha & Associates – Chartered Accountants" }, { name: "description", content: "Trusted Accounting & Tax Solutions" }];
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [aboutIndex, setAboutIndex] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const banners = ["/images/banner_1.png", "/images/banner_2.png", "/images/banner_3.jpg", "/images/banner_4.jpg"];
  const aboutImages = ["/images/about-1.png", "/images/about-2.png"];

  useEffect(() => {
    // Banner Slider
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 4000);

    // About Image Swap
    const aboutInterval = setInterval(() => {
      setAboutIndex((prev) => (prev === aboutImages.length - 1 ? 0 : prev + 1));
    }, 5000);

    // SMART INDICATOR: Show tooltip after 20 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 20000);

    return () => {
      clearInterval(interval);
      clearInterval(aboutInterval);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5dvayza", // Your Service ID
        "template_oizq03e", // Your Template ID
        e.currentTarget,
        "8a25S7kpkfFRr0iA2", // Your Public Key
      )
      .then(() => {
        alert("Enquiry Sent Successfully! We will contact you soon.");
        setOpen(false); // Closes the enquiry modal
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Something went wrong. Please try again or call us directly.");
      });
  };

  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-blue-100">
      {/* TOP CONTACT BAR */}
      <div className="bg-gray-50 border-b border-gray-100 py-2 px-4 md:px-10 flex justify-between md:justify-end gap-6 text-xs md:text-sm font-medium text-slate-600">
        <a href="tel:+91XXXXXXXXXX" className="hover:text-blue-900 transition flex items-center gap-1">
          <span>📞</span> +91 XXXXX XXXXX
        </a>
        <a href="mailto:info@vasudhaemail.com" className="hover:text-blue-900 transition flex items-center gap-1">
          <span>✉️</span> <span className="hidden sm:inline">info@vasudhaemail.com</span>
          <span className="sm:hidden">Email Us</span>
        </a>
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 flex justify-between items-center px-6 md:px-10 py-5 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="border-l-4 border-blue-900 pl-4">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-blue-900 tracking-tight">Vasudha & Associates</h1>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">— Chartered Accountants —</p>
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpenMenu(!openMenu)} className="text-blue-900 text-xl p-2">
            {openMenu ? "✕" : "☰"}
          </button>
        </div>
        <div className="hidden md:flex gap-8 font-medium text-slate-700">
          <a href="#home" className="hover:text-blue-900 transition">
            Home
          </a>
          <a href="#services" className="hover:text-blue-900 transition">
            Services
          </a>
          <a href="#about" className="hover:text-blue-900 transition">
            About Us
          </a>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {openMenu && (
        <div className="md:hidden fixed top-[88px] left-0 w-full bg-white border-b border-gray-200 px-6 py-6 space-y-4 animate-fadeIn z-50 shadow-lg">
          <a href="#home" onClick={() => setOpenMenu(false)} className="block text-lg font-medium">
            Home
          </a>
          <a href="#services" onClick={() => setOpenMenu(false)} className="block text-lg font-medium">
            Services
          </a>
          <a href="#about" onClick={() => setOpenMenu(false)} className="block text-lg font-medium">
            About Us
          </a>
        </div>
      )}

      {/* HERO SECTION */}
      <section id="home" className="relative h-[65vh] min-h-[500px] max-h-[800px] flex items-center px-6 md:px-16 overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100 scale-105" : "opacity-0"}`}
            style={{
              backgroundImage: `url(${banner})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "transform 8s ease-in-out, opacity 1s",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 via-blue-900/40 to-transparent"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="max-w-2xl animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white drop-shadow-md">
              Your Trusted Partners <br />
              <span className="text-blue-200">in Accounting & Tax Solutions</span>
            </h2>
            <p className="text-lg mb-8 text-white/90 font-light max-w-md">Expert financial advice tailored for your growth.</p>
            <a href="#services" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-md font-medium transition-all shadow-xl">
              View Our Expertise
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES & ABOUT (BG MATCHED) */}
      <div className="bg-slate-50">
        <section id="services" className="py-24 px-6 md:px-10 border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-16 text-center">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-blue-900">Our Services</h3>
              <div className="h-1 w-20 bg-blue-900 mt-4 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { img: "income-tax.jpg", title: "Income Tax Filing", desc: "Accurate and timely tax solutions for all." },
                { img: "gst.jpg", title: "GST Services", desc: "Simplified GST registration and monthly filing." },
                { img: "accounting.webp", title: "Accounting", desc: "Keep your business record-keeping seamless." },
                { img: "consultation.webp", title: "Consultancy", desc: "Strategic financial guidance for your new venture." },
              ].map((service, i) => (
                <div key={i} className="group bg-white rounded-2xl p-2 shadow-md hover:shadow-xl transition-all duration-500">
                  <div className="rounded-xl overflow-hidden aspect-[4/3]">
                    <img src={`/images/${service.img}`} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="font-bold text-slate-800 mb-2">{service.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-24 px-6 md:px-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[300px] md:h-[450px]">
              {aboutImages.map((img, index) => (
                <img key={index} src={img} className={`absolute inset-0 rounded-2xl shadow-xl w-full h-full object-cover transition-opacity duration-[1500ms] ${index === aboutIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`} alt="About Us" />
              ))}
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-6">Built on Trust & Transparency</h3>
              <p className="text-slate-700 leading-relaxed text-lg mb-8">
                At <span className="font-bold text-blue-900">Vasudha & Associates</span>, we simplify complex financial landscapes for new businesses.
              </p>
              <ul className="space-y-4">
                {["Personalized Tax Strategies", "Dedicated Audit Support", "Transparent Pricing"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <span className="bg-blue-100 text-blue-900 p-1 rounded-full text-[10px]">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      <footer className="py-12 bg-white text-slate-500 text-sm text-center border-t border-gray-100">
        <p>© 2026 Vasudha & Associates – Chartered Accountants</p>
      </footer>

      {/* SMART FLOATING ENQUIRY BUTTON */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Tooltip Indicator (Shows after 20s) */}
        {showTooltip && (
          <div className="bg-white text-blue-900 px-4 py-2 rounded-xl shadow-lg border border-blue-50 text-sm font-bold animate-fadeIn relative mb-2">
            Need help? Ask us!
            <div className="absolute -bottom-1 right-5 w-3 h-3 bg-white border-r border-b border-blue-50 rotate-45"></div>
          </div>
        )}

        <button
          onClick={() => {
            setOpen(true);
            setShowTooltip(false);
          }}
          className="
            w-14 h-14 md:w-16 md:h-16
            bg-orange-500 text-white rounded-full
            shadow-lg flex items-center justify-center
            hover:bg-orange-600 hover:scale-110 transition-all duration-300
            relative group
          "
        >
          <span className="text-2xl group-hover:rotate-12 transition-transform">📩</span>
          {/* Subtle Glow Ring */}
          <span className="absolute inset-0 rounded-full border-2 border-orange-500 animate-ping opacity-20"></span>
        </button>
      </div>

      {/* ENQUIRY MODAL */}
      {open && (
        <div className="fixed inset-0 bg-blue-950/40 backdrop-blur-md flex items-center justify-center z-[60] px-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative animate-fadeIn">
            <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 text-xl">
              ✕
            </button>
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Enquiry Form</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-[10px] font-bold text-blue-900 uppercase tracking-wider ml-1">Full Name</label>
                <input name="from_name" type="text" placeholder="Your Name" className="w-full border border-gray-100 bg-gray-50 rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-blue-500 transition" required />
              </div>

              <div>
                <label className="text-[10px] font-bold text-blue-900 uppercase tracking-wider ml-1">Phone Number</label>
                <input name="phone" type="tel" placeholder="+91..." className="w-full border border-gray-100 bg-gray-50 rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-blue-500 transition" required />
              </div>

              <div>
                <label className="text-[10px] font-bold text-blue-900 uppercase tracking-wider ml-1">Email Address</label>
                <input name="from_email" type="email" placeholder="example@mail.com" className="w-full border border-gray-100 bg-gray-50 rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-blue-500 transition" required />
              </div>

              <div>
                <label className="text-[10px] font-bold text-blue-900 uppercase tracking-wider ml-1">Message (Optional)</label>
                <textarea name="message" placeholder="Describe your requirement..." rows={3} className="w-full border border-gray-100 bg-gray-50 rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-blue-500 transition"></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold hover:bg-blue-950 transition-all mt-2">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
