import { Coffee, Leaf, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import aboutImage from "../assets/logo/Purvanchal Kulhad Chai.png";

export default function AboutUs() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Coffee,
      title: "Fresh Brewed",
      description: "Every cup is prepared fresh.",
    },
    {
      icon: Leaf,
      title: "Natural Ingredients",
      description: "Premium quality tea leaves used.",
    },
    {
      icon: CheckCircle2,
      title: "Kulhad Experience",
      description: "Traditional earthy taste in every sip.",
    },
  ];

  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:py-24">
      <div className="mx-auto grid max-w-[1150px] grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-12 lg:gap-20">
        {/* Left Image */}
        <div className="relative order-1">
          <div className="relative h-[300px] overflow-hidden rounded-xl border border-[#FF981B]/30 bg-[#F7F0E5] shadow-lg sm:h-[380px] md:h-[440px] lg:h-[490px]">
            <img
              src={aboutImage}
              alt="Purvanchal Kulhad Chai"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#4A0707]/45 via-transparent to-transparent" />
          </div>

          {/* Image Card */}
          <div className="absolute -bottom-4 left-4 z-20 rounded-lg bg-[#4A0707] px-4 py-3 text-white shadow-xl sm:-bottom-5 sm:-left-5 sm:px-6 sm:py-4">
            <p className="font-poppins text-sm font-bold text-[#FF981B] sm:text-base">
              Purvanchal Kulhad Chai
            </p>
            <p className="mt-0.5 font-poppins text-xs text-white/80 sm:text-sm">
              Authentic Taste of Tradition
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="order-2">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#FF981B]/15 px-4 py-2 sm:mb-6 sm:px-5 sm:py-2.5">
            <span className="h-2 w-2 rounded-full bg-[#FF981B]" />
            <span className="font-poppins text-xs font-semibold tracking-wide text-[#FF981B] sm:text-sm">
              About Purvanchal Kulhad Chai
            </span>
          </div>

          {/* Since */}
          <p className="mb-3 font-poppins text-xs font-bold uppercase tracking-[0.18em] text-[#4A0707] sm:text-sm">
            Since 2026
          </p>

          {/* Heading */}
          <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            <span className="block text-[#4A0707]">
              Purvanchal Special
            </span>

            <span className="mt-1 block text-[#FF981B]">
              Kulhad Chai,
            </span>

            <span className="block text-[#4A0707]">
              Removes Your
              <span className="ml-2 text-[#FF981B]">Fatigue</span>
            </span>
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-xl font-poppins text-sm font-medium leading-7 text-[#705B4A] sm:text-base sm:leading-8">
            Welcome to Purvanchal Kulhad Chai! We bring the authentic tea
            tradition of Purvanchal, Uttar Pradesh, all the way to Surat. Our
            specialty is freshly brewed, authentic tea served in traditional
            clay kulhads, offering a true desi taste and a homely feeling in
            every sip.
          </p>

          {/* Feature Cards */}
          <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-lg border border-[#FF981B]/25 bg-[#FFF9F1] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF981B] hover:shadow-md"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#FF981B]">
                  <Icon size={19} className="text-white" strokeWidth={2.3} />
                </div>

                <h3 className="font-poppins text-sm font-bold text-[#4A0707]">
                  {title}
                </h3>

                <p className="mt-1 font-poppins text-xs font-medium leading-5 text-[#705B4A]">
                  {description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={() => navigate("/products")}
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-[#FF981B] px-7 py-3 font-poppins text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E9870C] hover:shadow-xl active:translate-y-0 sm:mt-10 sm:px-8 sm:py-3.5"
          >
            Explore Our Menu
          </button>
        </div>
      </div>
    </section>
  );
}