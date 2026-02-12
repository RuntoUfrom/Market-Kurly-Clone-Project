import SectionHeader from "@/components/common/SectionHeader";
import BrandImageList from "@/components/feature/HOM/BrandImageList";

const BeautyBrandSection = ({ brandImageList, main, description }) => {
  return (
    <div className="flex flex-col bg-white gap-2 py-1">
      <div className="flex flex-row items-center justify-center">
        <SectionHeader main={main} description={description} />
        <div className="font-light text-gray-500 text-[10px] p-1 px-2 border-gray-300 border rounded-2xl mx-4 shrink-0 whitespace-nowrap">
          전체보기
        </div>
      </div>
      <div className="px-4">
        <BrandImageList brandImageList={brandImageList} />
      </div>
    </div>
  );
};
export default BeautyBrandSection;
