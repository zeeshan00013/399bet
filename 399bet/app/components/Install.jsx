import { DollarSign, HardDriveDownload } from "lucide-react";
import Link from "next/link";
import React from "react";

const Install = () => {
  return (
    <section className="py-8 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto text-white space-y-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl leading-snug text-[#ffed22] font-extrabold text-center">
        How to Download and Install 399Bet?
      </h2>

      <div>
        <h2 className="text-[#ffed22] text-xl sm:text-2xl font-bold mb-4">
          Android Devices
        </h2>
        <ul className="list-inside space-y-4 text-base sm:text-lg">
          {[
            {
              title: "Visit the Official Site:",
              description: (
                <>
                  Open your browser and navigate to{" "}
                  <Link
                    href="https://399betgame.cc"
                    className="text-blue-500 underline"
                  >
                    399Bet
                  </Link>{" "}
                  website.
                </>
              ),
            },
            {
              title: "Download the APK:",
              description:
                "Find the Android download section and tap the link to save the APK file.",
            },
            {
              title: "Allow Third-Party Installs:",
              description:
                "In Settings > Security, enable Unknown Sources so your device can install apps outside the Play Store.",
            },
            {
              title: "Install & Launch:",
              description:
                "Open the downloaded APK, follow the prompts to install, then launch game to start placing bets.",
            },
          ].map((item, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row gap-2 sm:items-start"
            >
              <span className="font-semibold flex gap-1">
                <HardDriveDownload className="text-[#ffed22]" />
                {item.title}
              </span>
              <span>{item.description}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-[#ffed22] text-xl sm:text-2xl font-bold mb-4 mt-4">
          iOS Devices
        </h2>
        <ol className="list-inside space-y-4 text-base sm:text-lg">
          {[
            "You can either go directly to the App Store or visit our website for the iOS download link.",
            "Search for 399 Bet game Download and tap (or Get).",
            "Follow the on-screen instructions until the app is fully installed.",
            "Tap on the game icon on your home screen to launch and explore all betting features.",
          ].map((desc, idx) => (
            <li
              key={idx}
              className="flex flex-col sm:flex-row gap-2 sm:items-start"
            >
              <span className="font-semibold flex gap-1">
                <HardDriveDownload className="text-[#ffed22]" />
                {
                  [
                    "Open App Store or Website:",
                    "Get the App:",
                    "Complete Installation:",
                    "Open & Enjoy:",
                  ][idx]
                }
              </span>
              <span>{desc}</span>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center text-[#ffed22] font-extrabold mb-6">
          How to Register on 399Bet
        </h2>
        <ol className="list-inside space-y-4 text-base sm:text-lg">
          {[
            "Head to the 399 bet website or open the mobile app and click Register (usually at the top-right corner).",
            "Provide your full name, email address, phone number, and choose a username and strong password. Double-check for accuracy to avoid verification delays.",
            "You’ll receive a verification code or link via email or SMS. Enter the code or click the link to activate your account—and you’re ready to start betting!",
          ].map((desc, idx) => (
            <li
              key={idx}
              className="flex flex-col sm:flex-row gap-2 sm:items-start"
            >
              <span className="font-semibold flex gap-1">
                <HardDriveDownload className="text-[#ffed22]" />
                {
                  [
                    "Access the Registration Page:",
                    "Enter Your Details:",
                    "Verify Your Account:",
                  ][idx]
                }
              </span>
              <span>{desc}</span>
            </li>
          ))}
        </ol>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center text-[#ffed22] font-extrabold mt-6">
        How to Deposit and Withdraw Funds on 399Bet
      </h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#ffed22]">
            🔼 Depositing Funds via EasyPaisa
          </h3>
          <ol className="list-inside space-y-4 text-base sm:text-lg mt-4">
            {[
              "Access your 399Bet account.",
              'Go to the "Deposit" section.',
              'Choose "EasyPaisa" as your deposit option.',
              "Input the amount you wish to deposit.",
            ].map((desc, idx) => (
              <li
                key={idx}
                className="flex flex-col sm:flex-row gap-2 sm:items-start"
              >
                <span className="font-semibold flex gap-1">
                  <DollarSign className="text-[#ffed22]" />
                  {
                    [
                      "Log In:",
                      "Navigate:",
                      "Select Method:",
                      "Enter Details:",
                    ][idx]
                  }
                </span>
                <span>{desc}</span>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#ffed22]">
            JazzCash
          </h3>
          <ol className="list-inside space-y-4 text-base sm:text-lg mt-4">
            {[
              "Log into your 399Bet profile.",
              'Click on "Deposit."',
              'Select "JazzCash" from the list of payment methods.',
              "Specify the deposit amount.",
            ].map((desc, idx) => (
              <li
                key={idx}
                className="flex flex-col sm:flex-row gap-2 sm:items-start"
              >
                <span className="font-semibold flex gap-1">
                  <DollarSign className="text-[#ffed22]" />
                  {
                    [
                      "Access Account:",
                      "Deposit Section:",
                      "Choose JazzCash:",
                      "Input Amount:",
                    ][idx]
                  }
                </span>
                <span>{desc}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Install;
