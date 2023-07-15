import { Container, Row, Col } from "react-bootstrap";
import styles from "../src/styles/FeaturedCategories.module.css";

const images = [
  {
    title: "Title 1",
    id: 1,
    imageUrl: "images/part-image/1.png",
  },
  {
    title: "Title 1",
    id: 2,
    imageUrl: "images/part-image/2.png",
  },
  {
    title: "Title 1",
    id: 3,
    imageUrl: "images/part-image/3.png",
  },
  {
    title: "Title 1",
    id: 4,
    imageUrl: "images/part-image/4.png",
  },
  {
    title: "Title 1",
    id: 5,
    imageUrl: "images/part-image/5.png",
  },
  {
    title: "Title 1",
    id: 6,
    imageUrl: "images/part-image/6.png",
  },
  {
    title: "Title 1",
    id: 7,
    imageUrl: "images/part-image/7.png",
  },
  {
    title: "Title 1",
    id: 1,
    imageUrl: "images/part-image/1.png",
  },
  {
    title: "Title 1",
    id: 2,
    imageUrl: "images/part-image/2.png",
  },
  {
    title: "Title 1",
    id: 3,
    imageUrl: "images/part-image/3.png",
  },
  {
    title: "Title 1",
    id: 4,
    imageUrl: "images/part-image/4.png",
  },
  {
    title: "Title 1",
    id: 5,
    imageUrl: "images/part-image/5.png",
  },
  {
    title: "Title 1",
    id: 6,
    imageUrl: "images/part-image/6.png",
  },
  {
    title: "Title 1",
    id: 7,
    imageUrl: "images/part-image/7.png",
  },
  {
    title: "Title 1",
    id: 4,
    imageUrl: "images/part-image/4.png",
  },
  {
    title: "Title 1",
    id: 5,
    imageUrl: "images/part-image/5.png",
  },
  {
    title: "Title 1",
    id: 6,
    imageUrl: "images/part-image/6.png",
  },
  {
    title: "Title 1",
    id: 7,
    imageUrl: "images/part-image/7.png",
  },
];
const FeaturedCategories = () => {
  return (
    <>
      <Container className={styles.mainbox}>
        {/* <img src="images/FEATURED-CATEGORIES.jpg" alt="" /> */}
        <h1>Featured Categories</h1>
        <Row className="my-5">
          {images &&
            images.map((item, i) => {
              return (
                <Col key={i} md={2} className={styles.itsmBox}>
                  <img src={item.imageUrl} alt="" />
                  <p>{item.title}</p>
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default FeaturedCategories;
