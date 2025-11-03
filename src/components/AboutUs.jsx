//--------------------|📝 : Imports

import NoteBox from "./NoteBox";
import SectionHeader from "./SectionHeader";

//--------------------|📝 : AboutUs

function AboutUs() {
  return (
    <section id="about" className="about-us">
      <SectionHeader>درباره ما</SectionHeader>
      <NoteBox />
    </section>
  );
}

export default AboutUs;
