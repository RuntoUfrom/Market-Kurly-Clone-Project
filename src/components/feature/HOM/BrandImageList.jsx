import BrandImage from "@/components/feature/HOM/BrandImage";
import ImageMappingHelper from "@/constants/ImageMappingHelper";

/**
 * 브랜드 이미지 리스트 컴포넌트 (가로 스크롤)
 *
 * @param {Object} props
 * @param {Object[]} [props.brandImageList=[]] - 브랜드 이미지 및 텍스트 데이터 목록
 */
const BrandImageList = ({ brandImageList = [] }) => {
  return (
    <div className="flex flex-row gap-2 overflow-x-auto scrollbar-hide">
      {brandImageList.map((item, index) => (
        <BrandImage
          key={index}
          image={ImageMappingHelper[item.image]}
          text={item.text}
        />
      ))}
    </div>
  );
};
export default BrandImageList;
