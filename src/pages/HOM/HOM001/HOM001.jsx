import { useState } from "react";
import CustomTabBtns from "@/components/common/layout/CustomTabBtns";
import HomHeader from "@/components/common/layout/HomHeader";
import NaviBar from "@/components/common/layout/NaviBar";

import HOMRecommandContent from "@/pages/HOM/HOM001/HOMRecommandContent";
import HOMBestContent from "@/pages/HOM/HOM001/HOMBestContent";
import HOMSaleContent from "@/pages/HOM/HOM001/HOMSaleContent";
import HOMFashionContent from "@/pages/HOM/HOM001/HOMFashionContent";
import HOMLivingContent from "@/pages/HOM/HOM001/HOMLivingContent";
import HOMNewContent from "@/pages/HOM/HOM001/HOMNewContent";
import HOMDealsContent from "@/pages/HOM/HOM001/HOMDealsContent";

const HOM001 = () => {
  const MarketKurlyTabList = [
    "추천",
    "베스트",
    "세일",
    "패션",
    "리빙",
    "신상",
    "특가/혜택",
  ];
  const [selectedTab, setSelectedTab] = useState("추천");
  const handleTabChange = (selectTab) => {
    setSelectedTab(selectTab);
    console.log(selectTab);
  };
  const renderTab = () => {
    switch (selectedTab) {
      case "추천":
        return <HOMRecommandContent />;
      case "베스트":
        return <HOMBestContent />;
      case "세일":
        return <HOMSaleContent />;
      case "패션":
        return <HOMFashionContent />;
      case "리빙":
        return <HOMLivingContent />;
      case "신상":
        return <HOMNewContent />;
      case "특가/혜택":
        return <HOMDealsContent />;
      default:
        return null;
    }
  };
  return (
    <div className="h-screen min-w-85 max-w-100 mx-auto flex flex-col">
      {/* 상단 고정 영역 */}
      <header className="shrink-0 bg-white">
        <HomHeader />
        <CustomTabBtns
          variant={7}
          active={selectedTab}
          onChange={handleTabChange}
          labels={MarketKurlyTabList}
        />
      </header>

      {/* 스크롤 영역 */}
      <main className="flex-1 overflow-y-auto no-scrollbar">{renderTab()}</main>

      {/* 하단 고정 영역 */}
      <footer className="shrink-0 bg-white">
        <NaviBar />
      </footer>
    </div>
  );
};
export default HOM001;
