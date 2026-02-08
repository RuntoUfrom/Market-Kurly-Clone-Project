import CustomTabBtns from "@/components/common/layout/CustomTabBtns";
import HomHeader from "@/components/common/layout/HomHeader";
import { useState } from "react";

import NaviBar from "@/components/common/layout/NaviBar";
import HOMBestTab from "./HOMBestTab";
import HOMRecommandTab from "./HOMRecommandTab";

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
        return <HOMRecommandTab />;
      case "베스트":
        return <HOMBestTab />;
      default:
        return null;
    }
  };
  return (
    <div className="h-full">
      {/* 상단 고정 영역 */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full min-w-85 max-w-100 z-10 bg-white">
        <HomHeader />
        <CustomTabBtns
          variant={7}
          active={selectedTab}
          onChange={handleTabChange}
          labels={MarketKurlyTabList}
        />
      </div>

      {/* 스크롤 영역 */}
      <div className="h-full overflow-y-auto no-scrollbar pt-20 pb-14">
        {renderTab()}
      </div>
      {/* 하단 고정 영역 */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full min-w-85 max-w-100 z-10 bg-white">
        <NaviBar />
      </div>
    </div>
  );
};
export default HOM001;
