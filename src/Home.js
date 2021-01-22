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
            rating={5}
          />
          <Product
            id="111111112"
            title="kofta kebob from Bomyiyaan kebob, try this shit out man"
            price={13.99}
            image=" https://lh3.googleusercontent.com/proxy/tCtR8K8xZs5MbL1lJ4vGT9xAg31ESvhKBwHjiSjdn_arqC7FgPDCCLkqSRq_FdlU__D8butPTlsNDXPZaZ1q4ZqyDfa42SpAqnV9dTBP"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="111111113"
            title="kofta kebob from Bomyiyaan kebob, try this shit out man"
            price={13.99}
            image=" https://lh3.googleusercontent.com/proxy/tCtR8K8xZs5MbL1lJ4vGT9xAg31ESvhKBwHjiSjdn_arqC7FgPDCCLkqSRq_FdlU__D8butPTlsNDXPZaZ1q4ZqyDfa42SpAqnV9dTBP"
            rating={5}
          />
          <Product
            id="111111114"
            title="kofta kebob from Bomyiyaan kebob, try this shit out man"
            price={13.99}
            image=" https://lh3.googleusercontent.com/proxy/tCtR8K8xZs5MbL1lJ4vGT9xAg31ESvhKBwHjiSjdn_arqC7FgPDCCLkqSRq_FdlU__D8butPTlsNDXPZaZ1q4ZqyDfa42SpAqnV9dTBP"
            rating={5}
          />
          <Product
            id="111111115"
            title="kofta kebob from Bomyiyaan kebob, try this shit out man"
            price={13.99}
            image=" https://lh3.googleusercontent.com/proxy/tCtR8K8xZs5MbL1lJ4vGT9xAg31ESvhKBwHjiSjdn_arqC7FgPDCCLkqSRq_FdlU__D8butPTlsNDXPZaZ1q4ZqyDfa42SpAqnV9dTBP"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="111111116"
            title="kofta kebob from Bomyiyaan kebob, try this shit out man"
            price={13.99}
            image=" https://lh3.googleusercontent.com/proxy/tCtR8K8xZs5MbL1lJ4vGT9xAg31ESvhKBwHjiSjdn_arqC7FgPDCCLkqSRq_FdlU__D8butPTlsNDXPZaZ1q4ZqyDfa42SpAqnV9dTBP"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
