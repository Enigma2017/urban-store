import PopularCategories from '../../components/Categories/PopularCategories';
import MainCategories from '../../components/MainCategories/MainCategories';
import styles from './HomePage.module.scss';
import HeaderBanner from '../../components/Header/HeaderBanner';
const HomePage = () => {
  return (
    <>
      <HeaderBanner />
      <MainCategories />
      <div className={styles.divider}></div>
      <PopularCategories />
    </>
);
};

export default HomePage;
