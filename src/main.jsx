import * as React from "react";
import {createRoot} from "react-dom/client";
import Navbar from "./components/navbar";
import {PORTFOLIO_ITEMS} from "./utils/constants";

const PageWrapper = () => {
  return (
    <>
      <Navbar>
        bengawalk
      </Navbar>
      <div id="page-contents">
        <div id="home-list">
          {
            PORTFOLIO_ITEMS.map(item => (
              <a key={item.title} className="home-item" href={item.link} target="_blank">
                <img src={item.image} alt={item.desc} className="home-item-img" />
                <h4 className="home-item-category">{item.category}</h4>
                <p className="home-item-title">{item.title}</p>
              </a>
            ))
          }
        </div>
      </div>
    </>
  );
};


const root = createRoot(document.getElementById("root"));
root.render(<PageWrapper />);
