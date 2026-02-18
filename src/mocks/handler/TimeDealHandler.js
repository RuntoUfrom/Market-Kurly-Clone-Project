import { http, HttpResponse } from "msw";
import TimeDealEventData from "@/mocks/data/HOM/timedeal/TimeDealEvent.json";
export const TimeDealHandler = [
  http.post("/product/timedeal", async ({ request }) => {
    const body = await request.json();
    const category = body;
    if (category === "market") {
      return HttpResponse.json(TimeDealEventData[0]);
    } else if (category === "beauty") {
      return HttpResponse.json(TimeDealEventData[1]);
    } else if (category === "fashion") {
      return HttpResponse.json(TimeDealEventData[1]);
    }
  }),
];
