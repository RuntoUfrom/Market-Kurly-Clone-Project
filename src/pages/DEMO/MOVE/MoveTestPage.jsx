import useHistoryController from "@/hooks/controllers/useHistoryController";

const MoveSamplePage1 = () => {
  const { moveTo } = useHistoryController();
  return (
    <div className="flex flex-col items-center justify-center h-full mb-5">
      <h1 className="text-2xl font-bold mb-5">MoveTestPage</h1>
      <div className="flex gap-2">
        <button
          onClick={() =>
            moveTo({ direction: "FORWARD", menuId: "MoveSamplePage1" })
          }
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          goForward(1)
        </button>
        <button
          onClick={() =>
            moveTo({ direction: "FORWARD", menuId: "MoveSamplePage2" })
          }
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          goForward(2)
        </button>
        <button
          onClick={() =>
            moveTo({ direction: "FORWARD", menuId: "MoveSamplePage3" })
          }
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          goForward(3)
        </button>
      </div>
    </div>
  );
};

export default MoveSamplePage1;
