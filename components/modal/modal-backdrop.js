"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ModalBackDrop = ({ newsItem }) => {
  const router = useRouter();
  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
    </>
  );
};

export default ModalBackDrop;
