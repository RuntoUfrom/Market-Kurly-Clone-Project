import ApiUtils from "@/utils/ApiUtils";
/**
 *
 * productDetailInfo "/product/detail/info"
 */
export async function productDetailService(request) {
  const response = await ApiUtils.sendPost("/product/detail/info", request);
  return response;
}
export async function productDetailReviewService(request) {
  const response = await ApiUtils.sendPost(
    "/product/detail/info/review",
    request,
  );
  return response;
}
export async function productDetailInquiryService(request) {
  const response = await ApiUtils.sendPost(
    "/product/detail/info/inquiry",
    request,
  );
  return response;
}
