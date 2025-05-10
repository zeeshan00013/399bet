// app/components/GameCategories.jsx
import React from "react";
import {
  Flame,
  Coins,
  Link as LinkIcon,
  Fish,
  Video,
  SquareStack,
  Folder,
  Gamepad,
} from "lucide-react";

const GameCategories = () => {
  return (
    <section className="max-w-7xl mx-auto w-full px-4 py-12 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#ffed22] mb-10">
        Explore the Top Game Categories on 399Bet
      </h2>

      <div className="grid grid-cols-1 gap-8">
        <div className="bg-[#024d059d] p-6 rounded-xl shadow hover:shadow-yellow-500/20 transition">
          <div className="flex items-center gap-3 mb-4">
            <Flame className="text-yellow-400 w-6 h-6" />
            <h3 className="text-lg font-bold text-[#ffed22]">Trending Games</h3>
          </div>
          <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
            <li>Aviator</li>
            <li>Fortune Gems Series</li>
            <li>Money Coming</li>
            <li>Crazy777</li>
            <li>Crash</li>
            <li>Super Fruits Slot</li>
            <li>Plinko</li>
          </ul>
        </div>

        <div className="bg-[#024d059d] p-6 rounded-xl shadow hover:shadow-yellow-500/20 transition">
          <div className="flex items-center gap-3 mb-4">
            <Coins className="text-yellow-400 w-6 h-6" />
            <h3 className="text-lg font-bold text-[#ffed22]">Slot Machines</h3>
          </div>
          <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
            <li>JILI Slots</li>
            <li>WG Slots</li>
            <li>PG Slots</li>
            <li>JDB Slots</li>
            <li>TBGanes Slots</li>
            <li>PP Slots</li>
            <li>CQ9 Slots</li>
            <li>FC Slots</li>
            <li>BBIN Slots</li>
          </ul>
        </div>

        <div className="bg-[#024d059d] p-6 rounded-xl shadow hover:shadow-yellow-500/20 transition">
          <div className="flex items-center gap-3 mb-4">
            <LinkIcon className="text-yellow-400 w-6 h-6" />
            <h3 className="text-lg font-bold text-[#ffed22]">
              Blockchain-Based Games
            </h3>
          </div>
          <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
            <li>WG Blockchain Games</li>
            <li>Spribe Blockchain Games</li>
            <li>JILI Blockchain Games</li>
            <li>T1 Blockchain Games</li>
            <li>TBGames Blockchain</li>
            <li>MW Blockchain Games</li>
          </ul>
        </div>

        <div className="bg-[#024d059d] p-6 rounded-xl shadow hover:shadow-yellow-500/20 transition">
          <div className="flex items-center gap-3 mb-4">
            <Fish className="text-yellow-400 w-6 h-6" />
            <h3 className="text-lg font-bold text-[#ffed22]">Fishing Games</h3>
          </div>
          <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
            <li>JILI Fishing</li>
            <li>JDB Fishing</li>
            <li>Yellowbat Fishing</li>
            <li>KA Fishing</li>
            <li>FC Fishing</li>
            <li>WG Fishing</li>
          </ul>
        </div>

        <div className="bg-[#024d059d] p-6 rounded-xl shadow hover:shadow-yellow-500/20 transition">
          <div className="flex items-center gap-3 mb-4">
            <Video className="text-yellow-400 w-6 h-6" />
            <h3 className="text-lg font-bold text-[#ffed22]">
              Live Casino Games
            </h3>
          </div>
          <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
            <li>EVO Live</li>
            <li>PP Live</li>
            <li>Ezugi Live</li>
            <li>BBIN Live</li>
            <li>W Live</li>
            <li>CQ9 Live</li>
            <li>MG Live</li>
            <li>Astar Live</li>
            <li>HRG Live</li>
          </ul>
        </div>

        <div className="bg-[#024d059d] p-6 rounded-xl shadow hover:shadow-yellow-500/20 transition">
          <div className="flex items-center gap-3 mb-4">
            <SquareStack className="text-yellow-400 w-6 h-6" />
            <h3 className="text-lg font-bold text-[#ffed22]">Card Games</h3>
          </div>
          <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
            <li>WG Cards</li>
            <li>JILI Cards</li>
            <li>Kingmidas</li>
            <li>Dragan Tiger</li>
            <li>Sic Bo</li>
            <li>7uo7down</li>
            <li>Win Drop</li>
            <li>Andar Bahar</li>
            <li>Poker Roulette</li>
          </ul>
        </div>

        <div className="bg-[#024d059d] p-6 rounded-xl shadow hover:shadow-yellow-500/20 transition">
          <div className="flex items-center gap-3 mb-4">
            <Gamepad className="text-yellow-400 w-6 h-6" />
            <h3 className="text-lg font-bold text-[#ffed22]">Sports Betting</h3>
          </div>
          <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
            <li>9Wicket Sports</li>
            <li>SABA Sports</li>
            <li>WG Sports</li>
            <li>BTI Sports</li>
            <li>IM Sports</li>
            <li>3 SING Sports</li>
            <li>SBO Sports</li>
            <li>PANDA Sports</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GameCategories;
