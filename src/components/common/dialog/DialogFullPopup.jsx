import React, { useEffect, useRef } from "react";
import useLayerStore from "@/stores/useLayerStore";

/**
 * 전체 화면 팝업 래퍼 컴포넌트
 *
 * @param {Object} props
 * @param {number} props.layerIndex - 레이어 인덱스
 * @param {function} [props.callbackFunc] - 팝업 닫힘 시 호출되는 콜백
 * @param {React.ReactNode} props.children - 팝업 내부 컨텐츠
 */
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
      className={`fixed w-full min-w-[340px] max-w-[400px] mx-auto inset-0 z-[1000] ${
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
