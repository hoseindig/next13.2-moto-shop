import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Tabs, Tab } from "react-bootstrap";
import ComboxBox from "./combo";
const ProductsMainPageSearch = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };

  const type = [
    { id: 1, title: "شهری" },
    { id: 1, title: "آفرود" },
    { id: 1, title: "ATV" },
  ];
  let years = [];
  for (var i = 1350; i <= 1402; i++) {
    years.push({ id: i, title: i });
  }

  const motorcycleBrands = [
    { id: 1, title: "Honda" },
    { id: 2, title: "Yamaha" },
    { id: 3, title: "Kawasaki" },
    { id: 4, title: "Suzuki" },
    { id: 5, title: "Ducati" },
    { id: 6, title: "Harley-Davidson" },
    { id: 7, title: "BMW" },
    { id: 8, title: "Triumph" },
  ];
  const motorcycleModels = [
    {
      brand: { id: 1, title: "Honda" },
      models: [
        { id: 1, title: "CBR600RR" },
        { id: 2, title: "CBR1000RR" },
        { id: 3, title: "CRF450R" },
        { id: 4, title: "CRF250L" },
        { id: 5, title: "Africa Twin" },
        { id: 6, title: "CB500F" },
      ],
    },
    {
      brand: { id: 2, title: "Yamaha" },
      models: [
        { id: 1, title: "YZF-R1" },
        { id: 2, title: "YZF-R6" },
        { id: 3, title: "MT-09" },
        { id: 4, title: "MT-07" },
        { id: 5, title: "YZ450F" },
        { id: 6, title: "XT660Z Tenere" },
      ],
    },
    {
      brand: { id: 3, title: "Kawasaki" },
      models: [
        { id: 1, title: "Ninja ZX-6R" },
        { id: 2, title: "Ninja ZX-10R" },
        { id: 3, title: "Ninja 650" },
        { id: 4, title: "Z900" },
        { id: 5, title: "KX250F" },
        { id: 6, title: "Versys 650" },
      ],
    },
    {
      brand: { id: 4, title: "Suzuki" },
      models: [
        { id: 1, title: "GSX-R600" },
        { id: 2, title: "GSX-R1000" },
        { id: 3, title: "RM-Z450" },
        { id: 4, title: "DR-Z400S" },
        { id: 5, title: "V-Strom 650" },
        { id: 6, title: "SV650" },
      ],
    },
    {
      brand: { id: 5, title: "Ducati" },
      models: [
        { id: 1, title: "Panigale V4" },
        { id: 2, title: "Monster 821" },
        { id: 3, title: "Diavel" },
        { id: 4, title: "Scrambler Icon" },
        { id: 5, title: "Multistrada 950" },
        { id: 6, title: "Hypermotard" },
      ],
    },
  ];

  return (
    <div>
      <Tabs activeKey={activeTab} onSelect={handleTabChange} dir="rtl">
        <Tab eventKey="tab1" title="Tab 1">
          <div dir="rtl">
            <Row>
              <Col>
                <ComboxBox title="نوع" options={type} />
              </Col>
              <Col>
                <ComboxBox title="سال" options={years} />
              </Col>
              <Col>
                <ComboxBox title="بزند" options={motorcycleBrands} />
              </Col>
              <Col>
                <ComboxBox title="مدل" options={motorcycleModels[0].models} />
              </Col>
              <Col></Col>
            </Row>
          </div>
        </Tab>
        <Tab eventKey="tab2" title="Tab 2">
          <div dir="rtl">Content for Tab 2</div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProductsMainPageSearch;
