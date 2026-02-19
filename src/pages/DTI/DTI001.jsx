import DTIDescriptionContent from "@/pages/DTI/DTIDescriptionContent";
import DTIDetailsContent from "@/pages/DTI/DTIDetailsContent";
import DTIReviewsContent from "@/pages/DTI/DTIReviewsContent";
import DTIInquiryContent from "@/pages/DTI/DTIInquiryContent";
import BackHeader from "@/components/common/layout/BackHeader";
import CustomTabBtns from "@/components/common/layout/CustomTabBtns";
import PurChaseBar from "@/components/feature/DTI/PurChaseBar";
import { useState, useEffect } from "react";
import {
  productDetailService,
  productDetailReviewService,
  productDetailInquiryService,
} from "@/api/services/DTI/productDetailService";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useHistoryController from "@/hooks/controllers/useHistoryController";

const DTI001 = () => {
  const { getPageParams } = useHistoryController();
  const { params } = getPageParams();
  const queryClient = useQueryClient();
  const productId = params?.productId || "PM0001"; // fallback for direct access
  const ProductDetailTabList = ["상품설명", "상세정보", "후기", "문의"];
  const [selectedTab, setSelectedTab] = useState("상품설명");
  const { data } = useQuery({
    queryKey: ["productDetail", productId],
    queryFn: () => productDetailService({ productId }),
  });
  //Prefetching 적용으로 상품 설명에 들어오면 후기/문의 탭 안눌러도 바로 정보를 우선 가져온다. staleTime 3분
  useEffect(() => {
    if (data) {
      queryClient.prefetchQuery({
        queryKey: ["productDetailReview", productId],
        queryFn: () => productDetailReviewService({ productId }),
      });
      queryClient.prefetchQuery({
        queryKey: ["productDetailInquiry", productId],
        queryFn: () => productDetailInquiryService({ productId }),
      });
    }
  }, [data, productId, queryClient]);

  const handleTabChange = (label) => {
    setSelectedTab(label);
  };
  const renderTab = () => {
    switch (selectedTab) {
      case "상품설명":
        return <DTIDescriptionContent product={data} />;
      case "상세정보":
        return (
          <DTIDetailsContent
            detailDescription={data.detailDescription}
            productId={productId}
          />
        );
      case "후기":
        return <DTIReviewsContent productId={productId} />;
      case "문의":
        return <DTIInquiryContent productId={productId} />;
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
          label={data?.productName}
          pageparam={productId}
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
        {data && renderTab()}
      </main>

      {/* 하단 고정 영역 */}
      <footer className="shrink-0 bg-white">
        <PurChaseBar />
      </footer>
    </div>
  );
};
export default DTI001;
