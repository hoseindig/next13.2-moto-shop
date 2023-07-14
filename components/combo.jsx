import React, { useState } from "react";
import { Form } from "react-bootstrap";

const ComboxBox = ({ title = "", options = [], val = null }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Form dir="rtl">
      <Form.Select
        dir="rtl"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="">{title}</option>
        {options &&
          options.map((itm, i) => {
            return (
              <option key={itm.id + i} value={itm.id}>
                {itm.title}
              </option>
            );
          })}
      </Form.Select>
    </Form>
  );
};

export default ComboxBox;
