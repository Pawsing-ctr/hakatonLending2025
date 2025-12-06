import "./TopSide.css";

const TopSide = () => {
  return (
    <main className="quick-lunch-landing">
      <section className="hero-section">
        <div className="content-container">
          <header className="logo">QuickLunch</header>

          <div className="text-content">
            <h1>Сотрудники тратят время на заказы вместо работы?</h1>
            <p className="subtitle">
              Да, и мы знаем, как вернуть им это время, а вам — порядок!
            </p>

            <p className="description">
              Никакого хаоса: заказы обедов для офиса просто и централизованно.{" "}
              <br /> Обеды в офисе без хаоса: все заказы — в одном
              Telegram-боте.
            </p>

            <button
              onClick={() => (window.location.href = "#functional")}
              className="cta-button"
            >
              Узнать больше
            </button>
          </div>
          <div className="stats-block">
            <div className="stat-item">
              <div>
                <span className="value">100</span>
                <span className="plus-text">+</span>
              </div>

              <span className="label">Довольных Клиентов</span>
            </div>
            <div className="stat-item">
              <div>
                <span className="value">500</span>
                <span className="plus-text">+</span>
              </div>

              <span className="label">Спасённых Часов</span>
            </div>
            <div className="stat-item">
              <div>
                <span className="value">10</span>
                <span className="plus-text">+</span>
              </div>

              <span className="label">Безупречность и Лидерство</span>
            </div>
          </div>
        </div>

        <div className="visual-and-mission-block">
          <div className="mission-block">
            <div className="mission-logo">QuickLunch</div>
            <div className="text-side-block">
              <p>Наша главная задача — обеспечить</p>
              <p>cотрудников вкусными, своевременными</p>
              <p>обедами и снять с вас все организационные</p>
              <p>хлопоты. Ваше удобство — наш приоритет.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TopSide;
