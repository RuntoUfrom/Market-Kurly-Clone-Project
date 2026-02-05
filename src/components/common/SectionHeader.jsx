const SectionHeader = ({ main = "", description = "", onClickMore }) => {
  return (
    <div className="w-full px-4 py-3">
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900">💜 {main}</span>
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
