import { useState } from "react";
import BasicSubmitButton from "@/components/common/button/BasicSubmitButton";
import SectionHeader from "@/components/common/SectionHeader";
import DemoPreviewItem from "@/components/DEMO/DemoPreviewItem";
import MenuGrid from "@/components/common/MenuGrid";
import { HOM_MARKET_MENU_IMAGE_MAP } from "@/constants/menumaps/HOMMarketMenuImageMap";
import HomHeader from "@/components/common/layout/HomHeader";
import CustomTabBtns from "@/components/common/layout/CustomTabBtns";
import IconButton from "@/components/common/button/IconButton";
import productImage from "@/assets/productimages/foodmarket/thumbnail/PM0001-Thumb.jpg";
import ProductCard from "@/components/common/ProductCard";
import NaviBar from "@/components/common/layout/NaviBar";
import MoveBanner from "@/components/common/MoveBanner";
import MARKET_BANNER_MAP from "@/mocks/data/HOM/MoveMarketBannerImages.json";
import FilterBtn from "@/components/common/button/FilterBtn";
import BackHeader from "@/components/common/layout/BackHeader";
import FilterBar from "@/components/common/layout/FilterBar";
import Footer from "@/components/common/layout/Footer";
import ProductScrollSection from "@/components/common/ProductScrollSection";
import MarketProductsMockData from "@/mocks/data/HOM/MarketProducts";
import ProductRankSection from "@/components/common/ProductRankSection";
import ProductSimpleSection from "@/components/common/ProductSimpleSection";
import RoundMenuList from "@/components/common/layout/RoundMenuList";
import MenuNavBtn from "@/components/feature/MEN/MenuNavBtn";
import SortSelectBtn from "@/components/common/button/SortSelectBtn";
import TimeDealComponent from "@/components/feature/HOM/TimeDealComponent";
import ProductDetailInfo from "@/components/feature/DTI/ProductDetailInfo";
import ReviewListToggle from "@/components/feature/DTI/ReviewListToggle";
import ReviewImageList from "@/components/feature/DTI/ReviewImageList";
import ReviewContent from "@/components/feature/DTI/ReviewContent";
import RoundIconBtn from "@/components/common/button/RoundIconBtn";
import CheckBox from "@/components/common/button/CheckBox";
import ProductCartCount from "@/components/feature/CART/ProductCartCount";
import ProductCartContent from "@/components/feature/CART/ProductCartContent";
import CartAmount from "@/components/feature/CART/CartAmount";
import ProductQuestion from "@/components/feature/DTI/ProductQuestion";
import BrandImage from "@/components/feature/HOM/BrandImage";
import BrandImageList from "@/components/feature/HOM/BrandImageList";
import BeautyBrandSection from "@/components/feature/HOM/BeautyBrandSection";

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
const mockProduct = {
  ranking: 1,
  rankingCategory: "채소",
  // 2. 샛별 배송 여부
  isDawnDelivery: true,
  // 3. 브랜드명
  brandName: "농부의 아침",
  // 4. 상품 이름
  productName: "[실속] 유기농 파프리카 2입",
  // 5. 상품 설명 (상세 요약)
  shortDescription: "아삭한 식감과 풍부한 영양을 담은 친환경 파프리카",
  // 6. 상품 원산지
  origin: "국산",
  // 7. 할인율 (%)
  discountRate: 20,
  // 8. 할인 후 가격 (판매가)
  salesPrice: 3200,
  // 9. 원가
  originalPrice: 4000,
  // 10. 첫 구매 시 할인율 (%)
  firstPurchaseDiscountRate: 90,
  // 11. 첫 구매 시 할인가
  firstPurchasePrice: 400,
  productImage: "MarketImage01",
};
const mockbrand = [
  {
    image: "BeautyImage01",
    text: "설화수로 채우는\n촉촉한 피부",
  },
  {
    image: "BeautyImage02",
    text: "라네즈 워터뱅크\n수분 충전",
  },
  {
    image: "BeautyImage03",
    text: "이니스프리\n그린티 진정 케어",
  },
  {
    image: "BeautyImage04",
    text: "헤라 블랙쿠션\n완벽 커버력",
  },
  {
    image: "BeautyImage05",
    text: "에스티로더\n나이트 세럼",
  },
  {
    image: "BeautyImage06",
    text: "아이오페 레티놀\n탄력 집중 관리",
  },
  {
    image: "BeautyImage07",
    text: "마몽드 로즈워터\n톤업 에센스",
  },
];
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
          isButtonAll={true}
          onClick={() => console.log("전체보기 클릭")}
          imogi={"💜"}
        />
      ),
    },
    {
      id: "section-header",
      label: "SectionHeader",
      component: (
        <SectionHeader
          main="다른 고객이 함께 본 상품"
          isButtonMore={true}
          onClick={() => console.log("전체보기 클릭")}
        />
      ),
    },
    {
      id: "MenuGrid1",
      label: "MenuGrid 1열",
      component: (
        <MenuGrid
          rowNum={1}
          menuList={Object.keys(HOM_MARKET_MENU_IMAGE_MAP)}
          isBar={true}
        />
      ),
    },
    {
      id: "MenuGrid2",
      label: "MenuGrid 2열",
      component: (
        <MenuGrid
          rowNum={2}
          menuList={Object.keys(HOM_MARKET_MENU_IMAGE_MAP)}
          isBar={true}
        />
      ),
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
          color={"purple"}
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
          color={"black"}
        />
      ),
    },
    {
      id: "CartButton",
      label: "CartButton",
      component: (
        <IconButton icon="CART" alt="CART" label="담기" fontSize="text-xs" />
        // <IconButton icon = "UNDO" alt = "UNDO" label = "초기화" fontSize = "text-sm"/>
      ),
    },
    {
      id: "CartButton",
      label: "UndoButton",
      component: (
        <IconButton icon="UNDO" alt="UNDO" label="초기화" fontSize="text-sm" />
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
      component: <MoveBanner bannerList={MARKET_BANNER_MAP} />,
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
    {
      id: "FilterBar",
      label: "FilterBar",
      component: (
        <FilterBar
          isKurlyOnly={true}
          isNew={true}
          isWonderHotDeal={true}
          isBeautyFest={false}
        />
      ),
    },
    {
      id: "Footer",
      label: "Footter",
      component: <Footer />,
    },
    {
      id: "ProductScrollSection",
      label: "ProductScrollSection",
      component: <ProductScrollSection products={MarketProductsMockData} />,
    },
    {
      id: "ProductRankSection",
      label: "ProductRankSection",
      component: <ProductRankSection products={MarketProductsMockData} />,
    },
    {
      id: "ProductSimpleSection",
      label: "ProductSimpleSection",
      component: <ProductSimpleSection products={MarketProductsMockData} />,
    },
    {
      id: "RoundMenuList",
      label: "RoundMenuList",
      component: <RoundMenuList />,
    },
    {
      id: "MenuNavBtn",
      label: "MenuNavBtn",
      component: (
        <MenuNavBtn label="2월의 원더컬리" emoji="🔥" mainTab={true} />
      ),
    },
    {
      id: "SortSelectButton",
      label: "SortSelectButton",
      component: <SortSelectBtn />,
    },
    {
      id: "TimeDealComponent",
      label: "TimeDealComponent",
      component: (
        <TimeDealComponent product={product} endTime="2026-02-12T18:00:00" />
      ),
    },
    {
      id: "ProductDetailInfo",
      label: "ProductDetailInfo",
      component: <ProductDetailInfo product={mockProduct} />,
    },
    {
      id: "RoundIconBtn",
      label: "RoundIconBtn",
      component: <RoundIconBtn product={mockProduct} />,
    },
    {
      id: "CheckBox",
      label: "CheckBox",
      component: <CheckBox isCheck={true} label="~10000원" number={100} />,
    },
    {
      id: "ProductCartCount",
      label: "ProductCartCount",
      component: <ProductCartCount />,
    },
    {
      id: "ProductCartContent",
      label: "ProductCartContent",
      component: (
        <ProductCartContent
          product={{
            productName: " [KF365] 1+등급 무항생제 대란 20구",
            productImage: productImage,
            productDescription: "무항생제 인증을 받은 대란",
            productOriginalPrice: 8000,
            productFinalPrice: 6500,
            productQuantityLeft: 1,
            productChecked: false,
          }}
        />
      ),
    },
    {
      id: "CartAmount",
      label: "CartAmount",
      component: (
        <CartAmount
          totalProductAmount={100000}
          productDiscountAmount={100000}
          couponDiscountAmount={100000}
          deliveryFee={100000}
          finalPaymentAmount={100000}
        />
      ),
    },
    {
      id: "ReviewListToggle",
      label: "ReviewListToggle",
      component: (
        <ReviewListToggle
          label="공지"
          title="상품후기 적립금 정책 안내"
          content="안녕하세요, 리아네이처입니다.
          객님께 보다 풍성한 혜택을 제공해드리기 위해 적립금 지급 정책을 안내드립니다.

          [적립금 지급 기준]
          · 구매 적립금: 실 결제 금액의 1% 자동 적립
          · 별점 리뷰 적립금: 300원
          · 텍스트 리뷰 적립금: 500원
   
          적립금 지급 기준 기간 : 기간: 2025-06-01 ~ 2025-07-31
          [적립금 유효기간]
          적립금은 마이페이지에서 확인 가능하며, 기한 내에 사용해 주세요
          감사합니다."
        />
      ),
    },
    {
      id: "ReviewImageList",
      label: "ReviewImageList",
      component: (
        <ReviewImageList
          imageList={[
            "MarketImage01",
            "MarketImage02",
            "MarketImage03",
            "MarketImage04",
          ]}
        />
      ),
    },
    {
      id: "ReviewContent",
      label: "ReviewContent",
      component: (
        <ReviewContent
          isBest={true}
          isMembers={true}
          userName="김남길"
          imageList={[
            "MarketImage01",
            "MarketImage02",
            "MarketImage03",
            "MarketImage04",
          ]}
          content="안녕하세요, 리아네이처입니다.
          객님께 보다 풍성한 혜택을 제공해드리기 위해 적립금 지급 정책을 안내드립니다.

          [적립금 지급 기준]
          · 구매 적립금: 실 결제 금액의 1% 자동 적립
          · 별점 리뷰 적립금: 300원
          · 텍스트 리뷰 적립금: 500원
   
          적립금 지급 기준 기간 : 기간: 2025-06-01 ~ 2025-07-31
          [적립금 유효기간]
          적립금은 마이페이지에서 확인 가능하며, 기한 내에 사용해 주세요
          감사합니다."
        />
      ),
    },
    {
      id: "ProductQuestion",
      label: "ProductQuestion",
      component: (
        <ProductQuestion
          isSecret={false}
          isAnswer={true}
          title="배송관련 문의합니다."
          userName="홍길동"
          date="2024-01-01"
          content={{
            question: "배송은 언제 되나요?",
            answer: "내일 도착 예정입니다.",
          }}
        />
      ),
    },
    {
      id: "ProductQuestion2",
      label: "ProductQuestion2",
      component: (
        <ProductQuestion
          isSecret={true}
          isAnswer={false}
          title="배송관련 문의합니다."
          userName="홍길동"
          date="2024-01-01"
          content={{
            question: "배송은 언제 되나요?",
            answer: "내일 도착 예정입니다.",
          }}
        />
      ),
    },
    {
      id: "BrandImage",
      label: "BrandImage",
      component: <BrandImage text="설화수로 채우는 촉촉한 피부" />,
    },
    {
      id: "BrandImageList",
      label: "BrandImageList",
      component: <BrandImageList brandImageList={mockbrand} />,
    },
    {
      id: "BeautyBrandSection",
      label: "BeautyBrandSection",
      component: (
        <BeautyBrandSection
          brandImageList={mockbrand}
          main="설화수"
          description={"아름다운 설화수를 먹어봐요"}
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
