import MoveBanner from "@/components/common/MoveBanner";
import MenuGrid from "@/components/common/MenuGrid";
import { HOM_MARKET_MENU_IMAGE_MAP } from "@/constants/HOMMarketMenuImageMap";
import SectionHeader from "@/components/common/SectionHeader";
import ProductScrollSection from "@/components/common/ProductScrollSection";
import MarketProductsMockData from "@/mocks/data/HOM/MarketProducts";
import ProductRankSection from "@/components/common/ProductRankSection";
import { useEffect, useState } from "react";
import { moveBannerService } from "@/api/services/HOM/bannerService";
import useNavigateToList from "@/hooks/controllers/useNavigateToList";

const HOMBeautyRecommandContent = () => {
  const { goToList } = useNavigateToList();
  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      const response = await moveBannerService({ type: "BEAUTY" });
      setBannerList(response);
    };
    fetchBanners();
  }, []);
  return (
    <div>
      <MoveBanner bannerList={bannerList} />
      <div className="mt-2">
        <MenuGrid
          isBar={true}
          rowNum={1}
          menuList={Object.keys(HOM_MARKET_MENU_IMAGE_MAP)}
        />
      </div>

      <SectionHeader
        main={"오직 뷰티 컬리에서만 만나요"}
        description={"[Kurly Beauty] 단독 상품 모음"}
        isButtonAll={true}
        emoji={"💄"}
        onClick={() => goToList("오직 뷰티 컬리에서만 만나요", "beauty")}
      />
      <ProductScrollSection
        products={MarketProductsMockData}
        onClickMore={() => goToList("오직 뷰티 컬리에서만 만나요", "beauty")}
      />
      <SectionHeader
        main={"이주의 MD 특가"}
        description={"혜택으로 증명하는 믿음직한 추천템"}
        isButtonAll={true}
        emoji={"💄"}
        onClick={() => goToList("이주의 MD 특가", "beauty")}
      />
      <ProductScrollSection
        products={MarketProductsMockData}
        onClickMore={() => goToList("이주의 MD 특가", "beauty")}
      />
      <SectionHeader
        main={"브랜드관"}
        isButtonAll={true}
        onClick={() => goToList("브랜드관", "beauty")}
      />
      {/**브랜드관 구현 */}
      <SectionHeader
        main={"카테고리별 랭킹"}
        isButtonAll={true}
        emoji={"👑"}
        onClick={() => goToList("카테고리별 랭킹", "beauty")}
      />
      <ProductRankSection products={MarketProductsMockData} />
    </div>
  );
};
export default HOMBeautyRecommandContent;
