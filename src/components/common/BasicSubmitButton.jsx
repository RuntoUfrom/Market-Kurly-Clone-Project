/**
 * 공통 제출 버튼 컴포넌트 (로그인, 쿠폰 받기 등에 사용)
 * @param {object} props
 * @param {string} props.text - 버튼 텍스트
 * @param {boolean} [props.disabled=false] - 비활성화 여부
 * @param {'fill' | 'unfill'} [props.variant='fill'] - 버튼 스타일 (fill: 채워진 스타일, unfill: 테두리만)
 * @param {function} [props.onClick] - 클릭 핸들러
 */
const BasicSubmitButton = ({
  text,
  disabled = false,
  variant = "fill",
  onClick,
}) => {
  const baseStyle =
    "w-4/5 h-[52px] rounded font-semibold text-base transition-colors";

  const variantStyles = {
    fill: disabled
      ? "bg-gray-300 text-white cursor-not-allowed"
      : "bg-primary text-white hover:bg-[#4a0066] active:bg-[#3d0054]",
    unfill: disabled
      ? "border border-gray-300 text-gray-300 cursor-not-allowed"
      : "border border-primary text-primary hover:bg-[#f9f4fb] active:bg-[#f3e8f7]",
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyle} ${variantStyles[variant]}`}
    >
      {text}
    </button>
  );
};

export default BasicSubmitButton;
