import RoundMenuList from "@/components/common/layout/RoundMenuList";
import { useState } from "react";
import ProductListContainer from "@/components/common/container/ProductListContainer";

const HOMBeautyNewContent = () => {
  const menulist = [
    "신상랭킹",
    "헤어&바디",
    "스킨케어",
    "럭셔리뷰티",
    "요즘인기",
    "패션&잡화",
  ];
  const [selectmenu, setSelectMenu] = useState(menulist[0]);
  let productListCategory = "beauty";
  if (selectmenu === "패션&잡화") {
    productListCategory = "fashion";
  }
  return (
    <div>
      <RoundMenuList
        menulist={menulist}
        selectedSubMenu={selectmenu}
        onChange={setSelectMenu}
      />

      <ProductListContainer
        category={productListCategory}
        page={1}
        limit={20}
        isHOM={true}
        subMenu={selectmenu}
        tabKey="new"
      />
    </div>
  );
};
export default HOMBeautyNewContent;
