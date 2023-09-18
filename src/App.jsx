import "./App.css";
import Hero from "./Hero/Hero";
import HeroBody from "./Hero/HeroBody";
import HeroCarosel from "./Hero/HeroCarosel";
import Card from "./component/Card/Card";
import Custormer from "./component/custormer/Custormer";
import NavBar from "./component/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <HeroBody />
      <HeroCarosel />
      <Card />
      <Custormer />
    </>
  );
}

export default App;
