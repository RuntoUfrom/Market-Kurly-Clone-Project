/**
 * 센터 팝업 샘플 컨텐츠 컴포넌트
 * @param {object} props
 * @param {Function} props.dialogClose - 팝업 닫기 함수 (DialogCenterPopup에서 전달)
 * @param {object} props.data - 팝업에 전달된 데이터
 */
const AlertComponent = ({ dialogClose, data }) => {
  const handleConfirm = () => {
    dialogClose({ confirmed: true });
  };

  return (
    <div className="flex flex-col items-center justify-center p-3">
      <p className="text-sm text-gray-700 pb-6">{data?.title || "알림"}</p>
      <button
        onClick={() => dialogClose("confirm")}
        className="px-2 py-2 text-primary rounded text-sm"
      >
        확인
      </button>
    </div>
  );
};

export default AlertComponent;
