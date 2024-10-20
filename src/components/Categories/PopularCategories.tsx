import styles from './PopularCategories.module.scss';

const PopularCategories = () => {
    return (
        <div className={styles.popularCategories}>
            <h2>Popular Categories</h2>
            <div className={styles.container}>
                <div className={styles.block1}>Block 1</div>
                <div className={styles.block2}>
                    <div className={styles.block2_1}>Block 2.1</div>
                    <div className={styles.block2_2}>Block 2.2</div>
                    <div className={styles.block2_3}>Block 2.3</div>
                </div>
            </div>
        </div>
    );
};

export default PopularCategories;