import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <img className="home-bg" src="images/iteration-1-images/home-banner.png" alt="" />
      
      <div className="home-content">
        <img className="banner-ortala"src="images\iteration-1-images\logo.svg" alt="" />
        <h1>KOD ACIKTIRIR <br/>
            PİZZA, DOYURUR</h1>
        <nav>
          <Link className='button' to="/siparis">ACIKTIM</Link>
        </nav>
      </div>
    </div>
  );
}
export default Home;