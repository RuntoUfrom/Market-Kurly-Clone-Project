import useHistoryController from "@/hooks/controllers/useHistoryController";

const PageTestPage = () => {
  const { moveTo } = useHistoryController();
  return (
    <div className="flex flex-col items-center justify-center h-full gap-3">
      <h1 className="text-2xl font-bold mb-5">페이지 테스트 페이지</h1>
      <button
        onClick={() => moveTo({ direction: "FORWARD", menuId: "LGN001" })}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        로그인
      </button>
      <button
        onClick={() => moveTo({ direction: "FORWARD", menuId: "LGN001" })}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        홈
      </button>
      <button
        onClick={() => moveTo({ direction: "FORWARD", menuId: "LGN001" })}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        제품 리스트
      </button>
      <button
        onClick={() => moveTo({ direction: "FORWARD", menuId: "LGN001" })}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        상세 제품
      </button>
      <button
        onClick={() => moveTo({ direction: "FORWARD", menuId: "LGN001" })}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        전체 메뉴
      </button>
    </div>
  );
};

export default PageTestPage;
