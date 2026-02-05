import React, { useEffect, useRef } from "react";
import useLayerStore from "@/stores/useLayerStore";

const DialogFullPopup = ({ layerIndex, callbackFunc, children }) => {
  const { layerList, removeLayerList } = useLayerStore();
  const lastIndex = layerList.length - 1;
  const isClosedRef = useRef(false);
  const dialogRef = useRef(null);

  const dialogClose = (result) => {
    isClosedRef.current = true;
    removeLayerList(layerIndex);
    callbackFunc && callbackFunc(result);
  };

  // 비정상적인 종료를 위한 안전장치
  useEffect(() => {
    return () => {
      if (isClosedRef.current === false) {
        callbackFunc && callbackFunc();
      }
    };
  }, []);

  return (
    <div
      ref={dialogRef}
      className={`fixed w-full min-w-[370px] max-w-[430px] mx-auto inset-0 z-[1000] ${
        layerIndex === lastIndex ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={layerIndex === lastIndex ? "false" : "true"}
    >
      <div className="flex h-full w-full flex-col bg-white border border-gray-200">
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { dialogClose });
        })}
      </div>
    </div>
  );
};

export default DialogFullPopup;
