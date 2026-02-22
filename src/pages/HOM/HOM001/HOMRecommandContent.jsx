import MoveBanner from "@/components/common/MoveBanner";
import { moveBannerService } from "@/api/services/HOM/bannerService";
import MenuGrid from "@/components/common/MenuGrid";
import { HOM_MARKET_MENU_IMAGE_MAP } from "@/constants/HOMMarketMenuImageMap";
import Footer from "@/components/common/layout/Footer";
import { useEffect, useState } from "react";
import ProductScrollSectionContainer from "@/components/common/container/ProductScrollSectionContainer";
import TimeDealContainer from "@/components/feature/HOM/TimeDealContainer";
const HOMRecommandTab = () => {
  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      const response = await moveBannerService({ type: "MARKET" });
      setBannerList(response);
    };
    fetchBanners();
  }, []);

  return (
    <div className="flex flex-col gap-2 bg-white ">
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <MoveBanner bannerList={bannerList} />
        <ProductScrollSectionContainer
          category="market"
          title="최대 혜택으로 준비하는 설선물"
          description="헬스부터 뷰티 선물까지 12% 쿠폰 추가 지급"
          emoji="🎁"
          page={1}
        />
        <MenuGrid
          isBar={true}
          rowNum={2}
          menuList={Object.keys(HOM_MARKET_MENU_IMAGE_MAP)}
          imageMap={HOM_MARKET_MENU_IMAGE_MAP}
          className="mx-2"
        />
        <ProductScrollSectionContainer
          category="market"
          page={2}
          title="오늘의 최저가 도전"
          description="베스트템부터 SNS핫템까지!!"
          emoji="🔥"
        />
        <TimeDealContainer
          category={"market"}
          main={"최저가 타임딜"}
          description={"다시는 돌아오지 않아요"}
        />
        <ProductScrollSectionContainer
          category="market"
          title="최대 혜택으로 준비하는 설선물"
          description="헬스부터 뷰티 선물까지 12% 쿠폰 추가 지급"
          emoji="🎁"
          page={1}
        />
      </div>
      <Footer />
    </div>
  );
};
export default HOMRecommandTab;
