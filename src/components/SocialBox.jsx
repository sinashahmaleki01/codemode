/*
--------------------|📝 : SocialBox
*/

const socialItems = [
  {
    icon: "https://img.icons8.com/fluency-systems-filled/22/282c37/github.png",
    href: "#",
  },
  {
    icon: "https://img.icons8.com/fluency-systems-filled/22/282c37/linkedin.png",
    href: "#",
  },
  {
    icon: "https://img.icons8.com/fluency-systems-filled/22/282c37/instagram-new.png",
    href: "#",
  },
  {
    icon: "https://img.icons8.com/fluency-systems-filled/22/282c37/telegram-app.png",
    href: "#",
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
              src="https://img.icons8.com/fluency-systems-filled/10/282c37/share.png"
              alt="share"
            />
          </div>
          <div className="social-box__side social-box__side--back">
            <img
              width="10"
              height="10"
              src="https://img.icons8.com/fluency-systems-filled/10/282c37/share.png"
              alt="share"
            />
          </div>
          <div className="social-box__side social-box__side--left">
            <img
              width="10"
              height="10"
              src="https://img.icons8.com/fluency-systems-filled/10/282c37/share.png"
              alt="share"
            />
          </div>
          <div className="social-box__side social-box__side--right">
            <img
              width="10"
              height="10"
              src="https://img.icons8.com/fluency-systems-filled/10/282c37/share.png"
              alt="share"
            />
          </div>
          <div className="social-box__side social-box__side--top">
            <img
              width="10"
              height="10"
              src="https://img.icons8.com/fluency-systems-filled/10/282c37/share.png"
              alt="share"
            />
          </div>
          <div className="social-box__side social-box__side--bottom">
            <img
              width="10"
              height="10"
              src="https://img.icons8.com/fluency-systems-filled/10/282c37/share.png"
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
