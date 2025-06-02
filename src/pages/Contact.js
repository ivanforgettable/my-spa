function Contact() {
  return (
    <div>
      <h1 className="historical-title">
        <span>Контакты</span>
      </h1>
      <p className="historical-text">
        Свяжитесь с нами любым удобным способом. Мы всегда готовы обсудить ваши
        проекты и предложить лучшие решения.
      </p>

      <div className="historical-contact-card">
        <h2 className="historical-subtitle">Способы связи</h2>
        <a
          href="https://vk.com/imfk_dgc"
          target="_blank"
          rel="noopener noreferrer"
          className="historical-link"
        >
          <ul className="historical-list">
            <li>Мой телефон: +7-996-533-02-79</li>
            <li>WhatsApp</li>
            <li>VK - Посетить профиль</li>
          </ul>
        </a>
      </div>

      <p className="historical-text">
        Мы ценим каждое обращение и стремимся предоставить персональный подход к
        каждому клиенту.
      </p>
    </div>
  );
}

export default Contact;
