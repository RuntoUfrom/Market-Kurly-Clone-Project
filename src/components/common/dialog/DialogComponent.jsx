import DialogWrapper from "@/components/common/dialog/DialogWrapper";
import useLayerStore from "@/stores/useLayerStore";

/**
 * 전역 다이얼로그 관리 컴포넌트 (Layer System Root)
 * store에 저장된 layerList를 순회하며 팝업을 렌더링함.
 */

const DialogComponent = () => {
  const { layerList } = useLayerStore();

  return (
    <>
      {layerList?.map(
        (item, index) =>
          item && (
            <DialogWrapper key={"dialog-" + item.id}>
              <item.layerComponent
                layerIndex={index}
                callbackFunc={item.callbackFunc}
                {...item.layerProps}
              />
            </DialogWrapper>
          ),
      )}
    </>
  );
};

export default DialogComponent;
