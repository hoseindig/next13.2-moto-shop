import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ImageSlider from "./ImageSlider";
import { Container, Row, Col } from "react-bootstrap";

const images = [
  "images/motor-brand/honda.png",
  "images/motor-brand/ktm.png",
  "images/motor-brand/suzuki.png",
  "images/motor-brand/yamaha.png",
  "images/motor-brand/bmw.png",
  "images/motor-brand/honda.png",
  "images/motor-brand/ktm.png",
  "images/motor-brand/suzuki.png",
  "images/motor-brand/yamaha.png",
  "images/motor-brand/bmw.png",
  // Add more image URLs here
];
const ShopAllPartsBrands = () => {
  return (
    <>
      <Container>
        <Row className="my-4">
          <Col>
            <ImageSlider images={images} />
          </Col>
        </Row>
      </Container>
      {/* <img src="images/slider-barand.jpg" alt="" /> */}
      {/* <img
        src="images/motor-brand/bmw.png"
        style={{
          maxWidth: "auto",
          height: "100px",
          objectFit: "cover",
          flex: 1,
        }}
      /> */}
      {/* <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={true}
        showThumbs={false}
      >
        <div style={{ display: "flex" }}>
          <img
            src="images/motor-brand/bmw.png"
            style={{
              maxWidth: "auto",
              height: "100px",
              objectFit: "cover",
              flex: 1,
            }}
          />
        </div>
        <div>
          <img
            src="images/motor-brand/yamaha.png"
            style={{
              maxWidth: "auto",
              height: "100px",
              objectFit: "cover",
              flex: 1,
            }}
          />
        </div>
        <div>
          <img
            src="images/motor-brand/suzuki.png"
            style={{
              maxWidth: "auto",
              height: "100px",
              objectFit: "cover",
              flex: 1,
            }}
          />
        </div>
        <div>
          <img
            src="images/motor-brand/ktm.png"
            style={{
              maxWidth: "auto",
              height: "100px",
              objectFit: "cover",
              flex: 1,
            }}
          />
        </div>
        <div>
          <img
            src="images/motor-brand/honda.png"
            style={{
              maxWidth: "auto",
              height: "100px",
              objectFit: "cover",
              flex: 1,
            }}
          />
        </div>
      </Carousel> */}
    </>
  );
};

export default ShopAllPartsBrands;
