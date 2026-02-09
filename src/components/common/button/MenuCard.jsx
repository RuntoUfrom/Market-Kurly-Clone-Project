const MenuCard = ({
  LogoImage,
  label,
  onClick,
  isRounded = false,
  isSelected = false,
}) => {
  let variant = "";
  if (isSelected) {
    variant = "border-primary border-3";
  } else {
    variant = "";
  }
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center justify-center cursor-pointer`}
    >
      {isRounded ? (
        <div
          className={` w-16 h-16 overflow-hidden flex items-center justify-center rounded-full ${variant}`}
        >
          <img src={LogoImage} alt={`${label}`} className="w-full h-full" />
        </div>
      ) : (
        <img src={LogoImage} alt={`${label}`} className="w-10 h-10" />
      )}
      <span className="mt-1 text-xs text-gray-700 text-center">{label}</span>
    </div>
  );
};
export default MenuCard;
