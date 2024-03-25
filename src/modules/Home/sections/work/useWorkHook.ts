"use client";
import { useState } from "react";

type IVisible = {
  type: string;
  visible: boolean;
};

export default function useWorkHook() {
  const [isVisible, setModalVisible] = useState<IVisible>({
    type: "",
    visible: false,
  });
  return { isVisible, setModalVisible };
}
