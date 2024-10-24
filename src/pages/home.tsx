import Hero from "../components/hero";
import VideoSection from "../components/videosection";
import Bolt from "../assets/bolt-l.svg";
import Boltr from "../assets/bolt-r.svg";

export default function Home() {
  return (
    <div className="w-full h-3/4 bg-blue pt-80 flex items-center flex-col relative">
      <div>
        <p className="text-white font-extrabold text-9xl">LIKE STEROIDS*</p>
        <p className="text-white font-extrabold text-9xl">FOR BUSINESS</p>
        <p className="text-white font-medium text-xl">
          But it’s 100% legal (pinky promise)
        </p>
      </div>

      <img
        src={Bolt}
        alt="Bolt left"
        className="w-[140]  animate-shake absolute right-[30%] top-[24%]"
      />
      <img
        src={Boltr}
        alt="Bolt right"
        className="w-[100] animate-shake absolute left-[30%] top-[30%]"
      />
      <div className="pt-80">
        <Hero />
      </div>
      <div className="bg-lightgrey w-screen pt-80 flex items-center justify-center">
        <VideoSection />
      </div>
    </div>
  );
}
