import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Tooltip,
  OverlayTrigger,
  Button,
} from "react-bootstrap";
import styles from "../src/styles/product.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Tabs, Tab, Nav } from "react-bootstrap";
import SerachOnTabMainPage from "./searchboxTabMainPage";
// import ComboxBox from "./combo";

const ProductsMainPageSearch = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  const tooltip2 = (
    <Tooltip id="tooltip">
      Parts & accessories designed to fit your vehicle by a brand other than its
      manufacturer
    </Tooltip>
  );
  const tooltip = (
    <Tooltip id="tooltip2">
      Original equipment that came stock on your bike & optional accessories
      available from the manufacturer
    </Tooltip>
  );
  return (
    <div className={styles.mainbox + " py-4 p-3 "} dir="rtl">
      <div className={styles.mainxboxDiv + " p-4"}>
        <h1 className={styles.header + " py-3"}>SHOP BY VEHICLE</h1>
        <div className={styles.tab + " p-3"}>
          <Tab.Container
            activeKey={activeTab}
            onSelect={handleTabSelect}
            className={styles.tabbox}
            dir="rtl"
          >
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="tab1">
                  <OverlayTrigger placement="top" overlay={tooltip}>
                    <FontAwesomeIcon
                      className="font-awesomeIcon-size-tab"
                      icon={faInfoCircle}
                    />
                  </OverlayTrigger>
                  OEM Parts
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="tab2">
                  <OverlayTrigger placement="top" overlay={tooltip2}>
                    <FontAwesomeIcon
                      className="font-awesomeIcon-size-tab"
                      icon={faInfoCircle}
                    />
                  </OverlayTrigger>
                  Aftermarket Parts
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="tab1">
                <SerachOnTabMainPage />
              </Tab.Pane>
              <Tab.Pane eventKey="tab2">
                <SerachOnTabMainPage />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

export default ProductsMainPageSearch;
