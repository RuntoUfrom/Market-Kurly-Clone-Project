import { http, HttpResponse } from "msw";
import MarketProductList from "@/mocks/data/HOM/productlist/MarketProductList.json";
import BeautyProductList from "@/mocks/data/HOM/productlist/BeautyProductList.json";
import FashionProductList from "@/mocks/data/HOM/productlist/FashionProductList.json";
import { sortProducts } from "@/mocks/utils/sortProduct";
import { applyFilters } from "@/mocks/utils/filterProducts";

export const ProductListHandler = [
  http.post("/product/list", async ({ request }) => {
    const body = await request.json();
    const {
      category,
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
    };

    const allProducts = dataMap[category] ?? [];
    let subMenuProducts = allProducts;
    if (subMenu && tabKey) {
      subMenuProducts = allProducts.filter((product) =>
        product[tabKey]?.includes(subMenu),
      );
    }
    // console.log("🔍 [ProductListHandler] activeFilters:", activeFilters);
    // console.log("🔍 [ProductListHandler] category:", category);
    // console.log(
    //   "🔍 [ProductListHandler] allProducts count:",
    //   allProducts.length,
    // );
    const filteredProduct = applyFilters(
      subMenuProducts,
      activeFilters,
      category,
      isHOM,
    );
    console.log(
      "🔍 [ProductListHandler] filteredProduct count:",
      filteredProduct.length,
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
