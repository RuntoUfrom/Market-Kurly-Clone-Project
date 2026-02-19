import ProductCard from "@/components/common/ProductCard";
import ImageMappingHelper from "@/constants/ImageMappingHelper";

/**
 * 간단한 가로형 상품 카드 리스트를 보여주는 섹션 컴포넌트
 *
 * @param {Object} props
 * @param {Array} [props.products=[]] - 표시할 상품 데이터 목록 (최대 4개 표시)
 */
const ProductSimpleSection = ({ products = [] }) => {
  const displayedProducts = products.slice(0, 4); // 최대 4개 상품만 표시
  return (
    <div className="flex flex-col mb-2 bg-white w-full px-3">
      {displayedProducts.map((product, index) => (
        <ProductCard
          key={index}
          product={{
            ...product,
            productImage: ImageMappingHelper[product.productImage],
          }}
          layout="simple-horizontal"
        />
      ))}
    </div>
  );
};
export default ProductSimpleSection;
