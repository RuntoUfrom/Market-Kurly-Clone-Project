import ApiUtils from "@/utils/ApiUtils";
//주소를 확인하고 보내는 기능을 하는 Service 함수
// 반환값은 statusCode, code, data를 그대로 사용 가능

/** 특가/혜택 탭의 고정 배너 */
export async function fixDealBannerService(request) {
  const response = await ApiUtils.sendPost("/banner/fixed", request);
  return response;
}

export async function testErrorService(request) {
  const response = await ApiUtils.sendPost("/sample/test/error", request);
  // 반환값은 statusCode, code, data를 그대로 사용 가능
  return response;
}
