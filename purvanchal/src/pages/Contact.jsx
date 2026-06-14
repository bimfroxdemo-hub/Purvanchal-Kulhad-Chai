// Contact.jsx

import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
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
  return (
    <>
      <Helmet>
        <title>Contact Purvanchal Kulhad Chai | Franchise & Enquiry Surat</title>

        <meta
          name="description"
          content="Contact Purvanchal Kulhad Chai for franchise opportunities, collaboration and enquiries. Visit us in Surat or apply online for your own kulhad chai outlet."
        />

        <meta
          name="keywords"
          content="contact kulhad chai, chai franchise contact, purvanchal chai surat, tea shop enquiry india, kulhad chai business"
        />

        <meta name="author" content="Raghunath Chaurasiya" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Purvanchal Kulhad Chai" />
        <meta
          property="og:description"
          content="Get in touch for franchise opportunities and business enquiries."
        />
        <meta property="og:type" content="website" />

        {/* Local SEO */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Surat, Gujarat" />
      </Helmet>
      <div className="bg-[#F8F3EC] overflow-hidden">



        {/* HERO SECTION */}
        <section className="relative h-[70vh] flex items-center justify-center text-center px-6">

          {/* BG IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop"
            alt="contact"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/55"></div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >

            <p className="uppercase tracking-[6px] text-sm text-[#d8c9b1] mb-5">
              Contact ChaiWala
            </p>

            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Let’s Talk Over <br /> A Cup Of Tea
            </h1>

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

        {/* CONTACT SECTION */}
        <section className="py-28 px-6">

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >

              <p className="uppercase tracking-[6px] text-sm text-[#9c5a28] mb-5">
                Get In Touch
              </p>

              <h2 className="text-5xl md:text-6xl font-serif text-[#3B2F2F] leading-tight">
                We’d Love <br /> To Hear From You
              </h2>

              <p className="mt-7 text-[#6A5F55] leading-9 text-lg">
                Whether you want to collaborate, ask about franchise
                opportunities or simply say hello — our team is always ready.
              </p>
              {/* CONTACT INFO */}
              <div className="mt-12 space-y-6">

                <div className="flex items-center gap-5">

                  <div className="w-14 h-14 bg-[#9c5a28] text-white flex items-center justify-center text-xl">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[3px] text-[#9c5a28]">
                      Phone
                    </p>

                    <h3 className="text-xl text-[#3B2F2F]">
                      +91 63537 71878 , +91 70162 77257
                    </h3>
                  </div>

                </div>



                <div className="flex items-center gap-5">

                  <div className="w-14 h-14 bg-[#9c5a28] text-white flex items-center justify-center text-xl">
                    <FaEnvelope />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[3px] text-[#9c5a28]">
                      Email
                    </p>

                    <h3 className="text-xl text-[#3B2F2F]">
                      purvanchal@gmail.com
                    </h3>
                  </div>

                </div>



                <div className="flex items-center gap-5">

                  <div className="w-14 h-14 bg-[#9c5a28] text-white flex items-center justify-center text-xl">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[3px] text-[#9c5a28]">
                      Location
                    </p>

                    <h3 className="text-xl text-[#3B2F2F]">
                      priyanka Green Park, Bhestan, Surat, Gujarat 395023
                    </h3>
                  </div>

                </div>

              </div>



              {/* SOCIAL */}
              <div className="flex gap-5 mt-12">

                <a
                  href="https://www.instagram.com/purvanchal_kulhad_chai?igsh=MTJ0ZHI2cWR5NjJxaQ=="
                  className="w-14 h-14 bg-[#3B2F2F] text-white flex items-center justify-center hover:bg-[#9BA57B] transition text-xl"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://wa.me/916353771878"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#3B2F2F] text-white flex items-center justify-center hover:bg-[#9BA57B] transition text-xl"
                >
                  <FaWhatsapp />
                </a>

              </div>

            </motion.div>

            {/* RIGHT FORM */}
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


        {/* MAP */}
        {/* MAP SECTION */}
        <section className="py-20 px-6 bg-[#F8F3EC]">

          <div className="max-w-7xl mx-auto text-center">


            {/* MAP */}
            <div className="w-full h-[400px] overflow-hidden rounded-xl shadow-lg">

              <iframe
                title="map"
                src="https://www.google.com/maps?q=Purvanchal%20Kulhad%20Chai%20Surat&output=embed"
                className="w-full h-full"
                loading="lazy"
              ></iframe>

            </div>

          </div>

        </section>
      </div>
    </>
  );
}