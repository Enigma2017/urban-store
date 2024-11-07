import React from "react";
import styles from './Header.module.scss';

const SearchPanelInput: React.FC = () => {
    return (
        <div className={styles.header__searchPanelInput}>
            <input
                type="text"
                placeholder="Search item..."
                className={styles.header__searchInput}
            />
            <button className={styles.header__searchButton}>Search</button>
        </div>
    );
};

export default SearchPanelInput;
