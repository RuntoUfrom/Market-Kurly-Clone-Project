import { http, HttpResponse } from "msw";
import sampleData from "@/mocks/data/dummy.json";

export const Samplehandler = [
  // 샘플
  http.post("/sample/test", async () => {
    await sleep(1000);

    return HttpResponse.json(sampleData);
  }),
];
export const SampleErrorhandler = [
  // 에러 테스트용 핸들러
  http.post("/sample/test/error", async () => {
    await sleep(1000);

    return HttpResponse.json(
      { message: "서버 에러가 발생했습니다." },
      { status: 500 }
    );
  }),
];
async function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
