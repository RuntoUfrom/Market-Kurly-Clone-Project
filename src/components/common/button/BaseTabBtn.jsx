/**
 * TabBtn - 단일 탭 버튼
 *
 * @param {object} props
 * @param {string} props.label - 탭에 표시할 텍스트
 * @param {boolean} [props.active=true] - 현재 활성 상태 여부
 * @param {function} props.onClick - 클릭 핸들러
 * @param {"purple" | "black"} [props.color="purple"] - 탭 색상 테마
 * @param {boolean} [props.stretch=true] - 너비 꽉 채움 여부 (flex-1)
 * @param {boolean} [props.small=false] - 작은 폰트 사이즈 사용 여부
 */
const BaseTabBtn = ({
  label,
  active = true,
  onClick,
  color = "purple",
  stretch = true,
  small = false,
}) => {
  const fontsize = small ? "text-xs" : "text-sm";
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
      <span className="relative inline-block">{label}</span>
      <span
        className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-0.75 ${bgColor} transition-all duration-200 ${
          active ? "w-full" : "w-0"
        }`}
      />
    </button>
  );
};

export default BaseTabBtn;
