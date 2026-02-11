import { setupWorker } from "msw/browser";
import { Samplehandler, SampleErrorhandler } from "@/mocks/handler/SampleHandler";
import { FixBannerHandler } from "@/mocks/handler/FixBannerHandler";

const worker = setupWorker(...Samplehandler, ...SampleErrorhandler, ...FixBannerHandler);
export default worker;
