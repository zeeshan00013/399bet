import { LogInIcon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-[#067831] sticky top-0 z-50 py-6 border-b-2 border-[#04953be6]">
      <nav className=" px-4 md:px-14  w-full">
        <div className="sm:flex items-center  sm:justify-between w-full">
          <div className="text-xl font-bold text-[#f0c059c5] ">
            <Link href="/">
              <p className="text-2xl md:text-5xl flex items-center font-extrabold text-white">
                399<span className="text-[#ffed22]">Bet</span>.com
              </p>
            </Link>
          </div>
          <div className="">
            <button>
              <a
                href="https://399bet.net/?id=417186409&currency=PKR&type=4"
                className="flex items-center justify-center bg-[#ffffff] hover:bg-[#e1e3e2] text-[#067831] text-lg font-semibold px-4 sm:px-10 py-3 rounded-md shadow-md transition mt-5 gap-2 "
              >
                Register <LogInIcon />
              </a>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
