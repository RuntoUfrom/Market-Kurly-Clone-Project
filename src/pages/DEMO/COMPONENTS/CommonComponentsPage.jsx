import { useState } from "react";
import BasicSubmitButton from "@/components/common/button/BasicSubmitButton";
import SectionHeader from "@/components/common/SectionHeader";
import DemoPreviewItem from "@/components/DEMO/DemoPreviewItem";
import MenuGrid from "@/components/common/MenuGrid";
import { MENU_IMAGE_MAP } from "@/constants/menuImageMap";
import HomHeader from "@/components/common/layout/HomHeader";
import CustomTabBtns from "@/components/common/layout/CustomTabBtns";
import IconButton from "@/components/common/button/IconButton";
import productImage from "@/assets/foodmarketimages/FoodImage01.jpg";
import ProductCard from "@/components/common/ProductCard";
import NaviBar from "@/components/common/layout/NaviBar";
import MoveBanner from "@/components/common/MoveBanner";
import { MARKET_BANNER_LIST } from "@/constants/marketbannerMap";
import FilterBtn from "@/components/common/button/FilterBtn";
import BackHeader from "@/components/common/layout/BackHeader";

const product = {
  productImage: productImage,
  topBadge: true,
  topBadgeText: "+12% 쿠폰",
  eventBadge: true,
  bottomBanner: true,
  bottomBannerText: "최대혜택가25987원",
  isDawnDelivery: true,
  productName: "설향딸기 500g",
  originalPrice: 10000,
  discountPrice: 8000,
  discountRate: 20,
  reviewCount: 150,
  isKurlyOnly: true,
};

const CommonComponentsPage = () => {
  // 1단계: 상태 관리
  const [activeId, setActiveId] = useState(null);
  const [tab, setTab] = useState("추천");

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
      component: <HomHeader />,
    },
    {
      id: "TabBar7",
      label: "TabBar7",
      component: (
        <CustomTabBtns
          variant={7}
          labels={[
            "추천",
            "베스트",
            "세일",
            "패션",
            "리빙",
            "신상",
            "특가/혜택",
          ]}
          active={tab}
          onChange={setTab}
        />
      ),
    },
    {
      id: "TabBar2",
      label: "TabBar2",
      component: (
        <CustomTabBtns
          variant={2}
          labels={["마켓컬리", "뷰티컬리"]}
          active={tab}
          onChange={setTab}
        />
      ),
    },
    {
      id: "CartButton",
      label: "CartButton",
      component: (
        <IconButton
          alt="장바구니"
          onClick={() => console.log("장바구니 버튼 클릭")}
          label="담기"
        />
      ),
    },
    {
      id: "ProductCardVertical",
      label: "ProductCard (Vertical)",
      component: <ProductCard product={product} layout="vertical" />,
    },
    {
      id: "ProductCardHorizontal",
      label: "ProductCard (Horizontal)",
      component: <ProductCard product={product} layout="horizontal" />,
    },
    {
      id: "ProductCardHorizontalSimple",
      label: "ProductCard (Horizontal Simple)",
      component: <ProductCard product={product} layout="simple-horizontal" />,
    },
    {
      id: "NaviBar",
      label: "NaviBar",
      component: <NaviBar currentPage="home" />,
    },
    {
      id: "MoveBanner",
      label: "MoveBanner",
      component: <MoveBanner bannerList={MARKET_BANNER_LIST} />,
    },
    {
      id: "FilterBtn",
      label: "FilterBtn",
      component: <FilterBtn label="필터" />,
    },
    {
      id: "BackHeader",
      label: "BackHeader",
      component: (
        <BackHeader
          isSearch={true}
          isHome={true}
          label="[베키아에누보] 바질모짜모짜"
        />
      ),
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
