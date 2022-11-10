import droplet from "../../assets/droplet-solid.svg";
import arrow from "../../assets/location-arrow-solid.svg";
import { motion } from "framer-motion";

const Weather = ({ weatherData }) => {
  const { main, weather, wind, name } = weatherData;

  return (
    <motion.div
      className="flex flex-col text-white w-full h-3/5 p-5 gap-y-1"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 0.5,
        },
      }}
    >
      <article className="text-2xl tracking-widest mb-1">
        Weather in {name}
      </article>
      <article className="font-bold text-5xl">{main.temp}°C</article>
      <article className="font-semibold text-lg flex items-center capitalize">
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
          alt="weather icon"
          className="w-7 h-7"
        />
        {weather[0].description}
      </article>
      <article className="text-sm flex items-center">
        Humidity:
        <img src={droplet} alt="droplet" className="ml-1 w-3 h-3" />
        {main.humidity}%
      </article>
      <article className="text-sm flex items-center">
        Wind Speed:
        <motion.img
          src={arrow}
          alt="arrow"
          className="mx-1 w-4 h-4 transform"
          animate={{ rotate: wind.deg }}
        />
        {wind.speed} km/h
      </article>
    </motion.div>
  );
};

export default Weather;
