/**
 * 메뉴 아이콘과 라벨을 보여주는 카드 컴포넌트
 *
 * @param {Object} props
 * @param {string} props.LogoImage - 이미지 소스
 * @param {string} props.label - 메뉴 라벨
 * @param {function} props.onClick - 클릭 핸들러
 * @param {boolean} [props.isRounded=false] - 둥근 모서리 스타일 여부 (원형 이미지)
 * @param {boolean} [props.isSelected=false] - 선택된 상태 여부 (테두리 강조)
 */
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
