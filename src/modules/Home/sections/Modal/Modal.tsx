"use client";
import React from "react";
import { Modal } from "@/Components/ui";
import WorkModalDetails from "../WorkModalDetails";
import { IVisible } from "../work/WorkClient";

type propsTy = {
  isVisible: IVisible;
  setModalState: (value: boolean) => void;
};

const CsModal = ({ isVisible, setModalState }: propsTy) => {
  return (
    <Modal
      visible={isVisible?.visible}
      onCancel={() => setModalState(false)}
      title={isVisible?.details?.name}
      footer={false}
    >
      {isVisible.type === "workModal" && <WorkModalDetails {...isVisible} />}
    </Modal>
  );
};

export default CsModal;
