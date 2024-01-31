import Nvbar from "../components/Nvbar";
import Herocontent from "../components/Herocontent";
import Herosecimg from "../components/Herosecimg";

const Home = () => {
  return (
    <>
      <Nvbar></Nvbar>
      <div className="flex flex-wrap w-full justify-around  bg-slate-400 h-screen pt-8 ">
        <Herocontent></Herocontent>

        <Herosecimg></Herosecimg>
      </div>
    </>
  );
};

export default Home;
