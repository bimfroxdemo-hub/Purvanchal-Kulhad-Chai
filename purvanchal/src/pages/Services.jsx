import {
  ArrowRight,
  Coffee,
  Flame,
  GraduationCap,
  Headphones,
  Megaphone,
  PackageCheck,
  ShieldCheck,
  Store,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import sugarChaiImage from "../assets/logo/Kulhad Chai Sugar Poster.png";
import tanduricha from "../assets/logo/Kulhad Tandoori Chai.png";
import coffeeImage from "../assets/logo/Premium Coffee.png";
import tandooriChaiImage from "../assets/logo/Purvanchal Kulhad Chai Outlet Support.png";
import TrainingSupport from "../assets/logo/Training & Operations for Chai Outlets.png";
import MarketingSupport from "../assets/logo/Purvanchal Kulhad Chai Marketing Support.png";
import SupplyProductGuidance from "../assets/logo/Purvanchal Kulhad Chai Supply Guide.png";
import QualityHygiene from "../assets/logo/Quality and Hygiene at Every Outlet.png";
const services = [
  {
    icon: Coffee,
    title: "Sugar Ki Chai",
    description:
      "Our signature sugar-based chai, freshly brewed with premium tea leaves and authentic Indian taste loved by every age group.",
    action: "Explore Sugar Ki Chai",
    path: "/products",
    image: sugarChaiImage,
    iconBg: "bg-[#FF981B]",
  },
  {
    icon: Flame,
    title: "Kulhad Tandoori Chai",
    description:
      "A rich, smoky and aromatic chai experience served in a traditional kulhad for a memorable desi taste.",
    action: "Explore Tandoori Chai",
    path: "/products",
    image: tanduricha,
    iconBg: "bg-[#4A0707]",
  },
  {
    icon: Coffee,
    title: "Premium Coffee Range",
    description:
      "Modern café-style coffee including hot coffee, cold coffee and refreshing beverages designed for urban demand.",
    action: "Explore Coffee",
    path: "/products",
    image: coffeeImage,
    iconBg: "bg-[#FF981B]",
  },
  {
    icon: Store,
    title: "Outlet Setup Support",
    description:
      "Complete assistance for outlet planning, counter setup, menu display and operational structure for a professional start.",
    action: "Know More",
    path: "/franchise",
    image: tandooriChaiImage,
    iconBg: "bg-[#4A0707]",
  },
  {
    icon: GraduationCap,
    title: "Training & Operations",
    description:
      "Practical training for chai preparation, customer service, hygiene, billing and daily outlet management.",
    action: "View Franchise Model",
    path: "/franchise",
    image: TrainingSupport,
    iconBg: "bg-[#FF981B]",
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    description:
      "Brand creatives, promotional ideas and launch support to help your outlet attract more local customers.",
    action: "Get Franchise Details",
    path: "/franchise",
    image: MarketingSupport,
    iconBg: "bg-[#4A0707]",
  },
  {
    icon: PackageCheck,
    title: "Supply & Product Guidance",
    description:
      "Guidance for quality ingredients, packaging material and essential outlet products for smooth daily operations.",
    action: "Explore Support",
    path: "/franchise",
    image: SupplyProductGuidance,
    iconBg: "bg-[#FF981B]",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Hygiene Standards",
    description:
      "Simple quality checks and hygiene practices that help maintain the same trusted taste at every outlet.",
    action: "Know Our Standards",
    path: "/franchise",
    image: QualityHygiene,
    iconBg: "bg-[#4A0707]",
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#FFF9F1] px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-[1150px]">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FF981B]/15 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#FF981B]" />
            <span className="font-poppins text-xs font-semibold tracking-wide text-[#4A0707] sm:text-sm">
              What We Offer
            </span>
          </div>

          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#4A0707] sm:text-4xl md:text-5xl">
            Our <span className="text-[#FF981B]">Services</span>
          </h2>

          <p className="mt-4 font-poppins text-sm font-medium leading-7 text-[#705B4A] sm:text-base sm:leading-8">
            From signature beverages to a complete franchise support system, we
            offer everything required to build a successful and profitable
            outlet.
          </p>
        </div>

        {/* Services Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {services.map(
            ({ icon: Icon, title, description, action, path, image, iconBg }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-[#4A0707]/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FF981B]/60 hover:shadow-xl"
              >
                {/* Service Image */}
                <div className="relative h-[210px] overflow-hidden bg-[#4A0707] sm:h-[220px]">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#4A0707]/75 via-[#4A0707]/10 to-transparent" />

                  {/* Icon */}
                  <div
                    className={`absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full ${iconBg} shadow-lg`}
                  >
                    <Icon size={22} className="text-white" strokeWidth={2.3} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex min-h-[245px] flex-col p-6 sm:p-7">
                  <h3 className="font-serif text-2xl font-bold text-[#4A0707]">
                    {title}
                  </h3>

                  <p className="mt-3 font-poppins text-sm font-medium leading-7 text-[#705B4A]">
                    {description}
                  </p>

                  <button
                    type="button"
                    onClick={() => navigate(path)}
                    className="mt-auto inline-flex w-fit items-center gap-2 pt-6 font-poppins text-sm font-bold text-[#4A0707] transition-colors duration-300 hover:text-[#FF981B]"
                  >
                    {action}
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>

                {/* Bottom Hover Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#FF981B] transition-all duration-500 group-hover:w-full" />
              </article>
            )
          )}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-12 overflow-hidden rounded-2xl bg-[#4A0707] p-7 shadow-xl sm:mt-16 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#FF981B]/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-[#FF981B]/10 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto] md:gap-10">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF981B]">
                <Headphones
                  size={21}
                  className="text-[#4A0707]"
                  strokeWidth={2.4}
                />
              </div>

              <h3 className="mt-5 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
                Looking to Start Your{" "}
                <span className="text-[#FF981B]">Own Outlet?</span>
              </h3>

              <p className="mt-3 max-w-2xl font-poppins text-sm font-medium leading-7 text-white/75 sm:text-base">
                Explore our low-investment, zero-royalty franchise opportunity
                and take the first step towards building a scalable beverage
                business.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/franchise")}
              className="group inline-flex min-h-[48px] w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#FF981B] px-7 py-3.5 font-poppins text-sm font-bold text-[#4A0707] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFAD40] hover:shadow-xl active:translate-y-0 md:w-auto"
            >
              Apply for Franchise
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}