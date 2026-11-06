import { Coffee, Flame, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import tea1 from "/public/kulhad-chai2.png";
import tea2 from "/public/Tandoori Chai Kulhad.png";
import tea3 from "/public/Coffee Cup.png";
const teaBlends = [
  {
    id: 1,
    name: "Kulhad Chai",
    label: "Traditional Favourite",
    description:
      "Freshly brewed desi chai served in a traditional clay kulhad for an authentic earthy taste.",
    icon: Coffee,
    accent: "bg-[#4A0707]",
    image: tea1,
  },
  {
    id: 2,
    name: "Kulhad Tandoori Chai",
    label: "Signature Special",
    description:
      "A rich, smoky and aromatic chai experience prepared with our special tandoori touch.",
    icon: Flame,
    accent: "bg-[#FF981B]",
    image: tea2 ,
  },
  {
    id: 3,
    name: "Coffee",
    label: "Fresh & Creamy",
    description:
      "Smooth, flavourful coffee prepared fresh for every guest who loves a refreshing break.",
    icon: Coffee,
    accent: "bg-[#4A0707]",
    image: tea3,
  },
];

export default function TeaBlends() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#FFF9F1] px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-[1150px]">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FF981B]/15 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#FF981B]" />
            <span className="font-poppins text-xs font-semibold tracking-wide text-[#4A0707] sm:text-sm">
              Made With Tradition
            </span>
          </div>

          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#4A0707] sm:text-4xl md:text-5xl">
            Our Unique{" "}
            <span className="text-[#FF981B]">Tea Blends</span>
          </h2>

          <p className="mt-4 font-poppins text-sm font-medium leading-7 text-[#705B4A] sm:text-base sm:leading-8">
            Carefully crafted blends inspired by tradition, aroma, and purity
            — made for true tea lovers.
          </p>
        </div>

        {/* Product Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {teaBlends.map((blend) => {
            const Icon = blend.icon;

            return (
              <article
                key={blend.id}
                className="group overflow-hidden rounded-2xl border border-[#4A0707]/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FF981B]/50 hover:shadow-xl"
              >
                {/* Product Image */}
                <div className="relative h-[230px] overflow-hidden bg-[#F7F0E5] sm:h-[250px]">
                  <img
                    src={blend.image}
                    alt={blend.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#4A0707]/45 via-transparent to-transparent" />

                  {/* Product Number */}
                  <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white font-poppins text-xs font-bold text-[#4A0707] shadow-md">
                    0{blend.id}
                  </span>

                  {/* Icon */}
                  <div
                    className={`absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full ${blend.accent} shadow-lg`}
                  >
                    <Icon size={20} className="text-white" strokeWidth={2.2} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  <p className="font-poppins text-xs font-bold uppercase tracking-[0.14em] text-[#FF981B]">
                    {blend.label}
                  </p>

                  <h3 className="mt-2 font-serif text-2xl font-bold text-[#4A0707]">
                    {blend.name}
                  </h3>

                  <p className="mt-3 min-h-[72px] font-poppins text-sm font-medium leading-6 text-[#705B4A]">
                    {blend.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => navigate("/products")}
                    className="mt-5 inline-flex items-center gap-2 font-poppins text-sm font-bold text-[#4A0707] transition-colors duration-300 hover:text-[#FF981B]"
                  >
                    Explore Menu
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>
                </div>

                {/* Bottom accent line */}
                <div className="h-1 w-0 bg-[#FF981B] transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}