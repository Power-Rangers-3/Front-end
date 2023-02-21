import { Link } from 'react-router-dom';

import { ROUTE } from 'router';

import { EmailForm } from 'modules/Auth/ResetPassword/EmailForm';

import styles from '../styles.module.scss';

import { logoIcon } from '../../../assets';
import { CatIcon } from '../assets';

export const ResetPasswordPage = () => (
  <main className={styles.main}>
    <div className={styles.wrapper}>
      <Link to={ROUTE.HOME} className={styles.logo}>
        <img src={logoIcon} className={styles.logo} alt="Townsend logo" />
      </Link>
      <div className={styles.auth}>
        <EmailForm />
      </div>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutContent}>
          <CatIcon />
        </div>
      </div>
    </div>
    <div className={styles.bgReset} />
  </main>
);
