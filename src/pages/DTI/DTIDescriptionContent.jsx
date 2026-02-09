import ProductImage from "@/components/common/ProductImage";
import ProductDetailInfo from "@/components/feature/DTI/ProductDetailInfo";
import MarketImage01 from "@/assets/foodmarketimages/MarketImage01.jpg";
import ImageMappingHelper from "@/constants/ImageMappingHelper";
import BasicSubmitButton from "@/components/common/button/BasicSubmitButton";
import SectionHeader from "@/components/common/SectionHeader";
import ProductScrollSection from "@/components/common/ProductScrollSection";
import MarketProductsMockData from "@/mocks/data/HOM/MarketProducts";
import ProductSimpleSection from "@/components/common/ProductSimpleSection";
const DTIDescriptionContent = ({ product }) => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-80 overflow-hidden">
        <ProductImage
          productImage={ImageMappingHelper[product.productImage]}
          rounded={false}
        />
      </div>
      <ProductDetailInfo product={product} />
      <div className="w-5/6 mx-auto">
        <BasicSubmitButton
          text="[신세계 푸드] 20% 쿠폰 받기"
          variant="unfill"
          onClick={() => {
            console.log("쿠폰 받기 클릭 ");
          }}
        />
      </div>
      {/* 상품 정보 그리드 */}
      <div className="w-full grid grid-cols-[80px_1fr] gap-y-4 text-sm px-4 py-4 border-t border-gray-100">
        <span className="text-gray-500 font-medium">배송</span>
        <div>
          <p className="font-medium">
            {product.isDawnDelivery ? "샛별배송" : "일반배송"}
          </p>
          <p className="text-xs text-gray-400">
            23시 전 주문 시 수도권/충청 내일 아침 7시 전 도착
          </p>
          <p className="text-xs text-gray-400">(그 외 지역 아침 8시 전 도착)</p>
        </div>

        <span className="text-gray-500 font-medium">판매자</span>
        <span>컬리</span>
      </div>
      <SectionHeader main="이 상품은 어때요?" />
      <ProductScrollSection
        products={MarketProductsMockData}
        onClickMore={() => {
          console.log("전체 보기 클릭");
        }}
      />
      <SectionHeader main="다른 사람이 함께 본 상품" />
      <ProductSimpleSection products={MarketProductsMockData} />
    </div>
  );
};
export default DTIDescriptionContent;
