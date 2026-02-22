import ReviewListToggle from "@/components/feature/DTI/ReviewListToggle";
import { useQuery } from "@tanstack/react-query";
import { productDetailInquiryService } from "@/api/services/DTI/productDetailService";
import BasicSubmitButton from "@/components/common/button/BasicSubmitButton";
import ProductQuestion from "@/components/feature/DTI/ProductQuestion";
const DTIInquiryContent = ({ productId }) => {
  const { data } = useQuery({
    queryKey: ["productDetailInquiry", productId],
    queryFn: () => productDetailInquiryService({ productId }),
  });

  return (
    <div className="bg-white">
      <div className="px-6 py-2">
        <BasicSubmitButton text="상품 문의하기" variant="unfill" />
      </div>
      <div className="bg-white px-4 p-2 flex flex-col gap-2">
        {data?.questions?.map((item) => (
          <ProductQuestion
            key={item.questionId}
            isSecret={item.isSecret}
            title={item.title}
            userName={item.userName}
            date={item.date}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};
export default DTIInquiryContent;
