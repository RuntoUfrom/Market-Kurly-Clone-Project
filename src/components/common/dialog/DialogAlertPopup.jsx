import React, { useEffect, useRef } from "react";
import useLayerStore from "@/stores/useLayerStore";

const modalOverlay = {
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  width: "100%",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "1000",
};

const modalContent = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  background: "white",
  width: "80%",
  height: "24%" /* 내용에 맞게 자동 조절, 최대 화면 절반 */,
  padding: "20px",
  boxSizing: "border-box",
  borderRadius: "10px",
};

// 센터 팝업을 감싸는 컴포넌트
/**
 * 중앙 알림 팝업 래퍼 컴포넌트
 *
 * @param {Object} props
 * @param {number} props.layerIndex - 레이어 인덱스
 * @param {function} [props.callbackFunc] - 팝업 닫힘 시 호출되는 콜백
 * @param {React.ReactNode} props.children - 팝업 내부 컨텐츠
 */
function DialogAlertPopup({ layerIndex, callbackFunc, children }) {
  const { layerList, removeLayerList } = useLayerStore();
  const isClosedRef = useRef(false);
  const dialogRef = useRef();
  const lastIndex = layerList.length - 1;

  const dialogClose = (result) => {
    isClosedRef.current = true;
    removeLayerList(layerIndex);
    callbackFunc && callbackFunc(result);
  };

  useEffect(() => {
    //비정상적인 종료를 위한 안전장치
    return () => {
      if (isClosedRef.current === false) {
        callbackFunc && callbackFunc();
      }
    };
  }, []);

  return (
    <div
      ref={dialogRef}
      style={modalOverlay}
      aria-hidden={layerIndex === lastIndex ? "false" : "true"}
      onClick={(e) => {
        if (e.target === dialogRef.current) dialogClose();
      }}
    >
      <div style={modalContent}>
        {/* eslint-disable react-hooks/refs */}
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { dialogClose });
        })}
        {/* eslint-enable react-hooks/refs */}
      </div>
    </div>
  );
}

export default DialogAlertPopup;
