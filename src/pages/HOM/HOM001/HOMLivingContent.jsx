import { moveBannerService } from "@/api/services/HOM/bannerService";
import MoveBanner from "@/components/common/MoveBanner";
import { useEffect, useState } from "react";
import Footer from "@/components/common/layout/Footer";
import MenuGrid from "@/components/common/MenuGrid";
import { HOM_MARKET_MENU_IMAGE_MAP } from "@/constants/HOMMarketMenuImageMap";
import TimeDealContainer from "@/components/feature/HOM/TimeDealContainer";
import ProductScrollSectionContainer from "@/components/common/container/ProductScrollSectionContainer";

const HOMLivingContent = () => {
  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      const response = await moveBannerService({ type: "LIVING" });
      setBannerList(response);
    };
    fetchBanners();
  }, []);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <MoveBanner bannerList={bannerList} />
        <div className="bg-white">
          <MenuGrid
            isBar={true}
            rowNum={2}
            menuList={Object.keys(HOM_MARKET_MENU_IMAGE_MAP)}
            imageMap={HOM_MARKET_MENU_IMAGE_MAP}
            className="mx-2"
          />
        </div>
        <ProductScrollSectionContainer
          category="living"
          title="프리미엄 주방 리빙 물품"
          description="할인으로 주방 리빙을 편리하게"
          page={1}
          limit={8}
        />
        <TimeDealContainer
          category="living"
          main="오늘의 특가"
          description="다시 돌아오지 않는 마지막 특가"
        />
        <ProductScrollSectionContainer
          category="living"
          title="가정을 행복하게하는 리빙 물품"
          description="칙칙한 집안을 흥미롭게"
          page={2}
          limit={8}
        />
      </div>
      <Footer />
    </div>
  );
};
export default HOMLivingContent;
