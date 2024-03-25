import React from "react";
import { Modal } from "antd";

const CustomModal = (props: any) => {
  return <Modal {...props}>{props.children}</Modal>;
};

export default CustomModal;
