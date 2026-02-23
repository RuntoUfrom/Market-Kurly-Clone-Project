import CustomTabBtns from "@/components/common/layout/CustomTabBtns";
import { useState, useMemo } from "react";
import BasicSubmitButton from "@/components/common/button/BasicSubmitButton";
import SubIcon from "@/assets/common/icons/Sub.svg";
import CheckBox from "@/components/common/button/CheckBox";
import { applyFilters, matchesFilter } from "@/mocks/utils/filterProducts";
import { FILTER_OPTIONS_MAP } from "@/mocks/utils/filterProducts";
/**
 * @param {object} props
 * @param {Function} props.dialogClose - 팝업 닫기 함수 (DialogCenterPopup에서 전달)
 * @param {object} props.data - 팝업에 전달된 데이터
 */
const FilterBottomComponent = ({ dialogClose, data }) => {
  const [selectTab, setSelectTab] = useState(
    data.active ?? data.filterList?.[0],
  );
  const [checkFilter, setCheckFilter] = useState(data.activeFilters ?? []);
  const handleToggle = (option) => {
    setCheckFilter((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option],
    );
  };
  const handleConfirm = () => {
    dialogClose({ confirmed: true, checkFilter });
  };
  const handleReset = () => {
    setCheckFilter([]);
  };
  const handleUndoFilter = (item) => {
    setCheckFilter(checkFilter.filter((filter) => filter !== item));
  };
  const handleTab = (label) => {
    setSelectTab(label);
  };

  const filteredCount = useMemo(() => {
    return applyFilters(
      data.products ?? [],
      checkFilter,
      data.category,
      data.isHOM,
    ).length;
  }, [checkFilter, data.products, data.category, data.isHOM]);

  const productCount = (products, option, selectTab) => {
    const counts = products.filter((product) =>
      matchesFilter(product, selectTab, option),
    );
    return counts.length;
  };

  return (
    <div className="h-120 flex flex-col">
      <header className="shrink-0 bg-white">
        <div className="flex justify-center pt-3">
          <img src={SubIcon} />
        </div>
        <div className="text-base text-gray-700 font-medium mx-4 mt-4">
          {data.title}
        </div>
        <CustomTabBtns
          variant={data.filterList.length}
          labels={data.filterList}
          active={selectTab}
          onChange={handleTab}
        />
      </header>
      <main className="flex-1 overflow-y-auto no-scrollbar">
        <div className="p-4 flex flex-col gap-4">
          {FILTER_OPTIONS_MAP(data.category, data.isHOM)[selectTab]?.map(
            (option) => (
              <CheckBox
                key={`${selectTab}-${option}`}
                isCheck={checkFilter.includes(option)}
                label={option}
                number={productCount(data.products, option, selectTab)}
                onChange={() => handleToggle(option)}
              />
            ),
          )}
        </div>
      </main>
      <footer className="shrink-0 bg-white flex flex-col gap-2 mx-4">
        {checkFilter.length > 0 && (
          <span className="w-full border-t border-gray-200" />
        )}
        <div className="flex flex-row gap-2 overflow-x-auto scrollbar-hide">
          {checkFilter.map((item) => (
            <div
              key={item}
              className="font-base text-primary/40 text-sm shrink-0"
              onClick={() => handleUndoFilter(item)}
            >
              {`${item} X`}
            </div>
          ))}
        </div>
        <div className="flex flex-row ">
          <div
            className="p-4 font-medium text-gray-500 text-sm shrink-0"
            onClick={handleReset}
          >
            초기화
          </div>
          <BasicSubmitButton
            text={`${filteredCount}개 상품 보기`}
            onClick={handleConfirm}
          />
        </div>
      </footer>
    </div>
  );
};

export default FilterBottomComponent;
