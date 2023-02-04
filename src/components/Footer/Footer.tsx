import facebookLight from '../../assets/icons/footer_facebook-light.svg';
import instagramLight from '../../assets/icons/footer_instagram-light.svg';
import vkLight from '../../assets/icons/footer_vk-light.svg';
import youTubeLight from '../../assets/icons/footer_youtube-light.svg';
import telegramLight from '../../assets/icons/footer_telegram-light.svg';

export const Footer = () => (
  <div>
    <div className="left_info-container">
      <h1 className="info_container__title">TOWNSEND</h1>
      <ul className="social_block__container">
        <li>
          <a href="https://www.instagram.com" className="social__block_logo-wrap">
            <img src={telegramLight} alt="Telegram" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" className="social__block_logo-wrap">
            <img src={facebookLight} alt="FaceBook" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" className="social__block_logo-wrap">
            <img src={vkLight} alt="VKontakte" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" className="social__block_logo-wrap">
            <img src={instagramLight} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" className="social__block_logo-wrap">
            <img src={youTubeLight} alt="YouTube" />
          </a>
        </li>
      </ul>
      <select>
        <option>Русский</option>
        <option>English</option>
      </select>
    </div>
    <div className="right_info-container">
      <div className="company_container">
        <h2>Компания</h2>
        <ul>
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
      <div className="chatBots_container">
        <h2>Чат-боты</h2>
        <ul>
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

      <div className="useful_container">
        <h2>Полезное</h2>
        <ul>
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
