import MarketMenuMap from "@/constants/menumaps/MENMarketMap.json";
import MenuNavBtn from "@/components/feature/MEN/MenuNavBtn";
import { useState, useRef } from "react";
import MenuGrid from "@/components/common/MenuGrid";
import { MEN_MARKET_IMAGE_MAP } from "@/constants/HOMMarketMenuImageMap";
import useHistoryController from "@/hooks/controllers/useHistoryController";

const MENMarketContent = () => {
  const [selectMenu, SetSelectMenu] = useState(MarketMenuMap[0].mainTab);
  const menuRefs = useRef({});
  const { moveTo } = useHistoryController();

  const handleNavClick = ({ label }) => {
    moveTo({
      direction: "FORWARD",
      menuId: "LST001",
      params: { title: label, label: label, category: "market" },
    });
  };

  return (
    <div className="h-full flex flex-col">
      <div className="bg-white pb-1 shrink-0">
        <MenuGrid menuList={Object.keys(MEN_MARKET_IMAGE_MAP)} />
      </div>
      <div className="flex flex-row w-full flex-1 overflow-hidden">
        {/*메인메뉴 가이드 영역*/}
        <div className="bg-gray-100 flex flex-col w-1/3 h-full overflow-y-auto no-scrollbar">
          {MarketMenuMap.map((item) => {
            return (
              <button
                key={item.mainTab}
                className={`text-base px-4 p-2 text-start font-medium ${
                  selectMenu === item.mainTab
                    ? "bg-white text-black m-2 rounded-md"
                    : "text-gray-500"
                }`}
                onClick={() => {
                  SetSelectMenu(item.mainTab);
                  menuRefs.current[item.mainTab]?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {item.mainTab}
              </button>
            );
          })}
        </div>
        {/*실제 메뉴 이동 영역*/}
        <div className="flex flex-col w-2/3 h-full overflow-y-auto no-scrollbar">
          {MarketMenuMap.map((item) => (
            <div
              key={item.mainTab}
              ref={(el) => (menuRefs.current[item.mainTab] = el)}
            >
              <MenuNavBtn
                emoji={item.Icon}
                label={item.mainTab}
                isMainTab={true}
                onClick={() => handleNavClick({ label: item.mainTab })}
              />
              {item.SubTabList.map((subtab) => (
                <MenuNavBtn
                  key={subtab}
                  label={subtab}
                  onClick={() => handleNavClick({ label: subtab })}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MENMarketContent;
