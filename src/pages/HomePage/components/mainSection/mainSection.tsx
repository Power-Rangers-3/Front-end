import { Link } from 'react-router-dom';

import styles from './styles.mainSection.module.scss';

import blogging from './assets/blogging.jpg';

import chat from './assets/chat.svg';

import { ROUTE } from '../../../../router';

import buttonStyle from '../../../../styles/shared/button.style.module.scss';

export const MainSection = () => (
  <section className={styles.mainSection}>
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.infoText}>
          <h1>единая платформа для автоматизации процессов бизнесса</h1>
          <p>
            Используйте чат-ботов для увеличения прибыли, улучшения рабочих процессов и удовлетворения потребностей
            клиентов
          </p>
        </div>
        <div className={styles.infoButton}>
          <Link to={ROUTE.SIGN_UP} className={buttonStyle.buttonBright} type="button">
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
