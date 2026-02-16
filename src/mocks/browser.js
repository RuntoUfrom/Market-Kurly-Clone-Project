import { setupWorker } from "msw/browser";
import {
  Samplehandler,
  SampleErrorhandler,
} from "@/mocks/handler/SampleHandler";
import { FixBannerHandler } from "@/mocks/handler/FixBannerHandler";
import { MoveBannerHandler } from "@/mocks/handler/MoveBannerHandler";
import { ProductDetailHandler } from "@/mocks/handler/ProductDetailHandler";
import { ProductListHandler } from "@/mocks/handler/ProductListHandler";
import { TimeDealHandler } from "./handler/TimeDealHandler";

const worker = setupWorker(
  ...Samplehandler,
  ...SampleErrorhandler,
  ...FixBannerHandler,
  ...MoveBannerHandler,
  ...ProductDetailHandler,
  ...ProductListHandler,
  ...TimeDealHandler,
);
export default worker;
