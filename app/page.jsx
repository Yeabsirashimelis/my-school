import HighAchievers from "@/components/HIghAchievers";
import HomeMainParts from "@/components/HomeMainParts";
import HomeMission from "@/components/HomeMission";
import HomeTopPhoto from "@/components/HomeTopPhoto";
import Levels from "@/components/Levels";
import Welcome from "@/components/Welcome";
import NewsAndEventsForHome from "@/components/NewsAndEventsForHome";
import Gallery from "@/components/Gallery";

function HomePage() {
  return (
    <div className="space-y-12 ">
      <HomeTopPhoto />
      <Welcome />
      <HomeMainParts />
      <Levels />
      <HomeMission />
      <NewsAndEventsForHome />
      <Gallery />
    </div>
  );
}

export default HomePage;
