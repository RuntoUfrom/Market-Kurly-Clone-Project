import useHistoryController from "@/hooks/controllers/useHistoryController";
import { useState } from "react";

const MoveSamplePage3 = () => {
  const { moveTo } = useHistoryController();
  const [menu, setMenu] = useState("");
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
      <div className="p-4 flex flex-row gap-2">
        <button
          onClick={() => {
            setMenu("결명자차");
          }}
          className="px-4 py-2 bg-red-300 text-white rounded hover:bg-red-600"
        >
          결명자차
        </button>
        <button
          onClick={() => {
            setMenu("녹차");
          }}
          className="px-4 py-2 bg-red-300 text-white rounded hover:bg-red-600"
        >
          녹차
        </button>
        <button
          onClick={() => {
            setMenu("초콜릿 라떼");
          }}
          className="px-4 py-2 bg-red-300 text-white rounded hover:bg-red-600"
        >
          초콜릿 라떼
        </button>
      </div>
      <div>{menu}</div>
      <button
        onClick={() => moveTo({ direction: "BACK", num: 1, preParams: { menu } })}
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-red-600"
      >
        goBack 음료 고르고
      </button>
    </div>
  );
};

export default MoveSamplePage3;
