import { http, HttpResponse } from "msw";
import MoveBeautyBannerImagesData from "@/mocks/data/HOM/MoveBeautyBannerImages.json";
import MoveLivingBannerImageData from "@/mocks/data/HOM/MoveLivingBannerImages.json";
import MoveFashionBannerImageData from "@/mocks/data/HOM/MoveFashionBannerImages.json";
import MoveMarketBannerImageData from "@/mocks/data/HOM/MoveMarketBannerImages.json";

const bannerMap = {
  MARKET: MoveMarketBannerImageData,
  BEAUTY: MoveBeautyBannerImagesData,
  FASHION: MoveFashionBannerImageData,
  LIVING: MoveLivingBannerImageData,
};

export const MoveBannerHandler = [
  http.post("/banner/move", async ({ request }) => {
    const body = await request.json();
    const type = body.type;
    return HttpResponse.json(bannerMap[type] ?? []);
  }),
];
