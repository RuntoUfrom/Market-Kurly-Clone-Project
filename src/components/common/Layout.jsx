import React from "react";
import DialogComponent from "@/components/common/dialog/DialogComponent";

/**
 * 앱의 전체 페이지에 적용될 공통 레이아웃 컴포넌트
 * @param {object} props
 * @param {React.ReactNode} props.children - 레이아웃 내부에 표시될 페이지 컨텐츠
 */
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-200">
      <div
        id="layout-root"
        className="relative mx-auto w-full min-w-[340px] max-w-[400px] min-h-screen bg-white overflow-y-auto no-scrollbar"
      >
        <main className="min-h-screen">{children}</main>
        <div id="dialog-root" />
        <DialogComponent />
      </div>
    </div>
  );
};

export default Layout;
