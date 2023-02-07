import styles from './Styles.module.scss';

import { telegramLight, facebookLight, instagramLight, vkLight, youTubeLight } from '../../assets';

export const Footer = () => (
  <div className={styles.footer_container}>
    <div className={styles.footer_container_left}>
      <h1 className={styles.social_block__title}>TOWNSEND</h1>
      <ul className={styles.social_block__container}>
        <li>
          <a href="https://www.instagram.com">
            <img src={telegramLight} alt="Telegram" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com">
            <img src={facebookLight} alt="FaceBook" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com">
            <img src={vkLight} alt="VKontakte" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com">
            <img src={instagramLight} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com">
            <img src={youTubeLight} alt="YouTube" />
          </a>
        </li>
      </ul>

      <div className={styles.dropdown}>
        <div className={styles.dropbtn}>Русский</div>
        <div className={styles.dropdown_content}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">Русский</a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">English</a>
        </div>
      </div>
    </div>

    <div className={styles.right_info_container}>
      <div>
        <h2 className={styles.info_container__titles}>Компания</h2>
        <ul className={styles.info_container__ul}>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label */}
            <a href="#">Команда</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label */}
            <a href="#">Клиенты</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label */}
            <a href="#">Отзывы клиентов</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label */}
            <a href="#">Карьера</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label */}
            <a href="#">Блог</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className={styles.info_container__titles}>Чат-боты</h2>
        <ul className={styles.info_container__ul}>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label */}
            <a href="#">Конструктор чат-ботов</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label */}
            <a href="#">Instagram чат-боты</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label */}
            <a href="#">Telegram чат-боты</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label */}
            <a href="#">Facebook чат-боты</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label */}
            <a href="#">WhatsApp чат-боты</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label */}
            <a href="#">Примеры чат-ботов</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label */}
            <a href="#">Чат-боты под ключ</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label */}
            <a href="#">Чаты на сайт</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className={styles.info_container__titles}>Полезное</h2>
        <ul className={styles.info_container__ul}>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label */}
            <a href="#">База знаний</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label */}
            <a href="#">Глоссарий</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label */}
            <a href="#">Интеграции</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label */}
            <a href="#">Условия пользования</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label */}
            <a href="#">Каталог экспертов</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid,jsx-a11y/control-has-associated-label */}
            <a href="#">Поддержка</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
