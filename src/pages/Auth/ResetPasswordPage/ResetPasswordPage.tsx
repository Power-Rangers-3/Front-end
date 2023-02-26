import { Link } from 'react-router-dom';

import { ROUTE } from 'router';

import { logoIcon } from 'assets';

import { ResetPasswordForms } from 'modules/Auth';

import styles from '../styles.module.scss';

import { CatIcon } from '../assets';

export const ResetPasswordPage = () => (
  <main className={styles.main}>
    <div className={styles.wrapper}>
      <Link to={ROUTE.HOME} className={styles.logo}>
        <img src={logoIcon} className={styles.logo} alt="Townsend logo" />
      </Link>
      <div className={styles.auth}>
        <ResetPasswordForms />
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
