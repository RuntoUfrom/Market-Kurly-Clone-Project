import CartIcon from "@/assets/common/icons/CartIconGray.svg";
import UndoIcon from "@/assets/common/icons/UndoIcon.svg";
/**
 *
 * @param {icon:CART|UNDO}
 * @returns
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
