import { setupWorker } from "msw/browser";
import {
  Samplehandler,
  SampleErrorhandler,
} from "@/mocks/handler/SampleHandler";
import { FixBannerHandler } from "@/mocks/handler/FixBannerHandler";
import { MoveBannerHandler } from "@/mocks/handler/MoveBannerHandler";

const worker = setupWorker(
  ...Samplehandler,
  ...SampleErrorhandler,
  ...FixBannerHandler,
  ...MoveBannerHandler,
);
export default worker;
