import WeatherContainer from "./components/Weather-Container/Weather-Container.component";
import Navbar from "./components/Navbar/Navbar.component";

function App() {
  return (
    <div
      className="font-main h-screen bg-gradient-to-tr from-indigo-500 
    to-red-500 flex flex-col items-center justify-center"
    >
      <Navbar/>
      <WeatherContainer  />
    </div>
  );
}

export default App;
