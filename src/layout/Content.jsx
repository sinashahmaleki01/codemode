//--------------------|📝 : Imports

import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import HeroSection from "../components/HeroSection";
import OurTeam from "../components/OurTeam";

//--------------------|📝 : Content

function Content() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <OurTeam />
      <ContactUs />
    </main>
  );
}

export default Content;
