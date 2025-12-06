import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col footer-info">
          <p className="footer-quote">
            Мы не просто "представляем". Мы предлагаем вам сделать первый шаг к
            порядку.
          </p>
          <div className="footer-logo-block">
            <div className="telegram-icon-wrapper">
              <img src="/TelegramIcon.png" alt="" />
            </div>
            <span className="footer-brand-name">QuickLunch</span>
          </div>
        </div>

        <div className="footer-col footer-links company-links">
          <h3>Компания</h3>
          <div className="link-divider"></div>
          <ul>
            <li>
              <a href="#policy">Политика</a>
            </li>
            <li>
              <a href="#contacts">Контакты</a>
            </li>
          </ul>
        </div>

        <div className="footer-col footer-links navigation-links">
          <h3>Навигация</h3>
          <div className="link-divider"></div>
          <ul>
            <li>
              <a href="#main">Главная</a>
            </li>
            <li>
              <a href="#problems">Проблемы</a>
            </li>
            <li>
              <a href="#why-us">Почему именно мы?</a>
            </li>
            <li>
              <a href="#approach">Давайте начнём!</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
