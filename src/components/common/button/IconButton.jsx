// 이미지가 들어간 버튼
import CartIcon from "@/assets/common/icons/CartIconGray.svg";
const IconButton = ({ icon = CartIcon, alt, onClick, label }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="p-2 bg-white border border-gray-400 rounded-md text-xs  flex flex-row items-center justify-center w-full"
    >
      <div className="flex items-center gap-2">
        <img src={icon} alt={alt} className="w-4 h-4" />
        <div>{label}</div>
      </div>
    </button>
  );
};

export default IconButton;
