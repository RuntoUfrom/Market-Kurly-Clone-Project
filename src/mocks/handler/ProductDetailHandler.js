import { http, HttpResponse } from "msw";
import productDetailInfoData from "@/mocks/data/DTI/market/productDetailInfo.json";
import productDetailQuestionData from "@/mocks/data/DTI/market/productDetailQuestion.json";
import productDetailReviewData from "@/mocks/data/DTI/market/productDetailReview.json";

export const ProductDetailHandler = [
  http.post("/product/detail/info", async ({ request }) => {
    const body = await request.json();
    const SelectedData = productDetailInfoData.find(
      (product) => product.productId === body.productId,
    );
    return HttpResponse.json(SelectedData || {});
  }),
  http.post("/product/detail/info/review", async ({ request }) => {
    const body = await request.json();
    const SelectedData = productDetailReviewData.find(
      (product) => product.productId === body.productId,
    );
    return HttpResponse.json(SelectedData || {});
  }),
  http.post("/product/detail/info/inquiry", async ({ request }) => {
    const body = await request.json();
    const SelectedData = productDetailQuestionData.find(
      (product) => product.productId === body.productId,
    );
    return HttpResponse.json(SelectedData || {});
  }),
];
