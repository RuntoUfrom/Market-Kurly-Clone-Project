import ProductCard from "@/components/common/ProductCard";
import ImageMappingHelper from "@/constants/ImageMappingHelper";

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
