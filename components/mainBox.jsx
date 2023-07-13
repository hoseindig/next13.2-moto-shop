import CarouselBox from "./carouselBox";

import { Grid } from "@mui/material";
import CategoryBoxImage from "./imagebox";
const MainBox = () => {
  return (
    <>
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={12} md={12} lg={12}>
          <CarouselBox />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <img src="images/search-box.jpg" alt="" />
        </Grid>
      </Grid>
      <CategoryBoxImage />
    </>
  );
};

export default MainBox;
