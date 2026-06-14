import { motion } from "framer-motion";
import { useState } from "react";
import product1 from "../assets/product/1product-1.png";
import product12 from "../assets/product/1product-2.png";
import product2 from "../assets/product/2product-1.png";
import product21 from "../assets/product/2product-2.png";
import product3 from "../assets/product/3product-1.png";
import product31 from "../assets/product/3product-2.png";
import product4 from "../assets/product/4product-1.png";
import product41 from "../assets/product/4product-2.png";
import product5 from "../assets/product/5product-1.png";
import product51 from "../assets/product/5product-2.png";
import product6 from "../assets/product/6product-1.jpeg";
import product61 from "../assets/product/6product-2.jpeg";
function TeaCard({ tea, index }) {
  const [hover, setHover] = useState(false);

  return (
 <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: index * 0.15 }}
  viewport={{ once: true }}
  onMouseEnter={() => setHover(true)}
  onMouseLeave={() => setHover(false)}
  className="group text-center"
>
  {/* Image */}
  <div className="flex justify-center">
    <img
      src={hover ? tea.img2 : tea.img1}
      alt={tea.name}
      className="h-[300px] object-contain transition duration-500 group-hover:scale-105"
    />
  </div>

  {/* Content */}
<div className="mt-4 text-center max-w-[300px] mx-auto">

  <h3 className="text-[22px] md:text-[24px] font-semibold text-[#2A1E17] tracking-wide leading-snug font-serif">
    {tea.name}
  </h3>

  <div className="w-8 h-[1px] bg-[#B07A45] mx-auto my-3"></div>

  <p className="text-[14px] md:text-[15px] text-[#7A746E] leading-6 font-normal tracking-[0.2px] px-2">
    {tea.desc}
  </p>

</div>
   
</motion.div>
  );
}

export default function TeaGridSection() {

  const teas = [
     {
    name: "Kulhad Chai",
    img1: product1,
    img2: product12,
  },
      {
      name: "Kulhad Tandoori Chai",
      
      img1: product2,
      img2: product21,
    },
    
  {
      name: "Coffee",

      img1: product31,
      img2: product3,
    },
    
    {
      name: "Lemon Tea",
     
      img1: product4,
      img2: product41,
    },
    {
      name: "Green Tea",

      img1: product5,
      img2: product51,
    },
    {
      name: "Black Tea",
     
      img1: product6,
      img2: product61,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
      {teas.map((tea, index) => (
        <TeaCard key={index} tea={tea} index={index} />
      ))}
    </div>
  );
}