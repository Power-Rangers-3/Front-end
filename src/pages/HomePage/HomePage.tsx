import { MainSection } from './components/mainSection/mainSection';

import { AdvantagesSection } from './components/advantagesSection/advantagesSection';

import { OpportunitySection } from './components/opportunitySection/opportunitySection';

import styles from './styles.module.scss';

export const HomePage = () => (
  <main className={styles.main}>
    <MainSection />
    <AdvantagesSection />
    <OpportunitySection />
  </main>
);
