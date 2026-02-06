import React from "react";
import DialogComponent from "@/components/common/dialog/DialogComponent";

/**
 * 앱의 전체 페이지에 적용될 공통 레이아웃 컴포넌트
 * @param {object} props
 * @param {React.ReactNode} props.children - 레이아웃 내부에 표시될 페이지 컨텐츠
 */
const Layout = ({ children }) => {
  return (
    <div className="h-screen bg-gray-200">
      <div
        id="layout-root"
        className="relative mx-auto w-full min-w-[340px] max-w-[400px] h-screen bg-white flex flex-col"
      >
        <main className="flex-1 overflow-y-auto no-scrollbar">{children}</main>
        <div id="dialog-root" />
        <DialogComponent />
      </div>
    </div>
  );
};

export default Layout;
