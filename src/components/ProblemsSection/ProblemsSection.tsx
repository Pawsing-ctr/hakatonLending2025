import "./ProblemsSection.css";
import { problemsData } from "../../data/problemData";

const ProblemsSection = () => {
  return (
    <section className="problems-section">
      <div className="problems-container">
        <div className="problems-header">
          <div className="title-block">
            <h2>Проблемы</h2>
          </div>

          <div className="header-description">
            <p>
              Посмотрите, как легко и удобно мы можем организовать питание в
              вашем офисе.
            </p>
            <p>
              Если вас заинтересовало наше предложение, просто свяжитесь с нами.
            </p>
            <p>Давайте сделаем первый шаг к порядку.</p>
          </div>
        </div>

        <div className="cards-grid">
          {problemsData.map((item) => (
            <div key={item.id} className="problem-card">
              <div className="image-wrapper">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
