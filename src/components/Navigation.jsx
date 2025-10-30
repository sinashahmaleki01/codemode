//--------------------|📝 : Navigation

const navItems = [
  {
    icon: "https://img.icons8.com/fluency-systems-filled/22/d9e1e8/home.png",
    text: "خانه",
    href: "#",
  },
  {
    icon: "https://img.icons8.com/fluency-systems-filled/22/d9e1e8/about.png",
    text: "درباره ما",
    href: "#",
  },
  {
    icon: "https://img.icons8.com/fluency-systems-filled/22/d9e1e8/maintenance.png",
    text: "سرویس",
    href: "#",
  },
  {
    icon: "https://img.icons8.com/fluency-systems-filled/22/d9e1e8/conference-call.png",
    text: "تیم ما",
    href: "#",
  },
  {
    icon: "https://img.icons8.com/fluency-systems-filled/22/d9e1e8/phone-disconnected.png",
    text: "تماس با ما",
    href: "#",
  },
];

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navItems.map((item, index) => (
          <li className="navigation__item" key={index}>
            <a
              href={item.href}
              className="navigation__link"
              data-text={item.text}
            >
              <img src={item.icon} alt="icon" />
            </a>
            <span className="navigation__animation"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;