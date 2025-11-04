//--------------------|📝 : Imports

import Button from "./Button";
import ParticlesBackground from "../components/ParticlesBackground";

//--------------------|📝 : Content

function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <ParticlesBackground />
      <div className="hero-section__text">
        <h1 className="u-title-one">به کدمد خوش اومدی</h1>
        <p className="u-paragraph">تیم کدمد تورو به هدفت می رسونه!</p>
        <Button>شروع</Button>
      </div>
    </section>
  );
}

export default HeroSection;
