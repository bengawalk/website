import * as React from "react";
import { createRoot } from "react-dom/client";
import Map from "./map";
import {useEffect, useState} from "react";

import {BUS_DATA} from "./contants";

import BusItem from "./bus-item";

const TABS = [
  {
    text: "To airport",
    id: "ta"
  },
  {
    text: "From airport",
    id: "fa",
  },
];

const getCurrentMsm = () => Math.floor((new Date() - (new Date()).setHours(0, 0, 0, 0))/60000);

const Container = () => {
  const [selectedTab, setSelectedTab] = useState(TABS[0].id);
  const [selectedBus, setSelectedBus] = useState(null);
  const [currentTime, setCurrentTime] = useState(getCurrentMsm());
  const selectedTabData = selectedTab === "ta" ? BUS_DATA.to : BUS_DATA.from;
  useEffect(() => {
    const secondInterval = setInterval(() => {
      setCurrentTime(getCurrentMsm());
    }, 10000);
    return () => {
      clearInterval(secondInterval);
    }
  }, [setCurrentTime]);
  return (
    <>
      <div id="sidebar">
        <div className="padding" id="sidebar-header">
          <div id="logo-banner" className="mb-1">
            <img src="/assets/bmtc_logo.svg" alt="BMTC logo" id="bmtc-logo" />
            BMTC VAYU VAJRA
          </div>
          <h1 className="mb-4">Bengaluru Airport Bus</h1>
          <div className="tabs">
            {
              TABS.map(t => (
                <div key={t.id} className={`tab-item ${selectedTab === t.id ? "selected" : ""}`} onClick={() => setSelectedTab(t.id)}>
                  {
                    t.text
                  }
                </div>
              ))
            }
          </div>
        </div>
        <div id="sidebar-content">
          <h2 id="sidebar-routes-heading">Routes and Schedules</h2>
          <div id="sidebar-bus-list">
            {
              selectedTabData.map(bus => (
                <BusItem
                  key={bus.name}
                  busDetails={bus}
                  selectedBus={selectedBus}
                  setSelectedBus={setSelectedBus}
                  toAirport={selectedTab === "ta"}
                  currentTime={currentTime}
                />
              ))
            }
          </div>
        </div>
        <div className="padding link text">
          Change my location
        </div>
      </div>
      <Map busData={selectedTabData} />
    </>
  )
}

const root = createRoot(
  document.getElementById('root')
);
root.render(<Container />);