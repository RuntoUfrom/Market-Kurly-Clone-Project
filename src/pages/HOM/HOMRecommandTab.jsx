import MoveBanner from "@/components/common/MoveBanner";
import { MARKET_BANNER_LIST } from "@/constants/marketbannerMap";
import SectionHeader from "@/components/common/SectionHeader";
import ProductScrollSection from "@/components/common/ProductScrollSection";
import MarketProductsMockData from "@/mocks/data/HOM/MarketProducts";
import MenuGrid from "@/components/common/MenuGrid";
import { MENU_IMAGE_MAP } from "@/constants/menuImageMap";

const HOMRecommandTab = () => {
  return (
    <div>
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
        <MenuGrid
          isBar={true}
          rowNum={2}
          menuList={Object.keys(MENU_IMAGE_MAP)}
          className="mx-2"
        />{" "}
        <ProductScrollSection
          products={MarketProductsMockData}
          onClickMore={() => {
            console.log("전체 보기 클릭");
          }}
        />
        {/** isBar = false, rowNum = 1, menuList = {}, imageMap, activeMenu, onMenuClick  */}
      </div>
    </div>
  );
};
export default HOMRecommandTab;
