import React from "react";
import { Helmet } from "react-helmet";
import { TestDiv } from "./styled";

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>My MarketPlace</title>
      </Helmet>

      <TestDiv />
    </>
  );
};

export default HomePage;

// 1-22 minutes
