import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>SHIWANI'S KITCHEN</h1>
          <p>Best Food In whole world</p>
    
          <br></br>
          <h2>GHAR KA KHANA,TASTY KHANA</h2>
          
          <Link to="/menu">
            <button>ORDER NOW</button>
            <br></br>
            <h4>Special discount for students</h4>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
