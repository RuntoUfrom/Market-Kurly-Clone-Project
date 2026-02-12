import MorePurpleIcon from "@/assets/common/icons/MorePurpleIcon.svg";
/**
 * 섹션의 헤더(제목, 설명, 더보기 버튼 등)를 표시하는 컴포넌트
 *
 * @param {Object} props
 * @param {string} [props.main=""] - 메인 타이틀 텍스트
 * @param {string} [props.description=""] - 서브 설명 텍스트
 * @param {boolean} [props.isButtonAll=false] - '전체보기 >' 버튼 표시 여부
 * @param {boolean} [props.isButtonMore=false] - '다음 상품 >' 버튼 표시 여부
 * @param {function} props.onClick - 버튼 클릭 시 호출되는 핸들러
 * @param {string} [props.emoji=""] - 타이틀 옆에 표시할 이모지
 */
const SectionHeader = ({
  main = "",
  description = "",
  isButtonAll = false,
  isButtonMore = false,
  onClick,
  emoji = "",
}) => {
  return (
    <div className="w-full px-4 py-1 bg-white">
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
