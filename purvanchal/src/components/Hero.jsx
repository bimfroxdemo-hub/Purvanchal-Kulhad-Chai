import { CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import herologo from "../assets/logo/Purvanchal Kulhad Chai.png";

export default function Hero() {
  const navigate = useNavigate();

  const highlights = [
    "Authentic Purvanchal Kulhad Chai",
    "Complete Franchise Support",
    "No Monthly Royalty",
  ];

  const handleWhatsApp = () => {
    const phoneNumber = "916353771878";
    const message = encodeURIComponent(
      "Hello, I want to know more about Purvanchal Kulhad Chai Franchise."
    );

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="w-full bg-white px-3 pb-4 pt-[101px] sm:px-6 sm:pb-6 md:px-8 lg:pb-8">
      <div className="mx-auto max-w-[1150px] overflow-hidden rounded-xl bg-[#4A0707] text-white shadow-xl sm:rounded-2xl">
        <div className="grid grid-cols-1 items-center gap-8 px-5 py-8 sm:gap-10 sm:px-8 sm:py-10 md:grid-cols-2 md:gap-10 md:px-10 lg:min-h-[570px] lg:gap-14 lg:px-16 lg:py-12">
          {/* Left Content */}
          <div className="flex flex-col items-start">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FF981B]/30 bg-white/10 px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="h-2 w-2 rounded-full bg-[#FF981B]" />

              <span className="font-poppins text-xs font-semibold tracking-wide text-[#FF981B] sm:text-sm">
                India&apos;s Growing Chai Franchise
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-[44px] lg:text-[54px]">
              Start Your Own
              <span className="mt-1 block text-[#FF981B]">
                Purvanchal Kulhad Chai
              </span>
              <span className="block">Business</span>
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-lg font-poppins text-sm font-medium leading-6 text-[#F5E8D5] sm:mt-5 sm:text-base sm:leading-7 lg:text-[17px]">
              Bring the authentic taste of traditional Purvanchal Kulhad Chai
              to your city. Start your own chai business with complete
              franchise support.
            </p>

            {/* Highlights */}
            <div className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 font-poppins text-xs font-medium text-[#F5E8D5] sm:text-sm"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-[#FF981B]"
                    strokeWidth={2.5}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
              <button
                type="button"
                onClick={() => navigate("/franchise")}
                className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#FF981B] px-6 py-3 font-poppins text-xs font-bold text-[#4A0707] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFAD40] hover:shadow-xl active:translate-y-0 sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm"
              >
                Get Franchise Details
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
                Call / WhatsApp Now
              </button>
            </div>
          </div>

          {/* Right Image / Brand Visual */}
          <div className="relative w-full">
            <div className="relative h-[260px] overflow-hidden rounded-xl border border-[#FF981B]/25 bg-[#360505] shadow-2xl sm:h-[330px] md:h-[380px] lg:h-[430px]">
              {/* Full Size Image */}
              <img
                src={herologo}
                alt="Purvanchal Kulhad Chai"
                className="absolute inset-0 z-0 h-full w-full object-cover object-center"
                loading="eager"
              />

              {/* Premium overlay */}
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#4A0707]/85 via-[#4A0707]/25 to-transparent" />

              {/* Branding Card */}
              <div className="absolute bottom-3 left-3 right-3 z-20 rounded-lg border border-white/10 bg-[#4A0707]/90 px-3 py-2.5 backdrop-blur-sm sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-[265px] sm:px-4 sm:py-3">
                <p className="font-poppins text-xs font-bold text-[#FF981B] sm:text-sm">
                  Purvanchal Kulhad Chai
                </p>

                <p className="mt-0.5 font-poppins text-xs font-medium text-white">
                  Authentic Taste of Tradition
                </p>
              </div>

              {/* Top Badge */}
              <div className="absolute right-3 top-3 z-20 rounded-full border border-[#FF981B]/30 bg-[#4A0707]/85 px-3 py-1.5 backdrop-blur-sm sm:right-4 sm:top-4">
                <span className="font-poppins text-[10px] font-bold uppercase tracking-wide text-[#FF981B] sm:text-xs">
                  Since 2026
                </span>
              </div>
            </div>

            {/* Decorative Accent */}
            <div className="absolute -right-3 -top-3 hidden h-20 w-20 rounded-full border-2 border-[#FF981B]/35 lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}