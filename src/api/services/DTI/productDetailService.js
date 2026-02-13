import ApiUtils from "@/utils/ApiUtils";
/**
 *
 * productDetailInfo "/product/detail/info"
 */
export async function productDetailService(request) {
  const response = await ApiUtils.sendPost("/product/detail/info", request);
  return response;
}
