import ProductCard from "@/components/common/ProductCard";
import ImageMappingHelper from "@/constants/ImageMappingHelper";

/**
 * 세로 스크롤(그리드) 형태의 상품 목록 섹션 컴포넌트
 *
 * @param {Object} props
 * @param {Array} [props.products=[]] - 표시할 상품 데이터 목록
 */
const ProductVerticalScrollSection = ({ products = [] }) => {
  return (
    <div className="grid grid-cols-2 gap-2 px-4">
      {products.map((product) => (
        <ProductCard
          key={product.productId}
          product={{
            ...product,
            productImage: ImageMappingHelper[product.productImage],
          }}
          layout="vertical"
        />
      ))}
    </div>
  );
};
export default ProductVerticalScrollSection;
