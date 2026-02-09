import ProductCard from "@/components/common/ProductCard";
import ImageMappingHelper from "@/constants/ImageMappingHelper";
import NextPurpleIcon from "@/assets/common/icons/NextPurpleIcon.svg";
import MenuCard from "@/components/common/button/MenuCard";

const ProductScrollSection = ({ products = [], onClickMore }) => {
  const displayProducts = products.slice(0, 10);

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
      {products.length > 10 && (
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
