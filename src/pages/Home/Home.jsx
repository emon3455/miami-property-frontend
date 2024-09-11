import Intro from "./component/Intro";
import OurMission from "./component/OurMission";
import Search from "./component/Search";
import Steps from "./component/Steps";


const Home = () => {
    return (
        <main className="bg-white text-black">
            <Search/>
            <Intro/>
            <Steps/>
            <OurMission/>
        </main>
    );
};

export default Home;