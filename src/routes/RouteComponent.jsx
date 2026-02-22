//실제로 페이지 파일로 바꿔주는 기능
import { lazy, Suspense, useEffect } from "react";
import Layout from "@/components/common/Layout";
import LoadingSpinner from "@/components/common/layout/LoadingSpinner";

// 컴포넌트 외부에서 모든 페이지 모듈을 미리 로드
const pages = import.meta.glob("../pages/**/*.jsx");

// lazy 컴포넌트를 미리 생성하여 캐싱
const lazyPages = {};
Object.keys(pages).forEach((path) => {
  lazyPages[path] = lazy(pages[path]);
});

const NotFound = () => <div>페이지를 찾을 수 없습니다</div>;

const RouteComponent = ({ url, filePath, menuId }) => {
  useEffect(() => {
    console.log("등록된 라우트 정보", { url, filePath, menuId });
  }, [url, filePath, menuId]);

  // 미리 생성된 lazy 컴포넌트 사용
  const pagePath = `../pages/${filePath}.jsx`;
  const DynamicComponent = lazyPages[pagePath] || NotFound;

  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <DynamicComponent />
      </Suspense>
    </Layout>
  );
};

export default RouteComponent;
