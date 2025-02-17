import React from "react";
import HomeDigitalAgency from "./home-digital-agency";

const HomePage = () => <HomeDigitalAgency />;

export const Head = () => {
  return (
    <>
      <title>FinxLab - Home</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  );
};

export default HomePage;
