/*
--------------------|📝 : SocialBox
*/

const socialItems = [
  {
    icon: "/github-22.webp",
    href: "https://github.com/sinashahmaleki01/codemode",
  },
  {
    icon: "/linkedin.webp",
    href: "#",
  },
  {
    icon: "/instagram.webp",
    href: "#",
  },
  {
    icon: "/telegram.webp",
    href: "https://t.me/SinaShahmaleki",
  },
];

function SocialBox() {
  return (
    <div className="social-box">
      <div className="social-box__loader">
        <div className="social-box__cube">
          <div className="social-box__side social-box__side--front">
            <img
              width="10"
              height="10"
              src="/share.webp"
              alt="share"
            />
          </div>
          <div className="social-box__side social-box__side--back">
            <img
              width="10"
              height="10"
              src="/share.webp"
              alt="share"
            />
          </div>
          <div className="social-box__side social-box__side--left">
            <img
              width="10"
              height="10"
              src="/share.webp"
              alt="share"
            />
          </div>
          <div className="social-box__side social-box__side--right">
            <img
              width="10"
              height="10"
              src="/share.webp"
              alt="share"
            />
          </div>
          <div className="social-box__side social-box__side--top">
            <img
              width="10"
              height="10"
              src="/share.webp"
              alt="share"
            />
          </div>
          <div className="social-box__side social-box__side--bottom">
            <img
              width="10"
              height="10"
              src="/share.webp"
              alt="share"
            />
          </div>
        </div>
      </div>
      <ul className="social-box__link-list">
        {socialItems.map((item, index) => (
          <li className="social-box__link" key={index}>
            <a href={item.href}>
              <img src={item.icon} alt="icon" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialBox;
