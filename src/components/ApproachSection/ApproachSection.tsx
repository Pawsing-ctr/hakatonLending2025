import "./ApproachSection.css";

const ApproachSection = () => {
  return (
    <section className="approach-section">
      <div className="approach-container">
        {/* Левая часть: Текст */}
        <div className="approach-text-content">
          <h2>Наш Подход К Обедам</h2>

          <div className="approach-description">
            <p>
              Наша миссия — превращать хаос офисных обедов в безупречно
              организованный процесс. Мы создали интуитивно понятную и надёжную
              систему, которая устраняет рутину, ошибки и потерю времени, с
              которыми сталкиваются офис-менеджеры и сотрудники.
            </p>
          </div>

          <button
            onClick={() =>
              (window.location.href = "https://t.me/QuickL4nch_Bot")
            }
            className="approach-btn"
          >
            Начать!
          </button>
        </div>

        {/* Правая часть: Картинка */}
        <div className="approach-image-block">
          {/* ЗАМЕНИТЕ ПУТЬ на реальный файл картинки (человек у доски) */}
          <img
            src="/HumanAroundBord.png"
            alt="Наш подход к организации обедов"
          />
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
