import * as React from "react";
import { filter, size, intersection, lowerCase } from "lodash";
import {PORTFOLIO_ITEMS} from "../utils/constants";

const getFilteredItems = (f) => {
  const categoryItems = f.category ? filter(PORTFOLIO_ITEMS, (i) => lowerCase(i.category) === f.category) : PORTFOLIO_ITEMS;
  const tagFilter = size(f.tags) > 0 ? filter(categoryItems, c => size(intersection(f.tags, c.tags)) > 0) : categoryItems;
  // console.log(tagFilter);
  return tagFilter;
}

const PageComponent = ({ pageFilter }) => {
  const filteredItems = getFilteredItems(pageFilter);
  return (
    <div id="page-contents">
      <div id="home-list">
        {
          filteredItems.map(item => (
            <a key={item.title} className="home-item" href={item.link} target="_blank">
              <img src={item.image} alt={item.desc} className="home-item-img" />
              <h4 className="home-item-category">{item.category}</h4>
              <p className="home-item-title">{item.title}</p>
            </a>
          ))
        }
      </div>
    </div>
  );
};

export default PageComponent;
