import { Leaf, Coffee, Heart, Send } from "lucide-react";
import "./hero.css";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero relative overflow-hidden bg-[#ffe5c1] pt-10 ">

      {/* Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      <img
  src="/mountain-sketch.png"
  alt=""
  className="
    absolute
    left-1/2
    -translate-x-1/2
    bottom-20
    md:bottom-0
    w-[700px]
    md:w-[1000px]
    opacity-10
    pointer-events-none
  "
/>
      {/* Floating Leaves */}
      <img src="/leaf.png" className="leaf leaf1" alt="" />
      <img src="/leaf.png" className="leaf leaf2" alt="" />
      <img src="/leaf.png" className="leaf leaf3" alt="" />
      <img src="/leaf.png" className="leaf leaf4" alt="" />

      <div className="max-w-[1500px] mx-auto px-6 lg:px-24 flex items-center lg:h-screen">

        {/* LEFT */}
        <div className="w-full lg:w-[40%] z-20 ">

          <p className="tracking-[8px] text-[#9f7b54] text-sm uppercase pt-10 mb-6">
            Kulhad Chai Special
          </p>

          <h1 className="
font-serif
text-[60px]
xl:text-[90px]
leading-[0.95]
tracking-[-2px]
text-[#342014]
">
            Kadak Chai.
            <br />
            <span className="text-[#8B1B12] block">
              Desi Dil Se.
            </span>
          </h1>

          <div className="flex items-center gap-4 my-8 text-[#9f7b54]">
           <div className="flex-1 h-[1px] bg-[#c7a989]" />
            ☕
            <div className="flex-1 h-[1px] bg-[#c7a989]" />
          </div>


          <button
  onClick={() => navigate("/products")}
  className="mt-10 bg-[#82170E] hover:bg-[#6b1109] text-white px-10 py-4 rounded-full shadow-xl flex items-center gap-3 transition-all"
>
  Explore Menu
  <Send size={18} />
</button>
          {/* Features */}
          <div className="features">
          <div className="flex gap-10 mt-12 flex-wrap">

            <div>
              <div className="feature">
                <Leaf className="text-[#82170E]" />
              </div>
              <h4 className="mt-4 font-semibold">FRESH BREWED</h4>
              <p className="text-gray-600 text-sm">
                Fresh leaves every day
              </p>
            </div>

            <div>
              <div className="feature">
                <Coffee className="text-[#82170E]" />
              </div>
              <h4 className="mt-4 font-semibold">PREMIUM TEA</h4>
              <p className="text-gray-600 text-sm">
                Best quality leaves
              </p>
            </div>

            <div>
              <div className="feature">
                <Heart className="text-[#82170E]" />
              </div>
              <h4 className="mt-4 font-semibold">DESI TASTE</h4>
              <p className="text-gray-600 text-sm">
                Pure taste, pure tea
              </p>
            </div>

          </div>

        </div>
        </div>

        {/* RIGHT */}
      {/* RIGHT */}
<div className="w-full lg:w-[58%] flex items-center justify-center lg:justify-end relative mt-10 lg:mt-0">

  <div className="relative flex justify-center items-center">

    {/* Glow */}
    <div className="cup-glow"></div>

    {/* Steam */}
    <div className="steam-wrapper">
      <span className="smoke smoke1"></span>
      <span className="smoke smoke2"></span>
      <span className="smoke smoke3"></span>
      <span className="smoke smoke4"></span>
      <span className="smoke smoke5"></span>
      <span className="smoke smoke6"></span>
      <span className="smoke smoke7"></span>
      <span className="smoke smoke8"></span>
    </div>

    {/* Cup */}
    <img
      src="/kulhad-chai1.png"
      alt="Kulhad Chai"
      className="hero-cup relative z-20"
    />

  </div>

</div>

      </div>

    </section>
  );
}