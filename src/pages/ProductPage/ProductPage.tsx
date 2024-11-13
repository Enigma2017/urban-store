import React from 'react';
import styles from './ProductPage.module.scss';
import BreadCrumbles from '../../components/BreadCrumbles/BreadCrumb';
import ProductPageShortDesc from './ProductPageShortDesc';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
const ProductPage = () => (
  <main className={styles.product}>
    <BreadCrumbles />
    <div className={styles.bgGrey}>
      
      <ImageGallery />
      <ProductPageShortDesc />
    </div>
  </main>
);

export default ProductPage;
