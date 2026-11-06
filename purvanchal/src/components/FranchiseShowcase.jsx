import { motion } from "framer-motion";
import { ArrowRight, Check, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gallery01 from "../assets/gallery/01.png";
import gallery02 from "../assets/gallery/02.png";
import gallery03 from "../assets/gallery/03.png";
import gallery04 from "../assets/gallery/04.png";
import gallery05 from "../assets/gallery/05.png";
import gallery06 from "../assets/gallery/06.png";
const franchiseBenefits = [
  "Low Investment",
  "High Profit",
  "Brand Support",
];

const galleryItems = [
  {
    id: 1,
    image: gallery01,
    alt: "Freshly prepared premium chai",
    size: "aspect-[4/3]",
  },
  {
    id: 2,
    image: gallery02,
    alt: "Hot tea and coffee experience",
    size: "aspect-[]",
  },
  {
    id: 3,
    image: gallery03,
    alt: "Tea cafe ambience",
    size: "aspect-[]",
  },
  {
    id: 4,
    image: gallery04,
    alt: "Authentic tea preparation",
    size: "aspect-[4/5]",
  },
  {
    id: 5,
    image: gallery05,
    alt: "Premium cafe interior",
    size: "aspect-[4/3]",
  },
  {
    id: 6,
    image: gallery06,
    alt: "Happy customers enjoying chai",
    size: "aspect-[7/5]",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=85&w=1200&auto=format&fit=crop",
    alt: "Modern cafe seating",
    size: "aspect-[3/4]",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=85&w=1200&auto=format&fit=crop",
    alt: "Fresh tea served hot",
    size: "aspect-square",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=85&w=1200&auto=format&fit=crop",
    alt: "Relaxing chai moment",
    size: "aspect-[4/5]",
  },
];

export default function FranchiseShowcase() {
  const navigate = useNavigate();

  return (
    <>
      {/* Franchise CTA */}
      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-[1150px] overflow-hidden rounded-2xl bg-[#4A0707] shadow-xl">
          <div className="grid grid-cols-1 items-center gap-10 px-6 py-10 sm:px-8 sm:py-12 md:grid-cols-2 md:px-10 lg:min-h-[460px] lg:gap-16 lg:px-16 lg:py-14">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FF981B]/35 bg-white/10 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#FF981B]" />
                <span className="font-poppins text-xs font-semibold tracking-wide text-[#FF981B] sm:text-sm">
                  Grow With Purvanchal
                </span>
              </div>

              <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Own A Premium
                <span className="mt-1 block text-[#FF981B]">
                  Tea Franchise
                </span>
              </h2>

              <p className="mt-5 max-w-xl font-poppins text-sm font-medium leading-7 text-white/80 sm:text-base sm:leading-8">
                Start your own luxury tea cafe with our trusted brand, premium
                menu and complete business support system.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-5">
                {franchiseBenefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="inline-flex items-center gap-2 font-poppins text-sm font-semibold text-white"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF981B]">
                      <Check
                        size={13}
                        className="text-[#4A0707]"
                        strokeWidth={3}
                      />
                    </span>
                    {benefit}
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => navigate("/franchise")}
                className="group mt-8 inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[#FF981B] px-7 py-3.5 font-poppins text-sm font-bold text-[#4A0707] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFAD40] hover:shadow-xl active:translate-y-0 sm:mt-9 sm:w-auto"
              >
                Become A Partner
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* Right Franchise Visual */}
            <div className="relative overflow-hidden rounded-xl border border-[#FF981B]/25 bg-[#360505] p-6 sm:p-8">
              <div className="absolute -right-14 -top-14 h-52 w-52 rounded-full bg-[#FF981B]/15 blur-3xl" />
              <div className="absolute -bottom-14 -left-14 h-48 w-48 rounded-full bg-[#FF981B]/10 blur-3xl" />

              <div className="relative z-10 flex min-h-[270px] flex-col justify-between sm:min-h-[320px]">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-[#FF981B]/30 bg-[#FF981B]/10 px-3 py-1.5 font-poppins text-xs font-bold text-[#FF981B]">
                    Since 2026
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF981B]">
                    <Users size={20} className="text-[#4A0707]" />
                  </div>
                </div>

                <div>
                  <p className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-[#FF981B]">
                    Franchise Partners Joined
                  </p>

                  <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
                    Purvanchal
                    <span className="block text-[#FF981B]">Kulhad Tea</span>
                  </h3>

                  <p className="mt-3 max-w-sm font-poppins text-sm font-medium leading-6 text-white/75">
                    Build a successful chai business with a brand people trust
                    and love.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Image Gallery */}
      <section className="w-full bg-[#FFF9F1] px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-[1150px]">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="font-poppins text-xs font-bold uppercase tracking-[0.18em] text-[#FF981B] sm:text-sm">
              Purvanchal Moments
            </p>

            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[#4A0707] sm:text-4xl md:text-5xl">
              Our Franchise{" "}
              <span className="text-[#FF981B]">Gallery</span>
            </h2>

            <p className="mt-4 font-poppins text-sm font-medium leading-7 text-[#705B4A] sm:text-base sm:leading-8">
              Explore our premium tea cafe interiors, modern ambiance and
              authentic chai experiences designed for every city.
            </p>
          </motion.div>

          {/* Masonry Full Image Grid */}
          <div className="mt-10 columns-1 gap-3 sm:mt-12 sm:columns-2 sm:gap-4 lg:columns-3 lg:gap-5">
            {galleryItems.map((item, index) => (
              <motion.figure
                key={item.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(index * 0.06, 0.3),
                }}
                className={`group relative mb-3 break-inside-avoid overflow-hidden sm:mb-4 lg:mb-5 ${item.size}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover overlay only */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#4A0707]/85 via-[#4A0707]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <figcaption className="absolute bottom-0 left-0 translate-y-6 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:p-6">
                  <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.16em] text-[#FF981B] sm:text-xs">
                    Purvanchal Kulhad Chai
                  </p>

                  <p className="mt-1 font-serif text-xl font-bold text-white sm:text-2xl">
                    Authentic Tea Moment
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <div className="mt-10 text-center sm:mt-12">
            <button
              type="button"
              onClick={() => navigate("/gallery")}
              className="group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-[#4A0707] px-7 py-3 font-poppins text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FF981B] hover:text-[#4A0707] hover:shadow-xl"
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
    </>
  );
}