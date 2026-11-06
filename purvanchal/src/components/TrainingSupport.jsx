import {
  GraduationCap,
  Megaphone,
  TrendingUp,
  Users,
} from "lucide-react";

const supportSteps = [
  {
    id: "01",
    icon: GraduationCap,
    title: "Pre-Launch Training",
    description:
      "Hands-on guidance covering preparation methods, hygiene standards and daily operating routines.",
  },
  {
    id: "02",
    icon: Users,
    title: "Staff & Operations Setup",
    description:
      "Support in staff briefing, workflow setup and customer-handling best practices.",
  },
  {
    id: "03",
    icon: Megaphone,
    title: "Launch Day Assistance",
    description:
      "Guidance for opening-day execution, promotion ideas and smooth customer-flow management.",
  },
  {
    id: "04",
    icon: TrendingUp,
    title: "Ongoing Business Support",
    description:
      "Continuous help with supply coordination, performance review and operational improvements.",
  },
];

export default function TrainingSupport() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-[1150px]">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FF981B]/15 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#FF981B]" />
            <span className="font-poppins text-xs font-bold uppercase tracking-[0.14em] text-[#4A0707] sm:text-sm">
              After You Join
            </span>
          </div>

          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#4A0707] sm:text-4xl md:text-5xl">
            Training &{" "}
            <span className="text-[#FF981B]">Support System</span>
          </h2>

          <p className="mt-4 font-poppins text-sm font-medium leading-7 text-[#705B4A] sm:text-base sm:leading-8">
            We do not just start your outlet — we support you before launch,
            during launch and after launch.
          </p>
        </div>

        {/* Support Cards */}
        <div className="relative mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6">
          {supportSteps.map(({ id, icon: Icon, title, description }) => (
            <article
              key={id}
              className="group relative overflow-hidden rounded-2xl border border-[#4A0707]/10 bg-[#FFF9F1] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF981B]/50 hover:shadow-xl sm:p-7"
            >
              {/* Background Step Number */}
              <span className="pointer-events-none absolute right-5 top-3 font-serif text-6xl font-bold leading-none text-[#FF981B]/15 sm:text-7xl">
                {id}
              </span>

              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4A0707] shadow-md transition-transform duration-300 group-hover:scale-110">
                <Icon
                  size={22}
                  className="text-[#FF981B]"
                  strokeWidth={2.4}
                />
              </div>

              <h3 className="mt-5 font-serif text-2xl font-bold text-[#4A0707]">
                {title}
              </h3>

              <p className="mt-3 max-w-md font-poppins text-sm font-medium leading-7 text-[#705B4A]">
                {description}
              </p>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#FF981B] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}