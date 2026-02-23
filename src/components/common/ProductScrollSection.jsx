import ProductCard from "@/components/common/ProductCard";
import ImageMappingHelper from "@/constants/ImageMappingHelper";
import NextPurpleIcon from "@/assets/common/icons/NextPurpleIcon.svg";
/**
 * 가로 스크롤 가능한 상품 목록 섹션 컴포넌트
 * @param {Object} props
 * @param {Array} [props.products=[]] - 표시할 상품 데이터 목록 (최대 10개 표시)
 * @param {function} props.onClickMore - '전체보기' 버튼 클릭 시 호출되는 핸들러
 */
const ProductScrollSection = ({ products = [], onClickMore }) => {
  const displayProducts = products.slice(0, 9);

  return (
    <div className="flex overflow-x-auto scrollbar-hide px-2">
      {displayProducts.map((product) => (
        <ProductCard
          key={product.productId}
          product={{
            ...product,
            productImage: ImageMappingHelper[product.productImage],
          }}
          layout="vertical"
        />
      ))}
      {products.length > 9 && (
        <div className="flex flex-col justify-center ml-2 w-[16vw] shrink-0">
          <button
            onClick={onClickMore}
            className="flex flex-col items-center justify-center"
          >
            <div className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center">
              <img src={NextPurpleIcon} alt="다음" className="w-3 h-3" />
            </div>
            <div className="text-xs mt-3 font-medium ">전체보기</div>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductScrollSection;
