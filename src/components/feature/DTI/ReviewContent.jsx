import ImageMappingHelper from "@/constants/ImageMappingHelper";

/**
 * 리뷰 컨텐츠 컴포넌트
 *
 * @param {Object} props
 * @param {boolean} [props.isBest=false] - 베스트 리뷰 여부
 * @param {boolean} [props.isMembers=false] - 멤버스 리뷰 여부
 * @param {string} [props.userName=""] - 작성자 이름
 * @param {string[]} [props.reviewImages=[]] - 리뷰 이미지 키 목록
 * @param {string} props.content - 리뷰 본문 내용
 */
const ReviewContent = ({
  isBest = false,
  isMembers = false,
  userName = "",
  reviewImages = [],
  content,
  productName = "",
}) => {
  let lastName = userName.slice(0, 1);
  return (
    <div className="flex flex-col gap-1 p-2">
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
        {reviewImages.map((item) => (
          <img
            src={ImageMappingHelper[item]}
            key={item}
            alt="리뷰 이미지"
            className="w-1/4 shrink-0 aspect-square object-cover"
          />
        ))}
      </div>
      <div className="text-gray-400 text-xs">{productName}</div>
      <div className="text-xs whitespace-pre-line">{content}</div>
    </div>
  );
};
export default ReviewContent;
