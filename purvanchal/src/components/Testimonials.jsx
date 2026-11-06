import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rakesh Sharma",
    role: "Franchise Partner – Jaipur",
    message:
      "Low investment aur zero royalty ki wajah se maine franchise li. Support team bhot helpful hai.",
  },
  {
    name: "Neha Verma",
    role: "Franchise Partner – Indore",
    message:
      "Gud Ki Chai mere area me bhot achhi chal rahi hai. Daily repeat customers aate hain.",
  },
  {
    name: "Amit Patel",
    role: "Franchise Partner – Ahmedabad",
    message: "No hidden charges. Pricing bilkul transparent hai.",
  },
  {
    name: "Suresh Yadav",
    role: "Franchise Partner – Lucknow",
    message: "Training ke baad outlet handle karna easy ho gaya.",
  },
];

const getVisibleCards = () => {
  if (window.innerWidth >= 1024) return 3; // Desktop
  if (window.innerWidth >= 640) return 2; // Tablet
  return 1; // Mobile
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(() => getVisibleCards() === 3 ? 0 : 0);
  const [visibleCards, setVisibleCards] = useState(() => getVisibleCards());
  const [isPaused, setIsPaused] = useState(false);

  const maxIndex = Math.max(0, testimonials.length - visibleCards);

  useEffect(() => {
    const handleResize = () => {
      const cardsToShow = getVisibleCards();

      setVisibleCards(cardsToShow);
      setActiveIndex((currentIndex) =>
        Math.min(currentIndex, Math.max(0, testimonials.length - cardsToShow))
      );
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((currentIndex) =>
      currentIndex >= maxIndex ? 0 : currentIndex + 1
    );
  }, [maxIndex]);

  const goToPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex <= 0 ? maxIndex : currentIndex - 1
    );
  };

  useEffect(() => {
    if (isPaused) return undefined;

    const sliderInterval = setInterval(goToNext, 4500);

    return () => clearInterval(sliderInterval);
  }, [goToNext, isPaused]);

  return (
    <section className="w-full bg-[#FFF9F1] px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-[1150px]">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FF981B]/15 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#FF981B]" />
            <span className="font-poppins text-xs font-semibold tracking-wide text-[#4A0707] sm:text-sm">
              Testimonials
            </span>
          </div>

          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#4A0707] sm:text-4xl md:text-5xl">
            What Our Franchise{" "}
            <span className="text-[#FF981B]">Partners Say</span>
          </h2>

          <p className="mt-4 font-poppins text-sm font-medium leading-7 text-[#705B4A] sm:text-base">
            Real experiences from people who trusted Purvanchal Kulhad Chai.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div
          className="relative mt-10 sm:mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${
                  activeIndex * (100 / visibleCards)
                }%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="w-full shrink-0 px-1.5 sm:w-1/2 sm:px-2 lg:w-1/3"
                >
                  <article className="group relative flex h-full min-h-[300px] flex-col rounded-2xl border border-[#4A0707]/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FF981B]/60 hover:shadow-xl sm:min-h-[320px] sm:p-6">
                    {/* Top Section */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            size={14}
                            className="fill-[#FF981B] text-[#FF981B]"
                          />
                        ))}
                      </div>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF981B]/15">
                        <Quote
                          size={19}
                          className="text-[#FF981B]"
                          strokeWidth={2.4}
                        />
                      </div>
                    </div>

                    {/* Review */}
                    <p className="mt-5 font-poppins text-sm font-medium leading-7 text-[#705B4A] sm:text-[15px]">
                      “{testimonial.message}”
                    </p>

                    {/* Partner Details */}
                    <div className="mt-auto border-t border-[#4A0707]/10 pt-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#4A0707] font-poppins text-xs font-bold text-white">
                          {testimonial.name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")}
                        </div>

                        <div>
                          <h3 className="font-poppins text-sm font-bold text-[#4A0707]">
                            {testimonial.name}
                          </h3>
                          <p className="mt-0.5 font-poppins text-xs font-semibold text-[#FF981B]">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Orange Line */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 rounded-b-2xl bg-[#FF981B] transition-all duration-300 group-hover:w-full" />
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Previous Arrow */}
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Previous testimonials"
            className="absolute left-0 top-1/2 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#4A0707]/15 bg-white text-[#4A0707] shadow-lg transition-all duration-300 hover:bg-[#4A0707] hover:text-white lg:flex"
          >
            <ChevronLeft size={21} />
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={goToNext}
            aria-label="Next testimonials"
            className="absolute right-0 top-1/2 hidden h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#4A0707]/15 bg-white text-[#4A0707] shadow-lg transition-all duration-300 hover:bg-[#4A0707] hover:text-white lg:flex"
          >
            <ChevronRight size={21} />
          </button>

          {/* Slider Dots */}
          <div className="mt-7 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-7 bg-[#FF981B]"
                    : "w-2.5 bg-[#4A0707]/20 hover:bg-[#4A0707]/45"
                }`}
              />
            ))}
          </div>

          <p className="mt-3 text-center font-poppins text-xs font-medium text-[#705B4A]">
            Hover on testimonials to pause auto slide
          </p>
        </div>
      </div>
    </section>
  );
}