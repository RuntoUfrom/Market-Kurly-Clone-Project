import MoveBanner from "@/components/common/MoveBanner";
import MenuGrid from "@/components/common/MenuGrid";
import { HOM_BEAUTY_MENU_IMAGE_MAP } from "@/constants/HOMMarketMenuImageMap";
import SectionHeader from "@/components/common/SectionHeader";
import ProductScrollSection from "@/components/common/ProductScrollSection";
import MarketProductsMockData from "@/mocks/data/HOM/MarketProducts";
import ProductRankSection from "@/components/common/ProductRankSection";
import { useEffect, useState } from "react";
import { moveBannerService } from "@/api/services/HOM/bannerService";
import Footer from "@/components/common/layout/Footer";
import ProductScrollSectionContainer from "@/components/common/container/ProductScrollSectionContainer";
import TimeDealContainer from "@/components/feature/HOM/TimeDealContainer";
import ProductRankContainer from "@/components/common/container/ProductRankContainer";
import useNavigateToPlace from "@/hooks/controllers/useNavigateToPlace";

const HOMBeautyRecommandContent = () => {
  //const { goToList } = useNavigateToPlace();
  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      const response = await moveBannerService({ type: "BEAUTY" });
      setBannerList(response);
    };
    fetchBanners();
  }, []);
  return (
    <div className="flex flex-col gap-2 bg-white">
      <MoveBanner bannerList={bannerList} />

      <MenuGrid
        isBar={true}
        rowNum={1}
        menuList={Object.keys(HOM_BEAUTY_MENU_IMAGE_MAP)}
        imageMap={HOM_BEAUTY_MENU_IMAGE_MAP}
      />
      <ProductScrollSectionContainer
        category="beauty"
        title="오직 뷰티컬리에서만 만나요"
        description="[KurlyOnly] 특별한 컬리만의 기획"
      />
      <TimeDealContainer
        category="beauty"
        main="타임특가"
        description={"무조건 본품 증정"}
      />
      <ProductRankContainer
        title="주간 랭킹"
        emoji="🏆"
        category={"beauty"}
        page={2}
      />
      <ProductScrollSectionContainer
        category="beauty"
        title="이주의 MD PICK"
        description="혜택으로 증명하는 믿음직한 추천템"
        page={2}
      />
      <Footer />
    </div>
  );
};
export default HOMBeautyRecommandContent;
