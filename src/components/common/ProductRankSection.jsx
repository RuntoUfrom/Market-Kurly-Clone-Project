import ProductCard from "./ProductCard";
import ImageMappingHelper from "@/constants/ImageMappingHelper";
/**
 * 상품 랭킹 섹션 컴포넌트
 *
 * @param {Object} props
 * @param {Array} [props.products=[]] - 랭킹에 표시할 상품 데이터 목록 (최대 9개 표시)
 */
const ProductRankSection = ({ products = [] }) => {
  // 9개까지만, 3개씩 열로 묶기
  const sliced = products.slice(0, 9);
  const columns = [];
  for (let i = 0; i < sliced.length; i += 3) {
    columns.push(sliced.slice(i, i + 3));
  }

  return (
    <div className="overflow-x-auto overflow-y-hidden no-scrollbar">
      <div className="flex">
        {columns.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col">
            {col.map((item, idx) => (
              <ProductCard
                key={item.productId}
                product={{
                  ...item,
                  productImage: ImageMappingHelper[item.productImage],
                }}
                layout="horizontal"
                rank={colIdx * 3 + idx + 1}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductRankSection;
