import ProductCard from "@/components/common/ProductCard";
import SectionHeader from "@/components/common/SectionHeader";
import MarketProductsMockData from "@/mocks/data/HOM/MarketProducts";
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
    <div className="flex flex-col mb-4 bg-white w-full">
      {displayedProducts.map((product, index) => (
        <ProductCard
          key={index}
          product={{
            ...product,
            productImage: ImageMappingHelper[product.productImage],
          }}
          layout="simple-horizontal"
          className="p-2"
        />
      ))}
    </div>
  );
};
export default ProductSimpleSection;
