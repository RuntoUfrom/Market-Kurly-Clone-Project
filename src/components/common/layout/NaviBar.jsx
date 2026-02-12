import HomeIcon from "@/assets/common/icons/HomeUnFillIcon.svg?react";
import SearchIcon from "@/assets/common/icons/SearchIcon.svg?react";
import MypageIcon from "@/assets/common/icons/MypageIcon.svg?react";
import HomeFillIcon from "@/assets/common/icons/HomeFillIcon.svg?react";
import MenuIcon from "@/assets/common/icons/MenuIcon.svg?react";
import MenuFillIcon from "@/assets/common/icons/MenuFillIcon.svg?react";

import { useState } from "react";
/**
 * 하단 네비게이션 바 컴포넌트
 */
const NaviBar = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const navItems = [
    { name: "home", icon: HomeIcon, fillIcon: HomeFillIcon, link: "/" },
    { name: "menu", icon: MenuIcon, fillIcon: MenuFillIcon, link: "/menu" },
    { name: "search", icon: SearchIcon, link: "/search" },
    { name: "mypage", icon: MypageIcon, link: "/mypage" },
  ];

  return (
    <div>
      <div className="flex flex-row justify-around items-center h-12 border-t border-gray-300">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setCurrentPage(item.name)}
            className="w-10 h-10 flex items-center justify-center"
          >
            {currentPage === item.name && item.fillIcon ? (
              <item.fillIcon className="w-5 h-5" />
            ) : (
              <item.icon className="w-5 h-5" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
export default NaviBar;
