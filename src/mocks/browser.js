import { setupWorker } from "msw/browser";
import { Samplehandler, SampleErrorhandler } from "@/mocks/handler/SampleHandler";

const worker = setupWorker(...Samplehandler, ...SampleErrorhandler);
export default worker;
