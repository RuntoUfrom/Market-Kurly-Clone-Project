const MenuCard = ({ LogoImage, label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-center w-16 h-20 cursor-pointer"
    >
      <img src={LogoImage} alt={`${label}`} className="w-10 h-10" />
      <span className="mt-1 text-xs text-gray-700 text-center">{label}</span>
    </div>
  );
};
export default MenuCard;
