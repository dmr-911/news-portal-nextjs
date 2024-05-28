import React from "react";

const SoloNews = ({ params }) => {
  console.log(params);
  return <p>{params.id}</p>;
};

export default SoloNews;
