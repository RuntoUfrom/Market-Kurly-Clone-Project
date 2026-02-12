import BasicSubmitButton from "@/components/common/button/BasicSubmitButton";
import HeartIcon from "@/assets/common/icons/HeartIcon.png";
/**
 * 하단 고정 구매하기 바 컴포넌트 (찜하기 버튼 포함)
 */
const PurChaseBar = () => {
  return (
    <div className="flex items-center gap-3 px-4 py-3 border-t border-gray-200 bg-white">
      <button className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-lg shrink-0">
        <img src={HeartIcon} alt="찜" className="w-6 h-6" />
      </button>
      <div className="flex-1">
        <BasicSubmitButton text="구매하기" variant="fill" />
      </div>
    </div>
  );
};
export default PurChaseBar;
