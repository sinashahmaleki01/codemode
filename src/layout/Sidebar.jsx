//--------------------|📝 : Sidebar

import Navigation from "../components/Navigation";
import SocialBox from "../components/SocialBox";

function Sidebar() {
  return (
    <aside>
      <Navigation />
      <SocialBox />
      <p className="site-version">V 1.0.0</p>
    </aside>
  );
}

export default Sidebar;
