import { motion } from "framer-motion";
import logo from "../assets/logo/purvanchallogo.png";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#F8F5EF]">

      {/* Background Glow */}

      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#C97A2B]/10 blur-[120px]" />

      {/* Floating Tea Leaves */}

      <motion.div
        className="absolute left-[12%] top-[20%] text-4xl"
        animate={{
          y: [-10, 15, -10],
          rotate: [-15, 10, -15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        🍃
      </motion.div>

      <motion.div
        className="absolute right-[15%] top-[30%] text-3xl"
        animate={{
          y: [15, -10, 15],
          rotate: [10, -10, 10],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        🍂
      </motion.div>

      <motion.div
        className="absolute left-[18%] bottom-[18%] text-3xl"
        animate={{
          y: [-10, 15, -10],
          rotate: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      >
        🍃
      </motion.div>

      {/* Main Content */}

      <div className="relative flex flex-col items-center">

        {/* Steam */}

        <div className="absolute -top-14 flex gap-3">

          {[0, 1, 2].map((item) => (

            <motion.span
              key={item}
              className="w-[5px] h-12 rounded-full bg-[#B97745]/40"
              animate={{
                y: [0, -18, -35],
                opacity: [0, 1, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: item * 0.3,
              }}
            />

          ))}

        </div>

        {/* Logo */}

        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="w-44 h-44 rounded-full bg-white border border-[#EADCCF] shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex items-center justify-center"
        >

          <img
            src={logo}
            alt="Purvanchal Kulhad Chai"
            className="w-32 object-contain"
          />

        </motion.div>

        {/* Brand */}

        <motion.h2
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-8 text-5xl font-bold text-[#5B2E16]"
        >
          Purvanchal
        </motion.h2>

        <p className="mt-2 uppercase tracking-[8px] text-[#9C5A28] text-sm font-medium">
          Kulhad Chai
        </p>

        {/* Loading Text */}

        <motion.p
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="mt-6 text-[#7A4B22] tracking-[3px] text-sm"
        >
          Brewing Fresh Happiness...
        </motion.p>

        {/* Progress Line */}

        <div className="mt-8 w-72 h-[3px] rounded-full bg-[#E8D9C8] overflow-hidden">

          <motion.div
            className="h-full bg-gradient-to-r from-[#6B3F1D] via-[#C96A1A] to-[#5B8C1A]"
            animate={{
              x: ["-100%", "250%"],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "linear",
            }}
          />

        </div>

      </div>

    </div>
  );
}