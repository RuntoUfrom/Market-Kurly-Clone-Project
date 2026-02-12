import CartIcon from "@/assets/common/icons/CartIconGray.svg";
import UndoIcon from "@/assets/common/icons/UndoIcon.svg";
/**
 * 아이콘 버튼 컴포넌트
 *
 * @param {Object} props
 * @param {"CART" | "UNDO"} [props.icon="CART"] - 표시할 아이콘 타입
 * @param {string} props.alt - 아이콘 대체 텍스트
 * @param {function} props.onClick - 클릭 핸들러
 * @param {string} props.label - 버튼 라벨
 * @param {string} [props.fontSize="text-xs"] - 텍스트 크기 클래스
 */
const IconButton = ({
  icon = "CART",
  alt,
  onClick,
  label,
  fontSize = "text-xs",
}) => {
  let iconvar = "";
  if (icon === "CART") {
    iconvar = CartIcon;
  } else if (icon === "UNDO") {
    iconvar = UndoIcon;
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-2 bg-white border border-gray-400 rounded-md ${fontSize} flex flex-row items-center justify-center w-full`}
    >
      <div className="flex items-center gap-2">
        <img src={iconvar} alt={alt} className="w-4 h-4" />
        <div>{label}</div>
      </div>
    </button>
  );
};

export default IconButton;
