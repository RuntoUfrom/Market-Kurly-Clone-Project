/**
 * Alert 전용 컨텐츠 컴포넌트
 * @param {object} props
 * @param {Function} props.dialogClose - 팝업 닫기 함수
 * @param {string} props.title - Alert 제목
 * @param {string} [props.message] - Alert 부가 메시지
 */
const AlertComponent = ({ dialogClose, title, message }) => {
  const handleConfirm = () => {
    dialogClose({ confirmed: true });
  };
  return (
    <div className="flex flex-col items-center justify-center p-3 h-full">
      <p className="text-sm font-semibold text-gray-900 pb-2">
        {title || "알림"}
      </p>
      {message && <p className="text-sm text-gray-600 pb-2">{message}</p>}
      <button
        onClick={handleConfirm}
        className="px-2 py-2 text-primary rounded text-sm"
      >
        확인
      </button>
    </div>
  );
};

export default AlertComponent;
