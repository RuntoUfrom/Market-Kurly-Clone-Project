import { moveBannerService } from "@/api/services/HOM/bannerService";
import MoveBanner from "@/components/common/MoveBanner";
import { useEffect, useState } from "react";
import Footer from "@/components/common/layout/Footer";
import MenuGrid from "@/components/common/MenuGrid";
import { HOM_FASHION_MENU_IMAGE_MAP } from "@/constants/HOMMarketMenuImageMap";
import ProductRankSection from "@/components/common/ProductRankSection";
import ProductRankContainer from "@/components/common/container/ProductRankContainer";
import ProductScrollSectionContainer from "@/components/common/container/ProductScrollSectionContainer";
import TimeDealContainer from "@/components/feature/HOM/TimeDealContainer";

const HOMFashionContent = () => {
  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      const response = await moveBannerService({ type: "FASHION" });
      setBannerList(response);
    };
    fetchBanners();
  }, []);
  return (
    <div className="flex flex-col gap-1 bg-white">
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <MoveBanner bannerList={bannerList} />
      </div>
      <MenuGrid
        isBar={true}
        rowNum={2}
        menuList={Object.keys(HOM_FASHION_MENU_IMAGE_MAP)}
        imageMap={HOM_FASHION_MENU_IMAGE_MAP}
        className="mx-2"
      />
      <ProductRankContainer title="주간 랭킹" category={"fashion"} />
      <ProductScrollSectionContainer
        category="fashion"
        page={1}
        limit={10}
        title={"투데이 피팅룸"}
        description="투데이 피팅 추천"
      />
      <TimeDealContainer category="beauty" endTime="" />
      <Footer />
    </div>
  );
};
export default HOMFashionContent;
