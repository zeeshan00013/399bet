import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://399betgame.cc"),
  keywords: ["399Bet, 399Bet game Download,399Bet game apk,399Bet apk"],
  title: {
    default: "399Bet Game Download - Earn Real Cash On Android In Pakistan",
    template: "%s | 399Bet",
  },
  description:
    "399Bet Game Download is a online betting app that offers a fun and rewarding way to place bets and win real money. ",
  author: "zeeshan",
  openGraph: {
    description: "best real earning betting game app in pakitsna 399bet",
    url: "https://399betgame.cc",
    image: "./Images/399bet.webp",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    description: "399bet Game Download and start real money today with big win",
    image: "/path/to/twitter-image.jpg",
  },
  alternates: {
    canonical: "https://www.399betgame.cc",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="WUwyvieKiVtnY1l7Vr1A-j1aA_jtaXe_5OGvJ5XEPNg"
        />{" "}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#067831] `}
        cz-shortcut-listen="true"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
