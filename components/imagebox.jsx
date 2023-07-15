import { Container, Row, Col } from "react-bootstrap";
import styles from "../src/styles/image.module.scss";
const CategoryBoxImage = () => {
  const paddongbox = 2;
  return (
    <>
      <Row>
        <Col xs={6} md={6} lg={6} className={styles.imageBox}>
          <img
            src="images/card-main-box/1.jpg"
            alt=""
            className={styles.imgItem}
          />
        </Col>
        <Col xs={6} md={6} lg={6} className={styles.imageBox}>
          {" "}
          <img
            src="images/card-main-box/2.jpg"
            alt=""
            className={styles.imgItem}
          />
        </Col>
        <Col xs={6} md={6} lg={6} className={styles.imageBox}>
          <img
            src="images/card-main-box/3.jpg"
            alt=""
            className={styles.imgItem}
          />
        </Col>
        <Col xs={6} md={6} lg={6} className={styles.imageBox}>
          {" "}
          <img
            src="images/card-main-box/4.jpg"
            alt=""
            className={styles.imgItem}
          />
        </Col>
      </Row>
    </>
  );
};

export default CategoryBoxImage;
