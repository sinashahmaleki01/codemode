//--------------------|📝 : Sidebar

const navItems = [
  { icon: "home-outline", text: "صفحه اصلی", href: "#" },
  { icon: "help-outline", text: "درباره ما", href: "#" },
  { icon: "settings-outline", text: "سرویس", href: "#" },
  { icon: "call-outline", text: "تماس با ما", href: "#" },
];

function Sidebar() {
  return (
    <aside>
      <nav className="navigation">
        <ul className="navigation__list">
          {navItems.map((item, index) => (
            <li className="navigation__item" key={index}>
              <a
                href={item.href}
                className="navigation__link"
                data-text={item.text}
              >
                <ion-icon name={item.icon}></ion-icon>
              </a>
              <span className="navigation__animation"></span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
