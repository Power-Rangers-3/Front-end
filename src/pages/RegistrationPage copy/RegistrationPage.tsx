import { RegistrationForm } from 'modules';

import styles from './styles.module.scss';

export const RegistrationPage = () => (
  <main className={styles.wrapper}>
    <div className={styles.about}>
      <h1>Помогаем автоматизировать бизнес-процессы с помощью чат-ботов</h1>
    </div>
    <div>
      <RegistrationForm />
    </div>
  </main>
);
