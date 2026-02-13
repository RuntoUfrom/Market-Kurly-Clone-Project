import ImageMappingHelper from "@/constants/ImageMappingHelper";
import ProductDetailNotice from "@/components/feature/DTI/ProductDetailNotice";
// 상세 정보 탭

const DTIDetailsContent = ({ detailDescription = {} }) => {
  return (
    <div className="flex flex-col justify-center bg-white">
      <button className=" bg-gray-300 rounded-2xl text-sm p-2 m-6">
        이미지를 클릭하면 더 크게 볼 수 있습니다.
      </button>
      <div>
        {detailDescription.detailProductImage && (
          <img src={ImageMappingHelper[detailDescription.detailProductImage]} />
        )}
      </div>
      <ProductDetailNotice
        category={"MARKET"}
        detailDescription={detailDescription}
      />
      <div></div>
    </div>
  );
};
export default DTIDetailsContent;
