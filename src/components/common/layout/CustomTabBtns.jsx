import BaseTabBtn from "@/components/common/button/BaseTabBtn";

/**
 * TabBtns - 여러 개 탭 버튼 그룹
 *
 * @param {object} props
 * @param {2|4|5|7} props.variant - 탭 개수
 * @param {string[]} props.labels - 탭에 표시할 텍스트 배열
 * @param {string} props.active - 현재 선택된 탭 라벨
 * @param {(label: string) => void} props.onChange - 탭 클릭 시 실행할 핸들러
 */

const CustomTabBtns = ({
  variant = 2,
  labels,
  active,
  onChange,
  color = "purple",
}) => {
  const options = labels.slice(0, variant);

  return (
<<<<<<< HEAD
    <div className="flex w-full gap-1 overflow-x-auto overflow-y-visible whitespace-nowrap no-scrollbar">
=======
    <div className="flex w-full overflow-x-auto scrollbar-hide pt-3 px-4">
>>>>>>> fad3a727859ce53e9f42b386a6cf9d92aee53d1b
      {options.map((label, idx) => (
        <BaseTabBtn
          key={idx}
          label={label}
          active={active === label}
          onClick={onChange}
          color={color}
          stretch={variant <= 5}
        />
      ))}
    </div>
  );
};
export default CustomTabBtns;
