import instance from "@/api/axiosInstance";

const ApiUtils = {
  // POST 요청
  sendPost: (url, params, options = {}) => {
    const finalUrl = ApiUtils.buildUrl(url);
    const config = ApiUtils.createRequestConfig(options?.headers);

    return instance
      .post(finalUrl, params, config)
      .then((response) => response.data);
    // 에러는 axiosInstance 인터셉터에서 처리됨
  },

  // URL 조립
  buildUrl: (url) => {
    return url.startsWith("/") ? url : `/${url}`;
  },

  // 요청 설정 생성
  createRequestConfig: (headers) => ({
    withCredentials: true, //모든 api 요청에 기본으로 쿠키 포함
    headers: { ...headers },
  }),
};

export default ApiUtils;
