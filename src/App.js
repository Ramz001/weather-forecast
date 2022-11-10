import WeatherContainer from "./components/Weather-Container/Weather-Container.component";

function App() {
  return (
    <div
      className="font-main h-screen bg-gradient-to-tr from-indigo-500 
    to-red-500 flex items-center justify-center"
    >
      <WeatherContainer />
    </div>
  );
}

export default App;
