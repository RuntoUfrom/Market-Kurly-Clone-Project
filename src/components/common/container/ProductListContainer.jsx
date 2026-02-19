import { productListService } from "@/api/services/HOM/productListService";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import SortSelectBtn from "../button/SortSelectBtn";
import FilterIcon from "@/assets/common/icons/FilterIcon.svg";
import FilterBar from "@/components/common/layout/FilterBar";
import ProductVerticalScrollSection from "@/components/common/ProductVerticalScrollSection";
import LayerUtils from "@/utils/LayerUtils";
import FilterBottomComponent from "../dialog/FilterBottomComponent";
/**
 * @param {'market'|"beauty"|"fashion"} category
 */
const FILTER_MAP = {
  beauty: [
    "가격",
    "브랜드",
    "피부타입",
    "유형",
    "혜택",
    "출시",
    "포장타입",
    "배송",
  ],
  market: ["가격", "브랜드", "유형", "혜택", "출시", "포장타입", "배송"],
};
const ProductListContainer = ({
  category,
  page = 1,
  limit = 20,
  isHOM,
  subMenu,
  tabKey,
}) => {
  const [sortOption, setSortOption] = useState("추천순");
  const [activeFilters, setActiveFilters] = useState([]);
  const { data } = useQuery({
    queryKey: [
      "products",
      category,
      page,
      (limit = 20),
      sortOption,
      activeFilters,
      isHOM,
      subMenu,
      tabKey,
    ],
    queryFn: () =>
      productListService({
        category,
        page,
        limit,
        sortOption,
        activeFilters,
        isHOM,
        subMenu,
        tabKey,
      }),
  });

  const baseFilters = FILTER_MAP[category] ?? [];
  const filterList = isHOM ? ["카테고리", ...baseFilters] : baseFilters;

  const handleResetFilter = () => {
    setActiveFilters([]);
  };

  const handleFilterOpen = async (active) => {
    const result = await LayerUtils.showPopup("BOTTOM", FilterBottomComponent, {
      data: {
        title: "필터",
        filterList,
        category,
        products: data?.baseProducts ?? [],
        activeFilters,
        handleResetFilter,
        active,
        isHOM,
      },
    });
    if (result?.confirmed) setActiveFilters(result.checkFilter);
  };

  return (
    <div className="bg-white">
      <div className="flex flex-row justify-between items-center mx-4 text-sm">
        <span className="text-sm text-gray-600 mx-2">
          총 {data?.pagination?.totalCount}개
        </span>
        <div className="flex flex-row items-center">
          <SortSelectBtn label={sortOption} onChange={setSortOption} />
          <div
            className="flex flex-row items-center gap-2"
            onClick={() => handleFilterOpen()}
          >
            <span className="text-sm text-gray-600">필터</span>
            <img
              src={FilterIcon}
              alt="filter icon"
              className="inline-block w-4 h-4"
            />
          </div>
        </div>
      </div>
      <div className="mx-4 mt-2">
        <FilterBar
          isKurlyOnly={true}
          isNew={true}
          isBeautyFest={category === "beauty"}
          filterList={filterList}
          category={category}
          onClick={handleFilterOpen}
        />
      </div>
      <div>
        <ProductVerticalScrollSection products={data?.data ?? []} />
      </div>
    </div>
  );
};
export default ProductListContainer;
