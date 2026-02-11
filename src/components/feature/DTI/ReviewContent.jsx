import ImageMappingHelper from "@/constants/ImageMappingHelper";

const ReviewContent = ({
  isBest = false,
  isMembers = false,
  userName = "",
  imageList = [],
  content,
}) => {
  let lastName = userName.slice(0, 1);
  return (
    <div className="flex flex-col  gap-2">
      <div className="flex flex-row items-center gap-1">
        {isBest && (
          <div className="p-1 text-white font-bold bg-primary text-[8px] rounded-sm">
            베스트
          </div>
        )}
        {isMembers && (
          <div className="p-1 text-white font-bold bg-sky-500 text-[8px] rounded-sm">
            멤버스
          </div>
        )}

        <div className="text-gray-800 font-bol text-xs">{`${lastName}**`}</div>
      </div>
      <div className="flex flex-row gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {imageList.map((item) => (
          <img
            src={ImageMappingHelper[item]}
            key={item}
            alt="리뷰 이미지"
            className="w-1/4 shrink-0 aspect-square object-cover"
          />
        ))}
      </div>
      <div className="text-xs whitespace-pre-line mt-1">{content}</div>
    </div>
  );
};
export default ReviewContent;
