import useHistoryController from "@/hooks/controllers/useHistoryController";
import {useState} from "react";

const MoveSamplePage1 = () => {
  const { moveTo } = useHistoryController();
  const [number, setNumber] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center h-full mb-5">
      <h1 className="text-2xl font-bold mb-5">MoveSamplePage1</h1>
      <div className="flex gap-2">
        <button
          onClick={() =>
            moveTo({ direction: "FORWARD", menuId: "MoveSamplePage2" })
          }
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          goForward(1)
        </button>
        <button
          onClick={() => moveTo({ direction: "BACK", num: 1 })}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          goBack(1)
        </button>
      </div>
      <div className="mt-5 bg-blue-500 text-white px-4 py-2 rounded" onClick = {() => setNumber(number + 1) }>
        {number}
      </div>
      <div className="mt-5 bg-blue-500 text-white px-4 py-2 rounded" >
        <button
          onClick={() =>
            moveTo({
              direction: "FORWARD",
              menuId: "MoveSamplePage2",
              params: { number }, //데이터를 전달하자
            })
          }
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          goForward({number})
        </button>
      </div>
    </div>
  );
};

export default MoveSamplePage1;
