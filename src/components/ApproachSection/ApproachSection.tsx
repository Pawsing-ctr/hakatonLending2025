import "./ApproachSection.css";

const ApproachSection = () => {
  return (
    <section className="approach-section">
      <div className="approach-container">
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

          <a href="https://t.me/quicktest2025max_bot">
            <button className="approach-btn">Заказать!</button>
          </a>
        </div>

        <div className="approach-image-block">
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
