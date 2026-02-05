import { useState } from "react";
import downBtn from "@/assets/WRK/downBtn.svg";
import BaseIconBtn from "@/components/common/base/button/BaseIconBtn";

/**
 * Props
 * - title: string (필수)
 * - description?: string
 * - arrowImg: string (필수, 화살표 이미지 경로)
 * - children?: ReactNode (펼쳐질 영역)
 */
const DemoListItem = ({ title, description, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      {/* 헤더 */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-start justify-between py-3 cursor-pointer"
      >
        <div>
          <h3 className="text-base font-semibold text-gray-900">{title}</h3>
          {description && (
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          )}
        </div>
        <BaseIconBtn
          icon={
            <img
              src={downBtn}
              alt="화살표"
              className={`h-4 w-4 transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          }
          onClick={() => setOpen((prev) => !prev)}
          hasBorder={false}
        />
      </div>

      {/* 펼쳐지는 영역 */}
      {open && (
        <div>
          <ul className="flex flex-col">{children}</ul>
        </div>
      )}
    </div>
  );
};

export default DemoListItem;
