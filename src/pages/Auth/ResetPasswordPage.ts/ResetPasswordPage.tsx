import { Link } from 'react-router-dom';

import { ROUTE } from 'router';

import { EmailForm } from 'modules/Auth/ResetPassword/EmailForm';

import styles from '../styles.module.scss';

import { icons } from '../data/icons';

import { logoIcon } from '../../../assets';

export const ResetPasswordPage = () => (
  <main className={styles.main}>
    <div className={styles.bg} />
    <div className={styles.wrapper}>
      <div className={styles.aboutWrapper}>
        <div className={styles.about}>
          <Link to={ROUTE.HOME} className={styles.logo}>
            <img src={logoIcon} className={styles.logo} alt="Townsend logo" />
          </Link>
          <div className={styles.aboutContent}>
            <h1>Помогаем автоматизировать бизнес-процессы с помощью чат-ботов</h1>
            <ul className={styles.socialList}>
              {icons.map((Icon, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={i}>
                  <Icon />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.auth}>
        <EmailForm />
      </div>
    </div>
  </main>
);
