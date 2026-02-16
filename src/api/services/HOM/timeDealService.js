import ApiUtils from "@/utils/ApiUtils";

export async function timeDealService({ category }) {
  const response = await ApiUtils.sendPost("/product/timedeal", category);
  return response;
}
