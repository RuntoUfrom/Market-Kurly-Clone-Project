import ApiUtils from "@/utils/ApiUtils";

/**
 * 상품 목록을 카테고리별로 페이지네이션하여 가져옵니다
 * @param {Object} params - 요청 파라미터
 * @param {'market' | 'beauty'|'fashion'|'living'} params.category - 상품 카테고리 (필수)
 * @param {number} [params.page=1] - 페이지 번호 (1부터 시작, 기본값: 1)
 * @param {number} [params.limit=10] - 페이지당 상품 수 (기본값: 10)
 * @returns {Promise<Object>} 상품 목록 및 페이지네이션 정보
 */
export async function productListService({
  category,
  label,
  page = 1,
  limit = 10,
  sortOption = "추천순",
  activeFilters = [],
  isHOM,
  subMenu,
  tabKey,
}) {
  const request = {
    category,
    label,
    page,
    limit,
    sortOption,
    activeFilters,
    isHOM,
    subMenu,
    tabKey,
  };
  const response = await ApiUtils.sendPost("/product/list", request);
  return response;
}
