import {
  Coffee,
  GraduationCap,
  Headphones,
  Megaphone,
  PackageCheck,
  ShieldCheck,
  Store,
} from "lucide-react";

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

export default function InvestmentClarity() {
  return (
    <section className="w-full bg-[#FFF9F1] px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-[1150px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FF981B]/15 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#FF981B]" />
              <span className="font-poppins text-xs font-bold uppercase tracking-[0.14em] text-[#4A0707] sm:text-sm">
                Investment Clarity
              </span>
            </div>

            <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#4A0707] sm:text-4xl md:text-5xl">
              What You Get in{" "}
              <span className="text-[#FF981B]">₹1,50,000</span>
            </h2>

            <p className="mt-5 max-w-xl font-poppins text-sm font-medium leading-7 text-[#705B4A] sm:text-base sm:leading-8">
              A transparent, all-inclusive setup designed to help you start
              operations quickly and confidently.
            </p>

            {/* Dark Information Card */}
            <div className="relative mt-8 overflow-hidden rounded-2xl bg-[#4A0707] p-6 shadow-xl sm:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FF981B]/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-[#FF981B]/10 blur-3xl" />

              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF981B]">
                  <Coffee
                    size={23}
                    className="text-[#4A0707]"
                    strokeWidth={2.4}
                  />
                </div>

                <p className="mt-5 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Simple Setup.
                  <span className="block text-[#FF981B]">
                    Strong Foundation.
                  </span>
                </p>

                <p className="mt-4 font-poppins text-sm font-medium leading-7 text-white/75">
                  Start with a trusted brand, practical operational guidance
                  and a business system built for everyday chai demand.
                </p>

                <div className="mt-6 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FF981B]" />
                  <span className="font-poppins text-xs font-bold uppercase tracking-[0.14em] text-[#FF981B]">
                    Transparent Franchise Model
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {investmentItems.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-xl border border-[#4A0707]/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FF981B]/50 hover:shadow-lg sm:p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF981B]/15 transition-all duration-300 group-hover:bg-[#FF981B]">
                  <Icon
                    size={21}
                    className="text-[#FF981B] transition-colors duration-300 group-hover:text-[#4A0707]"
                    strokeWidth={2.4}
                  />
                </div>

                <h3 className="mt-4 font-serif text-xl font-bold text-[#4A0707]">
                  {title}
                </h3>

                <p className="mt-2 font-poppins text-sm font-medium leading-6 text-[#705B4A]">
                  {description}
                </p>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#FF981B] transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}