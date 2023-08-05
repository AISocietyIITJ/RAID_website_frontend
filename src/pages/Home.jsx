import Navbar from "../Navbar";
import "../styles/home.css"

const Home=() =>{
    return(
    <div>
        <Navbar />
        <div className="home_content">
        <h1>This is the home page</h1>
        <div className="logo_3"></div>
        </div>
    </div>
    );
}

export default Home   