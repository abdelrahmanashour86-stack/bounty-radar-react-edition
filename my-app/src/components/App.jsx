import React, { useState, useEffect, useMemo } from "react";
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

import Nav from "./Nav";
import Radar from "./Radar";
import Owasp from "./Owasp";
import Hero from "./Hero";
import Error from "./Error";
import Disclosures from "./Disclosures";

const App = () => {
  const [news, setNews] = useState({ news: [], loaded: false });
  const [owasp, setOwasp] = useState({ owasp: [], loaded: false });
  const [disclosures, setDisclosures] = useState({
    disclosures: [],
    loaded: false,
  });
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("dark") === "true";
  });
  const theme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
  };
  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("dark", dark);
  }, [dark]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.feedburner.com%2FTheHackersNews",
        );
        setNews({ news: data.data.items, loaded: true });
      } catch (e) {
        setNews((prev) => ({ ...prev, loaded: true }));
      }

      try {
        const owaspData = await axios.get("./owasp_top_10_2021.json");
        setOwasp({ owasp: owaspData.data, loaded: true });
      } catch (e) {
        setOwasp((prev) => ({ ...prev, loaded: true }));
      }
      try {
        const latestDisclosures = await axios.get(
          "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Ftag%2Fbug-bounty"
        );
        setDisclosures({ disclosures: latestDisclosures.data.items, loaded: true });
      } catch (e) {
        setDisclosures((prev) => ({ ...prev, loaded: true }));
      }
      try {
      } catch (e) {}
    };
    fetchData();
  }, []);
  

  return (
    <BrowserRouter>
      <div className="theme bg-[var(--color-bg-color)] dark:bg-[#160404] text-[var(--color-text-color)] min-h-screen transition-colors duration-300">
        
        <Nav dark={dark} theme={theme} />
        
        <div className="p-1">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/home" element={<Hero />} />
            <Route
              path="/owasp"
              element={<Owasp owasp={owasp.owasp} loaded={owasp.loaded} />}
            />
            <Route
              path="/radar"
              element={<Radar news={news.news} load={news.loaded} />}
            />
            <Route 
              path="/disclosures" 
              element={<Disclosures disclosures={disclosures.disclosures} load={disclosures.loaded}/>}
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
      
      <ToastContainer theme={dark ? "dark" : "light"} />
    </BrowserRouter>
  );
};

export default App;
