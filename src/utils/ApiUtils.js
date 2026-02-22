import instance from "@/api/axiosInstance";

const ApiUtils = {
  // POST 요청
  sendPost: (url, params, options = {}) => {
    const finalUrl = ApiUtils.buildUrl(url);
    const config = ApiUtils.createRequestConfig(options?.headers);

    return instance
      .post(finalUrl, params, config)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        const statusCode = error.response?.status || 500;
        const data = error.response?.data || {};
        return { statusCode, data }; 
      });
    
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
