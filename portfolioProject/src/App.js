import About from "./components/About";
import Banner from "./components/Banner";
import Experiences from "./components/Experiences";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Work from "./components/Work";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#2f0838] to-[#310E68] overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Experiences />
      <div className="h-[300px]"></div>
    </div>
  );
}

export default App;
