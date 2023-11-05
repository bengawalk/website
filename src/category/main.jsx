import * as React from "react";
import {createRoot} from "react-dom/client";
import Navbar from "../components/navbar";
import PageComponent from "../components/page";

const DataVizPage = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id')
  return (
    <>
      <Navbar>
        <span id="header-category">{ id.toLowerCase() }</span>
      </Navbar>
      <PageComponent pageFilter={{ category: id }} />
    </>
  );
};


const root = createRoot(document.getElementById("root"));
root.render(<DataVizPage />);
