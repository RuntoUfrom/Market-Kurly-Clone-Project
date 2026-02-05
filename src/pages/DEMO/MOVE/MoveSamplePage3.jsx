import useHistoryController from "@/hooks/controllers/useHistoryController";

const MoveSamplePage3 = () => {
  const { moveTo } = useHistoryController();
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl font-bold mb-5">MoveSamplePage3</h1>
      <div className="flex gap-4">
        <button
          onClick={() => moveTo({ direction: "BACK", num: 1 })}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          goBack(1)
        </button>
        <button
          onClick={() => moveTo({ direction: "BACK", num: 2 })}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          goBack(2)
        </button>
      </div>
    </div>
  );
};

export default MoveSamplePage3;
