import BrandImageData from "@/assets/productimages/foodmarket/thumbnail/PM0004-Thumb.jpg";
/**
 * 브랜드 이미지 카드 컴포넌트
 *
 * @param {Object} props
 * @param {string} [props.image] - 이미지 소스
 * @param {string} [props.text] - 브랜드 설명 텍스트
 */
const BrandImage = ({ image = BrandImageData, text = "" }) => {
  return (
    <div>
      <div className="w-26 relative">
        <img
          src={image}
          alt="브랜드 이미지"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
        <div className="absolute m-2 bottom-0 left-0 right-0 text-white text-xs font-medium whitespace-pre-wrap">
          {text}
        </div>
      </div>
    </div>
  );
};
export default BrandImage;
