// Products.jsx
import product1 from "../assets/product/1product-1.png";

import product2 from "../assets/product/2product-1.png";

import product3 from "../assets/product/3product-1.png";

import product4 from "../assets/product/4product-1.png";

import product5 from "../assets/product/5product-1.png";

import product6 from "../assets/product/6product-1.jpeg";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

const teas = [
  {
    id: 1,
    name: "kulhad chai",

    image:
      product1,

  },
  {
    id: 2,
    name: "kulhad Tandoori chai",

    image:
      product2,

  },
  {
    id: 3,
    name: "Coffee",

    image:
      product3,

  },
  {
    id: 4,
    name: "Lemon Tea",

    image:
      product4,

  },
  {
    id: 5,
    name: "Green Tea",

    image:
      product5,

  },
  {
    id: 6,
    name: "Black",

    image:
      product6,

  },
];

export default function Products() {

  const handleAddToCart = (product) => {
    console.log("Added:", product);
  };

  return (
    <>
      <Helmet>
        <title>Best Kulhad Chai Menu in India | Premium Tea Collection | Purvanchal Chai</title>

        <meta
          name="description"
          content="Discover India's best Kulhad Chai Menu including Tandoori Chai, Green Tea, Lemon Tea, Black Tea and Coffee. Premium tea collection made with natural ingredients and authentic Indian taste."
        />

        <meta
          name="keywords"
          content="kulhad chai menu, best tea in india, tea shop india, tandoori chai, green tea india, lemon tea, black tea, coffee shop menu, indian tea brand, kulhad chai near me, purvanchal kulhad chai"
        />

        <meta name="author" content="Raghunath Chaurasiya" />

        {/* Open Graph */}
        <meta property="og:title" content="Best Kulhad Chai Menu | Premium Tea India" />
        <meta
          property="og:description"
          content="Explore top-rated kulhad chai and premium tea collection in India with authentic taste and aroma."
        />
        <meta property="og:type" content="website" />

        {/* Local SEO Boost */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Surat, Gujarat" />
      </Helmet>

      <div className="bg-[#fffefd] overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative h-[75vh] flex items-center justify-center text-center px-6">

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop"
            alt="tea"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/45"></div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >

            <p className="uppercase tracking-[6px] text-sm text-[#d8c9b1] mb-5">
              Premium Tea Collection
            </p>

            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              Our Tea Menu
            </h1>

            <p className="mt-6 text-[#f1ebe2] text-lg max-w-2xl mx-auto leading-8">
              Explore handcrafted premium tea blends made with authentic
              ingredients and unforgettable flavors.
            </p>

          </motion.div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg
              viewBox="0 0 1440 180"
              className="w-full h-[90px] sm:h-[110px] md:h-[140px]"
              preserveAspectRatio="xMidYMax meet"
            >
              <path
                fill="#F4EFE8"
                d="M0,90C250,150,450,20,720,60C980,100,1180,160,1440,90V180H0Z"
              />
              <path
                fill="#F8F5EF"
                d="M0,120C280,60,520,150,720,120C960,80,1180,30,1440,80V180H0Z"
              />
            </svg>
          </div>
        </section>

        {/* FEATURE SECTION */}
        <section className="py-24 bg-[#F8F5EF] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">

            {/* Heading */}

            <div className="text-center mb-16">

              <span className="uppercase tracking-[4px] text-[#9c5a28] font-semibold">
                Why Choose Us
              </span>

              <h2 className="text-5xl font-bold text-[#2F241F] mt-3">
                Crafted With Tradition & Quality
              </h2>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

              {[
                {
                  icon: <FaLeaf />,
                  title: "Natural Ingredients",
                  desc: "Premium tea leaves and authentic spices for rich Kulhad Chai flavour.",
                  color: "#5B8C1A",
                },
                {
                  icon: <FaStar />,
                  title: "Premium Taste",
                  desc: "Every sip delivers the perfect balance of aroma, freshness and tradition.",
                  color: "#C76A17",
                },
                {
                  icon: <FaShoppingCart />,
                  title: "Easy Ordering",
                  desc: "Order your favourite Kulhad Chai quickly with seamless service.",
                  color: "#8B4513",
                },
              ].map((item, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="relative bg-[#FFFDF9]  p-10 border border-[#eadfce] shadow-[0_15px_40px_rgba(0,0,0,0.08)] group overflow-hidden"
                >

                  {/* Top Circle */}

                  <div
                    className="w-20 h-20  flex items-center justify-center text-3xl text-white shadow-lg transition-all duration-500"
                    style={{
                      background: item.color,
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Decorative Line */}

                  <div
                    className="w-16 h-1l mt-6 mb-6 group-hover:w-24 transition-all duration-500"
                    style={{
                      background: item.color,
                    }}
                  ></div>

                  <h3 className="text-3xl font-bold text-[#2F241F]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[#6A5F55] leading-8">
                    {item.desc}
                  </p>

                  {/* Background Tea Leaf */}

                  <div
                    className="absolute -right-10 -bottom-10 w-40 h-40  opacity-10"
                    style={{
                      background: item.color,
                    }}
                  ></div>

                </motion.div>

              ))}

            </div>

          </div>
        </section>


        {/* PRODUCTS */}
        <section className="pb-28 px-6">

          <div className="max-w-7xl mx-auto">

            {/* TITLE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="uppercase tracking-[6px] text-sm text-[#9BA57B] mb-4">
                Fresh & Premium
              </p>

              <h2 className="text-5xl md:text-6xl font-serif text-[#3B2F2F]">
                Explore Our Teas
              </h2>
            </motion.div>

            {/* GRID */}
            <div className="grid md:grid-cols-3 gap-14">

              {teas.map((tea, index) => (
                <motion.div
                  key={tea.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="text-center"
                >

                  {/* IMAGE ONLY (Responsive) */}
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={tea.image}
                      alt={tea.name}
                      className="
      w-full
      h-[300px]
      sm:h-[250px]
      md:h-[320px]
      lg:h-[370px]
      object-cover
      hover:scale-105
      transition-all
      duration-700
    "
                    />
                  </div>

                  {/* TEXT BELOW IMAGE */}
                  <h3 className="mt-6 text-3xl font-serif text-[#3B2F2F]">
                    {tea.name}
                  </h3>

                  <p className="mt-3 text-[#6A5F55] leading-7 px-4">
                    {tea.desc}
                  </p>

                </motion.div>
              ))}

            </div>

          </div>

        </section>

      </div>
    </>
  );
}