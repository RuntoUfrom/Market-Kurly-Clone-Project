import ProductCard from "./ProductCard";
import ImageMappingHelper from "@/constants/ImageMappingHelper";

const ProductRankSection = ({ products = [] }) => {
  // 9개까지만, 3개씩 열로 묶기
  const sliced = products.slice(0, 9);
  const columns = [];
  for (let i = 0; i < sliced.length; i += 3) {
    columns.push(sliced.slice(i, i + 3));
  }

  return (
    <div className="overflow-x-auto no-scrollbar">
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
