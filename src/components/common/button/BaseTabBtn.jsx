/**
 * TabBtn - 단일 탭 버튼
 *
 * @param {object} props
 * @param {string} props.label - 탭에 표시할 텍스트
 * @param {boolean} props.active - 현재 활성 상태 여부
 * @param {() => void} props.onClick - 클릭 핸들러
 */
const BaseTabBtn = ({
  label,
  active = true,
  onClick,
  color = "purple",
  stretch = false,
}) => {
  const fontsize = stretch ? "text-sm" : "text-xs";
  let textColor = "";
  let bgColor = "";
  if (color === "purple") {
    textColor = "text-primary";
    bgColor = "bg-primary";
  } else {
    textColor = "text-black";
    bgColor = "bg-black";
  }
  return (
    <button
      type="button"
      onClick={() => onClick(label)}
      className={`relative flex ${stretch ? "flex-1" : "shrink-0"} flex-col items-center justify-center px-3 pb-2 ${fontsize} transition-colors ${
        active ? `${textColor} font-semibold` : "text-gray-400"
      }`}
    >
      <span className="relative inline-block text-xs">{label}</span>
      <span
        className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 ${bgColor} transition-all duration-200 ${
          active ? "w-full" : "w-0"
        }`}
      />
    </button>
  );
};

export default BaseTabBtn;
