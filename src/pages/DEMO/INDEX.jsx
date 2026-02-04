import useHistoryController from "@/hooks/controllers/useHistoryController";
const INDEX = () => {
  const { moveTo } = useHistoryController();

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <h1 className="text-2xl font-bold">INDEX 페이지</h1>
      <button
        onClick={() =>
          moveTo({ direction: "FORWARD", menuId: "MoveTestPage100" })
        }
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        페이지 이동 히스토리
      </button>
      <button
        onClick={() =>
          moveTo({ direction: "FORWARD", menuId: "LayerTestPage" })
        }
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        레이어-팝업 테스트
      </button>
    </div>
  );
};

export default INDEX;
