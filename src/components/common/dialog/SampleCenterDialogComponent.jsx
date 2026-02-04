/**
 * 센터 팝업 샘플 컨텐츠 컴포넌트
 * @param {object} props
 * @param {Function} props.dialogClose - 팝업 닫기 함수 (DialogCenterPopup에서 전달)
 * @param {object} props.data - 팝업에 전달된 데이터
 */
const SampleCenterDialogComponent = ({ dialogClose, data }) => {
  const handleConfirm = () => {
    dialogClose({ confirmed: true });
  };

  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-xl font-bold text-gray-900 mb-3">
        {data?.title || "알림"}
      </h2>

      <p className="text-gray-600 mb-6">
        {data?.message || "내용을 입력해주세요."}
      </p>

      <button
        type="button"
        onClick={handleConfirm}
        className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
      >
        확인
      </button>
    </div>
  );
};

export default SampleCenterDialogComponent;
