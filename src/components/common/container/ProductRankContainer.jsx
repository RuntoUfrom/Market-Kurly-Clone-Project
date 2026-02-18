import { useQuery } from "@tanstack/react-query";
import { productListService } from "@/api/services/HOM/productListService";
import SectionHeader from "@/components/common/SectionHeader";
import FilterBtn from "../button/FilterBtn";
import ProductRankSection from "../ProductRankSection";
import useNavigateToList from "@/hooks/controllers/useNavigateToList";

const ProductRankContainer = ({
  category,
  page = 1,
  limit = 9,
  title = "",
  description = "",
  emoji = "👑",
  filterList = ["주얼리", "원피스/셋업", "상의", "하의"],
}) => {
  const { goToList } = useNavigateToList();
  const handleClickAll = () => goToList(title, category);

  const { data } = useQuery({
    queryKey: ["products", category, page, limit],
    queryFn: () => productListService({ category, page, limit }),
  });
  return (
    <div className="flex flex-col">
      <SectionHeader
        main={title}
        emoji={emoji}
        isButtonAll={true}
        onClick={handleClickAll}
      />
      {/*filterList.map((item) => (
        <FilterBtn key={item} label={item} icon={false} />
      ))*/}
      <ProductRankSection products={data?.data || []} />
      <button
        className="px-10 p-2 bg-gray-100 mx-8 rounded-xl font-medium text-sm text-gray-600"
        onClick={handleClickAll}
      >
        전체보기
      </button>
    </div>
  );
};
export default ProductRankContainer;
