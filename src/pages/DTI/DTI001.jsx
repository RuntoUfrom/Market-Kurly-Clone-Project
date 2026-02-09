import { useState } from "react";
import MarketProductsMockData from "@/mocks/data/HOM/MarketProducts";
import DTIDescriptionContent from "@/pages/DTI/DTIDescriptionContent";
import DTIDetailsContent from "@/pages/DTI/DTIDetailsContent";
import DTIReviewsContent from "@/pages/DTI/DTIReviewsContent";
import DTIInquiryContent from "@/pages/DTI/DTIInquiryContent";
import BackHeader from "@/components/common/layout/BackHeader";
import CustomTabBtns from "@/components/common/layout/CustomTabBtns";
import NaviBar from "@/components/common/layout/NaviBar";
import PurChaseBar from "@/components/feature/DTI/PurChaseBar";

const DTI001 = () => {
  const mockProduct = {
    ranking: 1,
    rankingCategory: "채소",
    // 2. 샛별 배송 여부
    isDawnDelivery: true,
    // 3. 브랜드명
    brandName: "농부의 아침",
    // 4. 상품 이름
    productName: "[실속] 유기농 파프리카 2입",
    // 5. 상품 설명 (상세 요약)
    shortDescription: "아삭한 식감과 풍부한 영양을 담은 친환경 파프리카",
    // 6. 상품 원산지
    origin: "국산",
    // 7. 할인율 (%)
    discountRate: 20,
    // 8. 할인 후 가격 (판매가)
    salesPrice: 3200,
    // 9. 원가
    originalPrice: 4000,
    // 10. 첫 구매 시 할인율 (%)
    firstPurchaseDiscountRate: 90,
    // 11. 첫 구매 시 할인가
    firstPurchasePrice: 400,
    productImage: "MarketImage01",
  };
  //Mock 데이터 테스트
  const productTest = MarketProductsMockData[0];
  const ProductDetailTabList = ["상품설명", "상세정보", "후기", "문의"];
  const [selectedTab, setSelectedTab] = useState("상품설명");
  const handleTabChange = (label) => {
    setSelectedTab(label);
  };
  const renderTab = () => {
    switch (selectedTab) {
      case "상품설명":
        return <DTIDescriptionContent product={mockProduct} />;
      case "상세정보":
        return <DTIDetailsContent />;
      case "후기":
        return <DTIReviewsContent />;
      case "문의":
        return <DTIInquiryContent />;
      default:
        return null;
    }
  };
  return (
    <div className="h-screen min-w-85 max-w-100 mx-auto flex flex-col">
      {/* 상단 고정 영역 */}
      <header className="shrink-0 bg-white">
        <BackHeader
          isSearch={true}
          isHome={true}
          label={productTest.productName}
        />
        <CustomTabBtns
          variant={4}
          active={selectedTab}
          onChange={handleTabChange}
          labels={ProductDetailTabList}
        />
      </header>

      {/* 스크롤 영역 */}
      <main className="flex-1 overflow-y-auto no-scrollbar">{renderTab()}</main>

      {/* 하단 고정 영역 */}
      <footer className="shrink-0 bg-white">
        <PurChaseBar />
      </footer>
    </div>
  );
};
export default DTI001;
