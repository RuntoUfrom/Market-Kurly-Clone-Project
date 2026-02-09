import ProductCard from "@/components/common/ProductCard";
import SectionHeader from "@/components/common/SectionHeader";
import MarketProductsMockData from "@/mocks/data/HOM/MarketProducts";
import ImageMappingHelper from "@/constants/ImageMappingHelper";

const ProductSimpleSection = ({ products = [] }) => {
  const displayedProducts = products.slice(0, 4); // 최대 4개 상품만 표시
  return (
    <div className="flex flex-col mb-6 bg-white w-full">
      <SectionHeader
        main="다른 고객이 함께 본 상품"
        isButtonMore={true}
        onClick={() => {
          console.log("다음 상품 버튼 클릭");
        }}
      />

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
