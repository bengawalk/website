import * as React from "react";
import {useState} from "react";
import { filter, includes, some, toLower } from "lodash";
import {PORTFOLIO_ITEMS} from "../utils/constants";

const Navbar = ({ children }) => {
  const [open, setOpen]  = useState(false);
  const [searchText, setSearchText] = useState("");
  const searchItems = filter(PORTFOLIO_ITEMS, i => some([i.link, i.title, i.category, i.description], st => includes(st, toLower(searchText)) || includes(toLower(st), toLower(searchText))));
  return (
    <>
      <div id="navbar">
        <button className="nav-button" onClick={() => setOpen(!open)}>
          <span className="material-icons">
            menu
          </span>
        </button>
        <div id="nav-text">
          { children }
        </div>
      </div>
      {
        open && (
          <div id="side-menu">
            {
              !searchText && (
                <button className="nav-button" onClick={() => setOpen(!open)}>
                  <span className="material-icons">
                    close
                  </span>
                </button>
              )
            }
            <div id="sidebar-search-padding">
              <div id="sidebar-search">
                {
                  searchText && (
                    <span className="material-icons search-back" onClick={() => setSearchText("")}>
                      arrow_back_ios
                    </span>
                  )
                }
                <input placeholder="Search" id="search-input" value={searchText} onChange={e => setSearchText(e.target.value)} />
                <span className="material-icons">
                  search
                </span>
              </div>
            </div>
            {
              searchText ? (
                <div className="sidebar-padding sidemenu-overflow">
                  {
                    searchItems.length === 0 ? (
                      <p className="no-results">No results found</p>
                    ) : searchItems.map(item => (
                      <a key={item.title} className="home-item" href={item.link}>
                        <img src={item.image} alt={item.desc} className="home-item-img" />
                        <h4 className="home-item-category">{item.category}</h4>
                        <p className="home-item-title">{item.title}</p>
                      </a>
                    ))
                  }
                </div>
              ) : (
                <div className="sidebar-padding sidemenu-overflow">
                  <div id="sidebar-list">
                    <a href="/">All</a>
                    <a href="/category/?id=tools">Tools</a>
                    <a href="/category/?id=data%20viz">Data viz</a>
                    <a href="/category/?id=films">Films</a>
                    <a href="/category/?id=av%20library">AV library</a>
                    <a href="/category/?id=maps">Maps</a>
                    <a href="/contact/">Contact</a>
                  </div>
                </div>
              )
            }
          </div>
        )
      }
    </>
  );
}

export default Navbar;
