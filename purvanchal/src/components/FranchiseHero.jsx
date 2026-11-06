import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
  Wallet,
} from "lucide-react";
import franchiseImage from "../assets/logo/Purvanchal Kulhad Chai.png";

export default function FranchiseHero() {
  const franchiseStats = [
    {
      icon: Wallet,
      value: "₹1.5Lakh ",
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

  const handleWhatsApp = () => {
    const phoneNumber = "916353771878";
    const message = encodeURIComponent(
      "Hello, I want to know more about Purvanchal Kulhad Chai Franchise."
    );

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const scrollToEnquiry = () => {
    document
      .getElementById("franchise-enquiry")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white px-3 py-4 sm:px-6 sm:py-6 md:px-8 lg:py-8">
      <div className="mx-auto max-w-[1150px] overflow-hidden rounded-xl bg-[#4A0707] text-white shadow-xl sm:rounded-2xl">
        <div className="relative grid grid-cols-1 items-center gap-8 overflow-hidden px-5 py-8 sm:gap-10 sm:px-8 sm:py-10 md:grid-cols-2 md:gap-10 md:px-10 lg:min-h-[570px] lg:gap-14 lg:px-16 lg:py-12">
          {/* Background Effects */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#FF981B]/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[#FF981B]/10 blur-3xl" />

          {/* Left Content */}
          <div className="relative z-10 flex flex-col items-start">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FF981B]/30 bg-white/10 px-3 py-2 backdrop-blur-sm sm:px-4 sm:py-2.5">
              <span className="h-2 w-2 rounded-full bg-[#FF981B]" />

              <span className="font-poppins text-xs font-semibold uppercase tracking-wide text-[#FF981B] sm:text-sm">
                Franchise Opportunity
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-[44px] lg:text-[54px]">
              Start a High-Demand
              <span className="mt-1 block text-[#FF981B]">
                Tea Business
              </span>
              <span className="block">in Your City</span>
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-lg font-poppins text-sm font-medium leading-6 text-[#F5E8D5] sm:mt-5 sm:text-base sm:leading-7 lg:text-[17px]">
              Partner with a fast-growing Indian beverage brand built on strong
              repeat demand, low investment and simple operations. No complex
              systems. No unnecessary royalty pressure.
            </p>

            {/* Statistics */}
            <div className="mt-6 grid w-full max-w-lg grid-cols-3 gap-2.5 sm:mt-7 sm:gap-4">
              {franchiseStats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-sm transition-colors duration-300 hover:border-[#FF981B]/35 hover:bg-white/[0.14] sm:p-4"
                >
                  <Icon
                    size={17}
                    className="text-[#FF981B]"
                    strokeWidth={2.4}
                  />

                  <p className="mt-2 font-serif text-xl font-bold text-white sm:text-3xl">
                    {value}
                  </p>

                  <p className="mt-1 font-poppins text-[10px] font-medium leading-4 text-white/75 sm:text-xs">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
              <button
                type="button"
                onClick={scrollToEnquiry}
                className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#FF981B] px-6 py-3 font-poppins text-xs font-bold text-[#4A0707] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFAD40] hover:shadow-xl active:translate-y-0 sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm"
              >
                Apply for Franchise
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border-2 border-[#FF981B] px-6 py-3 font-poppins text-xs font-semibold text-[#FF981B] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FF981B] hover:text-[#4A0707] active:translate-y-0 sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm"
              >
                <MessageCircle size={17} />
                Talk to Our Team
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative z-10 w-full">
            <div className="relative h-[260px] overflow-hidden rounded-xl border border-[#FF981B]/25 bg-[#360505] shadow-2xl sm:h-[330px] md:h-[380px] lg:h-[430px]">
              <img
                src={franchiseImage}
                alt="Purvanchal Kulhad Chai"
                className="absolute inset-0 z-0 h-full w-full object-cover object-center"
                loading="eager"
              />

              {/* Image Overlay */}
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#4A0707]/90 via-[#4A0707]/25 to-transparent" />

              {/* Brand Label */}
              <div className="absolute right-3 top-3 z-20 rounded-full border border-[#FF981B]/30 bg-[#4A0707]/85 px-3 py-1.5 backdrop-blur-sm sm:right-4 sm:top-4">
                <span className="font-poppins text-[10px] font-bold uppercase tracking-wide text-[#FF981B] sm:text-xs">
                  Purvanchal Kulhad Chai
                </span>
              </div>

              {/* Bottom Information */}
              <div className="absolute bottom-3 left-3 right-3 z-20 rounded-lg border border-white/10 bg-[#4A0707]/90 px-4 py-3 backdrop-blur-sm sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-[300px] sm:px-5 sm:py-4">
                <p className="font-poppins text-xs font-bold uppercase tracking-[0.14em] text-[#FF981B]">
                  Why This Works
                </p>

                <p className="mt-1 font-poppins text-sm font-medium leading-6 text-white">
                  Everyday product. Strong local demand.
                </p>
              </div>
            </div>

            <div className="absolute -right-3 -top-3 hidden h-20 w-20 rounded-full border-2 border-[#FF981B]/35 lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}