import { dataArray } from './data/dataArray';

import { DataAdvantagesType } from './types/dataAdvantagesType';
import advantageImage from './assets/rocket_1.jpg';

import styles from './styles.advantagesSection.module.scss';

export const AdvantagesCard = ({ title, picture }: DataAdvantagesType) => (
  <div className={styles.advantagesListElement}>
    <div className={styles.advantagesLisElementIcon}>
      <img src={picture} alt="icon" />
    </div>
    <div className={styles.advantagesListElementTitle}>
      <p>{title}</p>
    </div>
  </div>
);

export const AdvantagesSection = () => (
  <section className={styles.advantagesSection}>
    <div className={styles.wrapper}>
      <div className={styles.advantagesCard}>
        <div className={styles.advantagesCardTitle}>
          <h2>Преимущества работы сервиса Townsend</h2>
        </div>
        <div className={styles.advantageCardInfo}>
          <div className={styles.advantagesCardImage}>
            <img src={advantageImage} alt="advantageImage" />
          </div>
          <div className={styles.advantageCardList}>
            {dataArray.map((article) => (
              <AdvantagesCard {...article} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
