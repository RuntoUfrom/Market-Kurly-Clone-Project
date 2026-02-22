import ApiUtils from "@/utils/ApiUtils";
//주소를 확인하고 보내는 기능을 하는 Service 함수
export async function testService(request) {
  const response = await ApiUtils.sendPost("/sample/test", request);
  // 반환값은 statusCode, code, data를 그대로 사용 가능
  return response;
}

export async function testErrorService(request) {
  const response = await ApiUtils.sendPost("/sample/test/error", request);
  // 반환값은 statusCode, code, data를 그대로 사용 가능
  return response;
}
