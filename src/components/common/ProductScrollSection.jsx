import ProductCard from "@/components/common/ProductCard";
import marketProductImageMap from "@/constants/marketProductImageMap";

const ProductScrollSection = ({ products = [], onClickMore }) => {
  const displayProducts = products.slice(0, 10);

  return (
    <div className="flex overflow-x-auto scrollbar-hide px-2">
      {displayProducts.map((product) => (
        <ProductCard
          key={product.productId}
          product={{
            ...product,
            productImage: marketProductImageMap[product.productImage],
          }}
          layout="vertical"
        />
      ))}
      {products.length > 10 && (
        <button
          onClick={onClickMore}
          className="flex items-center justify-center min-w-30 text-sm text-primary font-semibold"
        >
          전체보기 &gt;
        </button>
      )}
    </div>
  );
};

export default ProductScrollSection;
