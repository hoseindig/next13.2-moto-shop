import CarouselBox from "./carouselBox";
import { Container, Row, Col } from "react-bootstrap";

// import { Grid } from "@mui/material";
import CategoryBoxImage from "./imagebox";
import AllCartsCategories from "./all-parts-categories";
import ShopAllPartsBrands from "./ShopAllPartsBrands";
import FeaturedCategories from "./FEATURED-CATEGORIES";
import ProductsMainPageSearch from "./productSearch";

const MainBox = () => {
  return (
    <>
      <Row>
        <CarouselBox />
      </Row>
      <Row>
        <ProductsMainPageSearch />
      </Row>
      <Row></Row>

      <CategoryBoxImage />
      <AllCartsCategories />
      <ShopAllPartsBrands />
      <FeaturedCategories />
    </>
  );
};

export default MainBox;
