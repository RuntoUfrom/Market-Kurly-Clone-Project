import useHistoryController from "@/hooks/controllers/useHistoryController";
import LayerUtils from "@/utils/LayerUtils";
import SampleCenterDialogComponent from "@/components/common/dialog/SampleCenterDialogComponent";
import SampleFullDialogComponent from "@/components/common/dialog/SampleFullDialogComponent";
import SampleBottomComponent from "@/components/common/dialog/SampleBottomComponent";
import AlertComponent from "@/components/common/dialog/AlertComponent";
import Layout from "@/components/common/Layout";

const LayerTestPage = () => {
  const { moveTo } = useHistoryController();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <h1 className="text-2xl font-bold">레이어 팝업 테스트</h1>
        <button
          onClick={async () => {
            const res = await LayerUtils.showPopup(
              "CENTER",
              SampleCenterDialogComponent,
              {
                data: {
                  title: "센터팝업센터팝업",
                  message: "정말로 삭제하시겠습니까?",
                },
              },
            );
            console.log("Center Popup 결과:", res);
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          CenterPopup
        </button>
        <button
          onClick={async () => {
            const res = await LayerUtils.showPopup(
              "FULL",
              SampleFullDialogComponent,
              {
                data: {
                  title: "풀팝업풀팝업",
                  menulist: ["바밤바", "빼로나", "신라면", "안성탕면"],
                },
              },
            );
            console.log("FullPopup 결과:", res);
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          FullPopup
        </button>
        <button
          onClick={async () => {
            const res = await LayerUtils.showPopup(
              "BOTTOM",
              SampleBottomComponent,
              {
                data: {
                  title: "바텀팝업바텀팝업",
                  menulist: [
                    "바텀밤바",
                    "바텀빼로나",
                    "바텀신라면",
                    "바텀안성탕면",
                  ],
                },
              },
            );
            console.log("Bottom Popup 결과:", res);
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          BottomPopup
        </button>
        <button
          onClick={async () => {
            const res = await LayerUtils.showAlert(
              "간단한 Alert 타이틀",
              "조금은 복잡한 Alert 예시",
            );
            console.log("Bottom Popup 결과:", res);
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Alert 띄우기
        </button>
        <button
          onClick={() => moveTo({ direction: "FORWARD", menuId: "Index" })}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Index 페이지이동
        </button>
      </div>
    </Layout>
  );
};
export default LayerTestPage;
