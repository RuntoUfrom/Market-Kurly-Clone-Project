import React, { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import useHistoryStore from "@/stores/useHistoryStore";
import { consumePendingBack } from "@/hooks/controllers/useHistoryController";
import DialogComponent from "@/components/common/dialog/DialogComponent";
import LoadingSpinner from "@/components/common/layout/LoadingSpinner";

// 리스너가 여러 개 등록되어도 하나의 플래그를 공유
let _isHandlingPopstate = false;

// 페이지 이동 시 historyList 실시간 모니터링
const HistoryMonitor = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    const { historyList } = useHistoryStore.getState();
    console.log(
      `[${navigationType}] ${location.pathname}`,
      "\n  historyList:",
      historyList.map((h) => h.url),
    );
  }, [location, navigationType]);

  // popstate 이벤트 리스너 (브라우저 뒤로 버튼 + navigate(-num) 공통 처리)
  useEffect(() => {
    const handlePopState = () => {
      // 모듈 레벨 플래그로 중복 호출 방지
      if (_isHandlingPopstate) return;
      _isHandlingPopstate = true;
      requestAnimationFrame(() => {
        _isHandlingPopstate = false;
      });

      const { historyList, removeHistoryList, setNowPageParams } =
        useHistoryStore.getState();

      const { num: backNum, preParams } = consumePendingBack();
      const diff = backNum || 1;

      console.log(
        `[popstate] diff: ${diff}, historyList 길이: ${historyList.length}`,
        "\n  처리 전:",
        historyList.map((h) => h.url),
      );

      if (historyList.length >= diff) {
        const targetEntry = historyList[historyList.length - diff];
        setNowPageParams({
          params: targetEntry?.nowparams || {},
          preParams,
        });
        removeHistoryList(diff);

        const updated = useHistoryStore.getState().historyList;
        console.log(
          "  처리 후:",
          updated.map((h) => h.url),
        );
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return null;
};

/**
 * 앱의 전체 페이지에 적용될 공통 레이아웃 컴포넌트
 * @param {object} props
 * @param {React.ReactNode} props.children - 레이아웃 내부에 표시될 페이지 컨텐츠
 */
const Layout = ({ children }) => {
  return (
    <div className="h-screen bg-gray-200">
      <HistoryMonitor />
      <div
        id="layout-root"
        className="relative mx-auto w-full min-w-[340px] max-w-100 h-screen bg-gray-100 flex flex-col"
      >
        <main className="flex-1 overflow-y-auto no-scrollbar">{children}</main>
        <div id="dialog-root" />
        <DialogComponent />
        <LoadingSpinner />
      </div>
    </div>
  );
};

export default Layout;
