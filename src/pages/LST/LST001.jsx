import BackHeader from "@/components/common/layout/BackHeader";
import NaviBar from "@/components/common/layout/NaviBar";
import ProductListContainer from "@/components/common/container/ProductListContainer";
import useHistoryController from "@/hooks/controllers/useHistoryController";
import CustomTabBtns from "@/components/common/layout/CustomTabBtns";
const LST001 = () => {
  const { getPageParams } = useHistoryController();
  const { params } = getPageParams();
  const title = params?.title || "";
  const category = params?.category || "market";
  const label = params?.label;

  return (
    <div className="h-full flex flex-col">
      {/* 상단 고정 영역 */}
      <header className="shrink-0 bg-white">
        <BackHeader isSearch={false} isHome={false} label={title} />
      </header>
      {/* 스크롤 영역 */}
      <main className="flex-1 overflow-y-auto no-scrollbar">
        <ProductListContainer category={category} label={label} />
      </main>

      {/* 하단 고정 영역 */}
      <footer className="shrink-0 bg-white">
        <NaviBar />
      </footer>
    </div>
  );
};
export default LST001;
