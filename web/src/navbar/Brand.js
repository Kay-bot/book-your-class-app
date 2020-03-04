import React from "react";
import styled from "styled-components";

import logo2 from "../assets/logo2.png";

const Brand = () => {
  return <Image src={logo2} alt="Company Logo" />;
};

export default Brand;

const Image = styled.img`
  height: 100%;
  margin: auto 0;
`;
