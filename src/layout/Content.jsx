//--------------------|📝 : Imports

import Button from "../components/button";
import ParticlesBackground from "../components/ParticlesBackground";

//--------------------|📝 : Content

function Content() {
  return (
    <main>
      <section className="hero-section">
        <ParticlesBackground />
        <div className="hero-section__text">
          <h1 className="u-title-one">به کد مد خوش اومدی</h1>
          <p className="u-paragraph">تیم کد مد تورو به هدفت می رسونه!</p>
          <Button>شروع</Button>
        </div>
      </section>
    </main>
  );
}

export default Content;
