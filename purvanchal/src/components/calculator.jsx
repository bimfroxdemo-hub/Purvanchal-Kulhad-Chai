import { useState } from "react";

export default function ProfitCalculator() {

  const [price, setPrice] = useState(20);
  const [cost, setCost] = useState(5);
  const [qty, setQty] = useState(10);

  const revenue = price * qty;
  const totalCost = cost * qty;
  const profit = revenue - totalCost;

  return (
    <section className="py-24 bg-[#faf8f4]">

      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-[#3B2F2F]">
            Profit Calculator
          </h2>
          <p className="text-gray-600 mt-3">
            Kulhad Chai Business Insights + Earnings Tool ☕
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT - HEAVY DETAILING */}
          <div className="space-y-6">

            {/* MAIN EXPLANATION */}
            <div className="bg-white  shadow-sm p-6 border">
              <h3 className="text-2xl font-semibold text-[#3B2F2F]">
                ☕ Kulhad Chai Business Model
              </h3>
              <p className="text-gray-600 mt-3 leading-7 text-sm">
                Kulhad chai is a high-demand low-investment business.
                Each cup costs around <b>₹4–₹5</b> including kulhad and ingredients.
                With proper pricing, profit margin stays strong and scalable.
              </p>
            </div>

            {/* COST BREAKDOWN */}
            <div className="bg-white  shadow-sm p-6 border">
              <h3 className="text-xl font-semibold text-[#3B2F2F]">
                📊 Cost Breakdown
              </h3>

              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>• Kulhad Glass: ₹2</li>
                <li>• Tea Ingredients: ₹2–₹3</li>
                <li>• Gas + Other: ~₹1</li>
                <li className="font-semibold text-[#3B2F2F]">
                  Total Cost: ₹4–₹5 per cup
                </li>
              </ul>
            </div>

            {/* PRICING STRATEGY */}
            <div className="bg-white shadow-sm p-6 border">
              <h3 className="text-xl font-semibold text-[#3B2F2F]">
                💰 Pricing Strategy
              </h3>

              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>• Normal Tea: ₹15–₹18</li>
                <li>• Standard Kulhad Tea: ₹20–₹22</li>
                <li>• Premium Tea: ₹25–₹30</li>
                <li className="font-semibold text-[#9BA57B]">
                  Expected Profit: ₹10–₹20 per cup
                </li>
              </ul>
            </div>

          </div>

          {/* RIGHT - CLEAN CALCULATOR */}
          <div className="bg-white  shadow-lg p-8">

            <h3 className="text-xl font-semibold text-[#3B2F2F] mb-6">
              Live Calculator
            </h3>

            <div className="space-y-5">

              <div>
                <label className="text-sm text-gray-500">Selling Price (₹)</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full mt-2 p-3 border  focus:outline-none focus:ring-2 focus:ring-[#9BA57B]"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Cost per Cup (₹)</label>
                <input
                  type="number"
                  value={cost}
                  onChange={(e) => setCost(Number(e.target.value))}
                  className="w-full mt-2 p-3 border  focus:outline-none focus:ring-2 focus:ring-[#9BA57B]"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Quantity / Day</label>
                <input
                  type="number"
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                  className="w-full mt-2 p-3 border  focus:outline-none focus:ring-2 focus:ring-[#9BA57B]"
                />
              </div>

            </div>

            {/* RESULT */}
            <div className="mt-8 bg-[#4f3535] text-white p-6">

              <p className="text-gray-300 text-sm">Estimated Profit</p>

              <h2 className="text-5xl font-bold text-[#9BA57B] mt-2">
                ₹{profit}
              </h2>

              <div className="flex justify-between mt-5 text-sm text-gray-300">
                <span>Revenue: ₹{revenue}</span>
                <span>Cost: ₹{totalCost}</span>
              </div>

              <div className="mt-2 text-sm text-[#9BA57B]">
                Margin: {revenue ? Math.round((profit / revenue) * 100) : 0}%
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}