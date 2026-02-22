/**
 * 메뉴 카테고리 네비게이션 버튼 컴포넌트
 *
 * @param {Object} props
 * @param {string} [props.emoji=""] - 이모지 아이콘
 * @param {string} props.label - 카테고리 이름
 * @param {boolean} props.isMainTab - 메인 탭 여부 (강조 스타일 및 화살표 표시)
 */
const MenuNavBtn = ({ emoji = "", label, isMainTab = false, onClick }) => {
  return (
    <div onClick={onClick}>
      <div className="flex items-center justify-between p-5 py-2 bg-white">
        <div className="flex items-center gap-1">
          {emoji && <span>{emoji}</span>}
          <span
            className={
              isMainTab ? "text-lg font-bold" : "text-sm text-gray-600"
            }
          >
            {label}
          </span>
        </div>
        {isMainTab && <span className="text-gray-400 text-sm">&gt;</span>}
      </div>
    </div>
  );
};
export default MenuNavBtn;
