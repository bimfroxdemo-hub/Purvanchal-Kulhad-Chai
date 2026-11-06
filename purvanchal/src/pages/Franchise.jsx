import { motion } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Coffee,
  GraduationCap,
  Headphones,
  Megaphone,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Store,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

import Calculator from "../components/calculator.jsx";
import FranchiseHero from "../components/FranchiseHero";
import FranchiseModelWorks from "../components/FranchiseModelWorks.jsx";
import InvestmentClarity from "../components/InvestmentClarity";
import TrainingSupport from "../components/TrainingSupport";
import OutletNetwork from "../components/OutletNetwork";
/* Automatically loads gallery images from src/assets/gallery/ */
const galleryModules = import.meta.glob(
  "../assets/gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    import: "default",
  }
);

const galleryLayouts = [
  "md:col-span-2 md:row-span-2",
  "",
  "",
  "",
  "",
  "md:col-span-2",
  "",
  "",
];

const galleryItems = Object.entries(galleryModules)
  .sort(([firstPath], [secondPath]) =>
    firstPath.localeCompare(secondPath, undefined, { numeric: true })
  )
  .map(([path, image], index) => ({
    id: index + 1,
    image,
    alt: `Purvanchal Kulhad Chai franchise gallery ${index + 1}`,
    gridClass: galleryLayouts[index % galleryLayouts.length],
  }));

const franchiseHighlights = [
  {
    icon: Wallet,
    value: "₹1,50,000",
    label: "Starting Investment",
  },
  {
    icon: ShieldCheck,
    value: "0%",
    label: "Royalty Forever",
  },
  {
    icon: TrendingUp,
    value: "High",
    label: "Daily Footfall",
  },
];

const businessLogic = [
  {
    id: "01",
    title: "Everyday Product Demand",
    description:
      "Tea and coffee are daily-consumption products. Customers do not need convincing — demand already exists.",
  },
  {
    id: "02",
    title: "Simple & Repeatable Operations",
    description:
      "No chef dependency and no complex machinery. Anyone can manage operations with basic training.",
  },
  {
    id: "03",
    title: "Low Investment, Controlled Risk",
    description:
      "A lean setup keeps capital low and recovery fast, reducing financial pressure on the franchise partner.",
  },
  {
    id: "04",
    title: "Scalable & Location Friendly",
    description:
      "The model works in markets, highways, towns and cities with flexible formats and the same core system.",
  },
];

const investmentItems = [
  {
    icon: ShieldCheck,
    title: "Brand License",
    description:
      "Authorization to operate under our brand identity, signage usage and business model.",
  },
  {
    icon: Store,
    title: "Complete Setup Kit",
    description:
      "Counter design guidance, basic equipment list and operational layout support.",
  },
  {
    icon: PackageCheck,
    title: "Raw Material Support",
    description:
      "Initial guidance on tea, coffee and ingredient sourcing to maintain consistent taste.",
  },
  {
    icon: GraduationCap,
    title: "Training Program",
    description:
      "Practical training covering preparation, hygiene, staff handling and daily operations.",
  },
  {
    icon: Megaphone,
    title: "Marketing Starter Pack",
    description:
      "Opening-day promotion ideas, brand creatives and local launch guidance.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "Post-launch assistance for operations, supply coordination and performance improvement.",
  },
];

const supportSteps = [
  {
    id: "1",
    icon: GraduationCap,
    title: "Pre-Launch Training",
    description:
      "Hands-on guidance covering preparation methods, hygiene standards and daily operating routines.",
  },
  {
    id: "2",
    icon: Users,
    title: "Staff & Operations Setup",
    description:
      "Support in staff briefing, workflow setup and customer-handling best practices.",
  },
  {
    id: "3",
    icon: Megaphone,
    title: "Launch Day Assistance",
    description:
      "Guidance for opening-day execution, promotion ideas and smooth customer-flow management.",
  },
  {
    id: "4",
    icon: TrendingUp,
    title: "Ongoing Business Support",
    description:
      "Continuous help with supply coordination, performance review and operational improvements.",
  },
];

export default function Franchise() {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const [loading, setLoading] = useState(false);
  const [formNotice, setFormNotice] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    outletType: "Tea Stall",
    message: "",
  });

  const heroImage = galleryItems[0]?.image;

  const updateField = (field, value) => {
    setFormData((previousData) => ({
      ...previousData,
      [field]: value,
    }));
  };

  const handleWhatsApp = () => {
    const phoneNumber = "917055111555";

    const message = encodeURIComponent(
      "Hello, I want complete details about Purvanchal Kulhad Chai franchise opportunity."
    );

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const endpoint = API_URL
      ? `${API_URL.replace(/\/$/, "")}/api/franchise`
      : "/api/franchise";

    try {
      setLoading(true);
      setFormNotice(null);

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data = {};

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok || data.success === false) {
        throw new Error(data.message || "Something went wrong.");
      }

      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        outletType: "Tea Stall",
        message: "",
      });

      setFormNotice({
        type: "success",
        text: "Application submitted successfully. Our team will contact you within 24 hours.",
      });
    } catch (error) {
      console.error(error);

      setFormNotice({
        type: "error",
        text:
          error.message ||
          "Unable to submit your application. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-[#4A0707]/15 bg-[#FFF9F1] px-4 py-3.5 font-poppins text-sm font-medium text-[#4A0707] outline-none transition-all placeholder:text-[#705B4A]/60 focus:border-[#FF981B] focus:ring-2 focus:ring-[#FF981B]/20";

  return (
    <>
      <Helmet>
        <title>
          Franchise Opportunity | Purvanchal Kulhad Chai
        </title>

        <meta
          name="description"
          content="Start your Purvanchal Kulhad Chai franchise with low investment, zero royalty, training, outlet setup and complete business support."
        />

        <meta
          name="keywords"
          content="kulhad chai franchise, tea franchise india, low investment business, chai shop franchise, sugar chai business, Purvanchal Kulhad Chai franchise"
        />

        <meta name="author" content="Purvanchal Kulhad Chai" />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Start Your Purvanchal Kulhad Chai Franchise"
        />

        <meta
          property="og:description"
          content="Low investment, zero royalty tea franchise opportunity with full training and outlet support."
        />

        <meta property="og:type" content="website" />
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Surat, Gujarat" />
      </Helmet>

      {/* Navbar fixed hai, isliye top spacing */}
      <main className="overflow-hidden bg-white pt-[85px]">
        {/* Hero */}
        <FranchiseHero />

        <FranchiseModelWorks />
        {/* Investment Clarity */}
        <InvestmentClarity />

        {/* Training & Support */}
        <TrainingSupport />

        <OutletNetwork />


        {/* Franchise Enquiry */}
        <section
          id="franchise-enquiry"
          className="scroll-mt-24 bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:py-24"
        >
          <div className="mx-auto grid max-w-[1150px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FF981B]/15 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#FF981B]" />
                <span className="font-poppins text-xs font-bold uppercase tracking-[0.14em] text-[#4A0707]">
                  Franchise Enquiry
                </span>
              </div>

              <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#4A0707] sm:text-4xl md:text-5xl">
                Start Your
                <span className="block text-[#FF981B]">
                  Purvanchal Kulhad Chai Franchise
                </span>
              </h2>

              <p className="mt-5 max-w-xl font-poppins text-sm font-medium leading-7 text-[#705B4A] sm:text-base sm:leading-8">
                Fill the form and our team will contact you within 24 hours
                with complete franchise details.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "₹1,50,000 Complete Setup",
                  "Zero Royalty – Lifetime",
                  "Training & Marketing Support",
                  "High Daily Sales Potential",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 font-poppins text-sm font-semibold text-[#4A0707]"
                  >
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-[#FF981B]"
                      strokeWidth={2.5}
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="mt-9 inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border-2 border-[#4A0707] px-7 py-3 font-poppins text-sm font-bold text-[#4A0707] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4A0707] hover:text-white"
              >
                <MessageCircle size={18} />
                Talk on WhatsApp
              </button>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="rounded-2xl border border-[#4A0707]/10 bg-[#FFF9F1] p-6 shadow-xl sm:p-8 md:p-10"
            >
              <h3 className="font-serif text-3xl font-bold text-[#4A0707] sm:text-4xl">
                Apply Now
              </h3>

              <p className="mt-3 font-poppins text-sm font-medium leading-7 text-[#705B4A]">
                Share your details and our franchise team will contact you
                shortly.
              </p>

              <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                <div>
                  <label
                    htmlFor="franchise-name"
                    className="mb-2 block font-poppins text-xs font-bold uppercase tracking-wide text-[#4A0707]"
                  >
                    Full Name
                  </label>

                  <input
                    id="franchise-name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(event) =>
                      updateField("name", event.target.value)
                    }
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="franchise-phone"
                      className="mb-2 block font-poppins text-xs font-bold uppercase tracking-wide text-[#4A0707]"
                    >
                      Mobile Number
                    </label>

                    <input
                      id="franchise-phone"
                      type="tel"
                      required
                      inputMode="numeric"
                      placeholder="Mobile number"
                      value={formData.phone}
                      onChange={(event) =>
                        updateField("phone", event.target.value)
                      }
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="franchise-city"
                      className="mb-2 block font-poppins text-xs font-bold uppercase tracking-wide text-[#4A0707]"
                    >
                      City
                    </label>

                    <input
                      id="franchise-city"
                      type="text"
                      required
                      placeholder="Your city"
                      value={formData.city}
                      onChange={(event) =>
                        updateField("city", event.target.value)
                      }
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="franchise-email"
                    className="mb-2 block font-poppins text-xs font-bold uppercase tracking-wide text-[#4A0707]"
                  >
                    Email Address
                  </label>

                  <input
                    id="franchise-email"
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="franchise-outlet"
                    className="mb-2 block font-poppins text-xs font-bold uppercase tracking-wide text-[#4A0707]"
                  >
                    Preferred Outlet Type
                  </label>

                  <select
                    id="franchise-outlet"
                    value={formData.outletType}
                    onChange={(event) =>
                      updateField("outletType", event.target.value)
                    }
                    className={inputClass}
                  >
                    <option>Tea Stall</option>
                    <option>Tea Kiosk</option>
                    <option>Small Cafe</option>
                    <option>Highway Outlet</option>
                    <option>Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="franchise-message"
                    className="mb-2 block font-poppins text-xs font-bold uppercase tracking-wide text-[#4A0707]"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="franchise-message"
                    rows="4"
                    placeholder="Tell us about your location or business plan..."
                    value={formData.message}
                    onChange={(event) =>
                      updateField("message", event.target.value)
                    }
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {formNotice && (
                  <p
                    className={`rounded-lg px-4 py-3 font-poppins text-sm font-medium ${formNotice.type === "success"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                      }`}
                  >
                    {formNotice.text}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[#FF981B] px-7 py-3.5 font-poppins text-sm font-bold text-[#4A0707] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFAD40] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Submitting Application..." : "Apply For Franchise"}

                  {!loading && (
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Gallery - Existing Gallery Section */}
        <section className="bg-[#FFF9F1] px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:py-24">
          <div className="mx-auto max-w-[1150px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
            >
              <div className="max-w-xl">
                <p className="font-poppins text-xs font-bold uppercase tracking-[0.18em] text-[#FF981B] sm:text-sm">
                  Purvanchal Moments
                </p>

                <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[#4A0707] sm:text-4xl md:text-5xl">
                  Our Franchise{" "}
                  <span className="text-[#FF981B]">Gallery</span>
                </h2>
              </div>

              <p className="max-w-md font-poppins text-sm font-medium leading-7 text-[#705B4A] sm:text-base">
                Experience our chai culture, outlet spaces and authentic tea
                moments crafted for every city.
              </p>
            </motion.div>

            {galleryItems.length > 0 ? (
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:mt-12 md:grid-cols-4 md:auto-rows-[165px]">
                {galleryItems.map((item, index) => (
                  <motion.figure
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      duration: 0.45,
                      delay: Math.min(index * 0.06, 0.3),
                    }}
                    className={`group relative h-[240px] overflow-hidden bg-[#4A0707] shadow-sm transition-shadow duration-300 hover:shadow-xl sm:h-[280px] md:h-auto ${item.gridClass}`}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#4A0707]/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <figcaption className="absolute bottom-0 left-0 translate-y-5 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.16em] text-[#FF981B]">
                        Purvanchal Franchise
                      </p>

                      <p className="mt-1 font-serif text-xl font-bold text-white">
                        Authentic Chai Experience
                      </p>
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
            ) : (
              <div className="mt-10 rounded-2xl border border-dashed border-[#4A0707]/20 bg-white px-6 py-14 text-center">
                <p className="font-poppins text-sm font-medium text-[#705B4A]">
                  Add franchise gallery images inside:
                </p>

                <p className="mt-2 font-poppins text-sm font-bold text-[#4A0707]">
                  src/assets/gallery/
                </p>
              </div>
            )}

            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => navigate("/gallery")}
                className="group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border-2 border-[#4A0707] px-7 py-3 font-poppins text-sm font-bold text-[#4A0707] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4A0707] hover:text-white"
              >
                View Full Gallery
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}