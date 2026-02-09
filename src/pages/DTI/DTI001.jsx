import CustomTabBtns from "@/components/common/layout/CustomTabBtns";
import { useState } from "react";
import ProductImage from "@/components/common/ProductImage";
import MarketProductsMockData from "@/mocks/data/HOM/MarketProducts";
import ImageMappingHelper from "@/constants/ImageMappingHelper";
import DetailProductButton from "@/components/common/layout/DetailProductButton";
import ProductDetailInfo from "@/components/feature/DTI/ProductDetailInfo";
import SectionHeader from "@/components/common/SectionHeader";
import ProductScrollSection from "@/components/common/ProductScrollSection";
import ProductCard from "@/components/common/ProductCard";

const DTI001 = ({}) => {
  //Mock 데이터 테스트
  const productTest = MarketProductsMockData[0];
  const tablist = ["상품설명", "상세정보", "후기", "문의"];
  const [selectedTab, setSelectedTab] = useState("상품설명");
  const handleTabChange = (label) => {
    setSelectedTab(label);
  };

  return (
    <div className="h-full">
      {/* 상단 고정 영역 */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full min-w-85 max-w-100 z-10 bg-white">
        <CustomTabBtns
          variant={4}
          labels={tablist}
          active={selectedTab}
          onChange={handleTabChange}
        />
      </div>

      {/* 스크롤 영역 - 상단/하단 고정 영역만큼 패딩 */}
      <div className="h-full overflow-y-auto no-scrollbar pt-12 pb-14">
        <div className="max-w-95 max-h-95 overflow-hidden mx-auto">
          <ProductImage
            productImage={ImageMappingHelper[productTest.productImage]}
            topBadgeText={productTest.topBadgeText}
            bottomBannerText={productTest.bottomBannerText}
          />
        </div>
        <ProductDetailInfo product={productTest} />
        <SectionHeader main="이 상품은 어때요?" />
        <ProductScrollSection products={MarketProductsMockData} />
        <SectionHeader main="다른 고객이 함께 본 상품" />

        {MarketProductsMockData.slice(0, 5).map((item) => (
          <ProductCard
            key={item.productId}
            product={item}
            layout="simple-horizontal"
          />
        ))}
      </div>

      {/* 하단 고정 영역 */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full min-w-85 max-w-100 z-10 bg-white">
        <DetailProductButton />
      </div>
    </div>
  );
};
export default DTI001;
