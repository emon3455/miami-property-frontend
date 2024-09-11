import { Outlet} from "react-router-dom";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";

const Main = () => {

    return (
        <main className="bg-white text-black">

            <NavBar />

            <Outlet />

            <Footer />

        </main>
    );
};

export default Main;