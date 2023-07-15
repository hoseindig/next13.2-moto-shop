import styles from "../src/styles/AllPartsCategories.module.css";
import { Container, Row, Col } from "react-bootstrap";

const AllPartsCategories = () => {
  const myArray = [
    [
      "Air & Fuel",
      "Aprila Parts",
      "Parts for Harley",
      "Kawasaki Parts",
      "Triumph Parts",
    ],
    [
      "Shock Absorbers",
      "BMW Parts",
      "Honda Parts",
      "KTM Parts",
      "Made in the USA",
    ],
    [
      "Ducati Parts",
      "Indian Parts",
      "Suzuki Parts",
      "Yamaha Parts",
      "OEM Parts",
    ],
  ];
  return (
    <>
      <div className={styles.partBoxMain + " py-5"}>
        {/* <img src="images/part-category.jpg" alt="" /> */}
        <h1>ALL PARTS CATEGORIES</h1>
        <Row className={styles.partBox}>
          <Col md={4}>
            <ul className={styles.listBox}>
              {myArray[0].map((item, i) => {
                return (
                  <li key={i} className={styles.listBoxItem}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col md={4}>
            <ul className={styles.listBox}>
              {myArray[1].map((item, i) => {
                return (
                  <li key={i} className={styles.listBoxItem}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col md={4}>
            {" "}
            <ul className={styles.listBox}>
              {myArray[2].map((item, i) => {
                return (
                  <li key={i} className={styles.listBoxItem}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AllPartsCategories;
