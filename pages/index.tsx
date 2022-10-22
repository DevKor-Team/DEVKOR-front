import type { NextPage } from "next";
import Header from "../components/Header";
import VideoViewer from "../components/VideoViewer";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <VideoViewer
        url="videos/LandingPageMain.MP4"
        width="1140px"
        height="588px"
      ></VideoViewer>
    </div>
  );
};

export default Home;
