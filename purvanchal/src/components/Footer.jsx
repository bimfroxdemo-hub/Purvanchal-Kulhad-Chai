import logo from "../assets/logo/logo1.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { Mail, MapPin, Phone } from "lucide-react";


const exploreLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  // { label: "Our Tea", path: "/products" },
  { label: "Gallery", path: "/gallery" },
  { label: "Franchise", path: "/franchise" },
  { label: "Contact", path: "/contact" },
  { label: "Services", path: "/services" },
  
];

const legalLinks = [
  { label: "Terms & Conditions", path: "/TermsConditions" },
  { label: "Privacy Policy", path: "/privacy" },
  { label: "Refund Policy", path: "/refund" },
  { label: "Franchise Policy", path: "/franchise-policy" },
];

export default function Footer() {
  const whatsappMessage = encodeURIComponent(
    "Hello, I want to know more about Purvanchal Kulhad Chai."
  );

  return (
    <footer className="relative overflow-hidden bg-[#120B08] px-4 pb-8 pt-14 text-white sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[280px] w-[480px] -translate-x-1/2 rounded-full bg-[#4A0707]/80 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[#FF981B]/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-1/3 h-72 w-72 rounded-full bg-[#4A0707]/70 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1150px]">
        {/* Brand Header */}
        <div className="flex flex-col items-center border-b border-[#FF981B]/20 pb-12 text-center sm:pb-14">
          <Link
            to="/"
            aria-label="Purvanchal Kulhad Chai Home"
            className="block"
          >
            <img
              src={logo}
              alt="Purvanchal Kulhad Chai"
              className="h-20 w-auto object-contain sm:h-24"
            />
          </Link>

          <h2 className="mt-5 font-serif text-3xl font-bold tracking-wide text-white sm:text-4xl">
            PURVANCHAL{" "}
            <span className="text-[#FF981B]">KULHAD CHAI</span>
          </h2>

          <p className="mt-3 font-poppins text-sm font-medium text-white/70 sm:text-base">
            The Authentic Taste Of Tradition ☕
          </p>
        </div>

        {/* Footer Main Grid */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Explore Links */}
          <div>
            <h3 className="font-poppins text-xs font-bold uppercase tracking-[0.18em] text-[#FF981B]">
              Explore
            </h3>

            <div className="mt-6 space-y-3">
              {exploreLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block font-poppins text-sm font-medium text-white/75 transition-colors duration-300 hover:text-[#FF981B]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-poppins text-xs font-bold uppercase tracking-[0.18em] text-[#FF981B]">
              Visit Us
            </h3>

            <div className="mt-6 space-y-4">
              <a
                href="https://www.google.com/maps?q=Priyanka+Green+Park,+Bhestan,+Surat,+Gujarat"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 font-poppins text-sm font-medium leading-6 text-white/75 transition-colors duration-300 hover:text-[#FF981B]"
              >
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#FF981B]"
                />
                <span>Priyanka Green Park, Bhestan, Surat, Gujarat</span>
              </a>

              <a
                href="tel:+916353771878"
                className="flex items-center gap-3 font-poppins text-sm font-medium text-white/75 transition-colors duration-300 hover:text-[#FF981B]"
              >
                <Phone size={17} className="shrink-0 text-[#FF981B]" />
                <span>+91 63537 71878</span>
              </a>

              <a
                href="tel:+917016277257"
                className="flex items-center gap-3 font-poppins text-sm font-medium text-white/75 transition-colors duration-300 hover:text-[#FF981B]"
              >
                <Phone size={17} className="shrink-0 text-[#FF981B]" />
                <span>+91 70162 77257</span>
              </a>

              <a
                href="mailto:purvanchal@gmail.com"
                className="flex items-center gap-3 font-poppins text-sm font-medium text-white/75 transition-colors duration-300 hover:text-[#FF981B]"
              >
                <Mail size={17} className="shrink-0 text-[#FF981B]" />
                <span>purvanchal@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-poppins text-xs font-bold uppercase tracking-[0.18em] text-[#FF981B]">
              Legal
            </h3>

            <div className="mt-6 space-y-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block font-poppins text-sm font-medium text-white/75 transition-colors duration-300 hover:text-[#FF981B]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-poppins text-xs font-bold uppercase tracking-[0.18em] text-[#FF981B]">
              Connect
            </h3>

            <p className="mt-6 max-w-xs font-poppins text-sm font-medium leading-6 text-white/70">
              Follow us for chai updates, special offers and new franchise
              opportunities across India.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/purvanchal_kulhad_chai?igsh=MTJ0ZHI2cWR5NjJxaQ=="
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Purvanchal Kulhad Chai on Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#FF981B]/50 text-[#FF981B] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF981B] hover:text-[#4A0707]"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Purvanchal Kulhad Chai on Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#FF981B]/50 text-[#FF981B] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF981B] hover:text-[#4A0707]"
              >
                <FaFacebookF size={17} />
              </a>

              <a
                href={`https://wa.me/916353771878?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Contact Purvanchal Kulhad Chai on WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#FF981B]/50 text-[#FF981B] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF981B] hover:text-[#4A0707]"
              >
                <FaWhatsapp size={19} />
              </a>
            </div>

            <Link
              to="/franchise"
              className="mt-7 inline-flex rounded-full bg-[#FF981B] px-5 py-3 font-poppins text-xs font-bold text-[#4A0707] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFAD40] hover:shadow-lg"
            >
              Start Your Franchise
            </Link>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="font-poppins text-xs font-medium leading-6 text-white/55 sm:text-sm">
            © 2026 Purvanchal Kulhad Chai. All Rights Reserved. Made by{" "}
            <a
              href="https://www.bimfrox.com/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-white transition-colors duration-300 hover:text-[#FF981B]"
            >
              Bimfrox
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}