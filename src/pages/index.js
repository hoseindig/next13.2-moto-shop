import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SideBar from "../../components/sideBar";
import MainBox from "../../components/mainBox";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="mt-4">
      <Row>
        <Header />
      </Row>
      <Row className="mt-5">
        <Col md={9}>
          <MainBox />
        </Col>
        <Col md={3}>
          <SideBar />
        </Col>
      </Row>
      <Row>
        {" "}
        <Footer />
      </Row>
      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={10} md={9} lg={10}>
            <MainBox />
          </Grid>
          <Grid item xs={2} md={3} lg={2}>
            <SideBar />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Box> */}
    </Container>
  );
}
