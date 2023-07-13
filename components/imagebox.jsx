import { Grid } from "@mui/material";
import styles from "../src/styles/image.module.scss";
const CategoryBoxImage = () => {
  const paddongbox = 2;
  return (
    <>
      <Grid
        container
        spacing={1}
        justify="center"
        alignItems="center"
        className={styles.CategoryBox}
      >
        <Grid item xs={6} md={6} lg={6} className={styles.imageBox}>
          <img
            src="images/card-main-box/1.jpg"
            alt=""
            className={styles.imgItem}
          />
        </Grid>
        <Grid item xs={6} md={6} lg={6} className={styles.imageBox}>
          <img
            src="images/card-main-box/2.jpg"
            alt=""
            className={styles.imgItem}
          />
        </Grid>
        <Grid item xs={6} md={6} lg={6} className={styles.imageBox}>
          <img
            src="images/card-main-box/3.jpg"
            alt=""
            className={styles.imgItem}
          />
        </Grid>
        <Grid item xs={6} md={6} lg={6} className={styles.imageBox}>
          <img
            src="images/card-main-box/4.jpg"
            alt=""
            className={styles.imgItem}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default CategoryBoxImage;
