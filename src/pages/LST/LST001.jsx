import { useState } from "react";
import BackHeader from "@/components/common/layout/BackHeader";
import CustomTabBtns from "@/components/common/layout/CustomTabBtns";
import NaviBar from "@/components/common/layout/NaviBar";
const LST001 = () => {
  const [selectedTab, setSelectedTab] = useState("추천");
  const handleTabChange = (selectTab) => {
    setSelectedTab(selectTab);
    console.log(selectTab);
  };
  const MarketKurlyTabList = [
    "추천",
    "베스트",
    "세일",
    "패션",
    "리빙",
    "신상",
    "특가/혜택",
  ];
  return (
    <div className="h-full flex flex-col">
      {/* 상단 고정 영역 */}
      <header className="shrink-0 bg-white">
        <BackHeader isSearch={false} isHome={false} />
        <CustomTabBtns
          variant={7}
          active={selectedTab}
          onChange={handleTabChange}
          labels={MarketKurlyTabList}
        />
      </header>

      {/* 스크롤 영역 */}
      <main className="flex-1 overflow-y-auto no-scrollbar">{}</main>

      {/* 하단 고정 영역 */}
      <footer className="shrink-0 bg-white">
        <NaviBar />
      </footer>
    </div>
  );
};
export default LST001;
