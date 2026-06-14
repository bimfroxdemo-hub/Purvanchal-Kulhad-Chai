// Franchise.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import product3 from "../assets/product/2product-2.png";
import Calculator from "../components/calculator.jsx"
import { Helmet } from "react-helmet-async";
import {
  FaChalkboardTeacher,
  FaClipboardList,
  FaUsers,
  FaMapMarkerAlt,
  FaCog,
} from "react-icons/fa";


export default function Franchise() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch(
        `${API_URL}/api/franchise`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("Franchise Application Submitted Successfully!");

        setFormData({
          name: "",
          city: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };
  const steps = [
    {
      id: "01",
      title: "Inquiry Received",
      desc: "We receive an inquiry from the interested customer or partner through call, form, or WhatsApp.",
      color: "#8B3F15",
      icon: <FaClipboardList />,
    },
    {
      id: "02",
      title: "Requirement Discussion",
      desc: "We connect with them to understand their background, business goals, budget, and location preference.",
      color: "#F57C00",
      icon: <FaUsers />,
    },
    {
      id: "03",
      title: "Location Evaluation & Finalization",
      desc: "We analyze and finalize the location to ensure business feasibility and maximum success potential.",
      color: "#E6A700",
      icon: <FaMapMarkerAlt />,
    },
    {
      id: "04",
      title: "7-Day Training Program",
      desc: "A complete practical training program is provided.",
      color: "#9C5A28",
      icon: <FaChalkboardTeacher />,
    },
    {
      id: "05",
      title: "Setup & Launch",
      desc: "We complete setup, branding, and final preparation, followed by the official launch of the business 🚀",
      color: "#5B8C1A",
      icon: <FaCog />,
    },
  ];
  return (
    <>
      <Helmet>
        <title>Start Kulhad Chai Franchise in India | Low Investment Tea Business</title>

        <meta
          name="description"
          content="Start your Kulhad Chai franchise with Purvanchal Kulhad Chai. Low investment tea business opportunity in India with full training, setup support and high profit potential."
        />

        <meta
          name="keywords"
          content="kulhad chai franchise, tea franchise india, chai business opportunity, low investment franchise india, tea shop franchise, kulhad chai business, start tea shop india, purvanchal kulhad chai franchise"
        />

        <meta name="author" content="Raghunath Chaurasiya" />

        {/* Open Graph */}
        <meta property="og:title" content="Start Kulhad Chai Franchise India" />
        <meta
          property="og:description"
          content="Join India's growing kulhad chai brand. Low investment, high profit tea franchise opportunity."
        />
        <meta property="og:type" content="website" />

        {/* Local SEO */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Surat, Gujarat" />
      </Helmet>

      <div className="bg-[#F8F3EC] overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative h-[75vh] flex items-center justify-center text-center px-6">

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop"
            alt="franchise"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >

            <p className="uppercase tracking-[6px] text-sm text-[#d8c9b1] mb-5">
              Join Purvanchal
            </p>

            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Start Your <br /> Tea Franchise
            </h1>

            <p className="mt-6 text-[#f1ebe2] text-lg max-w-2xl mx-auto leading-8">
              Become a part of our growing premium tea brand and build your
              successful chai business with full support.
            </p>

          </motion.div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg
              viewBox="0 0 1440 180"
              className="w-full h-[90px] sm:h-[110px] md:h-[140px]"
              preserveAspectRatio="xMidYMax meet"
            >
              <path
                fill="#F4EFE8"
                d="M0,90C250,150,450,20,720,60C980,100,1180,160,1440,90V180H0Z"
              />
              <path
                fill="#F8F5EF"
                d="M0,120C280,60,520,150,720,120C960,80,1180,30,1440,80V180H0Z"
              />
            </svg>
          </div>
        </section>

        {/* ===================================proccess======================================== */}
        <section className="py-16 md:py-20 lg:py-24 bg-[#faf8f4] overflow-hidden">

          <div className="max-w-7xl mx-auto px-5 md:px-6">

            {/* HEADING */}
            <div className="text-center mb-12 md:mb-16 lg:mb-20">

              <span className="uppercase tracking-[4px] text-[#9c5a28] font-semibold text-xs md:text-sm">
                How It Works
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-[#2F241F]">
                Become a Franchise Partner
              </h2>

              <p className="text-sm md:text-base text-gray-600 mt-4">
                Start your Purvanchal Kulhad Chai journey in a few easy steps.
              </p>

            </div>

            {/* MAIN LAYOUT */}
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

              {/* LEFT */}
              <div className="relative flex justify-center">

                <div className="
          w-[280px] h-[280px]
          md:w-[420px] md:h-[420px]
          lg:w-[560px] lg:h-[560px]
          rounded-full bg-[#f3e7d8] shadow-2xl flex items-center justify-center
          border-[8px] md:border-[10px] border-white
        ">

                  <div className="
            w-[170px] h-[170px]
            md:w-[250px] md:h-[250px]
            lg:w-[340px] lg:h-[340px]
            rounded-full bg-white shadow-xl flex items-center justify-center
          ">

                    <img
                      src={product3}
                      alt="tea product"
                      className="w-32 md:w-56 lg:w-80 object-contain"
                    />

                  </div>

                </div>

              </div>

              {/* RIGHT */}
              <div className="space-y-5 md:space-y-6 lg:space-y-8 relative z-10 w-full">

                {steps.map((item) => (

                  <div key={item.id} className="flex items-center w-full">

                    {/* ICON */}
                    <div className="
              w-14 h-14
              md:w-20 md:h-20
              lg:w-24 lg:h-24
              bg-white rounded-full shadow-xl
              border-4 lg:border-[6px] border-[#F4EFE8]
              flex items-center justify-center z-20
            ">

                      <span
                        className="text-2xl md:text-3xl lg:text-4xl"
                        style={{ color: item.color }}
                      >
                        {item.icon}
                      </span>

                    </div>

                    {/* CARD */}
                    <div className="
              -ml-3 md:-ml-5
              flex-1
              lg:w-[520px]
              min-h-[75px] md:min-h-[90px] lg:h-[95px]
              bg-[#F7E9D8]
              rounded-r-full
              shadow-xl
              flex items-center justify-between
              px-4 md:px-8 lg:px-10
              relative overflow-hidden
            ">

                      <div>

                        <h3 className="font-bold text-sm md:text-lg lg:text-xl text-[#2F241F]">
                          {item.title}
                        </h3>

                        <p className="text-xs md:text-sm text-gray-600 mt-1">
                          {item.desc}
                        </p>

                      </div>

                      <span
                        className="text-2xl md:text-4xl lg:text-5xl font-bold opacity-30"
                        style={{ color: item.color }}
                      >
                        {item.id}
                      </span>

                      <div
                        className="absolute right-0 top-0 h-full w-3 md:w-4"
                        style={{ background: item.color }}
                      />

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>
        <Calculator />
        {/* ============================FRANCHISE FORM ================================================*/}
        <section className="py-28 px-6">

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >

              <p className="uppercase tracking-[6px] text-sm text-[#9c5a28] mb-5">
                Why Choose Us
              </p>

              <h2 className="text-5xl md:text-6xl font-serif text-[#3B2F2F] leading-tight">
                Build Your <br /> Dream Business
              </h2>

              <p className="mt-7 text-[#6A5F55] leading-9 text-lg">
                We provide premium tea products, modern cafe concepts and
                complete franchise guidance to help you grow successfully.
              </p>
              {/* FEATURES */}
              <div className="mt-10 space-y-5">

                {[
                  "Premium Brand Identity",
                  "Complete Business Support",
                  "Low Investment Opportunity",
                  "High Growth Potential",
                ].map((item, index) => (

                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >

                    <div className="w-10 h-10  bg-[#9c5a28] text-white flex items-center justify-center shadow-lg">
                      ✓
                    </div>

                    <p className="text-[#3B2F2F] text-lg">
                      {item}
                    </p>

                  </motion.div>

                ))}

              </div>

            </motion.div>
            {/* RIGHT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-white  p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            >

              <h3 className="text-4xl font-serif text-[#3B2F2F]">
                Apply Now
              </h3>

              <p className="mt-4 text-[#6A5F55] leading-7">
                Fill your details and our team will contact you soon.
              </p>
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full border border-[#e5d8c8] bg-[#FDFBF8] px-5 py-4  outline-none focus:border-[#9BA57B]"
                />
                <input
                  type="text"
                  placeholder="Your City"
                  required
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      city: e.target.value,
                    })
                  }
                  className="w-full border border-[#e5d8c8] bg-[#FDFBF8] px-5 py-4  outline-none focus:border-[#9BA57B]"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  className="w-full border border-[#e5d8c8] bg-[#FDFBF8] px-5 py-4  outline-none focus:border-[#9BA57B]"
                />
                <textarea
                  rows="4"
                  placeholder="Tell us about your business plan..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full border border-[#e5d8c8] bg-[#FDFBF8] px-5 py-4  outline-none focus:border-[#9BA57B]"
                ></textarea>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#9c5a28] hover:bg-[#f3ab74] transition text-white py-4  shadow-xl disabled:opacity-50"
                >
                  {loading
                    ? "Submitting..."
                    : "Apply For Franchise"}
                </button>

              </form>

            </motion.div>

          </div>

        </section>

        {/* ================= MODERN GALLERY SECTION ================= */}
        <section className="bg-[#F8F3EC] pb-32 px-6 overflow-hidden">

          <div className="max-w-7xl mx-auto">

            {/* TITLE */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20"
            >

              <div>

                <p className="uppercase tracking-[6px] text-sm text-[#9BA57B] mb-4">
                  Purvanchal
                </p>

                <h2 className="text-5xl md:text-7xl font-serif text-[#3B2F2F] leading-tight">
                  Our Franchise <br /> Gallery
                </h2>

              </div>

              <p className="max-w-lg text-[#6A5F55] leading-8 text-lg">
                Experience the rich aroma of authentic kulhad chai, crafted with premium
                ingredients and served in a warm, rustic ambience that brings people
                together in every sip.
              </p>

            </motion.div>

            {/* ============================GALLERY============================================= */}
            <div className="grid md:grid-cols-4 auto-rows-[250px] gap-5">

              {[
                {
                  img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
                  className: "md:col-span-2 md:row-span-2",
                },
                {
                  img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
                  className: "",
                },
                {
                  img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
                  className: "",
                },
                {
                  img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200&auto=format&fit=crop",
                  className: "",
                }, {
                  img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200&auto=format&fit=crop",
                  className: "",
                },
                {
                  img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
                  className: "md:col-span-2",
                },
                {
                  img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
                  className: "md:col-span-2",
                },

              ].map((item, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className={`relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] group ${item.className}`}
                >

                  {/* IMAGE */}
                  <img
                    src={item.img}
                    alt="gallery"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  {/* TEXT */}
                  <div className="absolute bottom-0 left-0 p-6 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500">

                    <p className="uppercase tracking-[4px] text-xs text-[#d8c9b1]">
                      Premium Cafe
                    </p>

                    <h3 className="text-3xl font-serif text-white mt-2">
                      ChaiWala Space
                    </h3>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </section>
      </div>
    </>
  );
}