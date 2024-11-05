import PopularCategories from '../../components/Categories/PopularCategories';
import MainCategories from '../../components/MainCategories/MainCategories';
const HomePage = () => {
  return (
  <div className="main-content">
     <div className="">
      <MainCategories />
    </div>
    <div className="">
      <PopularCategories />
    </div>
    
  </div>
);
};

export default HomePage;
