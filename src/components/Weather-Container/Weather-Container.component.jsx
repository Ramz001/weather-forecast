import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Search from "../Search/Search.component";
import Weather from "../Weather/Weather.component";

import { motion } from "framer-motion";
import { containerVarients } from "../../utils/animations.library";

const WeatherContainer = () => {
  const [inputText, setInputText] = useState("");
  const [location, setLocation] = useState([{ lat: "", lon: "" }]);
  const [weatherData, setWeatherData] = useState({});
  const { i18n } = useTranslation();

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location[0].lat}&lon=${location[0].lon}&appid=96cbb304c0fabab0f4349a4c129313f8&units=metric&lang=${i18n.language}`;
  const geoCode = `http://api.openweathermap.org/geo/1.0/direct?q=${inputText}&appid=96cbb304c0fabab0f4349a4c129313f8`;
  console.log(i18n.language);
  const findGeoCode = async () => {
    const response = await fetch(geoCode);
    const data = await response.json();
    return setLocation([{ lat: data[0].lat, lon: data[0].lon }]);
  };

  const fetchWeatherData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return setWeatherData(data);
  };

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      return findGeoCode();
    }
  };

  useEffect(() => {
    if (location[0].lat && location[0].lon) {
      fetchWeatherData();
    }
  }, [location]);

  return (
    <motion.div
      className="flex flex-col items-center w-96 lg:w-[32rem] bg-black/25 rounded-2xl mx-4 lg:mx-0"
      variants={containerVarients}
      animate={location[0].lat ? "open" : "closed"}
      initial="hidden"
      exit="exit"
    >
      <Search
        inputText={inputText}
        setInputText={setInputText}
        searchLocation={searchLocation}
        location={location}
      />
      {weatherData.name && <Weather weatherData={weatherData} />}
    </motion.div>
  );
};

export default WeatherContainer;
