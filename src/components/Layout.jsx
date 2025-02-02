import { useContext } from "react";
import AboutCard from "../components/Card/AboutCard";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Intro from "../components/Intro/Intro";
import Navbar from "../components/Navbar/Navbar";
import Portfolio from "../components/Portfolio/Portfolio";
import Services from "../components/Services/Services";
import Works from "../components/Works/Works";
import { themeContext } from "../Context";
function Layout() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
    >
      <Navbar />
      <Intro />
      <Services />
      <AboutCard />
      <Works />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;
