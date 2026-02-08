import CustomTabBtns from "@/components/common/layout/CustomTabBtns";
import HomHeader from "@/components/common/layout/HomHeader";
import MoveBanner from "@/components/common/MoveBanner";
import { useState } from "react";
import { MARKET_BANNER_LIST } from "@/constants/marketbannerMap";
import SectionHeader from "@/components/common/SectionHeader";
import ProductScrollSection from "@/components/common/ProductScrollSection";
import MarketProductsMockData from "@/mocks/data/HOM/MarketProducts";
import MenuGrid from "@/components/common/MenuGrid";
import NaviBar from "@/components/common/layout/NaviBar";

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
  };
  return (
    <div className="flex flex-col h-full">
      {/* 상단 고정 영역 */}
      <div className="shrink-0">
        <HomHeader />
        <CustomTabBtns
          variant={7}
          active={selectedTab}
          onChange={handleTabChange}
          labels={MarketKurlyTabList}
        />
      </div>

      {/* 스크롤 영역 */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <MoveBanner bannerList={MARKET_BANNER_LIST} />
        <SectionHeader
          main={"최대 혜택으로 준비하는 설선물"}
          description={"헬스부터 뷰티 선물까지 12%쿠폰 추가 지급"}
          onClickMore={() => {
            console.log("전체 보기 클릭");
          }}
        />
        <ProductScrollSection
          products={MarketProductsMockData}
          onClickMore={() => {
            console.log("전체 보기 클릭");
          }}
        />
      </div>

      {/* 하단 고정 영역 */}
      <div className="shrink-0">
        <NaviBar />
      </div>
    </div>
  );
};
export default HOM001;
