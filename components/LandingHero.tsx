"use client";

// IMPORTS -
import { useAuth } from "@clerk/nextjs";

const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div
      className="text-white font-bold py-36 text-center *:
    space-y-5
    "
    >
      <div
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl
        space-y-5 font-extrabold 
        "
      >
        <h1>Get the AI experience you deserve with this promising tool</h1>
      </div>
    </div>
  );
};

export default LandingHero;
