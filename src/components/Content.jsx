//--------------------|📝 : Imports

import Button from "./button";
import ParticlesBackground from "./ParticlesBackground";

//--------------------|📝 : Content

function Content() {
  return (
    <main>
      <section class="hero-section">
        <ParticlesBackground />
        <div class="hero-section__text">
          <h1 class="u-title-one">به کد مد خوش اومدی</h1>
          <p class="u-paragraph">تیم کد مد تورو به هدفت می رسونه!</p>
          <Button>شروع</Button>
        </div>
      </section>
    </main>
  );
}

export default Content;
