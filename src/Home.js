import React from "react";
import "./Home.css";
import Banner from "./DropshopBanner.png";
import Product from "./Product";
import Beef from "./beef.png";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={Banner} />
        <div className="home__row">
          <Product
            id="111111111"
            title="Lean Ground Beef"
            price={5.99}
            image={Beef}
            rating={3}
          />
          <Product
            id="111111112"
            title="Ferrero Nutella Hazelnut Spread"
            price={3.29}
            image="https://i5.walmartimages.ca/images/Enlarge/956/598/956598.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="111111113"
            title="Dairyland 10% Half & Half Cereal Cream"
            price={13.99}
            image="https://i5.walmartimages.ca/images/Enlarge/014/800/999999-6870014800.jpg"
            rating={5}
          />
          <Product
            id="111111114"
            title="International Delight Southern Butter Pecan Coffee Whitener"
            price={13.99}
            image=" https://i5.walmartimages.ca/images/Enlarge/102/512/999999-4127102512.jpg"
            rating={2}
          />
          <Product
            id="111111115"
            title="Cheez-It® Hot & Spicy, Baked Snack Crackers"
            price={13.99}
            image="https://i5.walmartimages.ca/images/Enlarge/720/708/6000200720708.jpg"
            rating={0}
          />
        </div>
        <div className="home__row">
          <Product
            id="111111116"
            title="Proscan 32, 720p LED HD TV, PLDED3273A"
            price={13.99}
            image="https://i5.walmartimages.ca/images/Enlarge/083/949/6000202083949.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
