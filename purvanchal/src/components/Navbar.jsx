import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, AtSign, Menu, X } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

import logo from "../assets/logo/purvanchallogo.png"
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("en");
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".lang-dropdown")) {
        setLangOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const changeLanguage = (lang) => {
    const tryChange = () => {
      const select = document.querySelector(".goog-te-combo");

      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
        return true;
      }
      return false;
    };

    let count = 0;
    const timer = setInterval(() => {
      count++;

      if (tryChange() || count > 20) {
        clearInterval(timer);
      }
    }, 500);
    setLang(lang);
  };

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-[96%] sm:w-[95%] lg:w-[92%] z-50">

      {/* Top Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-12 pointer-events-none hidden lg:block">
        <div className="absolute left-[17%] top-0 h-12 w-[5px] bg-[#420101]" />
        <div className="absolute right-[17%] top-0 h-12 w-[5px] bg-[#420101]" />
      </div>

      <div className="pt-4 sm:pt-5 lg:pt-6 px-2 sm:px-4 md:px-6">
        <nav className="max-w-[1450px] mx-auto relative">
          <div
            id="google_translate_element"
          ></div>
          {/* Navbar */}
          <div className="bg-[#420101] rounded-full h-[65px] sm:h-[72px] md:h-[80px] lg:h-[90px] flex items-center justify-between px-4 sm:px-6 md:px-8 shadow-xl">

            {/* Logo */}
            <Link
              to="/"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-full border-[4px] md:border-[5px] border-[#420101] overflow-hidden shadow-lg">
                <img
                  src={logo}
                  alt="Purvanchal Tea"
                  className="w-full h-200 object-cover"
                />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-10 text-white font-semibold text-[13px] xl:text-[14px] uppercase tracking-wide mx-auto">

              <Link
                to="/"
                className="hover:text-yellow-300 transition duration-300"
              >
                HOME
              </Link>

              <Link
                to="/about"
                className="hover:text-yellow-300 transition duration-300"
              >
                ABOUT US
              </Link>

              <Link
                to="/products"
                className="hover:text-yellow-300 transition duration-300"
              >
                MENU
              </Link>

              <Link
                to="/franchise"
                className="hover:text-yellow-300 transition duration-300"
              >
                FRANCHISE
              </Link>

              <Link
                to="/gallery"
                className="hover:text-yellow-300 transition duration-300"
              >
                GALLERY
              </Link>

              <Link
                to="/contact"
                className="hover:text-yellow-300 transition duration-300"
              >
                CONTACT US
              </Link>
            </div>

            {/* Desktop Icons */}
            <div className="hidden lg:flex items-center gap-3">

              <a
                href="tel:+916353771878"
                className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#420101] transition duration-300"
              >
                <Phone size={17} />
              </a>

              <a
                href="https://www.instagram.com/purvanchal_kulhad_chai?igsh=MTJ0ZHI2cWR5NjJxaQ=="
                className="w-10 h-10 rounded-full border border-white  text-white hover:bg-white hover:text-[#420101] transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>
              <div className="relative lang-dropdown">

                {/* Button */}
                {/* Language Pill */}
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="
      w-10 h-10
      rounded-full
      border border-white
      bg-transparent
      text-white
      flex items-center justify-center
      hover:bg-white/10
      transition
    "
                >
                  🌐
                </button>


                {langOpen && (
                  <div className="
      absolute
      right-0
      top-14
      w-40
      bg-white
      rounded-xl
      shadow-xl
      overflow-hidden
      z-50
      border
      animate-slideDown
    ">

                    <button
                      onClick={() => {
                        changeLanguage("en");
                        setLang("en");
                        setLangOpen(false);
                      }}
                      className="
        w-full
        px-4 py-3
        flex items-center gap-3
        text-sm
        text-[#520000]
        hover:bg-[#f8eee5]
        "
                    >
                      🇬🇧 English
                    </button>


                    <button
                      onClick={() => {
                        changeLanguage("hi");
                        setLang("hi");
                        setLangOpen(false);
                      }}
                      className="
        w-full
        px-4 py-3
        flex items-center gap-3
        text-sm
        text-[#520000]
        hover:bg-[#f8eee5]
        "
                    >
                      🇮🇳 Hindi
                    </button>


                    <button
                      onClick={() => {
                        changeLanguage("gu");
                        setLang("gu");
                        setLangOpen(false);
                      }}
                      className="
        w-full
        px-4 py-3
        flex items-center gap-3
        text-sm
        text-[#520000]
        hover:bg-[#f8eee5]
        "
                    >
                      🇮🇳 Gujarati
                    </button>


                    <button
                      onClick={() => {
                        changeLanguage("mr");
                        setLang("mr");
                        setLangOpen(false);
                      }}
                      className="
        w-full
        px-4 py-3
        flex items-center gap-3
        text-sm
        text-[#520000]
        hover:bg-[#f8eee5]
        "
                    >
                      🇮🇳 Marathi
                    </button>

                  </div>
                )}

              </div>
            </div>

            {/* Mobile Menu Button */}

            <div className="flex items-center gap-3 ml-auto lg:hidden">

              {/* 🌐 LANGUAGE MOBILE */}
              <div className="relative lang-dropdown">

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLangOpen(!langOpen);
                  }}
                  className="
        w-10 h-10
        rounded-full
        border border-white/40
        bg-transparent
        text-white
        flex items-center justify-center
        hover:bg-white/10
        transition
      "
                >
                  🌐
                </button>


                {langOpen && (
                  <div
                    className="
          absolute
          right-0
          top-12
          w-32
          bg-white
          rounded-xl
          shadow-xl
          overflow-hidden
          z-[999]
          animate-slideDown
        "
                  >

                    <button
                      onClick={() => {
                        changeLanguage("en");
                        setLang("en");
                        setLangOpen(false);
                      }}
                      className="
          w-full px-4 py-2.5
          text-sm
          text-left
          text-[#520000]
          hover:bg-[#f8eee5]
          "
                    >
                      🇬🇧 English
                    </button>


                    <button
                      onClick={() => {
                        changeLanguage("hi");
                        setLang("hi");
                        setLangOpen(false);
                      }}
                      className="
          w-full px-4 py-2.5
          text-sm
          text-left
          text-[#520000]
          hover:bg-[#f8eee5]
          "
                    >
                      🇮🇳 Hindi
                    </button>


                    <button
                      onClick={() => {
                        changeLanguage("gu");
                        setLang("gu");
                        setLangOpen(false);
                      }}
                      className="
          w-full px-4 py-2.5
          text-sm
          text-left
          text-[#520000]
          hover:bg-[#f8eee5]
          "
                    >
                      🇮🇳 Gujarati
                    </button>


                    <button
                      onClick={() => {
                        changeLanguage("mr");
                        setLang("mr");
                        setLangOpen(false);
                      }}
                      className="
          w-full px-4 py-2.5
          text-sm
          text-left
          text-[#520000]
          hover:bg-[#f8eee5]
          "
                    >
                      🇮🇳 Marathi
                    </button>

                  </div>
                )}

              </div>


              {/* MENU BUTTON */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="
      w-10 h-10
      rounded-full
      border border-white/40
      flex items-center justify-center
      text-white
      hover:bg-white/10
      transition
    "
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>


            </div>

          </div>

          <div
            className={`lg:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-in-out ${menuOpen
              ? "max-h-[500px] mt-3 bg-[#420101] rounded-3xl p-5 shadow-xl"
              : "max-h-0"
              }`}
          >
            <div className="flex flex-col gap-4 text-white font-medium uppercase text-sm">

              <Link to="/" onClick={() => setMenuOpen(false)}>
                HOME
              </Link>

              <Link to="/about" onClick={() => setMenuOpen(false)}>
                ABOUT US
              </Link>

              <Link to="/products" onClick={() => setMenuOpen(false)}>
                MENU
              </Link>

              <Link to="/franchise" onClick={() => setMenuOpen(false)}>
                FRANCHISE
              </Link>

              <Link to="/gallery" onClick={() => setMenuOpen(false)}>
                GALLERY
              </Link>

              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                CONTACT US
              </Link>

              <div className="flex gap-3 pt-3">
                <a
                  href="tel:+916353771878"
                  className="w-10 h-10 rounded-full border border-white flex items-center justify-center"
                >
                  <Phone size={16} />
                </a>

                <a
                  href="https://www.instagram.com/purvanchal_kulhad_chai?igsh=MTJ0ZHI2cWR5NjJxaQ=="
                  className="w-10 h-10 rounded-full border border-white flex items-center justify-center"
                >
                  <FaInstagram size={16} />
                </a>

              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}