import {
  Award,
  Coffee,
  Eye,
  Handshake,
  HeartHandshake,
  IndianRupee,
  Store,
  Target,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import aboutImage from "../assets/logo/Purvanchal Kulhad Chai.png";

const storyPoints = [
  {
    icon: Coffee,
    title: "Authentic Taste",
    description: "Traditional Gud Ki Chai loved by all age groups.",
  },
  {
    icon: Store,
    title: "Simple Operations",
    description: "No complex systems. Easy to manage daily business.",
  },
  {
    icon: Handshake,
    title: "Franchise First",
    description: "Zero royalty and full support for long-term success.",
  },
];

const purposePoints = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To bring authentic traditional chai to every corner, maintaining quality, affordability, and a memorable experience in every cup.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To build a trusted Indian chai brand that connects communities, celebrates tradition, and creates business opportunities through a growing franchise network.",
  },
  {
    icon: HeartHandshake,
    title: "Our Values",
    description:
      "We stand for authenticity, consistent quality, customer satisfaction, transparency, and strong relationships with our customers and franchise partners.",
  },
];

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <>
      {/* About Intro */}
      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[1150px] grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FF981B]/15 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#FF981B]" />
              <span className="font-poppins text-xs font-semibold tracking-wide text-[#4A0707] sm:text-sm">
                About Purvanchal Kulhad Chai
              </span>
            </div>

            <h1 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#4A0707] sm:text-4xl md:text-5xl">
              Brewing Trust with
              <span className="mt-1 block text-[#FF981B]">Gud Ki Chai</span>
            </h1>

            <p className="mt-5 max-w-xl font-poppins text-sm font-medium leading-7 text-[#705B4A] sm:text-base sm:leading-8">
              Purvanchal Kulhad Chai is a fast-growing Indian chai brand built
              on quality, affordability, and a strong franchise-first approach.
              From small towns to big cities, we help entrepreneurs build
              profitable chai businesses with confidence.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
              <div className="rounded-xl border border-[#4A0707]/10 bg-[#FFF9F1] p-3 text-center sm:p-4">
                <Coffee
                  size={20}
                  className="mx-auto text-[#FF981B]"
                  strokeWidth={2.4}
                />
                <p className="mt-2 font-serif text-lg font-bold text-[#4A0707] sm:text-xl">
                  Since 2021
                </p>
                <p className="mt-1 font-poppins text-[10px] font-medium text-[#705B4A] sm:text-xs">
                  Trusted Brand
                </p>
              </div>

              <div className="rounded-xl border border-[#4A0707]/10 bg-[#FFF9F1] p-3 text-center sm:p-4">
                <Store
                  size={20}
                  className="mx-auto text-[#FF981B]"
                  strokeWidth={2.4}
                />
                <p className="mt-2 font-serif text-lg font-bold text-[#4A0707] sm:text-xl">
                  120+
                </p>
                <p className="mt-1 font-poppins text-[10px] font-medium text-[#705B4A] sm:text-xs">
                  Outlets
                </p>
              </div>

              <div className="rounded-xl border border-[#4A0707]/10 bg-[#FFF9F1] p-3 text-center sm:p-4">
                <IndianRupee
                  size={20}
                  className="mx-auto text-[#FF981B]"
                  strokeWidth={2.4}
                />
                <p className="mt-2 font-serif text-lg font-bold text-[#4A0707] sm:text-xl">
                  Zero
                </p>
                <p className="mt-1 font-poppins text-[10px] font-medium text-[#705B4A] sm:text-xs">
                  Royalty
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate("/franchise")}
              className="mt-8 inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#FF981B] px-7 py-3 font-poppins text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E9870C] hover:shadow-xl active:translate-y-0"
            >
              Explore Franchise Opportunity
            </button>
          </div>

          {/* Right Full Image Box */}
          <div className="relative">
            <div className="relative h-[320px] overflow-hidden rounded-2xl border border-[#FF981B]/25 shadow-xl sm:h-[400px] md:h-[460px]">
              <img
                src={aboutImage}
                alt="Purvanchal Kulhad Chai"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
              />

              {/* Dark overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#4A0707]/85 via-[#4A0707]/20 to-transparent" />

              {/* Image content */}
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-[#4A0707]/90 p-4 backdrop-blur-sm sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[280px]">
                <p className="font-poppins text-xs font-bold uppercase tracking-[0.16em] text-[#FF981B]">
                  Purvanchal Kulhad Chai
                </p>
                <p className="mt-1 font-poppins text-sm font-medium text-white">
                  Authentic Taste. Honest Business.
                </p>
              </div>
            </div>

            <div className="absolute -right-3 -top-3 hidden h-24 w-24 rounded-full border-2 border-[#FF981B]/40 lg:block" />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full bg-[#FFF9F1] px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-[1150px]">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FF981B]/15 px-4 py-2">
              <Coffee size={16} className="text-[#FF981B]" />
              <span className="font-poppins text-xs font-semibold tracking-wide text-[#4A0707] sm:text-sm">
                Our Story
              </span>
            </div>

            <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#4A0707] sm:text-4xl md:text-5xl">
              Sip the Tradition, Join the Journey
              <span className="mt-1 block text-[#FF981B]">
                A Business Built on Trust
              </span>
            </h2>

            <p className="mt-5 font-poppins text-sm font-medium leading-7 text-[#705B4A] sm:text-base sm:leading-8">
              Purvanchal Kulhad Chai brings authentic Indian chai at affordable prices while creating business opportunities for aspiring entrepreneurs through a trusted and affordable franchise model.
            </p>

            <p className="mt-4 font-poppins text-sm font-medium leading-7 text-[#705B4A] sm:text-base sm:leading-8">
              Today, our brand stands for honesty, simplicity, and a franchise
              model that actually works on the ground.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-3 sm:gap-6 lg:gap-8">
            {storyPoints.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="group rounded-xl border border-[#4A0707]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FF981B]/50 hover:shadow-lg sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF981B]/15 transition-colors duration-300 group-hover:bg-[#FF981B]">
                  <Icon
                    size={23}
                    className="text-[#FF981B] transition-colors duration-300 group-hover:text-white"
                    strokeWidth={2.2}
                  />
                </div>

                <h3 className="mt-5 font-serif text-xl font-bold text-[#4A0707] sm:text-2xl">
                  {title}
                </h3>

                <p className="mt-3 font-poppins text-sm font-medium leading-7 text-[#705B4A]">
                  {description}
                </p>

                <div className="mt-5 h-1 w-10 bg-[#FF981B] transition-all duration-300 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-[1150px]">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#4A0707] px-4 py-2">
              <Award size={16} className="text-[#FF981B]" />
              <span className="font-poppins text-xs font-semibold tracking-wide text-white sm:text-sm">
                Our Purpose
              </span>
            </div>

            <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#4A0707] sm:text-4xl md:text-5xl">
              Driven by Purpose{" "}
              <span className="text-[#FF981B]">&amp; Principles</span>
            </h2>

            <p className="mt-4 font-poppins text-sm font-medium leading-7 text-[#705B4A] sm:text-base sm:leading-8">
              Everything we do at Purvanchal Kulhad Chai is focused on building
              long-term value — for customers, partners, and franchise owners.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-3 md:gap-6 lg:gap-8">
            {purposePoints.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-xl bg-[#4A0707] p-6 shadow-lg sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF981B]">
                  <Icon
                    size={22}
                    className="text-[#4A0707]"
                    strokeWidth={2.4}
                  />
                </div>

                <h3 className="mt-5 font-serif text-2xl font-bold text-white">
                  {title}
                </h3>

                <p className="mt-3 font-poppins text-sm font-medium leading-7 text-white/75">
                  {description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center sm:mt-12">
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border-2 border-[#4A0707] px-7 py-3 font-poppins text-sm font-bold text-[#4A0707] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4A0707] hover:text-white"
            >
              Connect With Our Team
            </button>
          </div>
        </div>
      </section>
    </>
  );
}