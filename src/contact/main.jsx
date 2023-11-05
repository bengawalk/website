import * as React from "react";
import {createRoot} from "react-dom/client";
import Navbar from "../components/navbar";

const DataVizPage = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id')
  return (
    <>
      <Navbar>
        Contact
      </Navbar>
      <div id="page-contents">
        Bengawalk is a journal about life in Bangalore.<br /><br />

        Follow bengawalk on <a href="https://www.instagram.com/bengawalk/" target="_blank">Instagram</a> and <a href="https://twitter.com/bengawalk" target="_blank">Twitter</a>. Subscribe to our youtube channel.<br /><br />

        Get in touch, at <a href="mailto:hello@bengawalk.com">hello@bengawalk.com</a>
      </div>
    </>
  );
};


const root = createRoot(document.getElementById("root"));
root.render(<DataVizPage />);
