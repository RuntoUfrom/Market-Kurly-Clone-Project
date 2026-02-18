import RoundMenuList from "@/components/common/layout/RoundMenuList";
import { useState } from "react";
import ProductListContainer from "@/components/common/container/ProductListContainer";

const HOMSaleContent = () => {
  const SalesMenuList = [
    "알뜰쇼핑",
    "마감세일",
    "반값세일",
    "신선&정육",
    "만원의행복",
    "장보기초특가",
  ];
  const [selectmenu, setSelectMenu] = useState(SalesMenuList[0]);
  return (
    <div>
      <RoundMenuList
        menulist={SalesMenuList}
        selectedSubMenu={selectmenu}
        onChange={setSelectMenu}
      />
      <ProductListContainer
        category={"market"}
        page={1}
        limit={20}
        isHOM={true}
        subMenu={selectmenu}
        tabKey="sale"
      />
    </div>
  );
};
export default HOMSaleContent;
