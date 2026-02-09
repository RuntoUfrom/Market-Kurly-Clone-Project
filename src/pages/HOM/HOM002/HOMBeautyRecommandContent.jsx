import MoveBanner from "@/components/common/MoveBanner";
import { MARKET_BANNER_LIST } from "@/constants/marketbannerMap";
import MenuGrid from "@/components/common/MenuGrid";
import { MENU_IMAGE_MAP } from "@/constants/menuImageMap";
import SectionHeader from "@/components/common/SectionHeader";
import ProductScrollSection from "@/components/common/ProductScrollSection";
import MarketProductsMockData from "@/mocks/data/HOM/MarketProducts";
import RoundMenuList from "@/components/common/layout/RoundMenuList";
import ProductRankSection from "@/components/common/ProductRankSection";

const HOMBeautyRecommandContent = () => {
  return (
    <div>
      <MoveBanner bannerList={MARKET_BANNER_LIST} />
      <div className="mt-2">
        <MenuGrid
          isBar={true}
          rowNum={1}
          menuList={Object.keys(MENU_IMAGE_MAP)}
        />
      </div>

      <SectionHeader
        main={"오직 뷰티 컬리에서만 만나요"}
        description={"[Kurly Beauty] 단독 상품 모음"}
        isButtonAll={true}
        emoji={"💄"}
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
      <SectionHeader
        main={"이주의 MD 특가"}
        description={"혜택으로 증명하는 믿음직한 추천템"}
        isButtonAll={true}
        emoji={"💄"}
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
      <SectionHeader
        main={"브랜드관"}
        isButtonAll={true}
        onClickMore={() => {
          console.log("전체 보기 클릭");
        }}
      />
      {/**브랜드관 구현 */}
      <SectionHeader
        main={"카테고리별 랭킹"}
        isButtonAll={true}
        emoji={"👑"}
        onClickMore={() => {
          console.log("전체 보기 클릭");
        }}
      />
      <ProductRankSection products={MarketProductsMockData} />
    </div>
  );
};
export default HOMBeautyRecommandContent;
