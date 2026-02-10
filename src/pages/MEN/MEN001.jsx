import MenuHeader from "@/components/feature/MEN/MenuHeader";
import CustomTabBtns from "@/components/common/layout/CustomTabBtns";
import { useState } from "react";
import MENBeautyContent from "@/pages/MEN/MENBeautyContent";
import MENMarketContent from "@/pages/MEN/MENMarketContent";
import NaviBar from "@/components/common/layout/NaviBar";
const MEN001 = () => {
  const MarketKurlyTabList = ["마켓컬리", "뷰티컬리"];
  const [selectedTab, setSelectedTab] = useState("마켓컬리");

  const handleTabClick = (label) => {
    setSelectedTab(label);
  };
  const renderTab = () => {
    switch (selectedTab) {
      case "마켓컬리":
        return <MENMarketContent />;
      case "뷰티컬리":
        return <MENBeautyContent />;
      default:
        return null;
    }
  };
  return (
    <div className="h-full flex flex-col">
      <header className="shrink-0 bg-white">
        <MenuHeader />
        <CustomTabBtns
          variant={2}
          labels={MarketKurlyTabList}
          active={selectedTab}
          onChange={handleTabClick}
        />
      </header>
      <main className="flex-1 overflow-y-auto no-scrollbar">{renderTab()}</main>
      <footer className="shrink-0 bg-white">
        <NaviBar />
      </footer>
    </div>
  );
};
export default MEN001;
