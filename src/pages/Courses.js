function Courses() {
  return (
    <div>
      <h1 className="historical-title">Наши курсы истории</h1>
      <p className="historical-text">
        В нашей онлайн школе представлен широкий спектр курсов по различным
        историческим периодам и цивилизациям. Каждый курс разработан
        профессиональными историками и адаптирован для онлайн-обучения.
      </p>

      <div className="historical-contact-card">
        <h2 className="historical-subtitle">📚 Древний мир</h2>
        <ul className="historical-list">
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Древний Египет:</strong> От фараонов до пирамид (12 недель)
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Античная Греция:</strong> Колыбель демократии и философии
            (10 недель)
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Римская империя:</strong> Величие и падение (14 недель)
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Древние цивилизации Востока:</strong> Месопотамия, Персия,
            Индия (16 недель)
          </li>
        </ul>
      </div>

      <div className="historical-contact-card">
        <h2 className="historical-subtitle">🏰 Средневековье</h2>
        <ul className="historical-list">
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Византийская империя:</strong> Тысячелетняя история (12
            недель)
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Русь и Россия:</strong> От Рюрика до Петра I (20 недель)
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Западная Европа:</strong> Рыцари, замки и крестовые походы
            (14 недель)
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Золотая Орда:</strong> Монгольское господство (8 недель)
          </li>
        </ul>
      </div>

      <div className="historical-contact-card">
        <h2 className="historical-subtitle">🌍 Новое время</h2>
        <ul className="historical-list">
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Великие географические открытия:</strong> Эпоха исследований
            (10 недель)
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Возрождение:</strong> Культурная революция Европы (12
            недель)
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Реформация:</strong> Религиозные войны и изменения (8
            недель)
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Абсолютизм:</strong> Короли и империи XVII-XVIII веков (10
            недель)
          </li>
        </ul>
      </div>

      <div className="historical-contact-card">
        <h2 className="historical-subtitle">⚡ Новейшее время</h2>
        <ul className="historical-list">
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Французская революция:</strong> Свобода, равенство, братство
            (8 недель)
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Наполеоновские войны:</strong> Европа в огне (10 недель)
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>XIX век:</strong> Промышленная революция и национализм (14
            недель)
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>XX век:</strong> Мировые войны и современность (18 недель)
          </li>
        </ul>
      </div>

      <h2 className="historical-subtitle">🎓 Формат обучения</h2>
      <p className="historical-text">
        Все курсы проводятся в онлайн формате с использованием современных
        образовательных технологий:
      </p>
      <ul className="historical-list">
        <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          Интерактивные видеолекции с историческими реконструкциями
        </li>
        <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          Виртуальные экскурсии по музеям и историческим местам
        </li>
        <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          Практические задания и исследовательские проекты
        </li>
        <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          Групповые дискуссии и семинары в онлайн формате
        </li>
        <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          Персональные консультации с преподавателями
        </li>
      </ul>

      <p className="historical-text">
        <strong>Продолжительность занятий:</strong> 1.5 часа, 2 раза в неделю
        <br />
        <strong>Размер групп:</strong> До 15 человек для индивидуального подхода
        <br />
        <strong>Сертификат:</strong> По окончании курса выдается сертификат о
        прохождении обучения
      </p>
    </div>
  );
}

export default Courses;