import { setupWorker } from "msw/browser";
import {
  Samplehandler,
  SampleErrorhandler,
} from "@/mocks/handler/SampleHandler";
import { FixBannerHandler } from "@/mocks/handler/FixBannerHandler";
import { MoveBannerHandler } from "@/mocks/handler/MoveBannerHandler";
import { ProductDetailHandler } from "@/mocks/handler/ProductDetailHandler";

const worker = setupWorker(
  ...Samplehandler,
  ...SampleErrorhandler,
  ...FixBannerHandler,
  ...MoveBannerHandler,
  ...ProductDetailHandler,
);
export default worker;
