import useHistoryController from "./useHistoryController";

export const navigateToList = ({ title, category }) => {
  const { moveTo } = useHistoryController();
  moveTo({
    direction: "FORWARD",
    menuId: "LST001",
    params: { title: title, category: category },
  });
};
