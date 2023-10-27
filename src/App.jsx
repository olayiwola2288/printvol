import styles from "../src/Hero/Hero.module.css";
import Hero from "./Hero/Hero";
import HeroBody from "./Hero/HeroBody";
import HeroCarosel from "./Hero/HeroCarosel";
import Card from "./component/Card/Card";
import Custormer from "./component/custormer/Custormer";
import NavBar from "./component/NavBar";

function App() {
  return (
    <div className={styles.body}>
      <NavBar />
      <Hero />
      <HeroBody />
      <HeroCarosel />
      <Card />
      <Custormer />
    </div>
  );
}

export default App;
