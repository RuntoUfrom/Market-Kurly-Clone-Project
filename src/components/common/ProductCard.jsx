//세로/가로/심플-가로
import ProductInfo from "@/components/common/ProductInfo";
import ProductImage from "@/components/common/ProductImage";
import IconButton from "@/components/common/button/IconButton";
import CartIconGray from "@/assets/common/icons/CartIconGray.svg";

/**
 * @param {string} layout - "vertical" | "horizontal" | "simple-horizontal"
 */
const ProductCard = ({ product, layout = "vertical", rank = 1 }) => {
  const { productImage, topBadgeText, eventBadge, bottomBannerText } = product;

  // vertical 레이아웃 (가로 160px)
  if (layout === "vertical") {
    return (
      <div className="w-full w-2/3">
        <div className="flex flex-col gap-2 w-40 p-1 bg-white rounded-md m-2">
          {/* 상품 이미지 (4px 마진 효과) */}
          <ProductImage
            productImage={productImage}
            topBadgeText={topBadgeText}
            eventBadge={eventBadge}
            bottomBannerText={bottomBannerText}
          />
          <IconButton
            icon={CartIconGray}
            alt="담기 버튼"
            className=" top-2 bg-white rounded-full p-1 shadow-md"
            label="담기"
          />
          <ProductInfo product={product} layout={layout} />
        </div>
      </div>
    );
  }

  // horizontal 레이아웃 (260x160px)
  if (layout === "horizontal") {
    return (
      <div className="p-2 bg-white flex flex-row justify-center">
        <div className="flex flex-row w-68 h-46 bg-white rounded-md  p-2 justify-center">
          {/* 이미지 영역 (정사각형 160x160) */}
          <div className="w-30 h-[37.5] shrink-0 m-2">
            <ProductImage
              productImage={productImage}
              topBadgeText={topBadgeText}
              eventBadge={eventBadge}
              bottomBannerText={bottomBannerText}
            />
          </div>

          {/* 오른쪽 정보 영역 */}
          <div className="flex-1 flex flex-col justify-between p-2">
            {/* 상단: 순위 + 상품정보 */}
            <div>
              <span className="text-lg font-bold text-gray-800 mb-1 block">
                {rank}
              </span>

              <ProductInfo product={product} layout={layout} />
            </div>

            <IconButton icon={CartIconGray} alt="담기 버튼" label="담기" />
          </div>
        </div>
      </div>
    );
  }

  // simple-horizontal 레이아웃 (w-full, h-70px, 마진 8px)
  if (layout === "simple-horizontal") {
    return (
      <div className="flex flex-row items-center w-80 h-18 p-2 gap-3 bg-white rounded-md m-2 justify-center">
        {/* 이미지 영역 (정사각형 60x60) */}
        <div className="w-10 h-10 shrink-0">
          <ProductImage productImage={productImage} />
        </div>

        {/* 상품 정보 (상품명 + 할인율/가격) */}
        <div className="flex-1">
          <ProductInfo product={product} layout={layout} />
        </div>

        <div className="w-20">
          <IconButton icon={CartIconGray} alt="담기 버튼" label="담기" />
        </div>
      </div>
    );
  }
};

export default ProductCard;
