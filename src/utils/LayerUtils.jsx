import useLayerStore from "@/stores/useLayerStore";
import DialogCenterPopup from "@/components/common/dialog/DialogCenterPopup";
import DialogFullPopup from "@/components/common/dialog/DialogFullPopup";
import DialogBottomPopup from "@/components/common/dialog/DialogBottomPopup";
import DialogAlertPopup from "@/components/common/dialog/DialogAlertPopup";
import AlertComponent from "@/components/common/dialog/AlertComponent";

let _layerId = 0;

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
        id: ++_layerId,
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
        id: ++_layerId,
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
        id: ++_layerId,
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
  // 간편 Alert 호출 함수
  showAlert: (title, message) => {
    return new Promise((resolve) => {
      const callbackFunc = (result) => {
        resolve(result);
      };
      const { addLayerList } = useLayerStore.getState();
      const PopupComponent = (layerProps) => {
        return (
          <DialogAlertPopup {...layerProps}>
            <AlertComponent {...layerProps} />
          </DialogAlertPopup>
        );
      };
      addLayerList({
        id: ++_layerId,
        layerComponent: PopupComponent,
        callbackFunc,
        layerProps: { title, message },
        type: "ALERTPOPUP",
      });
    });
  },
  /**
   * @param {*} type
   * @param {*} ContentsComponent
   * @param {*} param2
   * @returns
   * LayerUtils.showPopup("CENTER", SampleCenterDialogComponent, { data: { ... } });
   *LayerUtils.showPopup("FULL", SampleFullDialogComponent, { data: { ... } });
   *LayerUtils.showPopup("BOTTOM", SampleBottomComponent, { data: { ... } });
   */
  showPopup: (type, ContentsComponent, { data, ...options } = {}) => {
    let DialogComponent;

    if (type === "CENTER") DialogComponent = DialogCenterPopup;
    else if (type === "FULL") DialogComponent = DialogFullPopup;
    else if (type === "BOTTOM") DialogComponent = DialogBottomPopup;

    return new Promise((resolve) => {
      const callbackFunc = (result) => {
        resolve(result);
      };

      const { addLayerList } = useLayerStore.getState();

      const PopupComponent = (layerProps) => (
        <DialogComponent {...layerProps}>
          <ContentsComponent {...layerProps} />
        </DialogComponent>
      );

      addLayerList({
        id: ++_layerId,
        layerComponent: PopupComponent,
        callbackFunc,
        layerProps: { data, ...options },
        type: type + "POPUP",
      });
    });
  },
};
export default LayerUtils;
