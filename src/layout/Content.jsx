//--------------------|📝 : Imports

import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import CopyRight from "../components/Copyright";
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
      <CopyRight />
    </main>
  );
}

export default Content;
