import { useState } from "react";
import "./FunctionalSection.css";
import { menuItems, officeList } from "../../data/menuItems";

const FunctionalSection = () => {
  const [step, setStep] = useState(0);
  const [selectedOfficeId, setSelectedOfficeId] = useState<number | null>(null);
  const [cart, setCart] = useState<number[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const currentMenu =
    menuItems.find((menu) => menu.officeId === selectedOfficeId)?.items || [];

  const handleStartOrder = () => {
    if (step === 0) {
      setStep(1);
    }
  };

  const handleSelectOffice = (id: number) => {
    if (selectedOfficeId === id) {
      setSelectedOfficeId(null);
      setStep(1);
      setCart([]);
      setTotalPrice(0);
    } else {
      setSelectedOfficeId(id);
      setStep(2);
      setCart([]);
      setTotalPrice(0);
    }
  };

  const toggleDish = (id: number, price: number) => {
    if (cart.includes(id)) {
      setCart(cart.filter((itemId) => itemId !== id));
      setTotalPrice((prev) => prev - price);
    } else {
      setCart([...cart, id]);
      setTotalPrice((prev) => prev + price);
    }
  };

  return (
    <section className="functional-section">
      <div className="functional-container">
        <h2 className="section-title">Как это работает?</h2>
        <p className="section-subtitle">
          Сделайте заказ за 3 простых шага прямо здесь
        </p>

        <div className="func-row">
          <div className="interactive-side">
            <button
              className={`demo-btn start-btn ${step > 0 ? "active" : ""}`}
              onClick={handleStartOrder}
            >
              <span>Создать заказ</span>
              {step > 0 && <span className="checkmark">✔</span>}
            </button>
          </div>
          <div className="text-side">
            <h3>1. Начните в один клик</h3>
            <p>
              Вам не нужно скачивать приложения. Просто нажмите кнопку в
              Telegram-боте, и система сама распознает вас и ваш офис.
            </p>
          </div>
        </div>

        <div className={`connector-line ${step >= 1 ? "visible" : ""}`}></div>

        <div className={`func-row ${step >= 1 ? "visible" : ""}`}>
          <div className="interactive-side col-mode">
            {officeList.map((office) => (
              <button
                key={office.id}
                className={`demo-btn restaurant-btn ${
                  selectedOfficeId === office.id ? "active" : ""
                }`}
                onClick={() => handleSelectOffice(office.id)}
              >
                <span>{office.name}</span>
                {selectedOfficeId === office.id && (
                  <span className="checkmark">✔</span>
                )}
              </button>
            ))}
          </div>
          <div className="text-side">
            <h3>2. Выберите любимый ресторан</h3>
            <p>
              Мы работаем с лучшими заведениями города. Весь ассортимент
              доступен в едином интерфейсе без лишних переходов.
            </p>
          </div>
        </div>

        <div className={`connector-line ${step >= 2 ? "visible" : ""}`}></div>

        <div className={`func-row ${step >= 2 ? "visible" : ""}`}>
          <div className="interactive-side menu-mode">
            <div className="menu-grid">
              {currentMenu.map((item) => (
                <button
                  key={item.id}
                  className={`menu-item-btn ${
                    cart.includes(item.id) ? "selected" : ""
                  }`}
                  onClick={() => toggleDish(item.id, item.price)}
                >
                  <span className="dish-name">{item.name}</span>
                  <span className="dish-price">{item.price} ₽</span>
                </button>
              ))}
            </div>

            <div className="order-summary">
              <div className="total-label">
                Итого: <span className="total-value">{totalPrice} ₽</span>
              </div>
              <button
                onClick={() =>
                  (window.location.href = "https://t.me/QuickL4nch_Bot")
                }
                className="demo-btn finish-btn"
              >
                Заказать
              </button>
            </div>
          </div>
          <div className="text-side">
            <h3>3. Соберите корзину</h3>
            <p>
              Добавляйте блюда, следите за суммой заказа в реальном времени.
              Оплата производится автоматически с привязанного корпоративного
              счета или карты.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunctionalSection;
