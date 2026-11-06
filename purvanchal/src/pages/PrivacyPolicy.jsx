import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const LAST_UPDATED = "02 November 2026";

const sections = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: ["We may collect the following information:"],
    list: [
      "Full Name",
      "Mobile Number",
      "Email Address",
      "Delivery Address",
      "Order and Payment Details",
      "Franchise Enquiry Information",
      "Customer Feedback and Messages",
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: ["We use collected information for:"],
    list: [
      "Processing customer orders.",
      "Responding to enquiries.",
      "Providing customer support.",
      "Managing franchise applications.",
      "Sharing order and service updates.",
      "Improving our website and services.",
      "Processing payments and refunds.",
      "Meeting legal and regulatory requirements.",
    ],
  },
  {
    id: "payment-information",
    title: "Payment Information",
    content: [
      "Online payments, where available, may be processed through authorised third-party payment gateways.",
      "We do not intend to store customers' complete debit card, credit card or banking credentials on our website. Payment information is handled according to the payment provider's security practices.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and Website Tracking",
    content: ["Our website may use cookies and similar technologies to:"],
    list: [
      "Improve website performance.",
      "Understand visitor behaviour.",
      "Remember user preferences.",
      "Analyse website traffic.",
      "Improve customer experience.",
    ],
    after: [
      "Users may manage cookies through their browser settings. Where legally required, consent will be obtained before using non-essential cookies.",
    ],
  },
  {
    id: "sharing",
    title: "Sharing of Information",
    content: [
      "We may share relevant information with authorised third parties when necessary, including:",
    ],
    list: [
      "Payment gateway providers.",
      "Delivery and logistics partners.",
      "Website hosting and technology providers.",
      "Customer support service providers.",
      "Government authorities where legally required.",
    ],
    after: ["We do not sell customers' personal information unlawfully."],
  },
  {
    id: "data-security",
    title: "Data Security",
    content: [
      "We take reasonable technical and organisational measures to protect personal information against unauthorised access, loss, misuse, alteration or disclosure.",
      "However, no internet-based system can guarantee absolute security.",
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: [
      "We retain personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required under applicable legal, accounting and regulatory obligations.",
    ],
  },
  {
    id: "privacy-rights",
    title: "Customer Privacy Rights",
    content: ["Subject to applicable law, customers may request:"],
    list: [
      "Access to their personal information.",
      "Correction of inaccurate information.",
      "Erasure of eligible personal information.",
      "Withdrawal of consent where processing is based on consent.",
      "Assistance with privacy-related complaints.",
    ],
    after: ["Requests may be submitted through our official contact details."],
  },
  {
    id: "marketing",
    title: "Marketing Communications",
    content: [
      "We may send promotional messages, offers and updates where appropriate consent or another lawful basis exists.",
      "Customers may opt out of promotional communications at any time through the available unsubscribe or opt-out mechanism.",
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Websites",
    content: [
      "Our website may contain links to third-party platforms, including social media, payment gateways and delivery services.",
      "We are not responsible for the independent privacy practices of those websites. Users should review their respective privacy policies.",
    ],
  },
  {
    id: "children",
    title: "Children's Privacy",
    content: [
      "Our website is not intended to independently collect personal information from children without appropriate parental or guardian involvement where required by law.",
      "We do not knowingly use children's personal information for unauthorised marketing purposes.",
    ],
  },
  {
    id: "changes",
    title: "Changes to This Privacy Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our business, technology or applicable laws.",
      "Any revised version will be published on this page with an updated date.",
    ],
  },
];

export default function PrivacyPolicy() {
  const contactIndex = String(sections.length + 1).padStart(2, "0");

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Purvanchal Kulhad Chai</title>
        <meta
          name="description"
          content="Learn how Purvanchal Kulhad Chai collects, uses, stores and protects your personal information."
        />
      </Helmet>

      {/* ── Hero ── */}
      <section className="bg-white px-4 py-6 md:py-10">
        <div className="relative mx-auto max-w-[1150px] overflow-hidden rounded-xl bg-[#4A0707]">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#FF981B]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#FF981B]/15 blur-3xl" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: "radial-gradient(#FFF9F1 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />

          <div className="relative px-6 py-12 md:px-12 md:py-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF981B]/40 bg-[#FF981B]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#FF981B]">
              <FaShieldAlt /> Your Privacy
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-tight text-white font-['Playfair_Display'] sm:text-4xl md:text-5xl">
              Privacy <span className="text-[#FF981B]">Policy</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              At Purvanchal Kulhad Chai, we respect your privacy and are
              committed to protecting your personal information. This policy
              explains how we collect, use, store and protect your information
              when you visit our website, contact us, place an order or submit
              a franchise enquiry.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm text-white/90">
              <FaCalendarAlt className="text-[#FF981B]" />
              Last Updated:{" "}
              <strong className="text-white">{LAST_UPDATED}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="bg-[#FFF9F1] px-4 py-12 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[280px_1fr]">
          {/* Sticky TOC */}
          <aside className="hidden lg:block">
            <nav className="sticky top-[105px] rounded-2xl border border-[#F5E8D5] bg-white p-5 shadow-sm">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#705B4A]">
                On this page
              </p>
              <ol className="max-h-[70vh] space-y-1 overflow-y-auto pr-1 text-sm">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="flex gap-2 rounded-md px-2 py-1.5 text-[#3C2A21] transition-colors hover:bg-[#FFF9F1] hover:text-[#4A0707]"
                    >
                      <span className="w-5 shrink-0 font-semibold text-[#FF981B]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#contact-us"
                    className="flex gap-2 rounded-md px-2 py-1.5 text-[#3C2A21] transition-colors hover:bg-[#FFF9F1] hover:text-[#4A0707]"
                  >
                    <span className="w-5 shrink-0 font-semibold text-[#FF981B]">
                      {contactIndex}
                    </span>
                    Contact Us
                  </a>
                </li>
              </ol>
            </nav>
          </aside>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((s, i) => (
              <article
                key={s.id}
                id={s.id}
                className="scroll-mt-[105px] rounded-2xl border border-[#F5E8D5] bg-white p-6 shadow-sm md:p-8"
              >
                <div className="mb-4 flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#4A0707] text-sm font-bold text-[#FF981B]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="pt-2 text-xl font-bold text-[#4A0707] font-['Playfair_Display'] md:text-2xl">
                    {s.title}
                  </h2>
                </div>

                <div className="space-y-3 text-[#3C2A21] leading-relaxed">
                  {s.content?.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                  {s.list && (
                    <ul className="space-y-2 pl-1">
                      {s.list.map((li, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF981B]" />
                          <span>{li}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.after?.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </article>
            ))}

            {/* Contact Us */}
            <article
              id="contact-us"
              className="scroll-mt-[105px] overflow-hidden rounded-2xl bg-[#4A0707] p-6 text-white shadow-lg md:p-8"
            >
              <div className="mb-4 flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FF981B] text-sm font-bold text-[#4A0707]">
                  {contactIndex}
                </span>
                <h2 className="pt-2 text-xl font-bold font-['Playfair_Display'] md:text-2xl">
                  Contact Us
                </h2>
              </div>
              <p className="text-white/80 leading-relaxed">
                For privacy-related questions, requests or complaints, please
                contact:
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white/[0.07] p-4">
                  <p className="text-xs uppercase tracking-wider text-[#FF981B]">
                    Brand
                  </p>
                  <p className="mt-1 font-semibold">Purvanchal Kulhad Chai</p>
                </div>
                <div className="rounded-xl bg-white/[0.07] p-4">
                  <p className="text-xs uppercase tracking-wider text-[#FF981B]">
                    Location
                  </p>
                  <p className="mt-1 font-semibold">Surat, Gujarat, India</p>
                </div>
                <a
                  href="mailto:purvanchal@gmail.com"
                  className="flex items-center gap-3 rounded-xl bg-white/[0.07] p-4 transition-colors hover:bg-white/[0.12]"
                >
                  <FaEnvelope className="shrink-0 text-[#FF981B]" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#FF981B]">
                      Email
                    </p>
                    <p className="mt-1 font-semibold">purvanchal@gmail.com</p>
                  </div>
                </a>
                <a
                  href="tel:+916353771878"
                  className="flex items-center gap-3 rounded-xl bg-white/[0.07] p-4 transition-colors hover:bg-white/[0.12]"
                >
                  <FaPhoneAlt className="shrink-0 text-[#FF981B]" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#FF981B]">
                      Phone
                    </p>
                    <p className="mt-1 font-semibold">
                      +91 63537 71878 / +91 70162 77257
                    </p>
                  </div>
                </a>
                <div className="flex items-start gap-3 rounded-xl bg-white/[0.07] p-4 sm:col-span-2">
                  <FaMapMarkerAlt className="mt-1 shrink-0 text-[#FF981B]" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#FF981B]">
                      Registered Address
                    </p>
                    <p className="mt-1 font-semibold">
                      Priyanka Green Park, Bhestan, Surat, Gujarat 395023
                    </p>
                  </div>
                </div>
                <div className="rounded-xl bg-white/[0.07] p-4 sm:col-span-2">
                  <p className="text-xs uppercase tracking-wider text-[#FF981B]">
                    Privacy Grievance Contact
                  </p>
                  <p className="mt-1 font-semibold">
                    Customer Support Team — Purvanchal Kulhad Chai
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-lg bg-[#FF981B] px-6 py-3 font-semibold text-[#4A0707] transition-colors hover:bg-[#e8880f]"
                >
                  Contact Us
                </Link>
                <Link
                  to="/terms"
                  className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Terms &amp; Conditions
                </Link>
              </div>
            </article>

            {/* Acknowledgement */}
            <div className="rounded-2xl border border-dashed border-[#FF981B]/60 bg-[#F7F0E5] p-6 text-center">
              <p className="font-semibold text-[#4A0707]">
                By using our website and services, you acknowledge that you have
                read this Privacy Policy.
              </p>
              <p className="mt-2 text-sm text-[#705B4A]">
                © 2026 Purvanchal Kulhad Chai. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const LAST_UPDATED = "02 November 2026";

const sections = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: ["We may collect the following information:"],
    list: [
      "Full Name",
      "Mobile Number",
      "Email Address",
      "Delivery Address",
      "Order and Payment Details",
      "Franchise Enquiry Information",
      "Customer Feedback and Messages",
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: ["We use collected information for:"],
    list: [
      "Processing customer orders.",
      "Responding to enquiries.",
      "Providing customer support.",
      "Managing franchise applications.",
      "Sharing order and service updates.",
      "Improving our website and services.",
      "Processing payments and refunds.",
      "Meeting legal and regulatory requirements.",
    ],
  },
  {
    id: "payment-information",
    title: "Payment Information",
    content: [
      "Online payments, where available, may be processed through authorised third-party payment gateways.",
      "We do not intend to store customers' complete debit card, credit card or banking credentials on our website. Payment information is handled according to the payment provider's security practices.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and Website Tracking",
    content: ["Our website may use cookies and similar technologies to:"],
    list: [
      "Improve website performance.",
      "Understand visitor behaviour.",
      "Remember user preferences.",
      "Analyse website traffic.",
      "Improve customer experience.",
    ],
    after: [
      "Users may manage cookies through their browser settings. Where legally required, consent will be obtained before using non-essential cookies.",
    ],
  },
  {
    id: "sharing",
    title: "Sharing of Information",
    content: [
      "We may share relevant information with authorised third parties when necessary, including:",
    ],
    list: [
      "Payment gateway providers.",
      "Delivery and logistics partners.",
      "Website hosting and technology providers.",
      "Customer support service providers.",
      "Government authorities where legally required.",
    ],
    after: ["We do not sell customers' personal information unlawfully."],
  },
  {
    id: "data-security",
    title: "Data Security",
    content: [
      "We take reasonable technical and organisational measures to protect personal information against unauthorised access, loss, misuse, alteration or disclosure.",
      "However, no internet-based system can guarantee absolute security.",
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: [
      "We retain personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required under applicable legal, accounting and regulatory obligations.",
    ],
  },
  {
    id: "privacy-rights",
    title: "Customer Privacy Rights",
    content: ["Subject to applicable law, customers may request:"],
    list: [
      "Access to their personal information.",
      "Correction of inaccurate information.",
      "Erasure of eligible personal information.",
      "Withdrawal of consent where processing is based on consent.",
      "Assistance with privacy-related complaints.",
    ],
    after: ["Requests may be submitted through our official contact details."],
  },
  {
    id: "marketing",
    title: "Marketing Communications",
    content: [
      "We may send promotional messages, offers and updates where appropriate consent or another lawful basis exists.",
      "Customers may opt out of promotional communications at any time through the available unsubscribe or opt-out mechanism.",
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Websites",
    content: [
      "Our website may contain links to third-party platforms, including social media, payment gateways and delivery services.",
      "We are not responsible for the independent privacy practices of those websites. Users should review their respective privacy policies.",
    ],
  },
  {
    id: "children",
    title: "Children's Privacy",
    content: [
      "Our website is not intended to independently collect personal information from children without appropriate parental or guardian involvement where required by law.",
      "We do not knowingly use children's personal information for unauthorised marketing purposes.",
    ],
  },
  {
    id: "changes",
    title: "Changes to This Privacy Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our business, technology or applicable laws.",
      "Any revised version will be published on this page with an updated date.",
    ],
  },
];

export default function PrivacyPolicy() {
  const contactIndex = String(sections.length + 1).padStart(2, "0");

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Purvanchal Kulhad Chai</title>
        <meta
          name="description"
          content="Learn how Purvanchal Kulhad Chai collects, uses, stores and protects your personal information."
        />
      </Helmet>

      {/* ── Hero ── */}
      <section className="bg-white px-4 py-6 md:py-10">
        <div className="relative mx-auto max-w-[1150px] overflow-hidden rounded-xl bg-[#4A0707]">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#FF981B]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#FF981B]/15 blur-3xl" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: "radial-gradient(#FFF9F1 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />

          <div className="relative px-6 py-12 md:px-12 md:py-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF981B]/40 bg-[#FF981B]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#FF981B]">
              <FaShieldAlt /> Your Privacy
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-tight text-white font-['Playfair_Display'] sm:text-4xl md:text-5xl">
              Privacy <span className="text-[#FF981B]">Policy</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              At Purvanchal Kulhad Chai, we respect your privacy and are
              committed to protecting your personal information. This policy
              explains how we collect, use, store and protect your information
              when you visit our website, contact us, place an order or submit
              a franchise enquiry.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm text-white/90">
              <FaCalendarAlt className="text-[#FF981B]" />
              Last Updated:{" "}
              <strong className="text-white">{LAST_UPDATED}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="bg-[#FFF9F1] px-4 py-12 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[280px_1fr]">
          {/* Sticky TOC */}
          <aside className="hidden lg:block">
            <nav className="sticky top-[105px] rounded-2xl border border-[#F5E8D5] bg-white p-5 shadow-sm">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#705B4A]">
                On this page
              </p>
              <ol className="max-h-[70vh] space-y-1 overflow-y-auto pr-1 text-sm">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="flex gap-2 rounded-md px-2 py-1.5 text-[#3C2A21] transition-colors hover:bg-[#FFF9F1] hover:text-[#4A0707]"
                    >
                      <span className="w-5 shrink-0 font-semibold text-[#FF981B]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#contact-us"
                    className="flex gap-2 rounded-md px-2 py-1.5 text-[#3C2A21] transition-colors hover:bg-[#FFF9F1] hover:text-[#4A0707]"
                  >
                    <span className="w-5 shrink-0 font-semibold text-[#FF981B]">
                      {contactIndex}
                    </span>
                    Contact Us
                  </a>
                </li>
              </ol>
            </nav>
          </aside>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((s, i) => (
              <article
                key={s.id}
                id={s.id}
                className="scroll-mt-[105px] rounded-2xl border border-[#F5E8D5] bg-white p-6 shadow-sm md:p-8"
              >
                <div className="mb-4 flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#4A0707] text-sm font-bold text-[#FF981B]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="pt-2 text-xl font-bold text-[#4A0707] font-['Playfair_Display'] md:text-2xl">
                    {s.title}
                  </h2>
                </div>

                <div className="space-y-3 text-[#3C2A21] leading-relaxed">
                  {s.content?.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                  {s.list && (
                    <ul className="space-y-2 pl-1">
                      {s.list.map((li, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF981B]" />
                          <span>{li}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.after?.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </article>
            ))}

            {/* Contact Us */}
            <article
              id="contact-us"
              className="scroll-mt-[105px] overflow-hidden rounded-2xl bg-[#4A0707] p-6 text-white shadow-lg md:p-8"
            >
              <div className="mb-4 flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FF981B] text-sm font-bold text-[#4A0707]">
                  {contactIndex}
                </span>
                <h2 className="pt-2 text-xl font-bold font-['Playfair_Display'] md:text-2xl">
                  Contact Us
                </h2>
              </div>
              <p className="text-white/80 leading-relaxed">
                For privacy-related questions, requests or complaints, please
                contact:
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white/[0.07] p-4">
                  <p className="text-xs uppercase tracking-wider text-[#FF981B]">
                    Brand
                  </p>
                  <p className="mt-1 font-semibold">Purvanchal Kulhad Chai</p>
                </div>
                <div className="rounded-xl bg-white/[0.07] p-4">
                  <p className="text-xs uppercase tracking-wider text-[#FF981B]">
                    Location
                  </p>
                  <p className="mt-1 font-semibold">Surat, Gujarat, India</p>
                </div>
                <a
                  href="mailto:purvanchal@gmail.com"
                  className="flex items-center gap-3 rounded-xl bg-white/[0.07] p-4 transition-colors hover:bg-white/[0.12]"
                >
                  <FaEnvelope className="shrink-0 text-[#FF981B]" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#FF981B]">
                      Email
                    </p>
                    <p className="mt-1 font-semibold">purvanchal@gmail.com</p>
                  </div>
                </a>
                <a
                  href="tel:+916353771878"
                  className="flex items-center gap-3 rounded-xl bg-white/[0.07] p-4 transition-colors hover:bg-white/[0.12]"
                >
                  <FaPhoneAlt className="shrink-0 text-[#FF981B]" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#FF981B]">
                      Phone
                    </p>
                    <p className="mt-1 font-semibold">
                      +91 63537 71878 / +91 70162 77257
                    </p>
                  </div>
                </a>
                <div className="flex items-start gap-3 rounded-xl bg-white/[0.07] p-4 sm:col-span-2">
                  <FaMapMarkerAlt className="mt-1 shrink-0 text-[#FF981B]" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#FF981B]">
                      Registered Address
                    </p>
                    <p className="mt-1 font-semibold">
                      Priyanka Green Park, Bhestan, Surat, Gujarat 395023
                    </p>
                  </div>
                </div>
                <div className="rounded-xl bg-white/[0.07] p-4 sm:col-span-2">
                  <p className="text-xs uppercase tracking-wider text-[#FF981B]">
                    Privacy Grievance Contact
                  </p>
                  <p className="mt-1 font-semibold">
                    Customer Support Team — Purvanchal Kulhad Chai
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-lg bg-[#FF981B] px-6 py-3 font-semibold text-[#4A0707] transition-colors hover:bg-[#e8880f]"
                >
                  Contact Us
                </Link>
                <Link
                  to="/terms"
                  className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Terms &amp; Conditions
                </Link>
              </div>
            </article>

            {/* Acknowledgement */}
            <div className="rounded-2xl border border-dashed border-[#FF981B]/60 bg-[#F7F0E5] p-6 text-center">
              <p className="font-semibold text-[#4A0707]">
                By using our website and services, you acknowledge that you have
                read this Privacy Policy.
              </p>
              <p className="mt-2 text-sm text-[#705B4A]">
                © 2026 Purvanchal Kulhad Chai. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}