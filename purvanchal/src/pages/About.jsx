import { motion } from "framer-motion";
import chaiBoy from "../assets/logo/tandoori.png"
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
export default function About() {
    const navigate = useNavigate();
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

return (
    <>
<Helmet>
  <title>About Purvanchal Kulhad Chai | Authentic Purvanchal Tea Brand in Surat</title>

  <meta
    name="description"
    content="Purvanchal Kulhad Chai brings authentic Purvanchal taste of Uttar Pradesh to Surat. Traditional kulhad chai, mitti ki khushboo, and desi chai experience with premium quality and hospitality."
  />

  <meta
    name="keywords"
    content="kulhad chai surat, purvanchal chai, desi chai brand, UP chai, traditional tea india, kulhad tea shop surat, chai franchise india"
  />

 <meta name="author" content="Raghunath Chaurasiya" />

  {/* Open Graph */}
  <meta property="og:title" content="About Purvanchal Kulhad Chai" />
  <meta
    property="og:description"
    content="From Purvanchal (UP) to Surat – experience authentic kulhad chai with tradition, taste and culture."
  />
  <meta property="og:type" content="website" />

  {/* IMPORTANT: location SEO */}
  <meta
    name="geo.placename"
    content="Bhestan, Surat, Gujarat"
  />
</Helmet>
      <section className="relative h-[70vh] flex items-center justify-center text-center px-6 overflow-hidden">

        {/* BG IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop"
          alt="contact"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <p className="uppercase tracking-[6px] text-sm text-[#d8c9b1] mb-5">
            Purvanchal Kulhad Chai
          </p>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
            Our Story,
            <br />
            Our Tradition
          </h1>
        </motion.div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
          <svg
            viewBox="0 0 1440 150"
            className="block w-full h-[70px] sm:h-[90px] md:h-[110px] lg:h-[130px]"
            preserveAspectRatio="xMidYMax meet"
          >
            <path
              fill="#F8F5EF"
              d="M0,100C180,50,360,150,540,110C720,70,900,20,1080,50C1260,80,1350,120,1440,90V150H0Z"
            />
          </svg>
        </div>
      </section>

      {/*==============================================about=============================================== */}
      <section className="py-24 bg-[#f7f3ee]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-[1fr_1.2fr_1fr] gap-6 items-stretch">

            {/* IMAGE */}
            <div className="h-full">
              <img
                src="https://i.pinimg.com/736x/a2/b5/03/a2b5035d5b9bfb12492ab65bb6e875d5.jpg"
                alt="Purvanchal Tea"
                className="w-full h-full min-h-[650px] object-contain mix-blend-multiply"
              />
            </div>

            {/* ABOUT BOX */}
            <div className="bg-white  p-10 shadow-sm flex flex-col justify-center">

              <span className="uppercase tracking-[4px] text-[#8b5e34] text-sm">
                About Purvanchal Tea
              </span>

              <h2 className="text-4xl font-bold text-[#2b1d15] mt-4">
                UP Ki Shaan, Ab Surat Mein
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                Purvanchal Kulhad Chai mein har chuski Purvanchal ki parampara aur
                mitti ki mehak ka ehsaas dilati hai. Fresh chai, authentic masale aur
                traditional kulhad ka sangam har cup ko khaas banata hai.
              </p>

              <p className="mt-4 text-gray-600 leading-8">
                Chahe aap Purvanchal se ho ya chai ke asli swad ke shaukeen, yahan har
                kulhad mein milega desi apnapan, premium quality aur ek yaadgaar chai
                experience.
              </p>
            </div>

            {/* RIGHT CARDS */}
            <div className="grid grid-cols-2 gap-5">

              <div className="bg-white  p-6 shadow-sm">
                <div className="text-3xl mb-3">🍃</div>
                <h3 className="font-bold text-[#2b1d15]">
                  Natural Leaves
                </h3>
                <p className="text-gray-600 mt-3 text-sm leading-7">
                  Carefully sourced premium tea leaves.
                </p>
              </div>

              <div className="bg-white  p-6 shadow-sm">
                <div className="text-3xl mb-3">☕</div>
                <h3 className="font-bold text-[#2b1d15]">
                  Rich Aroma
                </h3>
                <p className="text-gray-600 mt-3 text-sm leading-7">
                  Authentic flavour and refreshing taste.
                </p>
              </div>

              <div className="bg-white  p-6 shadow-sm">
                <div className="text-3xl mb-3">🌱</div>
                <h3 className="font-bold text-[#2b1d15]">
                  Sustainability
                </h3>
                <p className="text-gray-600 mt-3 text-sm leading-7">
                  Responsible sourcing and production.
                </p>
              </div>

              <div className="bg-white  p-6 shadow-sm">
                <div className="text-3xl mb-3">❤️</div>
                <h3 className="font-bold text-[#2b1d15]">
                  Trusted Brand
                </h3>
                <p className="text-gray-600 mt-3 text-sm leading-7">
                  Loved by tea enthusiasts across India.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/*====================vison & mision===============================*/}

      <section className="bg-[#f8f8f8] py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[#8b7b6a] text-base tracking-wide mb-2 uppercase">
                Our Story, Our Passion for Chai
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-[#2d1c12] leading-tight mb-12">
                A Community Built <br /> On Kulhad Chai
              </h2>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex gap-5 pb-8 border-b border-gray-300"
              >
                <div className="w-14 h-14 rounded-full border-2 border-[#b77b4b] flex items-center justify-center text-2xl shrink-0">
                  ☕
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#2d1c12] mb-3">
                    Our Vision
                  </h3>

                  <p className="text-[17px] text-gray-600 leading-8">
                    Purvanchal ki asli kulhad chai ko har ghar aur har shehar
                    tak pahunchana, jahan har sip mitti ki khushboo aur
                    apnapan ka ehsaas dilaye.
                  </p>
                </div>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex gap-5 pt-8"
              >
                <div className="w-14 h-14 rounded-full border-2 border-[#b77b4b] flex items-center justify-center text-2xl shrink-0">
                  🏺
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#2d1c12] mb-3">
                    Our Mission
                  </h3>

                  <p className="text-[17px] text-gray-600 leading-8">
                    Fresh kulhad chai, premium ingredients aur Purvanchali
                    mehmaan nawazi ke saath har customer ko ek yaadgaar chai
                    experience dena aur traditional chai culture ko aage
                    badhana.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="flex justify-center"
            >
              <img
                src={chaiBoy}
                alt="Purvanchal Kulhad Chai"
                className="w-full max-w-[480px] object-contain"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* FRANCHISE CTA */}
     <section className="relative bg-[#F8F5EF] py-20 px-6 overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-[#9c5a28]/10 blur-[120px] rounded-full"></div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative max-w-5xl mx-auto text-center"
      >

        {/* Heading */}
        <motion.h2
          variants={item}
          className="text-3xl md:text-5xl font-bold text-[#2d1c12] leading-tight"
        >
          Start Your Own{" "}
          <span className="text-[#9c5a28]">Kulhad Chai Franchise</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={item}
          className="mt-6 text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
        >
          Apna business start karo hamare brand ke saath.
          Low investment, high support aur strong brand value ke saath apna outlet kholne ka mauka.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={container}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center"
        >
          <motion.div variants={item}>
            <h3 className="text-2xl font-bold text-[#9c5a28]">₹4L+</h3>
            <p className="text-gray-600 text-sm">Starting Investment</p>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-2xl font-bold text-[#9c5a28]">100%</h3>
            <p className="text-gray-600 text-sm">Support Provided</p>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-2xl font-bold text-[#9c5a28]">Fast</h3>
            <p className="text-gray-600 text-sm">Setup Process</p>
          </motion.div>
        </motion.div>

        {/* Button */}
        <motion.div variants={item} className="mt-10">
          <button
            onClick={() => navigate("/franchise")}
            className="px-10 py-3 bg-[#9c5a28] text-white rounded-full font-medium hover:scale-105 transition"
          >
            Apply for Franchise
          </button>
        </motion.div>

      </motion.div>
    </section>

    </>
  );
}