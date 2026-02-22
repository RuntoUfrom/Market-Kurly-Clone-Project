import { http, HttpResponse } from "msw";
//마켓 - DTI 페이지 사용 데이터
import productDetailInfoData from "@/mocks/data/DTI/market/productDetailInfo.json";
import productDetailQuestionData from "@/mocks/data/DTI/market/productDetailQuestion.json";
import productDetailReviewData from "@/mocks/data/DTI/market/productDetailReview.json";
//뷰티 - DTI 페이지 사용 데이터
import beautyDetailInfoData from "@/mocks/data/DTI/beauty/beautyDetailInfo.json";
import beautyDetailQuestionData from "@/mocks/data/DTI/beauty/beautyDetailQuestion.json";
import beautyDetailReviewData from "@/mocks/data/DTI/beauty/beautyDetailReview.json";
// 패션 - DTI 페이지 사용 데이터
import fashionDetailInfoData from "@/mocks/data/DTI/fashion/fashionDetailInfo.json";
import fashionDetailQuestionData from "@/mocks/data/DTI/fashion/fashionDetailQuestion.json";
import fashionDetailReviewData from "@/mocks/data/DTI/fashion/fashionDetailReview.json";
//리빙 - DTI 페이지 사용 데이터
import livingDetailInfoData from "@/mocks/data/DTI/living/livingDetailInfo.json";
import livingDetailQuestionData from "@/mocks/data/DTI/living/livingDetailQuestion.json";
import livingDetailReviewData from "@/mocks/data/DTI/living/livingDetailReview.json";

export const ProductDetailHandler = [
  http.post("/product/detail/info", async ({ request }) => {
    const body = await request.json();
    const { productId } = body;
    const category = productId.charAt(1);
    const dataMap = {
      M: productDetailInfoData,
      B: beautyDetailInfoData,
      F: fashionDetailInfoData,
      L: livingDetailInfoData,
    };
    const targetData = dataMap[category] || [];
    const selectedData = targetData.find(
      (product) => product.productId === productId,
    );
    return HttpResponse.json(selectedData || {});
  }),
  http.post("/product/detail/info/review", async ({ request }) => {
    const body = await request.json();
    const { productId } = body;
    const category = productId.charAt(1);
    const dataMap = {
      M: productDetailReviewData,
      B: beautyDetailReviewData,
      F: fashionDetailReviewData,
      L: livingDetailReviewData,
    };
    const targetData = dataMap[category] || [];
    const selectedData = targetData.find(
      (product) => product.productId === productId,
    );
    return HttpResponse.json(selectedData || {});
  }),
  http.post("/product/detail/info/inquiry", async ({ request }) => {
    const body = await request.json();
    const { productId } = body;
    const category = productId.charAt(1);
    const dataMap = {
      M: productDetailQuestionData,
      B: beautyDetailQuestionData,
      F: fashionDetailQuestionData,
      L: livingDetailQuestionData,
    };
    const targetData = dataMap[category] || [];
    const selectedData = targetData.find(
      (product) => product.productId === productId,
    );
    return HttpResponse.json(selectedData || {});
  }),
];
