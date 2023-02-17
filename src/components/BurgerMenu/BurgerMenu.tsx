import { burgerIcon, cancelIcon } from 'assets';
import { MenuNav } from 'components/MenuNav/MenuNav';
import { Portal } from 'components/Portal/Portal';
import { TargetPortal } from 'config';
import { useToogle } from 'hooks';

import styles from './styles.module.scss';

export const BurgerMenu = () => {
  const [isOpen, toogleMenu] = useToogle();

  return (
    <div className={styles.burgerMenu}>
      <div className={styles.burger} onClick={toogleMenu}>
        {isOpen ? (
          <img src={cancelIcon} alt="Cancel" />
        ) : (
          <img src={burgerIcon} alt="BurgerMenu" className={styles.burgerIcon} />
        )}
      </div>

      {isOpen && (
        <Portal target={TargetPortal.BURGER_MENU}>
          <MenuNav />
        </Portal>
      )}
    </div>
  );
};
