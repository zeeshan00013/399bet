import React from "react";

const strategies = [
  {
    title: "1. Manage Your Bankroll Like a Pro",
    description:
      "Decide your budget and stick to it. Use a flat betting strategy  wager the same amount every time. It keeps your emotions in check and protects you from heavy losses.",
  },
  {
    title: "2. Focus on Value Betting",
    description:
      "Look for odds that give you better returns than the actual chance of the event happening. 399 game dynamic odds make this easier.",
  },
  {
    title: "3. Use Stats to Your Advantage",
    description:
      "Analyze team performance and trends. Use 399Bet tools and data to place smarter bets.",
  },
  {
    title: "4. Specialize in One Sport or League",
    description:
      "Get expert at one sport to better understand odds, trends, and value bets others miss.",
  },
  {
    title: "5. Compare Odds – Always",
    description:
      "you’ll find consistently competitive odds across major markets to maximize value.",
  },
  {
    title: "6. Say No to Emotional Betting",
    description:
      "Avoid impulse bets and favorites. Base decisions on logic and data, especially with live betting.",
  },
  {
    title: "7. Track Your Bets",
    description:
      "Use your bet history on 399Bet to identify patterns and improve performance over time.",
  },
  {
    title: "8. Watch the Line Movement",
    description:
      "Keep an eye on shifting odds to spot valuable bets early or avoid traps.",
  },
  {
    title: "9. Use Bonuses & Promotions",
    description:
      "Take advantage of platform welcome bonuses, free bets, and odds boosts to stretch your bankroll.",
  },
  {
    title: "10. Stay Calm, Stay Disciplined",
    description:
      "Never chase losses. Trust your strategy, and play the long game.",
  },
  {
    title: "11. Follow Sports News",
    description:
      "Stay informed about injuries, suspensions, and news with  live sports updates.",
  },
  {
    title: "12. Try Betting Exchanges",
    description:
      "Use game exchange-style features to bet against other players, not just the house.",
  },
  {
    title: "13. Use the Kelly Criterion",
    description:
      "Apply this formula to bet smarter and grow your bankroll responsibly.",
  },
  {
    title: "14. Join the Community",
    description: "Share and learn inside active forums and expert chatrooms.",
  },
  {
    title: "15. Keep Learning",
    description:
      "Read, watch, and evolve. Betting is a skill that improves with time and effort.",
  },
];

const Rules = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#ffed22] mb-10">
        Tips to win more on 399Bet
      </h2>
      <div className="space-y-6">
        {strategies.map((strategy, index) => (
          <div
            key={index}
            className="bg-[#024d059d] p-6 rounded-xl shadow hover:shadow-yellow-500/20 transition"
          >
            <h3 className="text-xl font-semibold text-[#ffed22] mb-2">
              {strategy.title}
            </h3>
            <p className="text-sm md:text-base">{strategy.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rules;
