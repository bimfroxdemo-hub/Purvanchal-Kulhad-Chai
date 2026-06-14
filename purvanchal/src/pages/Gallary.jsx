// Gallery.jsx

import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Gallery() {
  return (
    <>
      <Helmet>
  <title>Tea Gallery | Purvanchal Kulhad Chai Photos & Moments</title>

  <meta
    name="description"
    content="Explore Purvanchal Kulhad Chai gallery featuring premium kulhad chai moments, tandoori chai visuals and authentic Indian chai culture."
  />

  <meta
    name="keywords"
    content="kulhad chai, chai gallery, chai images, tandoori chai, indian chai culture, tea shop images, kulhad chai brand india, chai stall photos"
  />

  <meta name="author" content="Purvanchal Kulhad Chai" />

  {/* Open Graph */}
  <meta property="og:title" content="Tea Gallery | Kulhad Chai Moments" />
  <meta
    property="og:description"
    content="Beautiful kulhad chai moments and authentic Indian chai culture gallery."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yourdomain.com/gallery" />
  <meta property="og:image" content="https://yourdomain.com/gallery.jpg" />

  <meta name="twitter:card" content="summary_large_image" />

  <link rel="canonical" href="https://yourdomain.com/gallery" />

  <meta name="robots" content="index, follow" />

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "name": "Purvanchal Kulhad Chai Gallery",
      "description":
        "Gallery of premium kulhad chai moments and Indian chai culture.",
      "publisher": {
        "@type": "Organization",
        "name": "Purvanchal Kulhad Chai"
      },
      "url": "https://yourdomain.com/gallery"
    })}
  </script>
</Helmet>
      <div className="bg-[#F8F3EC] overflow-hidden">



        {/* HERO SECTION */}
        <section className="relative h-[75vh] flex items-center justify-center text-center px-6">

          {/* BG IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop"
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/55"></div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >

            <p className="uppercase tracking-[7px] text-sm text-[#d8c9b1] mb-5">
              ChaiWala Moments
            </p>

            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Our Tea Gallery
            </h1>

            <p className="mt-6 text-[#f1ebe2] text-lg max-w-2xl mx-auto leading-8">
              Explore premium chai moments, modern cafe vibes and authentic tea
              experiences crafted beautifully.
            </p>

          </motion.div>

        </section>
        {/* GALLERY SECTION */}
        <section className="py-28 px-6">

          <div className="max-w-7xl mx-auto">

            {/* TITLE */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >

              <p className="uppercase tracking-[6px] text-sm text-[#9BA57B] mb-4">
                Premium Collection
              </p>

              <h2 className="text-5xl md:text-6xl font-serif text-[#3B2F2F]">
                Captured Tea Moments
              </h2>

            </motion.div>
            {/* MASONRY GRID */}
            <div className="columns-1 md:columns-3 gap-6 space-y-6">

              {[
                "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1200&auto=format&fit=crop",
              ].map((img, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden group mb-6 break-inside-avoid shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
                >

                  {/* IMAGE */}
                  <img
                    src={img}
                    alt="tea"
                    className="w-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  {/* TEXT */}
                  <div className="absolute bottom-0 left-0 p-6 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500">

                    <p className="uppercase tracking-[4px] text-xs text-[#d8c9b1]">
                      Purvanchal tea house
                    </p>

                    <h3 className="text-3xl font-serif text-white mt-2">
                      Premium Tea
                    </h3>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </section>

        {/* BOTTOM BANNER */}
        <section className="pb-28 px-6">

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto relative overflow-hidden"
          >

            {/* IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1507914372368-b2b085b925a1?q=80&w=1600&auto=format&fit=crop"
              alt="banner"
              className="w-full h-[450px] object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/55"></div>

            {/* CONTENT */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

              <p className="uppercase tracking-[6px] text-sm text-[#d8c9b1] mb-4">
                Authentic Tea Culture
              </p>

              <h2 className="text-5xl md:text-6xl font-serif text-white leading-tight">
                Every Picture <br /> Tells A Story
              </h2>

              <button className="mt-10 bg-[#9BA57B] hover:bg-[#7f8b63] transition text-white px-10 py-4 shadow-2xl tracking-wide">
                Explore More
              </button>

            </div>

          </motion.div>

        </section>

      </div>
    </>
  );
}