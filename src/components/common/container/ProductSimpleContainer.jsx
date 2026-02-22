import ProductSimpleSection from "@/components/common/ProductSimpleSection";
import { useQuery } from "@tanstack/react-query";
import { productListService } from "@/api/services/HOM/productListService";
import SectionHeader from "@/components/common/SectionHeader";
const ProductSimpleContainer = ({
  category,
  page = 1,
  limit = 20,
  title = "",
}) => {
  const { data } = useQuery({
    queryKey: ["products", category, page, limit],
    queryFn: () => productListService({ category, page, limit }),
  });
  return (
    <div className="flex flex-col ">
      <SectionHeader main={title} />
      <ProductSimpleSection products={data?.data || []} />
    </div>
  );
};
export default ProductSimpleContainer;
