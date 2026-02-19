import ProductImage from "@/components/common/ProductImage";
import ProductDetailInfo from "@/components/feature/DTI/ProductDetailInfo";
import ImageMappingHelper from "@/constants/ImageMappingHelper";
import BasicSubmitButton from "@/components/common/button/BasicSubmitButton";
import Footer from "@/components/common/layout/Footer";
import ProductDetailNotice from "@/components/feature/DTI/ProductDetailNotice";
import ProductScrollSectionContainer from "@/components/common/container/ProductScrollSectionContainer";
import ProductSimpleContainer from "@/components/common/container/ProductSimpleContainer";

//상품 설명 탭
const DTIDescriptionContent = ({ product }) => {
  let category = "";
  if (product.productId.charAt(1) === "M") {
    category = "market";
  } else if (product.productId.charAt(1) === "B") {
    category = "beauty";
  } else if (product.productId.charAt(1) === "F") {
    category = "fashion";
  }

  return (
    <div className="flex flex-col bg-white">
      <div className="w-full h-80 overflow-hidden">
        <ProductImage
          productImage={ImageMappingHelper[product.productImage]}
          rounded={false}
        />
      </div>
      <ProductDetailInfo product={product} />
      <div className="w-5/6 mx-auto">
        <BasicSubmitButton
          text="[신세계] 20% 쿠폰 받기"
          variant="unfill"
          onClick={() => {
            console.log("쿠폰 받기 클릭 ");
          }}
        />
      </div>
      {/* 상품 정보 그리드 */}
      <div className="w-full grid grid-cols-[80px_1fr] gap-y-4 text-sm px-4 py-4 border-t border-gray-100 bg-white">
        <span className="text-gray-500 font-medium">배송</span>
        <div>
          <p className="font-medium">
            {product.isDawnDelivery ? "샛별배송" : "일반배송"}
          </p>
          {product.isDawnDelivery && (
            <div>
              <p className="text-xs text-gray-400">
                23시 전 주문 시 수도권/충청 내일 아침 7시 전 도착
              </p>
              <p className="text-xs text-gray-400">
                (그 외 지역 아침 8시 전 도착)
              </p>
            </div>
          )}
        </div>
        <span className="text-gray-500 font-medium">판매자</span>
        <span>{product.brandName}</span>
      </div>
      <div className="bg-white pt-2">
        <ProductScrollSectionContainer
          category={category}
          title={"이런 상품은 어때요?"}
        />
      </div>
      <div className="bg-white pt-2">
        <ProductSimpleContainer
          category={category}
          title={"다른 사람이 함께 본 상품"}
          page={3}
          limit={5}
        />
      </div>
      <div className="my-2">
        <ProductDetailNotice
          category={category}
          detailDescription={product.detailDescription}
        />
        <Footer />
      </div>
    </div>
  );
};
export default DTIDescriptionContent;
