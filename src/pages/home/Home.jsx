import './Home.css'
import logo from "/src/assets/logo.svg"
import Navigation from "../../components/navigation/Navigation.jsx";
import Overview from "../../components/overview/Overview.jsx";

function Home() {
    return (
        <>
            <div className="main-container">
                <div className="nav-container">
                    <Navigation />
                </div>
                <div className="content-container">
                    <Overview />
                </div>
            </div>
        </>
    )
}

export default Home;