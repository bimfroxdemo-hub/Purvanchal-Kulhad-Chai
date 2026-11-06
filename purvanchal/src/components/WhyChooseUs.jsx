import React from "react";
import { Check } from "lucide-react";
import why01 from "../assets/logo/why01.png";
const features = [
  "Exclusive franchise territory",
  "No monthly royalty",
  "Complete training & support",
  "No hidden charges",
  "Marketing & promotional support",
  "5-year franchise agreement",
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-8 md:py-16 lg:py-24">
      <div className="mx-auto max-w-[1150px] grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">

        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold text-orange-600 mb-5 sm:mb-6 sm:px-5 sm:text-sm">
            Why Choose Us
          </span>

          {/* Heading */}
          <h2 className="font-serif text-3xl font-extrabold text-[#211812] leading-tight sm:text-4xl md:text-5xl">
            Why Choose
            <br />
            <span className="text-[#FF981B]">Purvanchal</span>
            <br />
            <span className="text-[#FF981B]">Kulhad Chai?</span>
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-lg text-sm font-medium text-gray-600 leading-7 sm:mt-5 sm:text-base">
            Become a part of our growing chai business and bring
            the authentic taste of traditional Gud Ki Chai to
            your city with complete franchise support.
          </p>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-8 sm:gap-y-5 md:mt-10 md:gap-x-8 md:gap-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check
                  className="text-[#FF981B] w-5 h-5 shrink-0 mt-0.5 sm:w-6 sm:h-6"
                  strokeWidth={3}
                />
                <p className="text-[#211812] text-sm font-medium sm:text-base">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <a
            href="/franchise"
            className="inline-flex mt-8 sm:mt-10 items-center justify-center
            bg-[#FF981B] text-white font-bold px-6 py-3 sm:px-8 sm:py-4
            rounded-full hover:bg-[#FFAD40] hover:-translate-y-1
            transition-all duration-300 shadow-lg hover:shadow-xl
            text-sm sm:text-base"
          >
            Explore Franchise →
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full mt-6 md:mt-0">
          <div className="overflow-hidden rounded-lg sm:rounded-xl border border-[#FF981B]/10 shadow-lg sm:shadow-2xl bg-[#302117]">
            <img
              src={why01}
              alt="Purvanchal Kulhad Chai Franchise"
              className="w-full h-[280px] sm:h-[350px] md:h-[420px] object-cover
              hover:scale-105 transition-transform duration-500"
              loading="lazy"
              onError={(e) => {
                e.target.src = "/logo.png";
              }}
            />
          </div>

          {/* Bottom Info Card */}
          <div className="absolute -bottom-4 -left-4 bg-[#211812]
            text-white px-4 py-3 shadow-lg rounded-lg sm:px-6 sm:py-4 sm:rounded-xl md:block hidden">
            <p className="text-[#FF981B] font-bold text-sm sm:text-lg">
              Purvanchal Kulhad Chai
            </p>
            <p className="text-xs sm:text-sm text-gray-300 mt-1">
              Authentic Taste of Tradition
            </p>
          </div>

          {/* Decorative accent */}
          <div className="absolute -top-3 -right-3 hidden h-20 w-20 rounded-full border-2 border-[#FF981B]/20 lg:block" />
        </div>

      </div>
    </section>
  );
}