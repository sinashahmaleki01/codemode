//--------------------|📝 : Imports

import SectionHeader from "../components/SectionHeader";
import TeamBox from "./TeamBox";

//--------------------|📝 : Our team

function OurTeam() {
    return (
        <section className="our-team">
            <SectionHeader>تیم ما</SectionHeader>
            <TeamBox />
        </section>
    )
}

export default OurTeam;