//각 재품 소개 단락 헤더 ex : 설 선물 뭐하실래요? 전체보기 이런 내용
const SectionHeader = ({ main = "", description = "", onClickMore }) => {
  return (
    <div className="w-full px-4 py-3 bg-white">
      <div className="flex items-center justify-between">
        <span className="text-base font-bold text-gray-900">💜 {main}</span>
        <button
          onClick={onClickMore}
          className="flex items-center text-sm text-primary"
        >
          전체보기
          <span className="ml-1">&gt;</span>
        </button>
      </div>
      {description && (
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      )}
    </div>
  );
};
export default SectionHeader;
