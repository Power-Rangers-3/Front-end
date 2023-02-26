import { SignInForm } from 'modules/Auth';

import { Link } from 'react-router-dom';

import { ROUTE } from 'router';

import styles from '../styles.module.scss';

import { icons } from '../data/icons';

import { logoIcon } from '../../../assets';

export const SignInPage = () => (
  <main className={styles.main}>
    <div className={styles.bg} />
    <div className={styles.wrapper}>
      <Link to={ROUTE.HOME} className={styles.logo}>
        <img src={logoIcon} className={styles.logo} alt="Townsend logo" />
      </Link>
      <div className={styles.aboutWrapper}>
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
      <div className={styles.auth}>
        <SignInForm />
      </div>
    </div>
  </main>
);
