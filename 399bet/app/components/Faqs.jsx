import React from "react";

const Faqs = () => {
  return (
    <section className="mt-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#ffed22] mb-10">
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="space-y-4">
          <details className="bg-[#024d059d] p-6 rounded-xl shadow hover:shadow-yellow-500/20 transition">
            <summary className="text-lg font-semibold text-[#ffed22] cursor-pointer">
              Is 399Bet Game legal in Pakistan?
            </summary>
            <p className="text-[#ffffffc5] mt-2">
              Online betting laws in Pakistan are complex and may vary. Users
              should consult local regulations and proceed with caution when
              engaging in online betting activities.
            </p>
          </details>
          <details className="bg-[#024d059d] p-6 rounded-xl shadow hover:shadow-yellow-500/20 transition">
            <summary className="text-lg font-semibold text-[#ffed22] cursor-pointer">
              What payment methods are supported for deposits and withdrawals?
            </summary>
            <p className="text-[#ffffffc5] mt-2">
              supports local payment methods such as EasyPaisa and JazzCash, as
              well as cryptocurrency options.
            </p>
          </details>
          <details className="bg-[#024d059d] p-6 rounded-xl shadow hover:shadow-yellow-500/20 transition">
            <summary className="text-lg font-semibold text-[#ffed22] cursor-pointer">
              Are there any bonuses or promotions available?
            </summary>
            <p className="text-[#ffffffc5] mt-2">
              Yes, this game offers various bonuses and promotions, including
              welcome bonuses, daily promotions, and loyalty programs to enhance
              the betting experience.
            </p>
          </details>
          <details className="bg-[#024d059d] p-6 rounded-xl shadow hover:shadow-yellow-500/20 transition">
            <summary className="text-lg font-semibold text-[#ffed22] cursor-pointer">
              Is customer support available?
            </summary>
            <p className="text-[#ffffffc5] mt-2">
              Yes, it provides 24/7 live customer support to assist users with
              any queries or issues.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
