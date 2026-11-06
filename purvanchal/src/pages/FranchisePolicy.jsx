// src/pages/FranchisePolicy.jsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  IndianRupee,
  FileText,
  ShieldCheck,
  HeadphonesIcon,
  UserCheck,
  Award,
  RefreshCw,
  AlertTriangle,
  Heart,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Star,
} from 'lucide-react';

/* ═════════════════════ ANIMATION HELPERS ═════════════════════ */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const floatAnim = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
};

/* ═════════════════════ DATA ═════════════════════ */
const policies = [
  {
    id: 1,
    icon: IndianRupee,
    title: 'Franchise Investment',
    subtitle: 'Transparent pricing, no hidden costs',
    points: [
      { label: 'Starting Investment', value: '₹1,50,000 onwards' },
      { label: 'Franchise Fee', value: '₹1,00,000 for 5 years' },
      { label: 'Total Investment', value: 'Depends on outlet size, location & setup' },
    ],
  },
  {
    id: 2,
    icon: FileText,
    title: 'Agreement & Tenure',
    subtitle: 'Long-term partnership secured',
    points: [
      { label: 'Agreement Duration', value: '5 Years' },
      { label: 'Franchise Renewal', value: 'Subject to mutual agreement' },
      { label: 'Territory', value: 'Exclusive allocation per partner' },
    ],
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: 'Royalty & Charges',
    subtitle: 'Zero recurring burdens',
    points: [
      { label: 'Royalty Fee', value: 'No recurring royalty' },
      { label: 'Additional Charges', value: 'Transparent communication beforehand' },
    ],
  },
  {
    id: 4,
    icon: HeadphonesIcon,
    title: 'Brand & Outlet Support',
    subtitle: 'End-to-end assistance',
    intro: 'Complete franchise support from day one:',
    points: [
      'Outlet setup and branding guidance',
      'Staff training and operational support',
      'Product and raw material guidance',
      'Menu and pricing assistance',
      'Marketing and promotional support',
      'Quality and hygiene guidelines',
    ],
  },
  {
    id: 5,
    icon: UserCheck,
    title: 'Partner Responsibilities',
    subtitle: 'Mutual commitment to excellence',
    points: [
      'Maintain brand standards and product quality',
      'Follow operational and hygiene guidelines',
      'Provide excellent customer service',
      'Maintain transparency in business operations',
      'Follow the signed franchise agreement',
    ],
  },
  {
    id: 6,
    icon: Award,
    title: 'Quality & Brand Protection',
    subtitle: 'Consistency across every outlet',
    points: [
      'Every outlet must maintain the taste, presentation, cleanliness and customer experience associated with Purvanchal Kulhad Chai.',
    ],
  },
  {
    id: 7,
    icon: RefreshCw,
    title: 'Termination & Renewal',
    subtitle: 'Fair terms, mutual respect',
    points: [
      'The franchise agreement may be renewed or terminated according to the conditions mutually accepted in the signed agreement.',
    ],
  },
];

/* ═════════════════════ POLICY CARD ═════════════════════ */
const PolicyCard = ({ policy, index }) => {
  const Icon = policy.icon;

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative overflow-hidden rounded-3xl p-[1.5px] bg-gradient-to-br from-[#FF981B]/30 via-[#FF981B]/5 to-transparent hover:from-[#FF981B]/60 transition-all duration-500"
    >
      {/* Inner card */}
      <div className="relative h-full rounded-3xl bg-gradient-to-br from-[#1a110b] via-[#1f140d] to-[#15100b] p-7 md:p-9 backdrop-blur-xl overflow-hidden">
        {/* Glow effect on hover */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FF981B]/0 group-hover:bg-[#FF981B]/10 blur-3xl rounded-full transition-all duration-700" />

        {/* Section Number */}
        <span className="absolute top-5 right-6 text-7xl md:text-8xl font-black bg-gradient-to-br from-[#FF981B]/10 to-[#FF981B]/0 bg-clip-text text-transparent select-none leading-none">
          {String(policy.id).padStart(2, '0')}
        </span>

        {/* Icon with glow */}
        <div className="relative z-10 mb-6 inline-flex items-center justify-center">
          <div className="absolute inset-0 bg-[#FF981B] blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF981B] via-[#ff8c00] to-[#e07b00] flex items-center justify-center shadow-2xl shadow-[#FF981B]/40">
            <Icon className="w-7 h-7 text-white" strokeWidth={2.2} />
          </div>
        </div>

        {/* Title + Subtitle */}
        <div className="relative z-10 mb-5">
          <h3 className="text-xl md:text-2xl font-extrabold text-white mb-1.5 tracking-tight">
            {policy.title}
          </h3>
          <p className="text-xs md:text-sm text-[#FF981B]/80 font-medium uppercase tracking-wider">
            {policy.subtitle}
          </p>
        </div>

        {/* Divider */}
        <div className="relative z-10 w-16 h-[2px] bg-gradient-to-r from-[#FF981B] to-transparent mb-5" />

        {/* Intro text */}
        {policy.intro && (
          <p className="relative z-10 text-[#F5E8D5]/70 text-sm mb-4 leading-relaxed">
            {policy.intro}
          </p>
        )}

        {/* Key/Value points */}
        {typeof policy.points[0] === 'object' && (
          <ul className="relative z-10 space-y-3.5">
            {policy.points.map((p, i) => (
              <li
                key={i}
                className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 pb-3 border-b border-[#FF981B]/5 last:border-0 last:pb-0"
              >
                <span className="text-[#FF981B] font-semibold text-xs sm:text-sm whitespace-nowrap min-w-[150px] uppercase tracking-wide">
                  {p.label}
                </span>
                <span className="text-[#F5E8D5] text-sm md:text-[15px] leading-relaxed font-light">
                  {p.value}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Checklist points */}
        {typeof policy.points[0] === 'string' && (
          <ul className="relative z-10 space-y-3">
            {policy.points.map((p, i) => (
              <li
                key={i}
                className="flex items-start gap-3 group/item"
              >
                <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#FF981B]/15 flex items-center justify-center group-hover/item:bg-[#FF981B]/30 transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF981B]" strokeWidth={2.5} />
                </div>
                <span className="text-[#F5E8D5]/90 text-sm md:text-[15px] leading-relaxed font-light">
                  {p}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Corner decoration */}
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#FF981B]/10 to-transparent rounded-tl-full pointer-events-none" />
      </div>
    </motion.div>
  );
};

/* ═════════════════════ MAIN COMPONENT ═════════════════════ */
const FranchisePolicy = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="relative bg-[#0d0806] text-white min-h-screen overflow-hidden">
      {/* ═══════════════ GLOBAL BACKGROUND EFFECTS ═══════════════ */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-radial-gradient" />
        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#FF981B]/[0.04] rounded-full blur-[120px]" />
      </div>

      {/* ═══════════════ HERO BANNER ═══════════════ */}
      <section
        ref={heroRef}
        className="relative overflow-hidden min-h-[90vh] flex items-center"
      >
        {/* Floating decorative blobs */}
        <motion.div
          variants={floatAnim}
          animate="animate"
          className="absolute top-20 right-[10%] w-72 h-72 bg-[#FF981B]/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatAnim}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute bottom-20 left-[5%] w-96 h-96 bg-[#e07b00]/8 rounded-full blur-3xl"
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#FF981B 1px, transparent 1px), linear-gradient(90deg, #FF981B 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center w-full"
        >
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF981B]/20 via-[#FF981B]/10 to-[#FF981B]/20 border border-[#FF981B]/30 backdrop-blur-xl rounded-full px-5 py-2 mb-8 shadow-lg shadow-[#FF981B]/10"
          >
            <Sparkles className="w-4 h-4 text-[#FF981B] animate-pulse" />
            <span className="text-sm font-semibold text-[#FF981B] tracking-wide">
              Transparent &amp; Partner-Friendly Policy
            </span>
            <Sparkles className="w-4 h-4 text-[#FF981B] animate-pulse" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-6 tracking-tight"
          >
            <span className="text-white">Franchise</span>{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#FF981B] via-[#ffb347] to-[#FF981B] bg-clip-text text-transparent">
                Policy
              </span>
              <span className="absolute -inset-2 bg-[#FF981B]/20 blur-2xl rounded-full" />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-[#F5E8D5]/70 max-w-2xl mx-auto leading-relaxed mb-4 font-light"
          >
            Building Partnerships, Growing Together.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-lg text-[#F5E8D5]/50 max-w-xl mx-auto leading-relaxed font-light"
          >
            Our franchise policy makes starting your chai outlet{' '}
            <span className="text-[#FF981B]">simple</span>,{' '}
            <span className="text-[#FF981B]">affordable</span>, and{' '}
            <span className="text-[#FF981B]">supportive</span>.
          </motion.p>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-14 flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {[
              { value: '₹1.5L', label: 'Starting Investment', icon: IndianRupee },
              { value: '5 Yrs', label: 'Agreement Tenure', icon: FileText },
              { value: '0%', label: 'Monthly Royalty', icon: ShieldCheck },
              { value: '100%', label: 'Support Promise', icon: Star },
            ].map((stat, i) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="group relative px-6 py-5 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl border border-white/10 hover:border-[#FF981B]/40 transition-all duration-300 min-w-[150px]"
                >
                  <StatIcon className="w-5 h-5 text-[#FF981B]/60 group-hover:text-[#FF981B] mx-auto mb-2 transition-colors" />
                  <p className="text-3xl md:text-4xl font-black bg-gradient-to-br from-[#FF981B] to-[#ffb347] bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#F5E8D5]/60 mt-1 uppercase tracking-wider font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 flex flex-col items-center gap-2 text-[#F5E8D5]/40"
          >
            <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-[#FF981B]/30 flex items-start justify-center p-1.5"
            >
              <div className="w-1 h-2 bg-[#FF981B] rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════ SECTION HEADER FOR POLICIES ═══════════════ */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#FF981B] text-sm uppercase tracking-[0.3em] font-semibold">
            — Policy Overview —
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-3">
            Everything You{' '}
            <span className="bg-gradient-to-r from-[#FF981B] to-[#ffb347] bg-clip-text text-transparent">
              Need to Know
            </span>
          </h2>
          <p className="text-[#F5E8D5]/60 max-w-xl mx-auto">
            Seven clear pillars that define our franchise partnership model.
          </p>
        </motion.div>
      </section>

      {/* ═══════════════ POLICY CARDS GRID ═══════════════ */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7"
        >
          {policies.map((policy, i) => (
            <PolicyCard key={policy.id} policy={policy} index={i} />
          ))}
        </motion.div>
      </section>

      {/* ═══════════════ DISCLAIMER ═══════════════ */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-[1.5px] bg-gradient-to-br from-[#FF981B]/40 via-[#FF981B]/10 to-transparent overflow-hidden"
        >
          <div className="relative bg-gradient-to-br from-[#1a110b] to-[#15100b] rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Warning glow */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FF981B]/10 blur-3xl rounded-full" />

            <div className="relative flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0 relative">
                <div className="absolute inset-0 bg-[#FF981B] blur-xl opacity-40" />
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF981B] to-[#e07b00] flex items-center justify-center shadow-xl shadow-[#FF981B]/30">
                  <AlertTriangle className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <span className="text-[#FF981B] text-xs uppercase tracking-widest font-bold">
                  Please Read Carefully
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-2 mb-4">
                  Important Disclaimer
                </h3>
                <p className="text-[#F5E8D5]/70 text-base leading-relaxed">
                  Franchise investment, business performance and profitability
                  may vary depending on location, operating expenses, customer
                  demand and management. Franchise approval is subject to company
                  verification and agreement. All figures mentioned are
                  indicative and subject to final terms of the franchise
                  agreement.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════ OUR PROMISE CTA ═══════════════ */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] p-10 md:p-16 text-center"
        >
          {/* Multi-layer gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF981B] via-[#ff8c00] to-[#c76800]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FF981B]/20 to-white/10" />

          {/* Animated decorative elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-24 -right-24 w-72 h-72 border-2 border-white/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-20 -left-20 w-56 h-56 border-2 border-white/10 rounded-full"
          />

          {/* Mesh pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
          />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl mb-6 shadow-2xl"
            >
              <Heart className="w-8 h-8 text-white fill-white" />
            </motion.div>

            <span className="text-white/80 text-sm uppercase tracking-[0.3em] font-bold">
              Our Promise to You
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mt-3 mb-5 leading-tight">
              Grow With Us,<br className="hidden md:block" />
              <span className="text-white/90">Not Behind Us</span>
            </h2>
            <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-light">
              We believe in building a transparent relationship where every
              franchise partner grows with the brand.{' '}
              <span className="font-semibold">Your success is our success.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group relative flex items-center gap-2 bg-white text-[#e07b00] font-bold py-4 px-8 rounded-full hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <span className="relative z-10">Apply for Franchise</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-0 bg-gradient-to-r from-[#FF981B]/0 via-[#FF981B]/20 to-[#FF981B]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
              <button className="flex items-center gap-2 bg-white/10 backdrop-blur-xl border-2 border-white/40 text-white font-semibold py-4 px-8 rounded-full hover:bg-white/20 hover:border-white/60 transition-all duration-300">
                <Phone className="w-5 h-5" />
                <span>Talk to Our Team</span>
              </button>
            </div>

            {/* Trust badge */}
            <div className="mt-10 flex items-center justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>500+ Partners</span>
              </div>
              <div className="w-1 h-1 bg-white/40 rounded-full" />
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-white" />
                <span>Trusted Brand</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════ CONTACT STRIP ═══════════════ */}
      <section className="relative z-10 border-t border-[#FF981B]/10 bg-gradient-to-b from-[#0d0806] to-[#15100b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <span className="text-[#FF981B] text-sm uppercase tracking-[0.3em] font-semibold">
              Get in Touch
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">
              Ready to Start Your Journey?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                label: 'Call Us',
                value: '+91 98765 43210',
                href: 'tel:+919876543210',
              },
              {
                icon: Mail,
                label: 'Email Us',
                value: 'franchise@purvanchalkulhadchai.com',
                href: 'mailto:franchise@purvanchalkulhadchai.com',
              },
              {
                icon: MapPin,
                label: 'Head Office',
                value: 'Gorakhpur, Uttar Pradesh',
                href: '#',
              },
            ].map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <motion.a
                  key={i}
                  href={item.href}
                  whileHover={{ y: -4 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/5 hover:border-[#FF981B]/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FF981B]/10 group-hover:bg-[#FF981B]/20 flex items-center justify-center transition-colors">
                    <ItemIcon className="w-5 h-5 text-[#FF981B]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[#F5E8D5]/50 text-xs uppercase tracking-wider font-semibold">
                      {item.label}
                    </p>
                    <p className="text-white font-semibold group-hover:text-[#FF981B] transition-colors text-sm md:text-base truncate">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ TAGLINE FOOTER ═══════════════ */}
      <section className="relative z-10 bg-[#0d0806] py-16 text-center border-t border-[#FF981B]/5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto px-4"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#FF981B]/50" />
            <Sparkles className="w-4 h-4 text-[#FF981B]" />
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#FF981B]/50" />
          </div>
          <p className="text-xl md:text-2xl text-[#F5E8D5]/80 italic leading-relaxed font-light">
            <span className="bg-gradient-to-r from-[#FF981B] to-[#ffb347] bg-clip-text text-transparent font-bold not-italic">
              Purvanchal Kulhad Chai
            </span>
            <br />
            <span className="text-base md:text-lg text-[#F5E8D5]/60">
              Har Kulhad Mein Apnapan, Har Chuski Mein Purvanchal Ki Pehchaan.
            </span>
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default FranchisePolicy;