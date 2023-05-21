import { useEffect } from "react";
import AtaGlance from "../AtaGlance/AtaGlance";
import Gallery from "../Gallery/Gallery";
import Homebanner from "../Homebanner/Homebanner";
import OurMission from "../OurMission/OurMission";
import TabView from "../TabView/TabView";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="min-h-screen ">
      <div className="-z-10 fixed bg-sky-300 [filter:blur(120px)] w-[200px] h-[200px]"></div>
      <div className="-z-10 fixed  right-10 bg-lime-300 [filter:blur(120px)] w-[200px] h-[200px]"></div>
      <div className="-z-10 fixed bottom-0 left-11 bg-pink-300 [filter:blur(120px)] w-[400px] h-[200px]"></div>
      <div className="-z-10 fixed bottom-0 right-11 bg-yellow-200 [filter:blur(120px)] w-[400px] h-[200px]"></div>

      <div data-aos="zoom-in-left" data-aos-duration="1500">
        <Homebanner />
      </div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <Gallery />
      </div>
      <div data-aos="fade-down-left" data-aos-duration="2000">
        <TabView />
      </div>
      <div data-aos="zoom-in" data-aos-duration="2000">
        <OurMission />
      </div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <AtaGlance />
      </div>
    </main>
  );
}

export default Home;
