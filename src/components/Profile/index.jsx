import ImgGitHub from "./assets/logo-github.svg";
import ImgInstagram from "./assets/logo-instagram.svg";
import ImgLinkedIn from "./assets/logo-linkedin.svg";

import "./style.css";

export default function Profile({mode}) {
  const element = [
    {
      element: "Instagram",
      src: "https://www.instagram.com/msaldanha.yellowbagedu?igsh=MXVpZHF1ZWZoOTA0aw=="
    },
    {
      element: "GitHub",
      src: "https://github.com/marcelosfilho13",
    },
    {
      element: "LinkedIn",
      src: "https://www.linkedin.com/in/marcelo-saldanha-yellowbag?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      element: "Fundador da YellowBag",
      src: "https://www.instagram.com/p/DMIfDZusvP5/?igsh=b2hkbWY4ZXBpdm45"
    }
  ];
  const color = mode ? 'var(--orange)' : 'var(--blue)';

  return (
    <>
      <main>
        <ul
        className="links-list"
        >
          {
            element.map((item, index) => {
              return (
                <li
                  key={index}
                  className="link-item"
                  style={{background: color}}
                >
                  <a href={item.src}  target="_blank" rel="noopener noreferrer">
                    {item.element}
                  </a>
                </li>
              )
            })
          }
        </ul>
        <ul className="social-media">
          <li>
            <a href="https://github.com/Marcelofilho97" target="_blank" rel="noopener noreferrer">
              <img src={ImgGitHub} alt="Logo GitHub" />
            </a>
            <a href="https://www.instagram.com/msaldanha.yellowbagedu?igsh=MXVpZHF1ZWZoOTA0aw==" target="_blank" rel="noopener noreferrer">
              <img src={ImgInstagram} alt="Logo Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/marcelo-saldanha-yellowbag?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <img src={ImgLinkedIn} alt="Logo LinkeDin" />
            </a>
          </li>
        </ul>
      </main>
      <footer>
        <span>“Coragem!” - Pde. Carlo Paris</span>
      </footer>
    </>
  )
}

