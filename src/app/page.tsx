import Banner from "./components/Banner";
import AboutSection from "./components/AboutSection";
import Sidebar from "./components/Sidebar";
import CoreValues from "./components/CoreValues";
import Tabs from "./components/Tabs";
import JoinOurTeam from "./components/JoinOurTeam";
import Benefits from "./components/Benefits";
import OurJobOpenings from "./components/OurJobOpenings";
import StayInTouch from "./components/StayInTouch";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="w-full pt-16 ">
        <Tabs />
      </div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8 px-6 mt-10">
        <div className="lg:col-span-2">
          <AboutSection />
        </div>
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
      </div>
      <CoreValues />
      <JoinOurTeam />
      <Benefits />
      <OurJobOpenings />
      <StayInTouch/>
    </div>
  );
}
