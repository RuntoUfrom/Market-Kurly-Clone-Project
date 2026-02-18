import useHistoryController from "./useHistoryController";

const useNavigateToList = () => {
  const { moveTo } = useHistoryController();

  const goToList = (title, category) => {
    moveTo({
      direction: "FORWARD",
      menuId: "LST001",
      params: { title, category },
    });
  };

  return { goToList };
};

export default useNavigateToList;
