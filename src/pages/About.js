function About() {
  return (
    <div>
      <h1 className="historical-title">О нашей школе</h1>
      <p className="historical-text">
        Историческая Академия — это современная онлайн школа, специализирующаяся
        на глубоком изучении истории. Мы создали уникальную образовательную
        среду, где классические методы преподавания истории сочетаются с
        инновационными цифровыми технологиями.
      </p>

      <h2 className="historical-subtitle">🎓 Наша миссия</h2>
      <p className="historical-text">
        Сделать качественное историческое образование доступным для каждого,
        независимо от географического местоположения. Мы верим, что понимание
        истории формирует критическое мышление и помогает лучше понимать
        современный мир.
      </p>

      <div className="historical-contact-card">
        <h2 className="historical-subtitle">👨‍🏫 Наши преподаватели</h2>
        <ul className="historical-list">
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Профессор Ямпольская А.И.</strong> — доктор исторических
            наук, специалист по древней истории (МГУ)
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Доцент Притула Д.Д.</strong> — кандидат наук, эксперт по
            средневековой Руси (СПбГУ)
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Профессор Николаев С.М.</strong> — доктор наук, специалист
            по новейшей истории (РГГУ)
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Доцент Смирнова Л.В.</strong> — кандидат наук, эксперт по
            истории искусств (Эрмитаж)
          </li>
        </ul>
      </div>

      <h2 className="historical-subtitle">📚 Наш подход к обучению</h2>
      <ul className="historical-list">
        <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          <strong>Научная достоверность:</strong> Все материалы основаны на
          последних исследованиях
        </li>
        <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          <strong>Интерактивность:</strong> Виртуальные экскурсии,
          3D-реконструкции, документальные фильмы
        </li>
        <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          <strong>Практическое применение:</strong> Анализ исторических
          источников, работа с архивами
        </li>
        <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          <strong>Критическое мышление:</strong> Обучение анализу и
          интерпретации исторических событий
        </li>
        <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          <strong>Междисциплинарность:</strong> Связь истории с археологией,
          антропологией, искусством
        </li>
      </ul>

      <div className="historical-contact-card">
        <h2 className="historical-subtitle">🏆 Наши достижения</h2>
        <ul className="historical-list">
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            Более 2000 выпускников за 5 лет работы
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            95% студентов успешно сдают ЕГЭ по истории на высокие баллы
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            Победители исторических олимпиад среди наших учеников
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            Партнерство с ведущими музеями России
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            Официальное признание Министерства образования
          </li>
        </ul>
      </div>

      <h2 className="historical-subtitle">💻 Технологии обучения</h2>
      <p className="historical-text">
        Мы используем современную образовательную платформу, которая включает:
      </p>
      <ul className="historical-list">
        <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          HD видеолекции с интерактивными элементами
        </li>
        <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          Виртуальную реальность для погружения в исторические эпохи
        </li>
        <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          Онлайн симуляции исторических событий
        </li>
        <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          Цифровые архивы документов и артефактов
        </li>
        <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          Систему автоматической проверки знаний
        </li>
      </ul>

      <p className="historical-text">
        Присоединяйтесь к нашему образовательному сообществу и откройте для себя
        историю как никогда раньше!
      </p>

      <div className="historical-contact-card">
        <h2 className="historical-subtitle">📞 Свяжитесь с нами</h2>
        <p className="historical-text">
          Остались вопросы? Наши консультанты помогут выбрать подходящий курс и
          расскажут о возможностях обучения.
        </p>
      </div>
    </div>
  );
}

export default About;
