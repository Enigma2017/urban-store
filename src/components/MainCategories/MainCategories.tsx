import { Link } from 'react-router-dom';
import styles from './MainCategories.module.scss';
import '../../../scss/main.scss';
import Layout from '../Layout/Layout';
import { FC } from 'react';
const MainCategories: FC = () => {
  return (
    <Layout>
      <div className={styles.popularCategories}>
        <h2>Categories</h2>
        <div className={styles.container__popular}>
          <div className={styles.popularBlock1}>
            <Link to="#" className={styles.link}>
              <div className={styles.popularBlock__1}>Name 1</div>
            </Link>
          </div>
          <div className={styles.popularBlock2}>
            <div>
              <Link to="#" className={styles.link}>
                <div className={styles.popularBlock__21}>Name 2</div>
              </Link>
            </div>
            <div className={styles.popularBlock__2}>
              <div className={styles.popularBlock22}>
                <Link to="#" className={styles.link}>
                  <div className={styles.popularBlock__22}>Name 3</div>
                </Link>
              </div>
              <div className={styles.popularBlock23}>
                <Link to="#" className={styles.link}>
                  <div className={styles.popularBlock__23}>Name 4</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.popularBottom}>
          <div className={styles.popularBottom2}>
            <div className={styles.popularBlock22}>
              <Link to="#" className={styles.link}>
                <div className={styles.popularBlock__22}>Name 5</div>
              </Link>
            </div>

            <div className={styles.popularBlock23}>
              <Link to="#" className={styles.link}>
                <div className={styles.popularBlock__23}>Name 6</div>
              </Link>
            </div>
          </div>
          <div>
            <Link to="#" className={styles.link}>
              <div className={styles.popularBlock__21}>Name 7</div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MainCategories;
