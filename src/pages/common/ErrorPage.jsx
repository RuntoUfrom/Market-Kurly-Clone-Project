import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/DEMO/INDEX");
    }, 1000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-full gap-2">
      <h1 className="text-2xl font-bold">ERROR PAGE</h1>
      <p className="text-sm text-gray-500">
        1초 후 인덱스 페이지로 이동합니다.
      </p>
    </div>
  );
};

export default ErrorPage;
