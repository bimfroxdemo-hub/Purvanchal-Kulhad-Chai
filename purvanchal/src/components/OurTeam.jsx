import { useState } from "react";
import { Quote, Users } from "lucide-react";
import rohit from "../assets/gallery/Rohit Chaursiya.png";
import rahul from "../assets/gallery/rahul chaursiya.png";
const teamMembers = [
  {
    name: "Rahul Chaursiya",
    displayName: "RAHUL CHAURSIYA",
    role: "Co-Founder & Managing Director",
    image: rahul,
    initials: "RC",
    description:
      "Purvanchal Kulhad Chai” — bringing people together through the authentic taste of traditional kulhad chai, built on quality, trust, and a passion for serving India, one cup at a time.",
  },
  {
    name: "Rohit Chaursiya",
    displayName: "ROHIT CHAURSIYA",
    role: "Co-Founder / Director",
    image: rohit,
    initials: "RC",
    description:
      "Rohit Chaursiya plays a pivotal role in strategy, operations, and franchise growth, working closely with the Founder to build a premium and scalable Purvanchal Kulhad Chai brand.",
  },
];

function TeamImage({ member }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="flex h-full min-h-[300px] w-full items-center justify-center bg-[#4A0707] sm:min-h-[360px]">
        <span className="font-serif text-6xl font-bold text-[#FF981B]">
          {member.initials}
        </span>
      </div>
    );
  }

  return (
    <img
      src={member.image}
      alt={member.name}
      className="h-full min-h-[300px] w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 sm:min-h-[360px]"
      loading="lazy"
      onError={() => setImageError(true)}
    />
  );
}

export default function OurTeam() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-[1150px]">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FF981B]/15 px-4 py-2">
            <Users size={16} className="text-[#FF981B]" />
            <span className="font-poppins text-xs font-semibold tracking-wide text-[#4A0707] sm:text-sm">
              Our Team
            </span>
          </div>

          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#4A0707] sm:text-4xl md:text-5xl">
            Meet the People{" "}
            <span className="text-[#FF981B]">Behind the Brand</span>
          </h2>

          <p className="mt-4 font-poppins text-sm font-medium leading-7 text-[#705B4A] sm:text-base sm:leading-8">
            A strong leadership team driving quality, growth, and franchise
            success across India.
          </p>
        </div>

        {/* Team Cards */}
        <div className="mt-10 grid grid-cols-1 gap-7 sm:mt-12 lg:grid-cols-2 lg:gap-8">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group overflow-hidden rounded-2xl border border-[#4A0707]/10 bg-[#FFF9F1] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FF981B]/50 hover:shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1fr]">
                {/* Team Image */}
                <div className="relative overflow-hidden bg-[#4A0707]">
                  <TeamImage member={member} />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#4A0707]/65 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 rounded-full bg-[#FF981B] px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-wider text-[#4A0707]">
                    
                    Purvanchal Kulhad Chai
                  </div>
                </div>

                {/* Team Content */}
                <div className="relative flex flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.14em] text-[#FF981B] sm:text-xs">
                        {member.role}
                      </p>

                      <h3 className="mt-2 font-serif text-2xl font-bold leading-tight text-[#4A0707] sm:text-3xl">
                        {member.name}
                      </h3>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF981B]/15">
                      <Quote
                        size={19}
                        className="text-[#FF981B]"
                        strokeWidth={2.4}
                      />
                    </div>
                  </div>

                  <div className="my-5 h-px w-full bg-[#4A0707]/10" />

                  <p className="font-poppins text-sm font-medium leading-7 text-[#705B4A]">
                    {member.description}
                  </p>

                  <div className="mt-6 border-t border-[#4A0707]/10 pt-4">
                    <p className="font-poppins text-xs font-bold uppercase tracking-[0.14em] text-[#4A0707]">
                      {member.displayName}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#FF981B] transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}