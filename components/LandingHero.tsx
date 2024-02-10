"use client";

// IMPORTS -
import { useAuth } from "@clerk/nextjs";
import TypewriterComponent from "typewriter-effect";

const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div
      className="text-white font-bold py-36 text-center *:
    space-y-5 md:px-4"
    >
      <div
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl
        space-y-5 font-extrabold"
      >
        <h1>Get the AI experience you deserve with this promising tool</h1>

        <div
          className="text-transparent bg-clip-text
      bg-gradient-to-r from-slate-400 to-zinc-600"
        >
          <TypewriterComponent
            options={{
              strings: ["Conversation.", "Visual.", "Video.", "Bop.", "Code."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
