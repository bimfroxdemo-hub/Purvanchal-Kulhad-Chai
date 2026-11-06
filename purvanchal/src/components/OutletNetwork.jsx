import { MapPin, Store, TrendingUp } from "lucide-react";
import indiaMap from "../assets/maps/india-outline.png";

const outletData = {
  totalOutlets: "04+",
  since: "2026",
  states: "03+",
  cities: "03+",
};

const stats = [
  { icon: Store, value: outletData.totalOutlets, label: "Active Outlets" },
  { icon: MapPin, value: outletData.cities, label: "Cities Covered" },
  { icon: TrendingUp, value: outletData.states, label: "States & Growing" },
];

// Approximate pin positions (percentage of image width/height)
const pins = [
  // { city: "Surat", top: "58%", left: "28%" },
  { city: "Surat", top: "48%", left: "25%" },
  { city: "Sura", top: "50%", left: "23%" },
  // { city: "Delhi", top: "33%", left: "40%" },
  { city: "Madhaya Pradesh", top: "48%", left: "40%" },
  { city: "Deoria", top: "40%", left: "45%" },
  { city: "Varanasi", top: "45%", left: "57%" },
  // { city: "Patna", top: "44%", left: "63%" },
  // { city: "Kolkata", top: "53%", left: "70%" },
  // { city: "Hyderabad", top: "70%", left: "42%" },
  // { city: "Bengaluru", top: "82%", left: "38%" },
  // { city: "Pune", top: "66%", left: "30%" },
];

export default function OutletNetwork() {
  return (
    <section className="bg-[#120b08] py-16 md:py-24 px-4">
      <div className="mx-auto max-w-6xl grid items-center gap-12 lg:grid-cols-2">
        {/* Left — Stats */}
        <div>
          <p className="text-[#FF981B] font-semibold tracking-widest uppercase text-sm mb-3">
            Our Reach
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Playfair_Display'] leading-tight">
            A Growing Network Across India
          </h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            Since {outletData.since}, Purvanchal Kulhad Chai has been bringing
            authentic kulhad chai to cities across the country. Join a brand
            that's expanding every month.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="rounded-xl bg-[#4A0707] border border-white/10 p-5 text-center"
              >
                <span className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#FF981B] text-[#4A0707]">
                  <Icon size={20} />
                </span>
                <p className="text-2xl font-bold text-white font-['Playfair_Display']">
                  {value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/70">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <a
            href="/franchise#enquiry"
            className="mt-8 inline-block rounded-lg bg-[#FF981B] px-7 py-3.5 font-semibold text-[#4A0707] hover:bg-[#e8880f] transition-colors"
          >
            Bring Purvanchal to Your City
          </a>
        </div>

        {/* Right — Map */}
        <div className="relative w-full aspect-[4/5] sm:aspect-square max-w-[520px] mx-auto">
          <img
            src={indiaMap}
            alt="Purvanchal Kulhad Chai outlet network across India"
            className="absolute inset-0 h-full w-full object-contain"
          />

          {pins.map((pin) => (
            <div
              key={pin.city}
              className="absolute -translate-x-1/2 -translate-y-1/2 group"
              style={{ top: pin.top, left: pin.left }}
            >
              <span className="absolute inline-flex h-4 w-4 rounded-full bg-[#FF981B] opacity-60 animate-ping" />
              <span className="relative block h-4 w-4 rounded-full bg-[#FF981B] border-2 border-[#4A0707]" />
              <span className="absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap rounded bg-[#4A0707] px-2 py-0.5 text-[10px] font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {pin.city}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}