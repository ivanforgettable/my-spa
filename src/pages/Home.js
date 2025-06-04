function Home() {
  return (
    <div>
      <h1 className="historical-title">Историческая Академия</h1>
      <h2 className="historical-subtitle">Онлайн школа истории</h2>

      <p className="historical-text">
        Добро пожаловать в ведущую онлайн школу изучения истории! Мы предлагаем
        глубокое погружение в исторические эпохи через современные
        образовательные технологии и классический подход к преподаванию.
      </p>

      <div className="historical-contact-card">
        <h2 className="historical-subtitle">🏛️ Почему выбирают нас?</h2>
        <ul className="historical-list">
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Профессиональные историки:</strong> Наши преподаватели —
            кандидаты и доктора исторических наук
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Интерактивный формат:</strong> Виртуальные экскурсии,
            реконструкции, документальные материалы
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Гибкое расписание:</strong> Обучение в удобное для вас время
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Сертификация:</strong> Официальные сертификаты о прохождении
            курсов
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Небольшие группы:</strong> Индивидуальный подход к каждому
            студенту
          </li>
        </ul>
      </div>

      <h2 className="historical-subtitle">📅 Ближайшие наборы</h2>
      <p className="historical-text">
        Новые группы формируются каждый месяц. Ближайшие даты начала обучения:
      </p>

      <div className="historical-contact-card">
        <ul className="historical-list">
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>15 января:</strong> "Древний Рим: величие империи" (набор
            открыт)
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>1 февраля:</strong> "Средневековая Русь" (осталось 3 места)
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>15 февраля:</strong> "Эпоха Возрождения" (предварительная
            запись)
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>1 марта:</strong> "Великая Отечественная война"
            (предварительная запись)
          </li>
        </ul>
      </div>

      <h2 className="historical-subtitle">🎯 Для кого наши курсы?</h2>
      <p className="historical-text">
        Наши образовательные программы подходят для:
      </p>
      <ul className="historical-list">
        <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          Школьников, готовящихся к ЕГЭ и олимпиадам по истории
        </li>
        <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          Студентов исторических факультетов
        </li>
        <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          Учителей истории, повышающих квалификацию
        </li>
        <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          Всех, кто увлечен историей и хочет углубить свои знания
        </li>
        <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          Людей, планирующих путешествия и желающих лучше понимать культурное наследие
        </li>
      </ul>
      <p className="historical-text">
        Присоединяйтесь к нашему сообществу любителей истории и откройте для
        себя удивительный мир прошлого через призму современного образования!
      </p>
      <div className="historical-contact-card">
        <h2 className="historical-subtitle">💡 Пробный урок бесплатно</h2>
        <p className="historical-text">
          Не знаете, подходит ли вам наш формат обучения? Запишитесь на
          бесплатный пробный урок и познакомьтесь с нашей методикой
          преподавания!
        </p>
      </div>
    </div>
  );
}

export default Home;
