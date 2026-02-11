import { http, HttpResponse } from "msw";
import FixDealBannerData from "@/mocks/data/HOM/FixBannerImages.json";

export const FixBannerHandler = [
  http.post("/banner/fixed", async () => {
    await sleep(1000);
    return HttpResponse.json(FixDealBannerData);
  }),
];

async function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
