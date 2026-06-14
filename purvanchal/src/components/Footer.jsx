import logo from "../assets/logo/logo1.png";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#120b08] text-white pt-24 pb-10 px-6 relative overflow-hidden">

      {/* glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 
      w-[500px] h-[300px] bg-[#b87333]/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative">

        {/* LOGO */}
        <div className="text-center mb-16">

          <div className="mx-auto w-32 h-32 rounded-full border border-[#b87333] p-3 mb-6 bg-[#1c110b]">
            <img src={logo} className="w-full h-full object-contain" />
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-wide">
            PURVANCHAL TEA
          </h2>

          <p className="text-[#c8b8aa] mt-4">
            The Taste Of Tradition ☕
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-4 gap-10 border-t border-[#b87333]/30 pt-12">

          {/* LINKS */}
          <div>
            <h3 className="text-[#d69a5b] uppercase tracking-widest mb-6">
              Explore
            </h3>

            <div className="space-y-3 text-[#ddd]">
              <Link to="/" className="block hover:text-[#d69a5b]">Home</Link>
              <Link to="/about" className="block hover:text-[#d69a5b]">About</Link>
              <Link to="/products" className="block hover:text-[#d69a5b]">Our Tea</Link>
              <Link to="/franchise" className="block hover:text-[#d69a5b]">Franchise</Link>
              <Link to="/contact" className="block hover:text-[#d69a5b]">Contact</Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-[#d69a5b] uppercase tracking-widest mb-6">
              Visit Us
            </h3>

            <div className="space-y-4 text-[#ddd] text-sm">
              <a href="https://www.google.com/maps?q=Purvanchal%20Kulhad%20Chai%20Surat"
                target="_blank"
                className="block hover:text-[#d69a5b]">
                📍Priyanka Green Park, Bhestan, Surat, Gujarat 
              </a>

             <a href="tel:+916353771878" className="block hover:text-[#d69a5b]">
  ☎ +91 63537 71878
</a>

<a href="tel:+917016277257" className="block hover:text-[#d69a5b]">
  ☎ +91 70162 77257
</a>

              <a href="mailto:purvanchal@gmail.com" className="block hover:text-[#d69a5b]">
                ✉ purvanchal@gmail.com
              </a>
            </div>
          </div>

          {/* LEGAL (NEW) */}
          <div>
            <h3 className="text-[#d69a5b] uppercase tracking-widest mb-6">
              Legal
            </h3>

            <div className="space-y-3 text-[#ddd] text-sm">
              <Link to="/terms" className="block hover:text-[#d69a5b]">
                Terms & Conditions
              </Link>

              <Link to="/privacy" className="block hover:text-[#d69a5b]">
                Privacy Policy
              </Link>

              <Link to="/refund" className="block hover:text-[#d69a5b]">
                Refund Policy
              </Link>

              <Link to="/franchise-policy" className="block hover:text-[#d69a5b]">
                Franchise Policy
              </Link>
            </div>
          </div>

          {/* SOCIAL + ABOUT */}
          <div>
            <h3 className="text-[#d69a5b] uppercase tracking-widest mb-6">
              Connect
            </h3>

            <p className="text-[#ccc] text-sm mb-5 leading-6">
              Follow us for updates, offers and new franchise opportunities.
              We are building a premium chai brand with authentic taste and strong business model.
            </p>

            <div className="flex gap-4">
              <a href="https://www.instagram.com/purvanchal_kulhad_chai?igsh=MTJ0ZHI2cWR5NjJxaQ=="
                className="w-12 h-12 rounded-full border border-[#b87333] flex items-center justify-center hover:bg-[#b87333] transition">
                <FaInstagram />
              </a>

              <a className="w-12 h-12 rounded-full border border-[#b87333] flex items-center justify-center hover:bg-[#b87333] transition">
                <FaFacebookF />
              </a>

              <a className="w-12 h-12 rounded-full border border-[#b87333] flex items-center justify-center hover:bg-[#b87333] transition">
                <FaWhatsapp />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-16 pt-6 border-t border-white/10 text-center text-[#aaa] text-sm">
          © 2026 Purvanchal Tea | Made by{" "}
          <a href="https://www.bimfrox.com/" className="text-white hover:text-yellow-300 transition">
            Bimfrox
          </a>
        </div>

      </div>
    </footer>
  );
}