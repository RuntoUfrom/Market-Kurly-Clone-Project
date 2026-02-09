import MorePurpleIcon from "@/assets/common/icons/MorePurpleIcon.svg";
const SectionHeader = ({
  main = "",
  description = "",
  isButtonAll = false,
  isButtonMore = false,
  onClick,
  emoji = "",
}) => {
  return (
    <div className="w-full px-4 py-3 bg-white">
      <div className="flex items-center justify-between">
        <div>
          {emoji && <span>{emoji}</span>}
          <span className="text-base font-bold text-gray-900">{main}</span>
        </div>

        {isButtonAll && (
          <button
            onClick={onClick}
            className="flex items-center text-sm text-primary"
          >
            전체보기
            <span className="ml-1">&gt;</span>
          </button>
        )}
        {isButtonMore && (
          <button
            onClick={onClick}
            className="p-1 flex items-center flex-row text-xs text-primary gap-1"
          >
            다음 상품
            <img src={MorePurpleIcon} alt="더보기" className="w-3 h-3" />
          </button>
        )}
      </div>

      {description && (
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      )}
    </div>
  );
};
export default SectionHeader;
