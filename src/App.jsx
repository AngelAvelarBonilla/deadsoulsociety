import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Music from "./components/music/Music";
import Socials from "./components/socials/Socials";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Home />
        <Music />
        <Socials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
