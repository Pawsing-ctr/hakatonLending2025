import "./WhyUsSection.css";
import { featuresData } from "../../data/featuresData";

const WhyUsSection = () => {
  return (
    <section className="why-us-section">
      <div className="why-us-container">
        <div className="why-us-header">
          <div className="title-block">
            <h2>Почему мы?</h2>
          </div>

          <div className="header-text">
            <p>
              Ознакомьтесь с нашими лучшими услугами, которые вы можете заказать
              для развития
            </p>
            <p>вашей компании, и не забудьте обратиться к нам, если вы</p>
            <p> заинтересованы в использовании наших услуг.</p>
          </div>
        </div>

        <div className="features-grid">
          {featuresData.map((item) => (
            <div key={item.id} className="feature-item">
              <div className="icon-circle">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
