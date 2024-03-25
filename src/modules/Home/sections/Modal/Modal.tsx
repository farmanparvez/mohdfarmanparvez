"use client";
import React from "react";
import { Modal } from "@/Components/ui";
import WorkModalDetails from "../WorkModalDetails";
import { IVisible } from "../work/WorkClient";

type propsTy = {
  isVisible: IVisible;
  setModalState: React.Dispatch<React.SetStateAction<IVisible>>
};

const CsModal = ({ isVisible, setModalState }: propsTy) => {
  return (
    <Modal
      open={isVisible?.visible}
      onCancel={() => setModalState({ type: '', visible: false, details: null })}
      title={isVisible?.details?.name}
      footer={false}
    >
      {isVisible.type === "workModal" && <WorkModalDetails {...isVisible} />}
    </Modal>
  );
};

export default CsModal;
