//공장 : 데이터를 읽어서 Routes를 찍어내는 기계
//import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MenuDataJson from "@/routes/MenuInfo.json";
import RouteComponent from "@/routes/RouteComponent";
import ErrorPage from "@/pages/common/ErrorPage";
import ProtectedRoute from "./ProtectedRoute";
const RootRoute = () => (
  <Routes>
    {MenuDataJson["container"]?.flatMap((item) =>
      item?.urlList?.map((item1, index1) => {
        const { url: path, filePath, menuId } = item1;
        const isPublic = path?.startsWith("/LGN") || path?.startsWith("/DEMO");
        const pageElement = (
          <RouteComponent url={path} filePath={filePath} menuId={menuId} />
        );

        return (
          <Route
            key={menuId + index1}
            path={path}
            // element={ 로그인 분기 처리 후
            //   isPublic ? pageElement : <ProtectedRoute children={pageElement} />
            // }
            element={pageElement}
          />
        );
      }),
    )}

    {/* 존재하지 않는 페이지 */}
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default RootRoute;
//ProtectedRoute
