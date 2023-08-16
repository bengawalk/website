import ThumbnailAlignment from "../assets/img/alignment-100.webp";
import ThumbnailBwssb from "../assets/img/bwssb-100.webp";
import ThumbnailCricket from "../assets/img/cricket-100.webp";
import ThumbnailDelimitation from "../assets/img/delimitation-100.webp";
import ThumbnailElections from "../assets/img/elections-100.webp";
import ThumbnailFeeder from "../assets/img/feeder-100.webp";
import ThumbnailFlyovers from "../assets/img/flyovers-100.webp";
import ThumbnailGazeteer from "../assets/img/gazeteer-100.webp";
import ThumbnailHeatmap from "../assets/img/heatmap-100.webp";
import ThumbnailHebbal from "../assets/img/hebbal-100.webp";
import ThumbnailHistoric from "../assets/img/historic-100.webp";
import ThumbnailK100 from "../assets/img/k100-100.webp";
import ThumbnailKia from "../assets/img/kia-100.webp";
import ThumbnailLakes from "../assets/img/lakes-100.webp";
import ThumbnailMajestic from "../assets/img/majestic-100.webp";
import ThumbnailMetabolism from "../assets/img/metabolism-100.webp";
import ThumbnailMilitary from "../assets/img/military-100.webp";
import ThumbnailPurgunna from "../assets/img/purgunna-100.webp";
import ThumbnailRiverSystems from "../assets/img/river_systems-100.webp";
import ThumbnailSpeculative from "../assets/img/speculative-100.webp";
import ThumbnailSwd from "../assets/img/swd-100.webp";
import ThumbnailTopographic from "../assets/img/topographic-100.webp";
import ThumbnailTopographicCity from "../assets/img/topographic_city-100.webp";
import ThumbnailWater from "../assets/img/water-100.webp";

export const CATEGORIES = {
  TOOLS: "TOOLS",
  DATA_VIZ: "DATA VIZ",
  FILMS: "FILMS",
  AV_LIBRARY: "AV LIBRARY",
  MAPS: "MAPS",

};

export const PORTFOLIO_ITEMS = [
  // Tools
  {
    image: ThumbnailKia,
    link: "https://kia.bengawalk.com/",
    title: "Bengaluru Airport Bus Routes and Schedule",
    desc: "All of the airport bus routes in one place. Please note that there may be variations in both routes shown and schedule timings - in case its your first time please call the BMTC helpline , they’re very responsive, and cross check timings on the official website.",
    category: CATEGORIES.TOOLS,
    tags: [],
  },
  {
    image: ThumbnailElections,
    link: "https://2023elections.bengawalk.com/",
    title: "Voter Guide for 2023 State Assembly Elections",
    desc: "Details about the incumbent MLA and contesting candidates, for the 28 assembly constituencies in Bengaluru Urban District. ",
    category: CATEGORIES.TOOLS,
    tags: [],
  },

  // Data Viz
  {
    image: ThumbnailFlyovers,
    link: "https://viz.bengawalk.com/blr-flyovers/",
    title: "All the flyovers of Bengaluru",
    desc: "",
    category: CATEGORIES.DATA_VIZ,
    tags: [],
  },
  {
    image: ThumbnailFeeder,
    link: "https://viz.bengawalk.com/blr-metro-feeder/",
    title: "Metro feeder bus route concept",
    desc: "Small buses running in loops on both sides of each metro station could provide 40% of the city with access to affordable public transport. Concept by Mr. Rajkumar Dugar, C4C",
    category: CATEGORIES.DATA_VIZ,
    tags: [],
  },
  {
    image: ThumbnailHeatmap,
    link: "https://viz.bengawalk.com/bmtc-trips-heatmap/",
    title: "Heatmap of all BMTC trips",
    desc: "Data is from 2013 and not exhaustive. More details here.",
    category: CATEGORIES.DATA_VIZ,
    tags: [],
  },

  // Films
  {
    image: ThumbnailK100,
    link: "https://youtu.be/MGdEpDhEA2U",
    title: "K100 Citizen's Waterway | ಬೆಂಗಳೂರಿನ ನಾಗರಿಕರ ಜಲಮಾರ್ಗ",
    desc: "The story of and the people behind the revival of the K100 waterway.",
    category: CATEGORIES.FILMS,
    tags: [],
  },
  {
    image: ThumbnailLakes,
    link: "https://youtu.be/4UD_9cHFbFI",
    title: "The Secret Life of Bengaluru's Lakes, 2022",
    desc: "Our city has 210 lakes. Some are amazing ecosystems, some are toxic wastelands, and most lie somewhere in middle. This is everything you need to know about the lakes of Bengaluru.",
    category: CATEGORIES.FILMS,
    tags: [],
  },
  {
    image: ThumbnailWater,
    link: "https://youtu.be/sleuNcnM_ms",
    title: "The True Cost of Water, 2022",
    desc: "",
    category: CATEGORIES.FILMS,
    tags: [],
  },

  // AV library
  {
    image: ThumbnailMajestic,
    link: "https://www.youtube.com/watch?v=XhG8RZe99Gs",
    title: "Majestic Majestic, 2002",
    desc: "",
    category: CATEGORIES.AV_LIBRARY,
    tags: [],
  },
  {
    image: ThumbnailCricket,
    link: "https://www.youtube.com/watch?v=biWCbIcvd9g",
    title: "India West Indies Test Cricket Match, Bangalore, 1974",
    desc: "",
    category: CATEGORIES.AV_LIBRARY,
    tags: [],
  },
  {
    image: ThumbnailHebbal,
    link: "https://www.youtube.com/watch?v=7OMT8T4a3-E",
    title: "Hebbal Flyover, 2014",
    desc: "",
    category: CATEGORIES.AV_LIBRARY,
    tags: [],
  },

  // Maps
  {
    image: ThumbnailPurgunna,
    link: "https://upload.wikimedia.org/wikipedia/commons/6/66/Survey_of_the_boundaries_of_Purgunna_of_Bangalore_(1800).png",
    title: "Survey of the boundaries of Purgunna of Bangalore, 1800",
    desc: "",
    category: CATEGORIES.MAPS,
    tags: [],
  },
  {
    image: ThumbnailMilitary,
    link: "https://1drv.ms/u/s!AlO9g_q7PQFbgushyv3eJgpBwpuNnw?e=0gLKHB",
    title: "Bangalore Civil and Military Stations, 1937*",
    desc: "There is some confusion about the exact date of publication of this map. ",
    category: CATEGORIES.MAPS,
    tags: [],
  },
  {
    image: ThumbnailRiverSystems,
    link: "https://commons.wikimedia.org/wiki/File:1886_River_System_of_South_India.jpg",
    title: "The River Systems of South India, 1886",
    desc: "Featuring Bangalore, Rivers Ponnaiyar and Cauvery",
    category: CATEGORIES.MAPS,
    tags: [],
  },
  {
    image: ThumbnailHistoric,
    link: "https://gubbilabs.in/bengaluruscape/maps",
    title: "Historical Maps of Bengaluru, Gubbi Labs 2015",
    desc: "Multiple historical maps of the city overlaid on each other and satellite imagery.",
    category: CATEGORIES.MAPS,
    tags: [],
  },
  {
    image: ThumbnailTopographic,
    link: "https://maps.lib.utexas.edu/maps/ams/india/",
    title: "Topographic Map of Bangalore, US AMS, 1955",
    desc: "",
    category: CATEGORIES.MAPS,
    tags: [],
  },
  {
    image: ThumbnailSwd,
    link: "https://www.oneindia.com/img/BBMP-Rajakaluve-map.jpg",
    title: "Major Storm Water Drains of Bengaluru, BBMP, 2014",
    desc: "",
    category: CATEGORIES.MAPS,
    tags: [],
  },
  {
    image: ThumbnailGazeteer,
    link: "",
    title: "Map of Bangalore Urban District, 1991",
    desc: "Taken from the Bangalore Urban District Gazeteer",
    category: CATEGORIES.MAPS,
    tags: [],
  },


  {
    image: ThumbnailTopographicCity,
    link: "https://en-gb.topographic-map.com/maps/lpj1/Bengaluru/",
    title: "Topographic Map of Bengaluru city",
    desc: "",
    category: CATEGORIES.MAPS,
    tags: [],
  },
  {
    image: ThumbnailMetabolism,
    link: "http://bangalore.urbanmetabolism.asia/geoportal/",
    title: "Bangalore Urban Metabolism Project, 2012",
    desc: "Multiple datasets of the city hosted in one place online, creative commons license. ",
    category: CATEGORIES.MAPS,
    tags: [],
  },
  {
    image: ThumbnailBwssb,
    link: "http://stpp.bwssb.gov.in/",
    title: "BWSSB STP Dashboard",
    desc: "",
    category: CATEGORIES.MAPS,
    tags: [],
  },
  {
    image: ThumbnailDelimitation,
    link: "https://data.opencity.in/dataset/bbmp-ward-information/resource/bbmp-ward-map---2022",
    title: "Bengaluru Delimited Wards, 243 Wards, BBMP, 2022",
    desc: "",
    category: CATEGORIES.MAPS,
    tags: [],
  },
  {
    image: ThumbnailAlignment,
    link: "https://maps.app.goo.gl/mjijiaPFB3LFgcHi9?g_st=ic",
    title: "PRR and KRDCL roads alignment, 2021",
    desc: "",
    category: CATEGORIES.MAPS,
    tags: [],
  },
  {
    image: ThumbnailSpeculative,
    link: "https://twitter.com/theotherspica/status/1353031079318306816?s=20",
    title: "Speculative Rail and Metro map, Bengaluru",
    desc: "",
    category: CATEGORIES.MAPS,
    tags: [],
  },
];







