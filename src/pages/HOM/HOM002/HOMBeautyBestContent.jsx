import RoundMenuList from "@/components/common/layout/RoundMenuList";
import { useState } from "react";
import ProductListContainer from "@/components/common/container/ProductListContainer";

const HOMBeautyBestContent = () => {
  const menulist = [
    "베스트",
    "스킨케어",
    "럭셔리뷰티",
    "선물하기좋은",
    "인기급상승",
    "헤어&바디",
  ];
  const [selectmenu, setSelectMenu] = useState(menulist[0]);
  return (
    <div>
      <RoundMenuList
        menulist={menulist}
        selectedSubMenu={selectmenu}
        onChange={setSelectMenu}
      />
      <ProductListContainer
        category={"beauty"}
        page={1}
        limit={20}
        isHOM={true}
        subMenu={selectmenu}
        tabKey="best"
      />
    </div>
  );
};
export default HOMBeautyBestContent;
