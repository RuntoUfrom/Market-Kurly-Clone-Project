import useHistoryController from "./useHistoryController";
import LayerUtils from "@/utils/LayerUtils";
import CartFullComponent from "@/components/common/dialog/CartFullComponent";

const useNavigateToPlace = () => {
  const { moveTo } = useHistoryController();

  const goToList = (title, category, isHome) => {
    moveTo({
      direction: "FORWARD",
      menuId: "LST001",
      params: { title, category, isHome },
    });
  };

  const goToCart = async () => {
    await LayerUtils.showPopup("FULL", CartFullComponent, {
      data: {},
    });
  };

  return { goToList, goToCart };
};

export default useNavigateToPlace;
