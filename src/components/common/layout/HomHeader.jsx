import useThemeStore from "@/stores/useThemeStore";
import NaviIcon from "@/assets/common/icons/NaviIcon.svg?react";
import CartIcon from "@/assets/common/icons/CartIcon.svg";
import CartIconGray from "@/assets/common/icons/CartIconGray.svg";

/**
 * 메인 홈 헤더 컴포넌트 (마켓컬리/뷰티컬리 탭 포함)
 */
const HomHeader = () => {
  const { theme, setTheme } = useThemeStore();

  const isMarket = theme === "market";

  return (
    <header
      className={`flex items-center justify-between px-4 py-3 w-full ${
        isMarket ? "bg-primary" : "bg-white"
      }`}
    >
      {/* 왼쪽: 로고 (추후 추가) */}
      <div className="w-8" />

      {/* 중앙: 토글 버튼 */}
      <div
        className={`flex rounded-full ${
          isMarket ? "bg-secondary" : "bg-gray-200"
        }`}
      >
        <button
          onClick={() => setTheme("market")}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
            isMarket ? "bg-white text-primary" : "bg-transparent text-gray-500"
          }`}
        >
          마켓컬리
        </button>
        <button
          onClick={() => setTheme("beauty")}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
            isMarket ? "bg-transparent text-white" : "bg-primary text-white"
          }`}
        >
          뷰티컬리
        </button>
      </div>

      {/* 오른쪽: 아이콘 */}
      <div className="flex items-center gap-3">
        <button>
          <NaviIcon
            className={`w-6 h-6 ${isMarket ? "text-white" : "text-gray-700"}`}
          />
        </button>
        <button>
          {isMarket ? (
            <img src={CartIcon} className="w-6 h-6" />
          ) : (
            <img src={CartIconGray} className="w-6 h-6" />
          )}
        </button>
      </div>
    </header>
  );
};

export default HomHeader;
