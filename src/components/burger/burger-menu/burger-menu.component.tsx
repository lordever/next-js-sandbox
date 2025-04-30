import React, {FC, memo} from 'react';
import styles from './burger-menu.module.css';

interface BurgerMenuProps {
    open: boolean;
    onClick: () => void;
}

const BurgerMenu: FC<BurgerMenuProps> = ({open, onClick}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`z-40 block md:hidden self-center focus:outline-none ${open ? styles.open : ''} ${styles.hamburger}`}
        >
            <span className={styles.hamburgerTop}></span>
            <span className={styles.hamburgerMiddle}></span>
            <span className={styles.hamburgerBottom}></span>
        </button>
    );
};

export default memo(BurgerMenu);