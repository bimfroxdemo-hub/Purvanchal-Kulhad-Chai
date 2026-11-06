import { motion } from "framer-motion";
import { Coffee, MapPinned, Settings2, Wallet } from "lucide-react";

const modelPoints = [
  {
    id: "01",
    icon: Coffee,
    title: "Everyday Product Demand",
    description:
      "Tea and coffee are daily-consumption products. Customers don’t need convincing — demand already exists.",
  },
  {
    id: "02",
    icon: Settings2,
    title: "Simple & Repeatable Operations",
    description:
      "No chef dependency and no complex machinery. Anyone can manage daily operations with basic training.",
  },
  {
    id: "03",
    icon: Wallet,
    title: "Low Investment, Controlled Risk",
    description:
      "A lean setup keeps capital low and recovery fast, reducing financial pressure on the franchise partner.",
  },
  {
    id: "04",
    icon: MapPinned,
    title: "Scalable & Location Friendly",
    description:
      "The model works in markets, highways, towns and cities with flexible formats and the same core system.",
  },
];

export default function FranchiseModelWorks() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-[1150px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FF981B]/15 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#FF981B]" />

            <span className="font-poppins text-xs font-bold uppercase tracking-[0.14em] text-[#4A0707] sm:text-sm">
              Business Logic
            </span>
          </div>

          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#4A0707] sm:text-4xl md:text-5xl">
            Why This Franchise Model{" "}
            <span className="text-[#FF981B]">Works</span>
          </h2>

          <p className="mt-4 font-poppins text-sm font-medium leading-7 text-[#705B4A] sm:text-base sm:leading-8">
            Our model is designed around everyday demand, simple operations and
            predictable returns — not hype or complex systems.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6">
          {modelPoints.map(({ id, icon: Icon, title, description }, index) => (
            <motion.article
              key={id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-[#4A0707]/10 bg-[#FFF9F1] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF981B]/50 hover:shadow-xl sm:p-7"
            >
              {/* Background Number */}
              <span className="pointer-events-none absolute right-5 top-3 font-serif text-6xl font-bold leading-none text-[#FF981B]/15 sm:text-7xl">
                {id}
              </span>

              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4A0707] shadow-md transition-transform duration-300 group-hover:scale-110">
                <Icon
                  size={22}
                  className="text-[#FF981B]"
                  strokeWidth={2.3}
                />
              </div>

              <h3 className="mt-5 max-w-xs font-serif text-2xl font-bold leading-tight text-[#4A0707]">
                {title}
              </h3>

              <p className="mt-3 max-w-md font-poppins text-sm font-medium leading-7 text-[#705B4A]">
                {description}
              </p>

              <div className="mt-5 h-1 w-10 bg-[#FF981B] transition-all duration-300 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}