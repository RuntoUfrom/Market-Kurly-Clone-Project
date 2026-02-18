import { useQuery } from "@tanstack/react-query";
import { productListService } from "@/api/services/HOM/productListService";
import SectionHeader from "@/components/common/SectionHeader";
import FilterBtn from "../button/FilterBtn";
import ProductRankSection from "../ProductRankSection";

const ProductRankContainer = ({
  category,
  page = 1,
  limit = 9,
  title = "",
  description = "",
  emoji = "👑",
  onClickMore,
  filterList = ["주얼리", "원피스/셋업", "상의", "하의"],
}) => {
  const { data } = useQuery({
    queryKey: ["products", category, page, limit],
    queryFn: () => productListService({ category, page, limit }),
  });
  return (
    <div>
      <SectionHeader main={title} emoji={emoji} />
      {/*filterList.map((item) => (
        <FilterBtn key={item} label={item} icon={false} />
      ))*/}
      <ProductRankSection products={data?.data || []} />
    </div>
  );
};
export default ProductRankContainer;
