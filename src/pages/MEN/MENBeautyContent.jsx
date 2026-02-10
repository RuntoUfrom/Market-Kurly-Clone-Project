import MenuGrid from "@/components/common/MenuGrid";
import MenuNavBtn from "@/components/feature/MEN/MenuNavBtn";
const MENBeautyContent = () => {
  const tabMenuList = [
    "그랜드뷰컬페",
    "이주의특가",
    "브랜드관",
    "베스트랭킹",
    "선물추천",
    "취향찾기",
  ];
  const menuList = [
    {
      label: "그랜드뷰컬페",
      emoji: "🔥",
      mainTab: true,
      subTabs: [
        "페스타딜",
        "최초특가",
        "배송비0원",
        "72H 설화수 Day",
        "가성비 아이템",
        "선물이 고민된다면",
        "단독Kurly Only",
        "지금! +7% 중복 쿠폰",
      ],
    },
    {
      label: "스킨케어",
      emoji: "🔥",
      mainTab: true,
      subTabs: [
        "스킨",
        "로션",
        "에센스",
        "크림",
        "선물이 고민된다면",
        "단독Kurly Only",
        "지금! +7% 중복 쿠폰",
      ],
    },
  ];
  return (
    <div className="flex flex-col justify-center">
      <MenuGrid rowNum={1} menuList={tabMenuList} isBar={false} />
      <div className=" w-full flex flex-row">
        <div className="bg-gray-200 w-1/3">
          {menuList.map((item) => {
            return (
              <div>
                <button className="font-medium text-sm p-3">
                  {item.label}
                </button>
              </div>
            );
          })}
        </div>
        <div>
          {menuList.map((item) => (
            <div key={item.label}>
              <MenuNavBtn
                emoji={item.emoji}
                label={item.label}
                mainTab={true}
              />
              {item.subTabs.map((sub) => (
                <MenuNavBtn key={sub} label={sub} mainTab={false} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MENBeautyContent;
