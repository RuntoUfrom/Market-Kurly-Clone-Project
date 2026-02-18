import MarketBeautyMap from "@/constants/menumaps/MENBeautyMap.json";
import MenuNavBtn from "@/components/feature/MEN/MenuNavBtn";
import MenuGrid from "@/components/common/MenuGrid";
import { useState, useRef } from "react";
import { MEN_BEAUTY_IMAGE_MAP } from "@/constants/HOMMarketMenuImageMap";
const MENBeautyContent = () => {
  const [selectMenu, SetSelectMenu] = useState(MarketBeautyMap[0].mainTab);
  const menuRefs = useRef({});
  return (
    <div className="h-full flex flex-col">
      <div className="bg-white pb-1 shrink-0">
        <MenuGrid
          menuList={Object.keys(MEN_BEAUTY_IMAGE_MAP)}
          imageMap={MEN_BEAUTY_IMAGE_MAP}
        />
      </div>
      <div className="flex flex-row w-full flex-1 overflow-hidden">
        {/*메인메뉴 가이드 영역*/}
        <div className="bg-gray-100 flex flex-col w-1/3 h-full overflow-y-auto no-scrollbar">
          {MarketBeautyMap.map((item) => {
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
          {MarketBeautyMap.map((item) => (
            <div
              key={item.mainTab}
              ref={(el) => (menuRefs.current[item.mainTab] = el)}
            >
              <MenuNavBtn
                emoji={item.Icon}
                label={item.mainTab}
                isMainTab={true}
              />
              {item.SubTabList.map((subtab) => (
                <MenuNavBtn key={subtab} label={subtab} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MENBeautyContent;
