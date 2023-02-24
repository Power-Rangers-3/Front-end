import { Link } from 'react-router-dom';

import { dataArray } from './data/dataArray';

import styles from './styles.opportunitySection.module.scss';

import { DataOpportunityType } from './types/dataOpportunityType';

import { ROUTE } from '../../../../router';

import buttonStyle from '../../../../styles/shared/button.style.module.scss';

export const OpportunityCardEven = ({ title, description, picture }: DataOpportunityType) => (
  <div className={styles.opportunityCard}>
    <div className={styles.opportunityCardImage}>
      <img src={picture} alt="opportunity" />
    </div>
    <div className={styles.opportunityCardInfo}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

export const OpportunityCardOdd = ({ title, description, picture }: DataOpportunityType) => (
  <div className={styles.opportunityCard}>
    <div className={styles.opportunityCardInfo}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    <div className={styles.opportunityCardImage}>
      <img src={picture} alt="opportunity" />
    </div>
  </div>
);

export const OpportunitySection = () => (
  <section className={styles.opportunitySection}>
    <div className={styles.wrapper}>
      {dataArray.map((article: DataOpportunityType, i) =>
        i % 2 === 0 ? <OpportunityCardEven {...article} /> : <OpportunityCardOdd {...article} />,
      )}
      <div className={styles.infoButton}>
        <Link to={ROUTE.SIGN_UP} className={buttonStyle.buttonBright} type="button">
          Подобрать решение
        </Link>
      </div>
    </div>
  </section>
);
