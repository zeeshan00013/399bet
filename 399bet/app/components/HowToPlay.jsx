import { Download } from "lucide-react";
import Link from "next/link";
import React from "react";

const HowToPlay = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 text-white w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#ffed22] mb-8">
        399Bet Game Rules: Play Fair, Win Big
      </h2>

      <div className="space-y-8 text-sm md:text-base leading-relaxed">
        <div>
          <h3 className="text-3xl font-semibold text-[#ffed22] mb-2">
            1. Eligibility & Responsible Betting
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-lg">
            <li>
              <strong>Age 18+ only:</strong> You must be at least 18 to register
              and play.
            </li>
            <li>
              <strong>Bet responsibly:</strong> Stick to your budget and avoid
              chasing losses.
            </li>
            <li>
              <strong>Take control:</strong> Set limits or self-exclude using
              our tools if needed.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-[#ffed22] mb-2">
            2. Fair Play Comes First
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-lg">
            <li>
              <strong>RNG-certified games:</strong> Outcomes are random and
              fair.
            </li>
            <li>
              <strong>No cheating allowed:</strong> We monitor and act against
              unfair practices.
            </li>
            <li>
              <strong>Keep it secure:</strong> Protect your login details at all
              times.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-[#ffed22] mb-2">
            3. Secure & Transparent Transactions
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-lg">
            <li>
              <strong>Clear terms:</strong> Promotions and bonuses come with
              full transparency.
            </li>
            <li>
              <strong>Encrypted payments:</strong> Your financial data is safe
              with us.
            </li>
            <li>
              <strong>Local payment options:</strong> Use EasyPaisa, JazzCash,
              or crypto with ease.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-[#ffed22] mb-2">
            4. Community Guidelines
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-lg">
            <li>
              <strong>Respect others:</strong> No abuse, hate, or disrespect in
              chats or messages.
            </li>
            <li>
              <strong>Report issues:</strong> Flag any bad behavior or security
              concerns to our support team.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-[#ffed22] mb-2">
            5. Stay Legal
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-lg">
            <li>
              <strong>Know your laws:</strong> Make sure online betting is legal
              in your region.
            </li>
            <li>
              <strong>Verify your account:</strong> Complete ID verification to
              stay compliant and secure.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
