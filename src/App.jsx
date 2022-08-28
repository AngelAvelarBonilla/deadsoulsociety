import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Music from "./components/music/Music";
import Socials from "./components/socials/Socials";
import About from "./components/about/About";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Home />
        <About />
        <Music />
        <Socials />
      </div>
    </div>
  );
}

export default App;
