import TopDirection from "@/assets/common/icons/TopDirectionIcon.svg";

const RoundIconBtn = () => {
  return (
    <div className="bg-white p-3 rounded-4xl w-10 h-10 flex flex-row justify-center">
      <img src={TopDirection} alt="위" />
    </div>
  );
};
export default RoundIconBtn;
