import BasicSubmitButton from "../button/BasicSubmitButton";
import HeartIcon from "@/assets/common/icons/HeartIcon.png";
const DetailProductButton = () => {
  return (
    <div className="flex flex-row w-full">
      <div className="w-1/5 flex items-center justify-center">
        <img src={HeartIcon} className="w-6 h-6" />
      </div>
      <div className="w-4/5 m-2">
        <BasicSubmitButton
          text="구매하기"
          variant="fill"
          onClick={() => {
            console.log("구매하기 버튼 클릭");
          }}
        />
      </div>
    </div>
  );
};
export default DetailProductButton;
