import useHistoryController from "./useHistoryController";
import LayerUtils from "@/utils/LayerUtils";
import CartFullComponent from "@/components/common/dialog/CartFullComponent";
const useNavigateToPlace = () => {
  const { moveTo } = useHistoryController();

  const goToList = (title, category) => {
    moveTo({
      direction: "FORWARD",
      menuId: "LST001",
      params: { title, category },
    });
  };
  const goToCart = async () => {
    await LayerUtils.showPopup("FULL", CartFullComponent, {
      data: {
        title: "풀팝업풀팝업",
        menulist: ["바밤바", "빼로나", "신라면", "안성탕면"],
      },
    });
  };

  return { goToList, goToCart };
};

export default useNavigateToPlace;
