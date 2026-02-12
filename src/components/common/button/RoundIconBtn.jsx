import TopDirection from "@/assets/common/icons/TopDirectionIcon.svg";

/**
 * 둥근 형태의 아이콘 버튼 (현재 상단 이동 버튼으로 고정됨)
 */
const RoundIconBtn = () => {
  return (
    <div className="bg-white p-3 rounded-4xl w-10 h-10 flex flex-row justify-center">
      <img src={TopDirection} alt="위" />
    </div>
  );
};
export default RoundIconBtn;
