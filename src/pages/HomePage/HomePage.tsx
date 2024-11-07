import PopularCategories from '../../components/Categories/PopularCategories';
import MainCategories from '../../components/MainCategories/MainCategories';
import styles from './HomePage.module.scss';
const HomePage = () => {
  return (
    <div>
      <MainCategories />
      <div className={styles.divider}></div>
      <PopularCategories />
    </div>
);
};

export default HomePage;
