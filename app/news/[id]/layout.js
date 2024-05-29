import React from "react";

const NewsDetailLayout = ({ modal, children }) => {
  console.log(modal, "modal");
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default NewsDetailLayout;
