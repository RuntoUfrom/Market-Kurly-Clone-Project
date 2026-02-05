import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// 다이얼로그를 감싸는 컴포넌트
const DialogWrapper = ({ children }) => {
  const lastFocusRef = useRef(null); //팝업을 열기 전 포커스 위치 기록할 Ref 변수
  const wrapperRef = useRef(); //팝업 전체를 감싸는 껍데기를 가리키는 리모콘

  useEffect(() => {
    lastFocusRef.current = document.activeElement; //포커스되었던 요소가 뭔지 기억
    wrapperRef.current?.firstElementChild?.focus?.(); // 팝업으로 포커스 이동
    const layout = document.getElementById("layout-root");

    let prevOverflow = "";
    if (layout) {
      prevOverflow = layout.style.overflow;
      layout.style.overflow = "hidden";
    }
    return () => {
      //팝업이 사라질 때 실행
      if (lastFocusRef.current) {
        lastFocusRef.current.focus(); // 아까 포커스해둥 요소가 있다면 그곳으로 포커스 이동
      }
      if (layout) {
        layout.style.overflow = prevOverflow || "auto";
      }
    };
  }, []); //[]: 팝업이 처음 생성될 때 한번 실행되는 것

  const portalRoot = document.getElementById("dialog-root"); //id가 dialog-root인 태그를 찾음.
  const content = <div ref={wrapperRef}>{children}</div>; //랜더링할 콘텐츠

  // Layout 내부의 #dialog-root로 포털
  return portalRoot ? createPortal(content, portalRoot) : content;
};

export default DialogWrapper;
