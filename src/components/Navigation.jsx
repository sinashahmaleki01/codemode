//--------------------|📝 : Navigation

const navItems = [
  {
    icon: "../../public/home.webp",
    text: "خانه",
    href: "#home",
  },
  {
    icon: "../../public/about.webp",
    text: "درباره ما",
    href: "#about",
  },
  {
    icon: "../../public/team.webp",
    text: "تیم ما",
    href: "#team",
  },
  {
    icon: "../../public/phone.webp",
    text: "تماس با ما",
    href: "#contact",
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