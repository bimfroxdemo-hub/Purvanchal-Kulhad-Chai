import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Franchise from "./pages/Franchise";
import Contact from "./pages/Contact";

import Gallery from "./pages/Gallary";

// Admin Pages
import AdminLogin from "./pages/AdminLogin";
import AdminFranchise from "./pages/AdminFranchise";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const changeLanguage = (lang) => {
  const tryChange = () => {
    const select = document.querySelector(".goog-te-combo");

    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));

      // language select ke baad popup hide
      setTimeout(() => {
        setShowPopup(false);
      }, 800);

      return true;
    }

    return false;
  };

  let i = 0;

  const timer = setInterval(() => {
    i++;

    if (tryChange() || i > 20) {
      clearInterval(timer);
    }

  }, 300);
};
  useEffect(() => {
    setShowPopup(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 second

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* Website Pages */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />

              {showPopup && (
                <div className="
    fixed 
    top-20 right-3
    z-[999]
    w-[230px]
    sm:w-[260px]
    animate-slideDown
  ">

                  <div className="
      bg-[#fffaf5]
      rounded-2xl
      shadow-xl
      border
      border-[#e6c8a8]
      overflow-hidden
    ">


                    {/* top header */}

                    <div className="
        bg-[#9c5a28]
        text-white
        px-4 py-3
        flex
        items-center
        gap-2
      ">

                      <div className="
          w-9 h-9
          rounded-full
          bg-white/20
          flex items-center justify-center
          text-xl
        ">
                        ☕
                      </div>

                      <div>
                        <h3 className="font-semibold text-sm">
                          Language
                        </h3>

                        <p className="text-[11px] text-white/80">
                          Choose language
                        </p>
                      </div>

                    </div>



                    {/* options */}

                    <div className="
        p-3
        space-y-2
      ">


                      <button
                        onClick={() => changeLanguage("en")}
                        className="
  w-full
  flex items-center justify-between
  px-3 py-2
  rounded-xl
  bg-white
  border border-[#ead5bf]
  text-sm
  text-[#5b351d]
  hover:bg-[#f8eadb]
  "
                      >
                        🇬🇧 English
                        <span>›</span>
                      </button>


                      <button
                        onClick={() => changeLanguage("hi")}
                        className="
  w-full
  flex items-center justify-between
  px-3 py-2
  rounded-xl
  bg-white
  border border-[#ead5bf]
  text-sm
  text-[#5b351d]
  hover:bg-[#f8eadb]
  "
                      >
                        🇮🇳 हिंदी
                        <span>›</span>
                      </button>


                      <button
                        onClick={() => changeLanguage("gu")}
                        className="
  w-full
  flex items-center justify-between
  px-3 py-2
  rounded-xl
  bg-white
  border border-[#ead5bf]
  text-sm
  text-[#5b351d]
  hover:bg-[#f8eadb]
  "
                      >
                        🇮🇳 ગુજરાતી
                        <span>›</span>
                      </button>


                      <button
                        onClick={() => changeLanguage("mr")}
                        className="
  w-full
  flex items-center justify-between
  px-3 py-2
  rounded-xl
  bg-white
  border border-[#ead5bf]
  text-sm
  text-[#5b351d]
  hover:bg-[#f8eadb]
  "
                      >
                        🇮🇳 मराठी
                        <span>›</span>
                      </button>


                    </div>


                    <button
                      onClick={() => setShowPopup(false)}
                      className="
 w-full
 py-2
 text-xs
 text-[#9c5a28]
 border-t
 border-[#ead5bf]
 "
                    >
                      Skip
                    </button>

                  </div>

                </div>
              )}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/franchise" element={<Franchise />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/gallery" element={<Gallery />} />
               
              </Routes>

              <Footer />
            </>
          }
        />

        {/* Admin Pages */}
        <Route path="/purvanchaladmin/login" element={<AdminLogin />} />
        <Route
          path="/admin/franchise"
          element={<AdminFranchise />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;