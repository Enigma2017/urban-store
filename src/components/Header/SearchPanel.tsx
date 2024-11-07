import SearchIcon from "../../components/Icon/SearchIcon";
import styles from './Header.module.scss';

const SearchPanel = () => {
    return (
        <button className={styles.header__search}>
            <SearchIcon/>
        </button>
    )
};

export default SearchPanel