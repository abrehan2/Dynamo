// IMPORTS -
import LandingHero from "@/components/LandingHero";
import LandingNav from "@/components/LandingNav";

const Root = () => {
  return (
    <>
      <div className="h-full">
        <LandingNav />
        <LandingHero />
      </div>
    </>
  );
};

export default Root;
