/**
 * 버튼을 누르면 프리뷰 컴포넌트를 펼쳐 보여주는 UI
 * @param {object} props
 * @param {string} props.id - 고유 ID
 * @param {string} props.label - 버튼에 표시할 텍스트
 * @param {React.ReactNode} props.children - 프리뷰로 표시할 컴포넌트
 * @param {string} [props.activeId] - 현재 열려있는 아이템 ID
 * @param {function} props.onToggle - 열기/닫기 토글 핸들러
 */
const DemoPreviewItem = ({ id, label, children, activeId, onToggle }) => {
  const isActive = activeId === id;

  return (
    <div>
      <button
        onClick={() => onToggle(id)}
        className="w-full text-left px-3 py-2 border rounded-md hover:bg-gray-50"
      >
        {label}
      </button>
      {isActive && (
        <div className="mt-2 p-3 border rounded-md bg-gray-50">{children}</div>
      )}
    </div>
  );
};

export default DemoPreviewItem;
