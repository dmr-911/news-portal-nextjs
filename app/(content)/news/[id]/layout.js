import React from "react";

const NewsDetailLayout = ({ modal, children }) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default NewsDetailLayout;
