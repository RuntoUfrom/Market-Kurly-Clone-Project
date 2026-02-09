import { useState } from "react";
import CustomTabBtns from "@/components/common/layout/CustomTabBtns";
import HomHeader from "@/components/common/layout/HomHeader";
import NaviBar from "@/components/common/layout/NaviBar";

import HOMBeautyRecommandContent from "@/pages/HOM/HOM002/HOMBeautyRecommandContent";
import HOMBeautyBestContent from "@/pages/HOM/HOM002/HOMBeautyBestContent";
import HOMBeautyBrandContent from "@/pages/HOM/HOM002/HOMBeautyBrandContent";
import HOMBeautyNewContent from "@/pages/HOM/HOM002/HOMBeautyNewContent";
import HOMBeautyDealContent from "@/pages/HOM/HOM002/HOMBeautyDealContent";

const HOM002 = () => {
  const MarketKurlyTabList = [
    "추천",
    "베스트",
    "브랜드관",
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
        return <HOMBeautyRecommandContent />;
      case "베스트":
        return <HOMBeautyBestContent />;
      case "브랜드관":
        return <HOMBeautyBrandContent />;
      case "신상":
        return <HOMBeautyNewContent />;
      case "특가/혜택":
        return <HOMBeautyDealContent />;
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
          variant={5}
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
export default HOM002;
