/**
 * TabBtn - 단일 탭 버튼
 *
 * @param {object} props
 * @param {string} props.label - 탭에 표시할 텍스트
 * @param {boolean} props.active - 현재 활성 상태 여부
 * @param {() => void} props.onClick - 클릭 핸들러
 */
const BaseTabBtn = ({ label, active = true, onClick }) => {
  let variant = "primary";
  if (label === "마켓컬리" || label === "뷰티컬리") {
    variant = "black";
  }
  let fontsize = "text-sm";
  if (label.length > 5) {
    fontsize = "text-[10px]";
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex flex-1 flex-col items-center justify-center py-1 ${fontsize} transition-colors ${
        active ? `text-${variant} font-semibold` : "text-gray-400"
      }`}
    >
      <span className="relative inline-block">{label}</span>
      <span
        className={`absolute left-1/2 -translate-x-1/2 -bottom-2 h-0.5 bg-${variant} transition-all duration-200 ${
          active ? "w-full" : "w-0"
        }`}
      />
    </button>
  );
};

export default BaseTabBtn;
