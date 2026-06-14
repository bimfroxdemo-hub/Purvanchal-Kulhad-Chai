// Home.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import TeaGridSection from "../components/Teaitems";
import { useNavigate } from "react-router-dom";
import tandoori from "../assets/logo/tandoori.png";
import menuimg from "../assets/logo/menuimg.png";
import { Helmet } from "react-helmet-async";
export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>Purvanchal Kulhad Chai | Best Tea Franchise & Tea Shop in India</title>

                <meta
                    name="description"
                    content="Purvanchal Kulhad Chai is India's fastest growing tea brand. Enjoy authentic kulhad chai, tandoori tea & coffee. Start your tea franchise with low investment and full support."
                />

                <meta
                    name="keywords"
                    content="
    kulhad chai, tea franchise india, chai shop near me, best tea brand india,
    tandoori chai, coffee shop franchise, low investment franchise,
    tea business opportunity, purvanchal chai, desi chai brand
    "
                />

                <meta name="author" content="Purvanchal Kulhad Chai" />

                {/* Open Graph */}
                <meta property="og:title" content="Best Kulhad Chai Franchise in India" />
                <meta
                    property="og:description"
                    content="Start your own tea franchise with India’s fastest growing kulhad chai brand."
                />
                <meta property="og:type" content="website" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <div className="w-full overflow-hidden">

                {/* HERO SECTION */}
                <Hero />

                {/* ================= WHY CHOOSE US SECTION ================= */}
                <section className="relative py-20 overflow-hidden">
                    {/* Top Leaf */}
                    <img
                        src="/tea-leaf.png"
                        alt=""
                        className="absolute top-10 -right-2 w-36 opacity-80 rotate-[100deg] hidden lg:block"
                    />

                    {/* Bottom Leaf */}
                    <img
                        src="/tea-leaf.png"
                        alt=""
                        className="absolute top-10 -left-2 w-36 opacity-80 -rotate-[5deg] hidden lg:block"
                    />
                    <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

                        <div className="grid lg:grid-cols-2 gap-14 items-center">

                            {/* LEFT IMAGE */}
                            <motion.div
                                initial={{ opacity: 0, x: -80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.9 }}
                                viewport={{ once: true }}
                                className="relative"
                            >

                                <div className="relative overflow-hidden  ">

                                    <img
                                        src={tandoori}
                                        alt="Kulhad Chai"
                                        className="w-full h-[315px] md:h-[580px] object-cover hover:scale-105 duration-700"
                                    />

                                </div>
                            </motion.div>

                            {/* RIGHT CONTENT */}
                            <motion.div
                                initial={{ opacity: 0, x: 80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.9 }}
                                viewport={{ once: true }}
                            >

                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-5 py-2  text-[#420101] text-sm tracking-[3px] uppercase font-semibold">
                                    <span>☕</span>
                                    Purvanchal Special
                                </div>

                                <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-serif text-[#420101] leading-tight">
                                    KULHAD CHAI,
                                    <br />
                                    REMOVES YOUR FATIGUE
                                </h2>
                                {/* Small Divider */}
                                <div className="flex items-center gap-3 mt-5">

                                    <div className="h-[2px] w-16 bg-[#420101]" />

                                    <span className="text-[#8B5E3C] text-sm tracking-[3px] uppercase">
                                        Since 2026
                                    </span>

                                </div>

                                {/* Description */}
                                <p className="mt-7 text-[#6d4c41] text-lg leading-8 max-w-xl">
                                    Welcome to Purvanchal Kulhad Chai! We bring the
                                    authentic tea tradition of Purvanchal, Uttar Pradesh,
                                    all the way to Surat. Our specialty is freshly brewed, authentic
                                    tea served in traditional clay kulhads,
                                    offering a true desi taste and a homely feeling in every sip.
                                </p>

                                {/* Features */}
                                <div className="grid sm:grid-cols-3 gap-4 mt-10">

                                    {[
                                        {
                                            icon: "☕",
                                            title: "Fresh Brewed",
                                            desc: "Every cup is prepared fresh."
                                        },
                                        {
                                            icon: "🌿",
                                            title: "Natural Ingredients",
                                            desc: "Premium quality tea leaves used."
                                        },
                                        {
                                            icon: "🏺",
                                            title: "Kulhad Experience",
                                            desc: "Traditional earthy taste in every sip."
                                        }
                                    ].map((item, index) => (

                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.15 }}
                                            viewport={{ once: true }}
                                            className="
              bg-white/70
              backdrop-blur
              
              p-5
              shadow-md
              border
              border-[#420101]/10
              "
                                        >

                                            <div className="text-3xl">
                                                {item.icon}
                                            </div>

                                            <h4 className="mt-3 text-[#420101] font-semibold text-lg">
                                                {item.title}
                                            </h4>

                                            <p className="text-[#6d4c41] text-sm mt-2 leading-6">
                                                {item.desc}
                                            </p>

                                        </motion.div>

                                    ))}

                                </div>

                            </motion.div>

                        </div>

                        {/* ================= TEA BLENDS ================= */}
                        <section className="pt-24 px-6 overflow-hidden ">
                            <div className="max-w-7xl mx-auto">

                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.9 }}
                                    viewport={{ once: true }}
                                    className="mb-16 w-full text-left flex flex-col items-start"
                                >

                                    {/* small label */}
                                    <p className="uppercase tracking-[6px] text-[#9c5a28] text-sm mb-4">
                                        Artisan Tea Selection
                                    </p>

                                    {/* heading */}
                                    <h2 className="text-4xl md:text-6xl font-serif text-[#3B2F2F] leading-tight max-w-3xl">
                                        Our Unique Tea Blends
                                    </h2>


                                    {/* description */}
                                    <p className="mt-6 text-gray-600 max-w-xl">
                                        Carefully crafted blends inspired by tradition, aroma, and purity — made for true tea lovers.
                                    </p>

                                </motion.div>

                                {/* GRID */}
                                <motion.div
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <TeaGridSection />
                                </motion.div>

                            </div>
                        </section>
                        {/* WHY CHOOSE */}
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="text-center mt-32"
                        >

                            <p className="uppercase tracking-[6px] text-sm text-[#9BA57B] mb-4">
                                Since 2026
                            </p>

                            <h2 className="text-5xl md:text-6xl font-serif text-[#3B2F2F]">
                                Why Choose Us
                            </h2>

                            <p className="max-w-2xl mx-auto mt-6 text-[#6A5F55] leading-9 text-lg">
                                We present the authentic tea tradition of Purvanchal in a traditional
                                clay kulhad, where every sip delivers a unique feeling of desi taste,
                                freshness, and warmth of togetherness.
                            </p>
                        </motion.div>
                        {/* FEATURES */}
                        <div className="grid md:grid-cols-3 gap-10 mt-20">

                            {[

                                {
                                    icon: "🏺",
                                    title: "Authentic Kulhad",
                                    desc: "Fresh chai served in traditional clay kulhads.",
                                },
                                {
                                    icon: "☕",
                                    title: "Purvanchal Taste",
                                    desc: "Original desi flavor with every sip.",
                                },
                                {
                                    icon: "❤️",
                                    title: "Freshly Brewed",
                                    desc: "Made fresh with premium tea and spices.",
                                },

                            ].map((item, index) => (

                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 80 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10 }}
                                    className="bg-[#FCF8F2] p-12  border border-[#efe5d7] shadow-[0_10px_40px_rgba(0,0,0,0.05)] text-center group"
                                >

                                    {/* ICON */}
                                    <div className="w-24 h-24 mx-auto rounded-full border border-[#d7ccb9] flex items-center justify-center text-4xl bg-white shadow-md group-hover:scale-110 transition duration-500">
                                        {item.icon}
                                    </div>

                                    <h3 className="mt-8 text-3xl font-serif text-[#3B2F2F]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-5 text-[#6A5F55] leading-8 text-lg">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section >
                
                {/* ================= OUR BEST MENU ================= */}
                < section className="bg-[#F8F3EC] py-24 px-6 overflow-hidden" >

                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

                        {/* LEFT CONTENT */}
                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >

                            {/* SMALL TITLE */}
                            <p className="uppercase tracking-[6px] text-sm text-[#9BA57B] mb-4">
                                House Of Tea
                            </p>

                            {/* HEADING */}
                            <h2 className="text-4xl md:text-5xl font-serif text-[#3B2F2F] leading-tight">
                                Our Best Menu
                            </h2>


                            {/* MENU LIST */}
                            <div className="mt-10 space-y-7">

                                {[
                                    {
                                        name: "Kulhad Chai",
                                        desc: "Authentic Purvanchal taste in every sip.",

                                    },
                                    {
                                        name: "Tandoori Kulhad Chai",
                                        desc: "Smoky flavor with a desi twist.",

                                    },
                                    {
                                        name: "Classic Coffee",
                                        desc: "Freshly brewed with premium coffee beans.",

                                    },
                                    {
                                        name: " Green Tea",
                                        desc: "Pure organic tea leaves with freshness",

                                    },
                                    {
                                        name: " Black Tea",
                                        desc: "Bold taste with natural freshness.",

                                    },
                                    {
                                        name: " Lemon Tea",
                                        desc: "Refreshing lemon flavor with rich tea taste.",

                                    },
                                ].map((item, index) => (

                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.7, delay: index * 0.15 }}
                                        viewport={{ once: true }}
                                        className="flex items-center justify-between border-b border-[#ddd3c5] pb-4"
                                    >

                                        {/* LEFT */}
                                        <div>

                                            <h3 className="text-xl font-serif text-[#3B2F2F]">
                                                {item.name}
                                            </h3>

                                            <p className="text-[#7d736a] mt-1 text-sm">
                                                {item.desc}
                                            </p>

                                        </div>

                                        {/* PRICE */}
                                        <div className="text-xl font-serif text-[#9BA57B]">
                                            {item.price}
                                        </div>

                                    </motion.div>

                                ))}

                            </div>
                            {/* BUTTON */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate("/products")}
                                className="mt-10 bg-[#9BA57B] hover:bg-[#7f8b63] transition text-white px-8 py-3 rounded-full shadow-lg tracking-wide"
                            >
                                View Full Menu
                            </motion.button>

                        </motion.div>
                        {/* RIGHT IMAGE */}
                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="relative w-full flex justify-center"
                        >

                            {/* BLUR EFFECT */}
                            <div className="absolute inset-0 bg-[#9BA57B] blur-3xl opacity-20 rounded-full"></div>

                            {/* IMAGE WRAPPER */}
                            <div className="relative overflow-hidden w-full max-w-[700px]">

                                <motion.img
                                    src={menuimg}
                                    alt="Purvanchal Kulhad Chai"
                                    className="w-full h-[450px] sm:h-[550px] lg:h-[700px] object-cover 
                       object-[50%_60%] sm:object-[45%_50%] lg:object-[40%_120%]
                       transition-transform duration-700"

                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6 }}
                                />

                            </div>

                        </motion.div>

                    </div>

                </section >

                {/* ================= FRANCHISE BANNER SECTION ================= */}
                <section className="bg-[#F8F3EC] py-24 px-6 overflow-hidden">

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="max-w-7xl mx-auto relative  overflow-hidden"
                    >

                        {/* BACKGROUND IMAGE */}
                        <img
                            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop"
                            alt="franchise"
                            className="w-full h-[650px] object-cover"
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent"></div>
                        {/* CONTENT */}
                        <div className="absolute inset-0 flex items-center">

                            <div className="max-w-2xl px-10 md:px-16">

                                {/* SMALL TEXT */}
                                <p className="uppercase tracking-[6px] text-sm text-[#d8c9b1] mb-5">
                                    Grow With Purvanchal
                                </p>

                                {/* HEADING */}
                                <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">
                                    Own A Premium <br />
                                    Tea Franchise
                                </h2>

                                {/* DESCRIPTION */}
                                <p className="mt-7 text-[#f1ebe2] leading-9 text-lg max-w-xl">
                                    Start your own luxury tea cafe with our trusted brand,
                                    premium menu and complete business support system.
                                </p>
                                {/* FEATURES */}
                                <div className="mt-10 flex flex-wrap gap-4">

                                    {[
                                        "Low Investment",
                                        "High Profit",
                                        "Brand Support",
                                    ].map((item, index) => (

                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.05 }}
                                            className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-full text-white"
                                        >
                                            {item}
                                        </motion.div>

                                    ))}

                                </div>
                                {/* BUTTON */}
                                <Link to="/franchise">

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="mt-12 bg-[#9BA57B] hover:bg-[#7f8b63] transition text-white px-10 py-4 rounded-full shadow-2xl tracking-wide"
                                    >
                                        Become A Partner
                                    </motion.button>

                                </Link>

                            </div>

                        </div>
                        {/* FLOATING CARD */}
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-md p-7 rounded-[30px] shadow-2xl hidden md:block"
                        >

                            <p className="uppercase tracking-[4px] text-xs text-[#9BA57B]">
                                Since 2026
                            </p>

                            <h3 className="mt-3 text-3xl font-serif text-[#3B2F2F] leading-snug">
                                Franchise <br />
                                Partners Joined
                            </h3>

                        </motion.div>

                    </motion.div>

                </section>
                {/* ================= MODERN GALLERY SECTION ================= */}
                <section className="bg-[#F8F3EC] pb-32 px-6 overflow-hidden">

                    <div className="max-w-7xl mx-auto">

                        {/* TITLE */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20"
                        >

                            <div>

                                <p className="uppercase tracking-[6px] text-sm text-[#9BA57B] mb-4">
                                    Purvanchal Kulhad Tea
                                </p>

                                <h2 className="text-5xl md:text-7xl font-serif text-[#3B2F2F] leading-tight">
                                    Our Franchise <br /> Gallery
                                </h2>

                            </div>

                            <p className="max-w-lg text-[#6A5F55] leading-8 text-lg">
                                Explore our premium tea cafe interiors, modern ambiance and
                                luxurious chai experience designed for every city.
                            </p>

                        </motion.div>
                        {/* GALLERY */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">

                            {[
                                {
                                    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
                                },
                                {
                                    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
                                },
                                {
                                    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
                                },
                                {
                                    img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200&auto=format&fit=crop",
                                },
                                {
                                    img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200&auto=format&fit=crop",
                                },
                                {
                                    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
                                },
                                {
                                    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
                                },
                                {
                                    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
                                },
                            ].map((item, index) => (

                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: index * 0.15 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02 }}
                                    className="relative aspect-square overflow-hidden rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] group"
                                >

                                    {/* IMAGE */}
                                    <img
                                        src={item.img}
                                        alt="gallery"
                                        className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-700"
                                    />

                                    {/* OVERLAY */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                                    {/* TEXT */}
                                    <div className="absolute bottom-0 left-0 p-6 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500">

                                        <p className="uppercase tracking-[4px] text-xs text-[#d8c9b1]">
                                            Premium Cafe
                                        </p>

                                        <h3 className="text-2xl lg:text-3xl font-serif text-white mt-2">
                                            Purvanchal Space
                                        </h3>

                                    </div>

                                </motion.div>

                            ))}

                        </div>
                    </div>

                </section>

            </div >
        </>
    );
}