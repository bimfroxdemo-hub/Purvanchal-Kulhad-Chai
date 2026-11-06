import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Expand,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

/*
  Automatically loads every image inside:

  src/assets/gallery/

  Example:
  01.jpg
  02.jpg
  03.png
  04.webp
*/
const galleryModules = import.meta.glob(
  "../assets/gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    import: "default",
  }
);

const galleryLayouts = [
  "sm:col-span-2 sm:h-[420px] lg:col-span-7 lg:row-span-4 lg:h-auto",
  "lg:col-span-5 lg:row-span-2 lg:h-auto",
  "lg:col-span-5 lg:row-span-2 lg:h-auto",
  "lg:col-span-4 lg:row-span-3 lg:h-auto",
  "lg:col-span-4 lg:row-span-3 lg:h-auto",
  "lg:col-span-4 lg:row-span-3 lg:h-auto",
  "sm:col-span-2 sm:h-[370px] lg:col-span-8 lg:row-span-3 lg:h-auto",
  "lg:col-span-4 lg:row-span-3 lg:h-auto",
];

const galleryItems = Object.entries(galleryModules)
  .sort(([firstPath], [secondPath]) =>
    firstPath.localeCompare(secondPath, undefined, { numeric: true })
  )
  .map(([path, image], index) => ({
    id: index + 1,
    image,
    alt: `Purvanchal Kulhad Chai gallery image ${index + 1}`,
    title: "Purvanchal Chai Moment",
    layout: galleryLayouts[index % galleryLayouts.length],
    fileName: path.split("/").pop()?.split(".")[0] || `Image ${index + 1}`,
  }));

export default function Gallery() {
  const navigate = useNavigate();
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const heroImage = galleryItems[0]?.image;
  const bannerImage = galleryItems[1]?.image || galleryItems[0]?.image;

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const showNextImage = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1
    );
  };

  const showPreviousImage = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1
    );
  };

  useEffect(() => {
    if (activeImageIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();

      if (event.key === "ArrowRight") showNextImage();

      if (event.key === "ArrowLeft") showPreviousImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImageIndex]);

  return (
    <>
      <Helmet>
        <title>Tea Gallery | Purvanchal Kulhad Chai Photos & Moments</title>

        <meta
          name="description"
          content="Explore Purvanchal Kulhad Chai gallery featuring authentic chai moments, traditional kulhad experiences and premium tea culture."
        />

        <meta
          name="keywords"
          content="kulhad chai, chai gallery, chai images, tandoori chai, indian chai culture, tea shop images, purvanchal kulhad chai"
        />

        <meta name="author" content="Purvanchal Kulhad Chai" />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Tea Gallery | Purvanchal Kulhad Chai"
        />

        <meta
          property="og:description"
          content="Explore authentic kulhad chai moments and Purvanchal tea culture."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="/gallery" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "Purvanchal Kulhad Chai Gallery",
            description:
              "Gallery of authentic kulhad chai moments and premium Indian tea culture.",
            publisher: {
              "@type": "Organization",
              name: "Purvanchal Kulhad Chai",
            },
          })}
        </script>
      </Helmet>

      {/* Fixed navbar ke neeche page start hoga */}
      <main className="overflow-hidden bg-[#FFF9F1] pt-[85px]">
        {/* Premium Hero */}
        <section className="relative flex min-h-[440px] items-center overflow-hidden px-5 py-16 sm:min-h-[520px] sm:px-8 lg:min-h-[620px] lg:px-12">
          {heroImage ? (
            <img
              src={heroImage}
              alt="Purvanchal Kulhad Chai gallery"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="eager"
            />
          ) : (
            <div className="absolute inset-0 bg-[#4A0707]" />
          )}

          {/* Hero overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#4A0707]/95 via-[#4A0707]/75 to-[#4A0707]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4A0707]/50 via-transparent to-transparent" />

          <div className="pointer-events-none absolute -left-20 top-8 h-72 w-72 rounded-full bg-[#FF981B]/15 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#FF981B]/10 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10 mx-auto w-full max-w-[1150px]"
          >
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FF981B]/40 bg-[#4A0707]/40 px-4 py-2 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#FF981B]" />
                <span className="font-poppins text-xs font-bold uppercase tracking-[0.16em] text-[#FF981B] sm:text-sm">
                  Purvanchal Moments
                </span>
              </div>

              <p className="mt-7 font-poppins text-xs font-semibold uppercase tracking-[0.25em] text-white/70 sm:text-sm">
                The Taste of Tradition, The Warmth of Togetherness
              </p>

              <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Every Kulhad Tells 
                <span className="block text-[#FF981B]">A Story.</span>
              </h1>

              <p className="mt-6 max-w-2xl font-poppins text-sm font-medium leading-7 text-[#F5E8D5] sm:text-base sm:leading-8 md:text-lg">
                Experience the authentic flavours of traditional Indian chai, the warmth of मिट्टी के कुल्हड़, and unforgettable moments with Purvanchal Kulhad Chai.
              </p>

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("tea-gallery")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group mt-8 inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-[#FF981B] px-7 py-3 font-poppins text-sm font-bold text-[#4A0707] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFAD40] hover:shadow-xl"
              >
                Explore Gallery
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </motion.div>

          <div className="absolute bottom-7 right-5 hidden items-center gap-3 text-white/70 lg:flex">
            <span className="h-px w-14 bg-[#FF981B]" />
            <span className="font-poppins text-xs font-semibold uppercase tracking-[0.18em]">
              Scroll to explore
            </span>
          </div>
        </section>

        {/* Image Gallery */}
        <section
          id="tea-gallery"
          className="relative px-4 py-14 sm:px-6 sm:py-20 md:px-8 lg:py-24"
        >
          <div className="pointer-events-none absolute left-0 top-28 h-72 w-72 rounded-full bg-[#FF981B]/5 blur-3xl" />

          <div className="relative mx-auto max-w-[1150px]">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FF981B]/15 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#FF981B]" />
                <span className="font-poppins text-xs font-bold uppercase tracking-[0.14em] text-[#4A0707]">
                  The Purvanchal Collection
                </span>
              </div>

              <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#4A0707] sm:text-4xl md:text-5xl">
                A Glimpse of Our Chai Culture{" "}
                <span className="text-[#FF981B]">Moments</span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl font-poppins text-sm font-medium leading-7 text-[#705B4A] sm:text-base sm:leading-8">
                Explore the flavours, traditions and unforgettable moments of Purvanchal Kulhad Chai — where every cup brings people together and every sip celebrates authenticity..
              </p>

              <p className="mt-5 font-poppins text-xs font-semibold uppercase tracking-[0.14em] text-[#4A0707]/60">
                {galleryItems.length} signature moments
              </p>
            </motion.div>

            {/* Editorial Mixed Image Grid */}
            {galleryItems.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-12 lg:auto-rows-[105px] lg:gap-6">
                {galleryItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      duration: 0.45,
                      delay: Math.min(index * 0.05, 0.3),
                    }}
                    onClick={() => setActiveImageIndex(index)}
                    aria-label={`Open image ${index + 1} in full screen`}
                    className={`group relative h-[270px] overflow-hidden bg-[#4A0707] text-left shadow-sm outline-none transition-shadow duration-300 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-[#FF981B]/50 sm:h-[310px] lg:h-auto ${item.layout}`}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      loading={index < 3 ? "eager" : "lazy"}
                    />

                    {/* Minimal hover overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#4A0707]/85 via-[#4A0707]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Expand icon */}
                    <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <Expand size={18} />
                    </div>

                    {/* Hover content */}
                    <div className="absolute bottom-0 left-0 translate-y-6 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:p-6">
                      <p className="font-poppins text-[10px] font-bold uppercase tracking-[0.16em] text-[#FF981B] sm:text-xs">
                        Purvanchal Kulhad Chai
                      </p>

                      <p className="mt-1 font-serif text-xl font-bold text-white sm:text-2xl">
                        Authentic Tea Moment
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-[#4A0707]/25 bg-white px-6 py-16 text-center">
                <p className="font-poppins text-sm font-medium text-[#705B4A]">
                  Gallery images not found.
                </p>

                <p className="mt-2 font-poppins text-sm font-bold text-[#4A0707]">
                  Add images inside src/assets/gallery/
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Bottom Premium CTA */}
        <section className="px-4 pb-14 sm:px-6 sm:pb-20 md:px-8 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto min-h-[350px] max-w-[1150px] overflow-hidden bg-[#4A0707] sm:min-h-[400px]"
          >
            {bannerImage && (
              <img
                src={bannerImage}
                alt="Purvanchal Kulhad Chai culture"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-45"
                loading="lazy"
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-r from-[#4A0707] via-[#4A0707]/90 to-[#4A0707]/55" />

            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#FF981B]/15 blur-3xl" />

            <div className="relative z-10 flex min-h-[350px] flex-col items-start justify-center px-7 py-10 sm:min-h-[400px] sm:px-12 md:px-16">
              <p className="font-poppins text-xs font-bold uppercase tracking-[0.18em] text-[#FF981B] sm:text-sm">
                Authentic Tea Culture
              </p>

              <h2 className="mt-4 max-w-2xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Come, Experience The
                <span className="block text-[#FF981B]">
                  Taste Of Purvanchal.
                </span>
              </h2>

              <p className="mt-4 max-w-xl font-poppins text-sm font-medium leading-7 text-white/75 sm:text-base">
                From our traditional kulhad chai to the warm desi atmosphere,
                every visit is made memorable.
              </p>

              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="group mt-7 inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-[#FF981B] px-7 py-3 font-poppins text-sm font-bold text-[#4A0707] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFAD40] hover:shadow-xl"
              >
                Visit Our Outlet
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Full Screen Image Lightbox */}
      <AnimatePresence>
        {activeImageIndex !== null && galleryItems[activeImageIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeLightbox();
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#120B08]/95 p-4 backdrop-blur-sm sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image preview"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close image preview"
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors duration-300 hover:bg-[#FF981B] hover:text-[#4A0707] sm:right-7 sm:top-7"
            >
              <X size={21} />
            </button>

            {/* Previous */}
            <button
              type="button"
              onClick={showPreviousImage}
              aria-label="Previous gallery image"
              className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors duration-300 hover:bg-[#FF981B] hover:text-[#4A0707] sm:left-7 sm:h-12 sm:w-12"
            >
              <ChevronLeft size={23} />
            </button>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onMouseDown={(event) => event.stopPropagation()}
              className="relative max-h-full max-w-[88vw]"
            >
              <img
                src={galleryItems[activeImageIndex].image}
                alt={galleryItems[activeImageIndex].alt}
                className="max-h-[78vh] max-w-full object-contain shadow-2xl"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#4A0707]/90 to-transparent px-5 pb-5 pt-14">
                <p className="font-poppins text-xs font-bold uppercase tracking-[0.16em] text-[#FF981B]">
                  Purvanchal Kulhad Chai
                </p>

                <p className="mt-1 font-serif text-xl font-bold text-white sm:text-2xl">
                  Authentic Tea Moment
                </p>
              </div>
            </motion.div>

            {/* Next */}
            <button
              type="button"
              onClick={showNextImage}
              aria-label="Next gallery image"
              className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors duration-300 hover:bg-[#FF981B] hover:text-[#4A0707] sm:right-7 sm:h-12 sm:w-12"
            >
              <ChevronRight size={23} />
            </button>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 font-poppins text-xs font-semibold text-white/70">
              {activeImageIndex + 1} / {galleryItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}