import DTIDescriptionContent from "@/pages/DTI/DTIDescriptionContent";
import DTIDetailsContent from "@/pages/DTI/DTIDetailsContent";
import DTIReviewsContent from "@/pages/DTI/DTIReviewsContent";
import DTIInquiryContent from "@/pages/DTI/DTIInquiryContent";
import BackHeader from "@/components/common/layout/BackHeader";
import CustomTabBtns from "@/components/common/layout/CustomTabBtns";
import NaviBar from "@/components/common/layout/NaviBar";
import PurChaseBar from "@/components/feature/DTI/PurChaseBar";
import { useState, useEffect } from "react";
import { productDetailService } from "@/api/services/DTI/productDetailService";
const DTI001 = () => {
  const [selectproduct, setSelectProduct] = useState(null);
  const ProductDetailTabList = ["상품설명", "상세정보", "후기", "문의"];
  const [selectedTab, setSelectedTab] = useState("상품설명");

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await productDetailService({ productId: "PM0001" });
      setSelectProduct(response);
    };
    fetchProduct();
  }, []);

  const handleTabChange = (label) => {
    setSelectedTab(label);
  };
  const renderTab = () => {
    switch (selectedTab) {
      case "상품설명":
        return <DTIDescriptionContent product={selectproduct} />;
      case "상세정보":
        return (
          <DTIDetailsContent
            detailDescription={selectproduct.detailDescription}
          />
        );
      case "후기":
        return <DTIReviewsContent />;
      case "문의":
        return <DTIInquiryContent />;
      default:
        return null;
    }
  };
  return (
    <div className="h-full flex flex-col">
      {/* 상단 고정 영역 */}
      <header className="shrink-0 bg-white">
        <BackHeader
          isSearch={true}
          isHome={true}
          label={selectproduct?.productName}
        />
        <CustomTabBtns
          variant={4}
          active={selectedTab}
          onChange={handleTabChange}
          labels={ProductDetailTabList}
        />
      </header>

      {/* 스크롤 영역 */}
      <main className="flex-1 overflow-y-auto no-scrollbar">
        {selectproduct && renderTab()}
      </main>

      {/* 하단 고정 영역 */}
      <footer className="shrink-0 bg-white">
        <PurChaseBar />
      </footer>
    </div>
  );
};
export default DTI001;
