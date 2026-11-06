import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFileContract,
  FaCalendarAlt,
} from "react-icons/fa";

const LAST_UPDATED = "02 November 2026";

const sections = [
  {
    id: "about-us",
    title: "About Us",
    content: [
      "Purvanchal Kulhad Chai is a tea and beverage brand offering traditional kulhad chai, tea varieties, refreshments and related food products through its outlets and authorised business channels.",
      "Our business activities may include:",
    ],
    list: [
      "Retail tea and beverage sales.",
      "Dine-in and takeaway services.",
      "Food and refreshment products.",
      "Online orders, where available.",
      "Franchise opportunities.",
      "Business collaborations and promotional activities.",
    ],
    after: [
      "For any questions regarding these terms, customers may contact us through our official communication channels.",
    ],
  },
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: [
      "By accessing this website or using any services offered by Purvanchal Kulhad Chai, you acknowledge that:",
    ],
    list: [
      "You have read and understood these Terms & Conditions.",
      "You agree to follow the applicable website policies.",
      "You will provide accurate information when submitting forms or enquiries.",
      "You will not use our website for unlawful or fraudulent activities.",
    ],
    after: [
      "If you do not agree with these terms, please discontinue using the website.",
    ],
  },
  {
    id: "website-usage",
    title: "Website Usage",
    content: [
      "Users agree to use this website only for lawful purposes.",
      "You must not:",
    ],
    list: [
      "Attempt to damage, hack or disrupt the website.",
      "Upload malicious files, viruses or harmful software.",
      "Submit false, misleading or fraudulent information.",
      "Copy or misuse website content without permission.",
      "Use the website to violate any applicable law.",
      "Attempt unauthorised access to company systems or customer information.",
    ],
    after: [
      "We reserve the right to restrict access where misuse or suspicious activity is identified, subject to applicable law.",
    ],
  },
  {
    id: "products-services",
    title: "Products and Services",
    content: [
      "Purvanchal Kulhad Chai may offer various tea products, beverages, snacks and other food-related services.",
      "All products are subject to availability.",
      "We reserve the right to:",
    ],
    list: [
      "Introduce new products.",
      "Modify existing menu items.",
      "Discontinue products.",
      "Change product ingredients or preparation methods.",
      "Update product descriptions and prices.",
    ],
    after: [
      "We make reasonable efforts to display accurate product information. However, slight variations in appearance, presentation, colour and taste may occur due to preparation methods and ingredient variations.",
    ],
  },
  {
    id: "food-safety",
    title: "Product Quality and Food Safety",
    content: [
      "We are committed to maintaining appropriate food safety, cleanliness and quality standards.",
      "Our food preparation and handling processes are intended to follow applicable Food Safety and Standards Authority of India (FSSAI) requirements.",
      "Customers are advised to inform our staff about known food allergies or dietary restrictions before placing an order.",
      "Customers should not consume any product that appears spoiled, contaminated or unsafe and should report the issue to our team immediately.",
    ],
  },
  {
    id: "pricing-payments",
    title: "Pricing and Payments",
    content: [
      "All product prices shall be displayed on the applicable menu, outlet or authorised online platform.",
    ],
    list: [
      "Prices are subject to change without prior notice.",
      "Applicable taxes shall be charged as required by law.",
      "The final payable amount shall be communicated before order confirmation.",
      "Payments must be made through accepted payment methods.",
      "Promotional discounts are subject to their respective conditions.",
    ],
    after: [
      "Where online payments are available, successful payment confirmation shall be subject to the relevant payment gateway or banking system.",
    ],
  },
  {
    id: "orders",
    title: "Orders and Order Confirmation",
    content: [
      "Orders may be placed through authorised outlets, websites, telephone, WhatsApp or other approved channels.",
      "An order shall be considered accepted only after confirmation by the applicable outlet or ordering platform.",
      "We reserve the right to decline or cancel an order in circumstances such as:",
    ],
    list: [
      "Product unavailability.",
      "Incorrect pricing caused by an evident technical error.",
      "Payment verification failure.",
      "Suspected fraudulent activity.",
      "Operational or safety-related restrictions.",
    ],
    after: [
      "Any refund legally due to the customer shall be handled in accordance with our Refund & Cancellation Policy and applicable law.",
    ],
  },
  {
    id: "refund",
    title: "Cancellation, Refund and Replacement",
    content: [
      "Food and beverage products are generally perishable and may not be eligible for ordinary returns once correctly supplied.",
      "However, customers may request an appropriate remedy in cases involving:",
    ],
    list: [
      "Incorrect products supplied.",
      "Damaged or defective products.",
      "Spoiled or unsafe food.",
      "Orders paid for but not supplied.",
      "Verified payment errors.",
    ],
    after: [
      "Requests shall be reviewed based on the order details and applicable consumer protection laws.",
      "Approved refunds shall generally be processed through the original payment method or another mutually agreed lawful method.",
      "For complete information, please refer to our Refund & Cancellation Policy.",
      "Nothing in this section limits any mandatory rights available to consumers under Indian law.",
    ],
  },
  {
    id: "delivery",
    title: "Delivery and Takeaway",
    content: [
      "Delivery services may be available at selected locations and are subject to serviceability and operational availability.",
      "Delivery time estimates are indicative and may vary due to:",
    ],
    list: [
      "Traffic conditions.",
      "Weather conditions.",
      "High order volumes.",
      "Location restrictions.",
      "Other circumstances beyond reasonable operational control.",
    ],
    after: [
      "Customers are responsible for providing accurate delivery details.",
      "For further information, please refer to our Shipping & Delivery Policy.",
    ],
  },
  {
    id: "franchise",
    title: "Franchise Opportunities",
    content: [
      "Purvanchal Kulhad Chai may offer franchise and business partnership opportunities to eligible individuals or businesses.",
      "Important conditions:",
    ],
    list: [
      "Franchise opportunities are subject to application review and approval.",
      "Investment details shall be communicated through official channels.",
      "A franchise relationship shall be governed by a separate written Franchise Agreement.",
      "Brand usage rights shall be granted only through proper written authorisation.",
      "No guaranteed income, sales or return on investment is promised.",
      "Franchise partners must comply with applicable food safety, business and local licensing requirements.",
    ],
    after: [
      "Submitting a franchise enquiry through the website does not automatically grant franchise rights or create a binding franchise agreement.",
      "All investment, territory, royalty, fees, renewal and termination conditions shall be governed by the signed agreement.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property Rights",
    content: ["All intellectual property displayed on this website, including:"],
    list: [
      "Brand name Purvanchal Kulhad Chai.",
      "Logo and brand identity.",
      "Website design and layout.",
      "Text, graphics and photographs.",
      "Marketing materials.",
      "Original business content.",
    ],
    after: [
      "is owned by or lawfully licensed to the relevant rights holder.",
      "No person may reproduce, distribute, modify or commercially use such material without prior written permission, except where permitted by law.",
      "Unauthorised use of intellectual property may result in appropriate legal action.",
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Links and Services",
    content: [
      "Our website may contain links to third-party websites, payment gateways, social media platforms or delivery services.",
      "These third-party services operate under their own terms and privacy policies.",
      "Purvanchal Kulhad Chai does not control all third-party platforms and is not responsible for their independent content, policies or operations.",
      "Customers should review the applicable third-party terms before using those services.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy and Personal Information",
    content: ["We may collect personal information such as:"],
    list: [
      "Name.",
      "Mobile number.",
      "Email address.",
      "Delivery details.",
      "Order information.",
      "Franchise enquiry details.",
      "Other information voluntarily submitted through website forms.",
    ],
    after: [
      "Such information may be used for order processing, customer support, business enquiries, communication and legal compliance.",
      "We will handle personal information in accordance with applicable Indian data protection laws and our Privacy Policy.",
      "For more details, please refer to our Privacy Policy.",
    ],
  },
  {
    id: "user-submissions",
    title: "User Submissions and Enquiries",
    content: [
      "When submitting information through contact, feedback or franchise enquiry forms, users agree that the information provided is accurate and lawful.",
      "Users must not submit:",
    ],
    list: [
      "False identity information.",
      "Misleading business information.",
      "Unlawful or offensive content.",
      "Confidential information belonging to others without authorisation.",
    ],
    after: [
      "Submitting an enquiry does not guarantee acceptance, employment, partnership or franchise approval.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: [
      "Purvanchal Kulhad Chai takes reasonable measures to maintain the quality and availability of its website and services.",
      "However, to the extent permitted by applicable law, we shall not be responsible for losses arising solely from:",
    ],
    list: [
      "Temporary website interruptions.",
      "Third-party service failures.",
      "Unauthorised access caused by circumstances outside our reasonable control.",
      "Incorrect information independently submitted by users.",
      "Events beyond our reasonable control.",
    ],
    after: [
      "Nothing in these terms shall exclude liability that cannot legally be excluded, including applicable consumer rights, statutory duties or liability arising from legally established negligence or unlawful conduct.",
    ],
  },
  {
    id: "force-majeure",
    title: "Force Majeure",
    content: [
      "We shall not be considered in breach of these terms solely because of circumstances beyond our reasonable control, including:",
    ],
    list: [
      "Natural disasters.",
      "Floods or fires.",
      "Government restrictions.",
      "Public emergencies.",
      "War or civil disturbances.",
      "Major infrastructure or utility failures.",
      "Other comparable unforeseen events.",
    ],
    after: [
      "We will make reasonable efforts to minimise disruption and resume services when possible.",
    ],
  },
  {
    id: "changes",
    title: "Changes to Terms & Conditions",
    content: [
      "We reserve the right to update, modify or revise these Terms & Conditions when required due to business, operational, legal or regulatory changes.",
      "Updated terms will be published on this page with the revised Last Updated date.",
      "Users are encouraged to review this page periodically.",
      "Changes shall not retrospectively remove rights already accrued under applicable law.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law and Jurisdiction",
    content: [
      "These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India.",
      "Any disputes arising from the use of this website or our services shall first be addressed through good-faith discussions.",
      "Where a dispute cannot be resolved amicably, it may be referred to the competent courts or other lawful dispute resolution authorities.",
      "Subject to applicable law and mandatory consumer jurisdiction rules, competent courts at the appropriate jurisdiction in Gujarat shall have jurisdiction.",
    ],
  },
  {
    id: "consumer-rights",
    title: "Consumer Rights",
    content: [
      "Nothing in these Terms & Conditions is intended to restrict or remove any consumer rights available under the Consumer Protection Act, 2019 or any other applicable Indian law.",
      "Customers may raise complaints regarding product quality, service, payments or other consumer-related concerns through our official contact channels.",
    ],
  },
];

export default function TermsConditions() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Purvanchal Kulhad Chai</title>
        <meta
          name="description"
          content="Read the Terms & Conditions for using the Purvanchal Kulhad Chai website, products, services and franchise opportunities."
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
              <FaFileContract /> Legal
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-tight text-white font-['Playfair_Display'] sm:text-4xl md:text-5xl">
              Terms &amp; <span className="text-[#FF981B]">Conditions</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              Welcome to the official website of Purvanchal Kulhad Chai. By
              accessing or using our website, purchasing our products,
              submitting an enquiry or using our services, you agree to comply
              with the following Terms &amp; Conditions. Please read them
              carefully.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm text-white/90">
              <FaCalendarAlt className="text-[#FF981B]" />
              Last Updated: <strong className="text-white">{LAST_UPDATED}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="bg-[#FFF9F1] px-4 py-12 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[280px_1fr]">
          {/* Sticky TOC (desktop) */}
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
                    href="#contact-information"
                    className="flex gap-2 rounded-md px-2 py-1.5 text-[#3C2A21] transition-colors hover:bg-[#FFF9F1] hover:text-[#4A0707]"
                  >
                    <span className="w-5 shrink-0 font-semibold text-[#FF981B]">
                      {String(sections.length + 1).padStart(2, "0")}
                    </span>
                    Contact Information
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

            {/* Contact Information */}
            <article
              id="contact-information"
              className="scroll-mt-[105px] overflow-hidden rounded-2xl bg-[#4A0707] p-6 text-white shadow-lg md:p-8"
            >
              <div className="mb-4 flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FF981B] text-sm font-bold text-[#4A0707]">
                  {String(sections.length + 1).padStart(2, "0")}
                </span>
                <h2 className="pt-2 text-xl font-bold font-['Playfair_Display'] md:text-2xl">
                  Contact Information
                </h2>
              </div>
              <p className="text-white/80 leading-relaxed">
                For questions, complaints, suggestions or clarification
                regarding these Terms &amp; Conditions, please contact us:
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
                    Business Location
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
                      Official Email
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
                      Contact Number
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
                      Registered Business Address
                    </p>
                    <p className="mt-1 font-semibold">
                      Priyanka Green Park, Bhestan, Surat, Gujarat 395023
                    </p>
                  </div>
                </div>
                <div className="rounded-xl bg-white/[0.07] p-4 sm:col-span-2">
                  <p className="text-xs uppercase tracking-wider text-[#FF981B]">
                    Grievance Contact
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
                  to="/privacy-policy"
                  className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Privacy Policy
                </Link>
              </div>
            </article>

            {/* Acknowledgement */}
            <div className="rounded-2xl border border-dashed border-[#FF981B]/60 bg-[#F7F0E5] p-6 text-center">
              <p className="font-semibold text-[#4A0707]">
                By using the Purvanchal Kulhad Chai website and services, you
                acknowledge that you have read and understood these Terms &amp;
                Conditions.
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