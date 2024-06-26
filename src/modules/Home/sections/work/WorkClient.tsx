"use client";
import { Fragment, useState } from "react";
import CsModal from "../Modal/Modal";
import { workDetailType } from "../Work";

export type IVisible = {
  type: string;
  visible: boolean;
  details: null | workDetailType;
};

export default function WorkClient(props: workDetailType) {
  const [isVisible, setModalVisible] = useState<IVisible>({
    type: "",
    visible: false,
    details: null,
  });

  return (
    <Fragment>
      <button
        className="btn !w-[100%] !max-h-[50px] !m-0"
        onClick={() =>
          setModalVisible({
            visible: true,
            type: "workModal",
            details: props,
          })
        }
      >
        Click to get details
      </button>
      {isVisible.visible && (
        <CsModal isVisible={isVisible} setModalState={setModalVisible} />
      )}
    </Fragment>
  );
}
