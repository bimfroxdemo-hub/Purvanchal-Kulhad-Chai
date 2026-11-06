import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

const whatsappMessage = encodeURIComponent(
  "Hello, I want to know more about Purvanchal Kulhad Chai."
);

const socials = [
  {
    label: "WhatsApp",
    href: `https://wa.me/916353771878?text=${whatsappMessage}`,
    icon: <FaWhatsapp size={20} />,
    bg: "bg-[#25D366]",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/purvanchal_kulhad_chai?igsh=MTJ0ZHI2cWR5NjJxaQ==",
    icon: <FaInstagram size={20} />,
    bg: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: <FaFacebookF size={18} />,
    bg: "bg-[#1877F2]",
  },
];

export default function FloatingSocials() {
  return (
    <div className="fixed right-0 top-1/2 z-[9000] -translate-y-1/2">
      <div className="flex flex-col gap-2 rounded-l-2xl border border-r-0 border-[#FF981B]/40 bg-[#4A0707] p-2 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            title={s.label}
            className={`group relative flex h-11 w-11 items-center justify-center rounded-xl text-white transition-transform duration-300 hover:-translate-x-1 ${s.bg}`}
          >
            {s.icon}
            {/* Tooltip (desktop) */}
            <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-[#4A0707] px-3 py-1.5 font-poppins text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 md:block">
              {s.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}