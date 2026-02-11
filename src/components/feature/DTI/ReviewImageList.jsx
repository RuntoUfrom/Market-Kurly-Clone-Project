import ImageMappingHelper from "@/constants/ImageMappingHelper";

const ReviewImageList = ({ imageList = [] }) => {
  // 최대 4개만 표시
  const displayImages = imageList.slice(0, 4);
  const isLastOverlay = displayImages.length === 4;

  return (
    <div className="flex flex-row gap-1 bg-white rounded-2xl w-full">
      {displayImages.map((fileName, index) => {
        const isLast = isLastOverlay && index === 3;

        return isLast ? (
          <button
            key={index}
            className="relative w-1/4 aspect-square rounded-md overflow-hidden"
            onClick={() => console.log("DTI에서 이미지 전체 보기 눌림")}
          >
            <img
              src={ImageMappingHelper[fileName]}
              alt={`리뷰 이미지 ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white text-xs font-semibold">전체보기</span>
            </div>
          </button>
        ) : (
          <img
            key={index}
            src={ImageMappingHelper[fileName]}
            alt={`리뷰 이미지 ${index + 1}`}
            className="w-1/4 aspect-square object-cover rounded-md"
          />
        );
      })}
    </div>
  );
};
export default ReviewImageList;
