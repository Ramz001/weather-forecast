import Search from "../Search/Search.component";
import Weather from "../Weather/Weather.component";
import { useState, useEffect } from "react";

const WeatherContainer = () => {
  const [inputText, setInputText] = useState("");
  const [location, setLocation] = useState([{ lat: "", lon: "" }]);
  const [weatherData, setWeatherData] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location[0].lat}&lon=${location[0].lon}&appid=96cbb304c0fabab0f4349a4c129313f8&units=metric`;
  const geoCode = `http://api.openweathermap.org/geo/1.0/direct?q=${inputText}&appid=96cbb304c0fabab0f4349a4c129313f8`;

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

  useEffect(() => {
    if (location[0].lat && location[0].lon) {
      fetchWeatherData();
    }
  },[location])

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      return findGeoCode();
    }
  };

  return (
    <div
      className="flex flex-col items-center w-[32rem] h-72 backdrop-blur-md
    bg-black/25 rounded-2xl mx-4 lg:mx-0"
    >
      <Search
        inputText={inputText}
        setInputText={setInputText}
        searchLocation={searchLocation}
      />
      {weatherData.name && <Weather weatherData={weatherData} />}
    </div>
  );
};

export default WeatherContainer;
