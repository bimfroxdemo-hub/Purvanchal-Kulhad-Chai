import { Helmet } from "react-helmet-async";

export default function SeoMaster() {
  return (
    <>
      <Helmet>

        {/* ================= TITLE ================= */}
        <title>
          Purvanchal Kulhad Chai | India’s Authentic Kulhad Chai Brand | Franchise, Tea Menu, Gallery & Business Opportunity
        </title>

        {/* ================= DESCRIPTION ================= */}
        <meta
          name="description"
          content="Purvanchal Kulhad Chai is India’s fastest growing tea brand serving authentic kulhad chai, tandoori chai, street-style Indian tea, and premium tea experience. Explore tea franchise opportunities, gallery, menu, and real Indian chai culture."
        />

        {/* ================= KEYWORDS (OPTIMIZED LONG) ================= */}
        <meta
          name="keywords"
          content="
          kulhad chai, kulhad chai india, best chai in india, tea franchise india,
          chai business india, tea startup india, tandoori chai, indian tea brand,
          chai shop franchise, tea cafe india, street chai india, chai lovers india,
          desi chai, chai culture india, tea stall business, low investment franchise,
          food franchise india, beverage franchise india, tea brand india,
          purvanchal kulhad chai, chaiwala brand, masala chai, milk tea india,
          traditional indian tea, clay cup tea, eco friendly chai, chai gallery
          "
        />

        <meta name="author" content="Purvanchal Kulhad Chai" />

        {/* ================= ROBOTS ================= */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* ================= CANONICAL ================= */}
        <link rel="canonical" href="https://purvanchalkulhadchai.com" />

        {/* ================= OPEN GRAPH ================= */}
        <meta property="og:title" content="Purvanchal Kulhad Chai | India’s Leading Kulhad Chai Brand" />
        <meta
          property="og:description"
          content="Authentic kulhad chai, tandoori chai, tea franchise opportunity and Indian chai culture experience."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Purvanchal Kulhad Chai" />

        {/* ================= TWITTER ================= */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* ================= LOCAL SEO ================= */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="India" />

        {/* ================= STRUCTURED DATA ================= */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Purvanchal Kulhad Chai",
            url: "https://purvanchalkulhadchai.com",
            foundingDate: "2026",
            description:
              "India’s premium kulhad chai brand offering authentic chai, franchise business, and tea culture experience.",
            sameAs: [
              "https://instagram.com",
              "https://facebook.com"
            ]
          })}
        </script>

        {/* ================= EXTRA RICH SEO (FAQ SCHEMA) ================= */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is Purvanchal Kulhad Chai?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Purvanchal Kulhad Chai is an Indian tea brand offering authentic kulhad chai and traditional tea culture experience."
                }
              },
              {
                "@type": "Question",
                name: "Is tea franchise available?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes, Purvanchal Kulhad Chai offers low investment tea franchise opportunities in India."
                }
              },
              {
                "@type": "Question",
                name: "What makes kulhad chai special?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Kulhad chai is served in clay cups which enhances taste, aroma, and gives traditional Indian tea experience."
                }
              }
            ]
          })}
        </script>

      </Helmet>

      {/* ================= SEO CONTENT (IMPORTANT BUT NOT OVERSTUFFED) ================= */}
      <div className="hidden">

        <h1>Purvanchal Kulhad Chai - Authentic Indian Tea Brand</h1>

        <p>
          Purvanchal Kulhad Chai is a premium Indian tea brand known for authentic kulhad chai,
          tandoori chai, and traditional street-style tea culture experience across India.
        </p>

        <h2>Kulhad Chai Experience in India</h2>
        <p>
          We serve freshly brewed chai in traditional clay kulhads that enhance aroma and taste.
          Our tea represents real Indian chai culture and street tea tradition.
        </p>

        <h2>Tea Franchise Business Opportunity</h2>
        <p>
          Start your own tea business with low investment franchise model, full support system,
          branding, and training from Purvanchal Kulhad Chai.
        </p>

        <h2>Indian Tea Culture & Lifestyle</h2>
        <p>
          Tea is not just a drink, it is emotion in India. Our brand brings people together
          through authentic chai moments and cultural experience.
        </p>

        <h2>Why Choose Our Brand</h2>
        <p>
          Strong taste, consistent quality, fast growing brand identity, and unique kulhad
          serving style make us different in tea industry.
        </p>

      </div>

    </>
  );
}