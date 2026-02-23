export const CATEGORY_OPTIONS = {
  market: [
    "친환경",
    "제철과일",
    "간편과일",
    "견과류",
    "잡곡",
    "티백",
    "잎차",
    "허브차",
    "홍차",
    "녹차",
    "쌈채소",
    "뿌리채소",
    "버섯",
    "샐러드",
    "즙",
    "전골",
    "볶음",
    "찌개",
    "구이",
    "간단식",
    "주스",
    "탄산",
    "두유",
    "커피",
    "과자",
    "초콜릿",
    "캔디",
    "젤리",
    "떡",
    "소고기",
    "돼지고기",
    "닭고기",
    "양고기",
    "가공육",
    "올리브오일",
    "참기름",
    "들기름",
    "식용유",
    "버터",
    "식빵",
    "케이크",
    "디저트",
    "베이글",
    "샌드위치",
    "우유",
    "요거트",
    "치즈",
    "계란",
  ],
  beauty: [
    "스킨/토너",
    "로션",
    "크림",
    "세럼",
    "마스크",
    "베이스메이크업",
    "블러셔/하이라이트",
    "립메이크업",
    "아이메이크업",
    "밤/오일",
    "워터",
    "폼/젤",
    "립/아이리무버",
    "선스틱",
    "선쿠션",
    "선크림",
    "수딩",
    "샴푸",
    "컨디셔너",
    "트리트먼트",
    "오일",
    "워시",
    "미스트",
    "립케어",
    "기타",
  ],
};

export const CATEGORY_OPTIONS_HOM = {
  market: [
    "과일",
    "차",
    "채소",
    "밀키트",
    "음료",
    "간식",
    "정육",
    "오일",
    "베이커리",
    "유제품",
  ],
  beauty: ["스킨케어", "메이크업", "클렌징", "선케어", "헤어케어", "바디케어"],
};

export const BRAND_OPTIONS = {
  market: ["오설록", "앰엔앰즈", "테일러", "미미네", "더벨로", "사리원"],
  beauty: [
    "헤라",
    "바이오더마",
    "토리든",
    "마녀공장",
    "보비브라운",
    "에스트라",
    "아베다",
    "꼬달리",
    "모로칸오일",
    "자빈드서울",
    "프레시안",
    "달바",
    "아르마니뷰티",
    "랑콤",
    "맥",
    "김정문알로에",
    "릴리바이레드",
  ],
  fashion: [
    "엘렌쥬얼리",
    "베흐트",
    "바이이이에르",
    "듀이듀이",
    "루시다",
    "R2W",
    "메르시마리에",
    "슬로우롤리",
    "앤클라인",
    "바이듀",
    "고드나트",
  ],
  living: ["니도", "3M", "아망떼", "프로그", "덴비"],
};

export const FILTER_OPTIONS_MAP = (category, isHOM = false) => ({
  카테고리: isHOM
    ? (CATEGORY_OPTIONS_HOM[category] ?? [])
    : (CATEGORY_OPTIONS[category] ?? []),
  가격: ["~5000원", "5000원~15000원", "15000원~25000원", "25000원 이상"],
  브랜드: BRAND_OPTIONS[category] ?? [],
  피부타입: ["건성", "지성", "복합성", "민감성", "중성"],
  유형: ["KurlyOnly"],
  혜택: ["쿠폰 적용", "특가", "증정", "묶음"],
  출시: ["신상품"],
  포장타입: ["냉장", "냉동", "상온"],
  배송: ["샛별배송", "택배배송"],
});

/**
 * 단일 product가 특정 탭의 특정 옵션에 매칭되는지 확인
 * @param {object} product
 * @param {string} tab - 필터 탭 이름
 * @param {string} option - 선택된 옵션
 */
export const matchesFilter = (product, tab, option) => {
  switch (tab) {
    case "가격": {
      const finalPrice = Math.round(
        product.originalPrice * (1 - product.discountRate / 100),
      );
      if (option === "~5000원") return finalPrice <= 5000;
      if (option === "5000원~15000원")
        return finalPrice > 5000 && finalPrice <= 15000;
      if (option === "15000원~25000원")
        return finalPrice > 15000 && finalPrice <= 25000;
      if (option === "25000원 이상") return finalPrice > 25000;
      return true;
    }
    case "브랜드":
      console.log(
        `🔍 [matchesFilter 브랜드] product.brandName: "${product.brandName}", option: "${option}", match: ${product.brandName === option}`,
      );
      return product.brandName === option;
    case "카테고리":
      return product.category?.includes(option);
    case "유형":
      return option === "KurlyOnly" && product.isKurlyOnly;
    case "혜택":
      if (option === "쿠폰 적용") return product.topBadgeText?.includes("쿠폰");
      if (option === "특가")
        return (
          product.topBadgeText?.includes("특가") ||
          product.bottomBannerText?.includes("특가")
        );
      if (option === "증정") return product.topBadgeText?.includes("증정");
      if (option === "묶음")
        return (
          product.topBadgeText?.includes("기획") ||
          product.topBadgeText?.includes("묶음")
        );
      return true;
    case "출시": {
      const today = new Date();
      const created = new Date(product.createdAt);
      const diffDays = (today - created) / (1000 * 60 * 60 * 24);
      if (option === "신상품") return diffDays <= 50;
      return true;
    }
    case "포장타입":
      return product.packagingType === option;
    case "배송":
      if (option === "샛별배송") return product.isDawnDelivery === true;
      if (option === "택배배송") return product.isDawnDelivery === false;
      return false;
    case "피부타입":
      return product.skinType === option;
    default:
      return true;
  }
};

/**
 * checkFilter(선택된 옵션 배열)를 이용해 products를 필터링
 * - 탭 내 OR, 탭 간 AND
 * @param {object[]} products
 * @param {string[]} checkFilter
 * @param {string} category - 카테고리 ('market', 'beauty' 등)
 */
export const applyFilters = (products, checkFilter, category, isHOM) => {
  const optionsMap = FILTER_OPTIONS_MAP(category, isHOM);
  if (checkFilter.length === 0) return products;

  // 탭별로 선택된 옵션 분류
  const filterByTab = {};
  for (const [tab, options] of Object.entries(optionsMap)) {
    const selected = checkFilter.filter((o) => options.includes(o));
    if (selected.length > 0) filterByTab[tab] = selected;
  }

  // 탭 간 AND, 탭 내 OR
  const filtered = products.filter((product) => {
    return Object.entries(filterByTab).every(([tab, selected]) => {
      return selected.some((opt) => matchesFilter(product, tab, opt));
    });
  });

  return filtered;
};
