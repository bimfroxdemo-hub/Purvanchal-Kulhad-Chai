import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const contactInfo = [
  {
    icon: <FaPhoneAlt className="text-lg" />,
    label: "Call Us",
    value: "+91 63537 71878",
    href: "tel:+916353771878",
  },
  {
    icon: <FaPhoneAlt className="text-lg" />,
    label: "Call Us",
    value: "+91 70162 77257",
    href: "tel:+917016277257",
  },
  {
    icon: <FaEnvelope className="text-lg" />,
    label: "Email Us",
    value: "purvanchal@gmail.com",
    href: "mailto:purvanchal@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt className="text-lg" />,
    label: "Visit Us",
    value: "Priyanka Green Park, Bhestan, Surat, Gujarat 395023",
    href: "https://maps.google.com/?q=Priyanka+Green+Park+Bhestan+Surat",
  },
  {
    icon: <FaWhatsapp className="text-lg" />,
    label: "WhatsApp",
    value: "+91 63537 71878",
    href: "https://wa.me/916353771878",
  },
  {
    icon: <FaInstagram className="text-lg" />,
    label: "Instagram",
    value: "@purvanchal_kulhad_chai",
    href: "https://www.instagram.com/purvanchal_kulhad_chai?igsh=MTJ0ZHI2cWR5NjJxaQ==",
  },
];

const quickActions = [
  {
    icon: <FaPhoneAlt />,
    title: "Call Now",
    sub: "+91 63537 71878",
    href: "tel:+916353771878",
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp Us",
    sub: "Quick replies, 9 AM – 9 PM",
    href: "https://wa.me/916353771878",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Us",
    sub: "purvanchal@gmail.com",
    href: "mailto:purvanchal@gmail.com",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", city: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Purvanchal Kulhad Chai</title>
        <meta
          name="description"
          content="Get in touch with Purvanchal Kulhad Chai. Visit us in Surat, call, email, or WhatsApp for franchise enquiries."
        />
      </Helmet>

      {/* ── Hero ── */}
      <section className="bg-white px-4 py-6 md:py-10">
        <div className="relative mx-auto max-w-[1150px] overflow-hidden rounded-xl bg-[#4A0707]">
          {/* Decorative glows */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#FF981B]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#FF981B]/15 blur-3xl" />
          {/* Dot pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(#FFF9F1 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          {/* Big watermark text */}
          <span className="pointer-events-none absolute right-4 top-2 hidden select-none text-[120px] font-bold leading-none text-white/[0.04] font-['Playfair_Display'] lg:block">
            Chai
          </span>

          <div className="relative grid gap-10 px-6 py-12 md:px-12 md:py-16 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            {/* Left — Copy */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FF981B]/40 bg-[#FF981B]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#FF981B]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF981B]" />
                Get In Touch
              </span>

              <h1 className="mt-5 text-3xl font-bold leading-tight text-white font-['Playfair_Display'] sm:text-4xl md:text-5xl">
                Let's Talk Over a Cup of{" "}
                <span className="relative inline-block text-[#FF981B]">
                  Kulhad Chai
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 10"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 7C50 2 150 2 198 7"
                      stroke="#FF981B"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                Franchise enquiry, partnership, feedback ya bas ek "hello" —
                hamari team aapki har baat sunne ke liye taiyaar hai. Reach out
                anytime.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#FF981B] px-6 py-3 font-semibold text-[#4A0707] transition-colors hover:bg-[#e8880f]"
                >
                  Send a Message <FaArrowRight className="text-sm" />
                </a>
                <a
                  href="/franchise"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Franchise Enquiry
                </a>
              </div>

              {/* Mini trust row */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
                <span className="flex items-center gap-2">
                  <FaClock className="text-[#FF981B]" /> Reply within 24 hrs
                </span>
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#FF981B]" /> Surat, Gujarat
                </span>
              </div>
            </div>

            {/* Right — Quick action tiles */}
            <div className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur-sm md:p-4">
                <div className="space-y-3">
                  {quickActions.map((a) => (
                    <a
                      key={a.title}
                      href={a.href}
                      target={a.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        a.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center gap-4 rounded-xl bg-[#360505] p-4 transition-all hover:translate-x-1 hover:bg-[#2b0404]"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FF981B] text-lg text-[#4A0707]">
                        {a.icon}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-white">{a.title}</p>
                        <p className="truncate text-sm text-white/70">{a.sub}</p>
                      </div>
                      <FaArrowRight className="text-sm text-[#FF981B] opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  ))}
                </div>

                {/* Address strip */}
                <div className="mt-3 flex items-start gap-3 rounded-xl border border-dashed border-[#FF981B]/40 p-4">
                  <FaMapMarkerAlt className="mt-1 shrink-0 text-[#FF981B]" />
                  <p className="text-sm leading-relaxed text-white/80">
                    Priyanka Green Park, Bhestan,
                    <br />
                    Surat, Gujarat 395023
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-2 rounded-full bg-[#FF981B] px-4 py-1.5 text-xs font-bold text-[#4A0707] shadow-lg md:-right-4">
                120+ Outlets
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Details + Form ── */}
      <section
        id="contact-form"
        className="bg-[#FFF9F1] py-16 md:py-24 px-4 scroll-mt-[90px]"
      >
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2">
          {/* Left — Info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#4A0707] font-['Playfair_Display'] mb-6">
              Reach Out to Us
            </h2>
            <p className="text-[#3C2A21] mb-8 leading-relaxed">
              Whether you're interested in opening a franchise, have feedback,
              or just want to say hello — our team is here to help.
            </p>

            <div className="space-y-5">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-start gap-4 group"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#4A0707] text-[#FF981B] group-hover:bg-[#FF981B] group-hover:text-[#4A0707] transition-colors">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#705B4A]">
                      {item.label}
                    </p>
                    <p className="text-[#3C2A21] font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="rounded-2xl bg-white p-6 md:p-10 shadow-lg border border-[#F5E8D5]">
            <h3 className="text-xl md:text-2xl font-bold text-[#4A0707] font-['Playfair_Display'] mb-6">
              Send Us a Message
            </h3>

            {status === "success" && (
              <div className="mb-4 rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-green-800 text-sm">
                ✅ Thank you! Your message has been sent successfully.
              </div>
            )}
            {status === "error" && (
              <div className="mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-red-800 text-sm">
                ❌ Something went wrong. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name *"
                  className="w-full rounded-lg border border-[#E5D5C0] bg-[#FFF9F1] px-4 py-3 text-[#3C2A21] placeholder-[#705B4A] focus:border-[#4A0707] focus:outline-none focus:ring-2 focus:ring-[#4A0707]/20 transition"
                />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone Number *"
                  className="w-full rounded-lg border border-[#E5D5C0] bg-[#FFF9F1] px-4 py-3 text-[#3C2A21] placeholder-[#705B4A] focus:border-[#4A0707] focus:outline-none focus:ring-2 focus:ring-[#4A0707]/20 transition"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address *"
                  className="w-full rounded-lg border border-[#E5D5C0] bg-[#FFF9F1] px-4 py-3 text-[#3C2A21] placeholder-[#705B4A] focus:border-[#4A0707] focus:outline-none focus:ring-2 focus:ring-[#4A0707]/20 transition"
                />
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full rounded-lg border border-[#E5D5C0] bg-[#FFF9F1] px-4 py-3 text-[#3C2A21] placeholder-[#705B4A] focus:border-[#4A0707] focus:outline-none focus:ring-2 focus:ring-[#4A0707]/20 transition"
                />
              </div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
                placeholder="Your Message *"
                className="w-full rounded-lg border border-[#E5D5C0] bg-[#FFF9F1] px-4 py-3 text-[#3C2A21] placeholder-[#705B4A] focus:border-[#4A0707] focus:outline-none focus:ring-2 focus:ring-[#4A0707]/20 transition resize-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-[#4A0707] px-6 py-3.5 font-semibold text-white hover:bg-[#360505] disabled:opacity-60 transition-colors"
              >
                {loading ? "Sending…" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="bg-[#F7F0E5] py-12 md:py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4A0707] font-['Playfair_Display'] text-center mb-8">
            Find Us on the Map
          </h2>
          <div className="overflow-hidden rounded-2xl shadow-lg border border-[#E5D5C0]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.8340814078083!2d72.83889947513264!3d21.122278284560267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0515068520ec7%3A0xcc3841436af49ce3!2sPurvanchal%20Kulhad%20Chai!5e1!3m2!1sen!2sin!4v1793537606990!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Purvanchal Kulhad Chai Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}