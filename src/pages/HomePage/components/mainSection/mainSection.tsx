import { Link } from 'react-router-dom';

import { ROUTE } from 'router';

import styles from './styles.module.scss';

import blogging from './assets/blogging.jpg';

import chat from './assets/chat.svg';

import buttonStyle from '../../../../styles/button.style.module.scss';

export const MainSection = () => (
  <section className={styles.section}>
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.infoText}>
          <h1>единая платформа для автоматизации процессов бизнеса</h1>
          <p>
            Используйте чат-ботов для увеличения прибыли, улучшения рабочих процессов и удовлетворения потребностей
            клиентов
          </p>
        </div>
        <div className={styles.infoButton}>
          <Link to={ROUTE.PLATFORMS} className={buttonStyle.buttonBright} type="button">
            Подобрать решение
          </Link>
        </div>
      </div>
      <div className={styles.blogging}>
        <div className={styles.bloggingImage}>
          <img src={blogging} alt="bloggingImage" />
        </div>
        <div className={styles.bloggingLiveChat}>
          <button className={styles.bloggingLiveChatButton} type="button">
            <img src={chat} alt="chatButton" />
          </button>
        </div>
      </div>
    </div>
  </section>
);
