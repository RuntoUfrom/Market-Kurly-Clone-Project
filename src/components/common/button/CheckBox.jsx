import CheckedIcon from "@/assets/common/icons/CheckPurpleIcon.svg";
import UnCheckIcon from "@/assets/common/icons/CheckUnfillIcon.svg";
/**
 * 체크박스 컴포넌트
 *
 * @param {Object} props
 * @param {boolean} [props.isCheck=false] - 체크 상태
 * @param {string} [props.label=""] - 체크박스 옆 라벨 텍스트
 * @param {number|string} [props.number=null] - 라벨 옆에 표시할 숫자 (옵션)
 * @param {Function} [props.onChange] - 클릭 시 호출되는 콜백
 */
const CheckBox = ({ isCheck = false, label = "", number = null, onChange }) => {
  return (
    <div className="flex flex-row gap-2">
      <div onClick={() => onChange?.()}>
        {isCheck ? (
          <img src={CheckedIcon} alt="선택됨" />
        ) : (
          <img src={UnCheckIcon} alt="안선택됨" />
        )}
      </div>
      <div className="flex flex-row gap-1 items-baseline">
        <div className="text-sm  text-gray-600">{label}</div>
        {number !== null && (
          <div className="text-xs font-light text-gray-600">{number}</div>
        )}
      </div>
    </div>
  );
};
export default CheckBox;
