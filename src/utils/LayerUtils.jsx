import useLayerStore from "@/stores/useLayerStore";
import DialogCenterPopup from "@/components/common/dialog/DialogCenterPopup";
import DialogFullPopup from "@/components/common/dialog/DialogFullPopup";
import DialogBottomPopup from "@/components/common/dialog/DialogBottomPopup";

const LayerUtils = {
  showCenterPopup: (ContentsComponent, { data, ...options } = {}) => {
    return new Promise((resolve) => {
      const callbackFunc = (result) => {
        resolve(result);
      };
      const { addLayerList } = useLayerStore.getState();
      const PopupComponent = (layerProps) => {
        return (
          <DialogCenterPopup {...layerProps}>
            <ContentsComponent {...layerProps} />
          </DialogCenterPopup>
        );
      };
      addLayerList({
        id: Date.now(),
        layerComponent: PopupComponent,
        callbackFunc,
        layerProps: {
          data,
          ...options,
        },
        type: "CENTERPOPUP",
      });
    });
  },
  showFullPopup: (ContentsComponent, { data, ...options } = {}) => {
    return new Promise((resolve) => {
      const callbackFunc = (result) => {
        resolve(result);
      };

      const { addLayerList } = useLayerStore.getState();

      const PopupComponent = (layerProps) => {
        return (
          <DialogFullPopup {...layerProps}>
            <ContentsComponent {...layerProps} />
          </DialogFullPopup>
        );
      };

      addLayerList({
        id: Date.now(),
        layerComponent: PopupComponent,
        callbackFunc: callbackFunc,
        layerProps: {
          data,
          ...options,
        },
        type: "FULLPOPUP",
      });
    });
  },
  // 바텀 팝업 띄우기
  showBottomPopup: (ContentsComponent, { data, ...options } = {}) => {
    return new Promise((resolve) => {
      const callbackFunc = (result) => {
        resolve(result);
      };

      const { addLayerList } = useLayerStore.getState();

      const PopupComponent = (layerProps) => {
        return (
          <DialogBottomPopup {...layerProps}>
            <ContentsComponent {...layerProps} />
          </DialogBottomPopup>
        );
      };

      addLayerList({
        id: Date.now(),
        layerComponent: PopupComponent,
        callbackFunc,
        layerProps: {
          data,
          ...options,
        },
        type: "BOTTOMPOPUP",
      });
    });
  },
  showDialog: () => {}, //필요시 구현하자.
};
export default LayerUtils;
