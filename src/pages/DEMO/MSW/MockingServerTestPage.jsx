import { useState } from "react";
import { testService, testErrorService } from "@/api/services/test/testService";

const MockingServerTestPage = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  // API 호출 함수
  const handleApiCall = async () => {
    setLoading(true);
    setResult(null);
    try {
      // testService 호출 → ApiUtils → axiosInstance → MSW가 가로챔
      const response = await testService({ message: "테스트 요청" });
      console.log("MSW 응답:", response);
      setResult(response);
    } catch (error) {
      console.error("이건 발생하지 말라고 세팅해놓은 에런데", error);
      setResult({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleApiErrorCall = async () => {
    setLoading(true);
    setResult(null);
    try {
      // testService 호출 → ApiUtils → axiosInstance → MSW가 가로챔
      const response = await testErrorService({ message: "테스트 요청" });
      console.log("MSW 응답:", response);
      setResult(response);
    } catch (error) {
      console.error("아런이런 문제가 발생해 버렸어 경로가 이상해", error);
      setResult({ error: error.message });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-4 flex flex-col items-start gap-2">
      <h1 className="text-xl font-bold mb-4">MSW 테스트 페이지</h1>

      <button
        onClick={handleApiCall}
        disabled={loading}
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:bg-gray-400"
      >
        {loading ? "로딩 중..." : "API 호출 테스트"}
      </button>
      <button
        onClick={handleApiErrorCall}
        disabled={loading}
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:bg-gray-400"
      >
        {loading ? "로딩 중..." : "API 오류 테스트"}
      </button>
      {/* 결과 표시 */}
      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="font-bold mb-2">응답 결과:</h2>
          <pre className="text-sm overflow-auto">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default MockingServerTestPage;
