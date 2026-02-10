import useHistoryController from "@/hooks/controllers/useHistoryController";
import {useState} from "react";

const MoveSamplePage2 = () => {
  const { moveTo, getPageParams } = useHistoryController();
  const { params } = getPageParams();

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl font-bold mb-5">MoveSamplePage2</h1>
      <button
        onClick={() =>
          moveTo({ direction: "FORWARD", menuId: "MoveSamplePage3" })
        }
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        goForward(1)  
      </button>
      <div>
       {params?.number} 
      </div>
    </div>
  );
};

export default MoveSamplePage2;
