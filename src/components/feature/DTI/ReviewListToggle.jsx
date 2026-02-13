import { useState } from "react";

/**
 * 토글 가능한 공지/리뷰 리스트 아이템 컴포넌트
 *
 * @param {Object} props
 * @param {string} [props.label="공지"] - 분류 라벨
 * @param {string} props.title - 제목
 * @param {string} props.content - 내용 (토글 시 표시)
 */
const ReviewListToggle = ({ label = "공지", title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        className="flex flex-row items-center"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className="bg-gray-200 p-1 text-[8px] rounded-md text-center">
          {label}
        </div>
        <div className="text-xs font-medium p-1 text-gray-800">{title}</div>
      </div>
      {isOpen && (
        <div className="text-xs whitespace-pre-line mt-2 whitespace-pre-line">
          {content}
        </div>
      )}
    </div>
  );
};
export default ReviewListToggle;
