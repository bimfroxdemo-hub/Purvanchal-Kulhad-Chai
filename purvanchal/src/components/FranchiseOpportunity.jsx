import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const benefits = ["₹99K Setup", "Zero Royalty", "High Daily Sales"];

export default function FranchiseOpportunity() {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    const phoneNumber = "917055111555";
    const message = encodeURIComponent(
      "Hello, I want to know about Purvanchal Kulhad Chai franchise opportunity."
    );

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-[1150px] overflow-hidden rounded-2xl bg-[#4A0707] shadow-xl">
        <div className="grid grid-cols-1 items-center gap-10 px-6 py-10 sm:px-8 sm:py-12 md:grid-cols-2 md:px-10 lg:min-h-[430px] lg:gap-16 lg:px-16 lg:py-14">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FF981B]/30 bg-white/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#FF981B]" />
              <span className="font-poppins text-xs font-semibold tracking-wide text-[#FF981B] sm:text-sm">
                Franchise Opportunity
              </span>
            </div>

            <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Build Your Future with
              <span className="mt-1 block text-[#FF981B]">
                Purvanchal Kulhad Chai
              </span>
            </h2>

            <p className="mt-5 max-w-xl font-poppins text-sm font-medium leading-7 text-white/80 sm:text-base sm:leading-8">
              A trusted chai brand helping everyday people start profitable
              businesses with authentic taste, strong support and a proven
              franchise model.
            </p>

            {/* Benefits */}
            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2 font-poppins text-sm font-semibold text-white"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF981B]">
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

            {/* Buttons */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
              <button
                type="button"
                onClick={() => navigate("/franchise")}
                className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#FF981B] px-7 py-3.5 font-poppins text-sm font-bold text-[#4A0707] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFAD40] hover:shadow-xl active:translate-y-0"
              >
                Let&apos;s Talk Franchise
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border-2 border-[#FF981B] px-7 py-3.5 font-poppins text-sm font-bold text-[#FF981B] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FF981B] hover:text-[#4A0707]"
              >
                <MessageCircle size={17} />
                WhatsApp Our Team
              </button>
            </div>
          </div>

          {/* Right Side Franchise Info */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl border border-[#FF981B]/25 bg-[#360505] p-6 sm:p-8">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FF981B]/15 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-[#FF981B]/10 blur-3xl" />

              <div className="relative z-10">
                <p className="font-poppins text-xs font-bold uppercase tracking-[0.18em] text-[#FF981B]">
                  Start Your Journey
                </p>

                <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Your Own
                  <span className="block text-[#FF981B]">Chai Business</span>
                </h3>

                <p className="mt-4 max-w-sm font-poppins text-sm font-medium leading-7 text-white/75">
                  From outlet setup and staff training to marketing and daily
                  operations, our team supports you at every stage.
                </p>

                <div className="mt-7 border-t border-white/10 pt-6">
                  <button
                    type="button"
                    onClick={() => navigate("/franchise")}
                    className="group inline-flex items-center gap-2 font-poppins text-sm font-bold text-[#FF981B] transition-colors duration-300 hover:text-white"
                  >
                    View Details
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}