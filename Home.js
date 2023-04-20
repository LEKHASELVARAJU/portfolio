import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/home.jpg";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Hi I'm ANUVARSHINI </h1>
        <p>A Second Year Engineering Student
        </p>
        <Link to="/menu">
          <button> READ MORE </button>
        </Link>
      </div>
    </div>
  );
}
export default Home;