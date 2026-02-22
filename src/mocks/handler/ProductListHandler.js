import { http, HttpResponse } from "msw";
import MarketProductList from "@/mocks/data/HOM/productlist/MarketProductList.json";
import BeautyProductList from "@/mocks/data/HOM/productlist/BeautyProductList.json";
import FashionProductList from "@/mocks/data/HOM/productlist/FashionProductList.json";
import LivingProductList from "@/mocks/data/HOM/productlist/LivingProductList.json";
import { sortProducts } from "@/mocks/utils/sortProduct";
import { applyFilters } from "@/mocks/utils/filterProducts";

export const ProductListHandler = [
  http.post("/product/list", async ({ request }) => {
    const body = await request.json();
    const {
      category,
      label,
      page,
      limit,
      sortOption,
      activeFilters,
      isHOM,
      subMenu,
      tabKey,
    } = body;

    // 카테고리별 데이터 매핑
    const dataMap = {
      market: MarketProductList,
      beauty: BeautyProductList,
      fashion: FashionProductList,
      living: LivingProductList,
    };
    //전체 상품 중 market/beauty/fashion 중 어떤 카테고리인지
    const categoryProducts = dataMap[category] ?? [];
    // label이 있으면 해당 세부 카테고리로 필터링
    const allProducts = label
      ? categoryProducts.filter((p) => p.category?.includes(label))
      : categoryProducts;
    //상단 탭바 [베스트|세일|신상] 중 어떤 탭인지
    let subMenuProducts = allProducts;
    if (subMenu && tabKey) {
      subMenuProducts = allProducts.filter((product) =>
        product[tabKey]?.includes(subMenu),
      );
    }

    const filteredProduct = applyFilters(
      subMenuProducts,
      activeFilters,
      category,
      isHOM,
    );
    const sortedProduct = sortProducts(filteredProduct, sortOption);

    // 페이지네이션 로직
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = sortedProduct.slice(startIndex, endIndex);

    // 응답 구조
    return HttpResponse.json({
      data: paginatedData,
      allProducts: allProducts,
      baseProducts: subMenuProducts,
      allFilteredProducts: filteredProduct,
      pagination: {
        currentPage: page,
        pageSize: limit,
        totalCount: filteredProduct.length,
        totalPages: Math.ceil(filteredProduct.length / limit),
        hasNextPage: endIndex < filteredProduct.length,
        hasPreviousPage: page > 1,
      },
    });
  }),
];
