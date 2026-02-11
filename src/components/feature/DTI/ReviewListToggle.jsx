import { useState } from "react";

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
        <div className="text-xs whitespace-pre-line mt-2">{content}</div>
      )}
    </div>
  );
};
export default ReviewListToggle;
