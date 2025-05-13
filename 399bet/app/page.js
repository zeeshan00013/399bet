import Image from "next/image";
import BetBanner from "./Images/399bet.webp";
import Features from "./components/Features";
import Carousel from "./components/Caurosel";
import Conclusion from "./components/Conclusion";
import FAQs from "./components/Faqs";
import { DownloadIcon } from "lucide-react";
import Rules from "./components/Rules";

import HowToPlay from "./components/HowToPlay";
import Link from "next/link";
import MetadataSection from "./components/MetadataSection";
import Install from "./components/Install";
import GameCategories from "./components/Games";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center space-y-5 ">
      <section className="text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 p-5">
          <div className="flex-1 max-w-3xl">
            <h1 className="text-3xl   md:text-5xl leading-tight mb-6 text-[#ffed22] font-semibold">
              399Bet Game Download (New Earning betting App) In Pakistan
            </h1>
            <p className="text-lg ">
              399Bet Game is a modern betting app that offers a fun and
              rewarding way to place bets and win real money. Designed with
              Pakistani users in mind, it supports trusted local payment options
              like EasyPaisa and JazzCash, making deposits and withdrawals quick
              and hassle-free. The app runs smoothly on Android devices and also
              offers access through iOS and web browsers, providing a flexible
              and secure gaming experience for all types of users.
            </p>
            <a
              href="https://399bet.net/?id=417186409&currency=PKR&type=4"
              className="inline-flex items-center justify-center bg-[#ffffff] hover:bg-[#e1e3e2] text-[#067831] text-lg font-semibold px-8 py-3 rounded-md shadow-md transition mt-5 gap-2 w-full"
            >
              DOWNLOAD <DownloadIcon />
            </a>
          </div>

          <div className=" flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={BetBanner}
                alt="399bet banner "
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <MetadataSection />
      </section>
      <section className=" max-w-7xl mx-auto text-white">
        <div className=" flex flex-col items-center justify-center text-center mt-6 space-y-4 p-5">
          <h2 className="text-3xl md:text-4xl leading-13 text-[#ffed22] font-extrabold">
            What is 399Bet Game?
          </h2>
          <div className="md:text-xl text-center md:text-start space-y-5 ">
            <p className=" ">
              <Link href={"https://399betgame.cc/"} className="m-1">
                399Bet Apk
              </Link>{" "}
              is a dynamic online betting app where users can place wagers on
              various games and sports events with the chance to win real money.
              Designed for simplicity, the platform offers an easy-to-use
              interface that’s perfect for beginners, while still catering to
              experienced bettors. With top-notch security features, including
              advanced encryption, users can safely deposit and withdraw funds
              without worrying about data breaches.
            </p>
            <p>
              The platform emphasizes fair play by using reliable systems like
              random number generators to guarantee transparent and unbiased
              outcomes. It also keeps users engaged through generous bonuses and
              promotional offers from sign-up rewards to daily deals, there’s
              always something to boost your betting experience. Tailored for
              the Pakistani market, game supports popular local payment options
              like JazzCash and EasyPaisa and offers multilingual support for
              better accessibility. However, its important to keep in mind that
              online betting in Pakistan comes with legal grey areas, so users
              should proceed responsibly.
            </p>
            <p>
              Whether you betting from your Android phone or accessing it via a
              browser, this platform provides a smooth, responsive experience.
              With a wide range of betting options, dedicated customer service,
              and a focus on user satisfaction, its built to offer both
              excitement and real earning potential.
            </p>
          </div>
        </div>
      </section>
      <Install />
      <Features />
      <GameCategories />
      <Carousel />
      <HowToPlay />
      <Rules />
      <FAQs />
      <Conclusion />
    </main>
  );
}
