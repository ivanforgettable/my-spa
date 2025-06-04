function Contact() {
  return (
    <div>
      <h1 className="historical-title">Записаться к нам на занятие</h1>
      <p className="historical-text">
        Готовы начать увлекательное путешествие в мир истории? Свяжитесь с нами
        для записи на курсы, получения консультации или ответов на ваши вопросы
        об обучении.
      </p>

      <div className="historical-contact-card">
        <h2 className="historical-subtitle">📞 Приемная комиссия</h2>
        <ul className="historical-list">
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Телефон:</strong> +7-996-533-02-79 (с 9:00 до 18:00)
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>WhatsApp:</strong> Быстрые ответы на вопросы
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Email:</strong> info@history-academy.ru
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Telegram:</strong> @HistoryAcademyBot
          </li>
        </ul>
        <a
          href="https://vk.com/imfk_dgc"
          target="_blank"
          rel="noopener noreferrer"
          className="historical-link"
        >
          <p className="historical-text">🔗 Посетить нашу группу ВКонтакте</p>
        </a>
      </div>

      <div className="historical-contact-card">
        <h2 className="historical-subtitle">📝 Что нужно для записи?</h2>
        <ul className="historical-list">
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            Выбрать интересующий курс из нашего каталога
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            Заполнить простую анкету студента
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            Пройти бесплатное тестирование уровня знаний
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            Получить персональные рекомендации по обучению
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            Внести оплату и получить доступ к материалам
          </li>
        </ul>
      </div>

      <div className="historical-contact-card">
        <h2 className="historical-subtitle">💰 Стоимость обучения</h2>
        <ul className="historical-list">
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Стандартный курс (8-12 недель):</strong> 15,000 - 20,000
            руб.
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Расширенный курс (14-20 недель):</strong> 25,000 - 35,000
            руб.
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Индивидуальные занятия:</strong> 2,500 руб./час
          </li>
          <li style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <strong>Льготы:</strong> Скидки для школьников, студентов,
            пенсионеров
          </li>
        </ul>
        <p className="historical-text">
          <em>Возможна рассрочка платежа без процентов!</em>
        </p>
      </div>

      <h2 className="historical-subtitle">⏰ Время работы приемной комиссии</h2>
      <p className="historical-text">
        <strong>Понедельник - Пятница:</strong> 9:00 - 18:00
        <br />
        <strong>Суббота:</strong> 10:00 - 16:00
        <br />
        <strong>Воскресенье:</strong> Выходной
      </p>

      <div className="historical-contact-card">
        <h2 className="historical-subtitle">❓ Часто задаваемые вопросы</h2>
        <p className="historical-text">
          <strong>Нужна ли специальная подготовка?</strong>
          <br />
          Нет, наши курсы подходят для любого уровня подготовки.
        </p>

        <p className="historical-text">
          <strong>Что если я пропущу занятие?</strong>
          <br />
          Все занятия записываются, вы сможете изучить материал в удобное время.
        </p>

        <p className="historical-text">
          <strong>Выдается ли сертификат?</strong>
          <br />
          Да, по окончании курса вы получите именной сертификат.
        </p>
      </div>

      <p className="historical-text">
        Мы с радостью ответим на все ваши вопросы и поможем выбрать оптимальную
        программу обучения. Присоединяйтесь к нашему историческому сообществу!
      </p>
    </div>
  );
}

export default Contact;