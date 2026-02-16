import { http, HttpResponse } from "msw";
import MarketProductList from "@/mocks/data/HOM/productlist/MarketProductList.json";
import BeautyProductList from "@/mocks/data/HOM/productlist/BeautyProductList.json";

export const ProductListHandler = [
  http.post("/product/list", async ({ request }) => {
    const body = await request.json();
    const { category, page = 1, limit = 10 } = body;

    // 카테고리별 데이터 매핑
    const dataMap = {
      market: MarketProductList,
      beauty: BeautyProductList,
    };

    const allProducts = dataMap[category];

    // 페이지네이션 로직
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = allProducts.slice(startIndex, endIndex);

    // 응답 구조
    return HttpResponse.json({
      data: paginatedData,
      pagination: {
        currentPage: page,
        pageSize: limit,
        totalCount: allProducts.length,
        totalPages: Math.ceil(allProducts.length / limit),
        hasNextPage: endIndex < allProducts.length,
        hasPreviousPage: page > 1,
      },
    });
  }),
];
