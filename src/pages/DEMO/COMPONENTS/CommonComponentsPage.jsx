import { useState } from "react";
import BasicSubmitButton from "@/components/common/BasicSubmitButton";
import ProductImage from "@/components/common/ProductImage";
import SectionHeader from "@/components/common/SectionHeader";
import FoodImage01 from "@/assets/foodmarketimages/FoodImage01.jpg";
import DemoPreviewItem from "@/components/DEMO/DemoPreviewItem";
import MenuCard from "@/components/common/MenuCard";
import MenuLogo from "@/assets/menu/MenuLogoPresent.png";
import MenuGrid from "@/components/common/MenuGrid";
import { MENU_IMAGE_MAP } from "@/constants/menuImageMap";
import Header from "@/components/common/Header";

const CommonComponentsPage = () => {
  // 1단계: 상태 관리
  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  // 2단계: 컴포넌트 목록 정의
  const components = [
    {
      id: "button-fill",
      label: "BasicSubmitButton (fill)",
      component: (
        <BasicSubmitButton
          text="로그인"
          disabled={false}
          variant="fill"
          onClick={() => console.log("로그인되었습니다.")}
        />
      ),
    },
    {
      id: "button-unfill",
      label: "BasicSubmitButton (unfill)",
      component: (
        <BasicSubmitButton
          text="로그인"
          disabled={false}
          variant="unfill"
          onClick={() => console.log("로그인되었습니다.")}
        />
      ),
    },
    {
      id: "section-header",
      label: "SectionHeader",
      component: (
        <SectionHeader
          main="최대 혜택으로 준비하는 설선물"
          description="헬스부터 뷰티선물 까지 12% 쿠폰 추가 지급"
        />
      ),
    },
    {
      id: "product-image",
      label: "ProductImage",
      component: (
        <ProductImage
          productImage={FoodImage01}
          topBadge={true}
          topBadgeText="+12%쿠폰"
          eventBadge={true}
          bottomBanner={true}
          bottomBannerText="최대혜택가 78526원"
        />
      ),
    },
    {
      id: "menuCard",
      label: "menuCard 개별",
      component: (
        <MenuCard
          LogoImage={MenuLogo}
          label="선물추천"
          onClick={() => {
            console.log("메뉴버튼 클릭 ");
          }}
        />
      ),
    },
    {
      id: "MenuGrid1",
      label: "MenuGrid 1열",
      component: <MenuGrid rowNum={1} menuList={Object.keys(MENU_IMAGE_MAP)} />,
    },
    {
      id: "MenuGrid2",
      label: "MenuGrid 2열",
      component: <MenuGrid rowNum={2} menuList={Object.keys(MENU_IMAGE_MAP)} />,
    },
    {
      id: "Header",
      label: "Header",
      component: <Header />,
    },
  ];

  return (
    <div className="flex flex-col gap-2 p-4">
      <h1 className="text-base font-semibold text-center mb-2">
        Common Components
      </h1>

      {/* 3단계: DemoPreviewItem으로 렌더링 */}
      {components.map((item) => (
        <DemoPreviewItem
          key={item.id}
          id={item.id}
          label={item.label}
          activeId={activeId}
          onToggle={handleToggle}
        >
          {item.component}
        </DemoPreviewItem>
      ))}
    </div>
  );
};
export default CommonComponentsPage;
