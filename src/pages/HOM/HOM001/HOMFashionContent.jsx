import { moveBannerService } from "@/api/services/HOM/bannerService";
import MoveBanner from "@/components/common/MoveBanner";
import { useEffect, useState } from "react";
import Footer from "@/components/common/layout/Footer";
import MenuGrid from "@/components/common/MenuGrid";
import { HOM_FASHION_MENU_IMAGE_MAP } from "@/constants/HOMMarketMenuImageMap";
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
      <TimeDealContainer
        category="fashion"
        main={"다시는 오지 않은 트랜디함을 저렴하게"}
        description={"저렴한 가격으로 누릴수 있는 패션의 행복"}
      />
      <ProductScrollSectionContainer
        category="fashion"
        page={2}
        limit={10}
        title={"따듯한 겨울 나기"}
        description="겨울을 따듯하게 보내봐요"
      />
      <Footer />
    </div>
  );
};
export default HOMFashionContent;
