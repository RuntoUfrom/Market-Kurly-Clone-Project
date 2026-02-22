import ReviewListToggle from "@/components/feature/DTI/ReviewListToggle";
import ReviewImageList from "@/components/feature/DTI/ReviewImageList";
import ReviewContent from "@/components/feature/DTI/ReviewContent";
import { useQuery } from "@tanstack/react-query";
import { productDetailReviewService } from "@/api/services/DTI/productDetailService";

const PRODUCT_IMAGE_REVIEW_LIST = [
  "PM0001-Review",
  "PM0002-Review",
  "PM0003-Review",
  "PM0004-Review",
];

const DTIReviewsContent = ({ productId }) => {
  const { data } = useQuery({
    queryKey: ["productDetailReview", productId],
    queryFn: () => productDetailReviewService({ productId }),
  });

  return (
    <div>
      <div className="bg-white px-4 p-2 flex flex-col gap-2">
        <ReviewListToggle
          label={"공지"}
          title={"[26년 2월]베스트 리뷰어 신청 안내"}
          content={
            "상품 후기 게시판 정보는 적립금 혜택입니다\n이게 말이 되는 일입니까? \n혜택 나도 받고 싶다.로또 되고 싶다."
          }
        />
        <ReviewListToggle
          label={"공지"}
          title={"상품후기 적립금 신청 안내"}
          content={
            "상품 후기 게시판 정보는 적립금 혜택입니다\n이게 말이 되는 일입니까? \n혜택 나도 받고 싶다.로또 되고 싶다."
          }
        />
        <ReviewListToggle
          label={"공지"}
          title={"금주의 베스트 후기 신청 안내"}
          content={
            "상품 후기 게시판 정보는 적립금 혜택입니다\n이게 말이 되는 일입니까? \n혜택 나도 받고 싶다.로또 되고 싶다."
          }
        />
      </div>
      <div className="px-4 pb-2 bg-white">
        <div className="font-bold text-sm text-gray-700 p-1">사진 후기</div>
        <ReviewImageList imageList={PRODUCT_IMAGE_REVIEW_LIST} />
      </div>
      <div className="px-4 pb-2 bg-white">
        {data?.reviews?.map((item) => (
          <ReviewContent
            key={item.reviewId}
            isBest={item.isBest}
            isMembers={item.isMembers}
            userName={item.userName}
            content={item.content}
            productName={data.productName}
          />
        ))}
      </div>
    </div>
  );
};
export default DTIReviewsContent;
