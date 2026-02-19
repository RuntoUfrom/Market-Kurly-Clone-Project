//세로/가로/심플-가로
import ProductInfo from "@/components/common/ProductInfo";
import ProductImage from "@/components/common/ProductImage";
import IconButton from "@/components/common/button/IconButton";
import CartIconGray from "@/assets/common/icons/CartIconGray.svg";
import useHistoryController from "@/hooks/controllers/useHistoryController";
import useCartStore from "@/stores/useCartStore";
/**
 * 상품 정보를 보여주는 카드 컴포넌트
 *
 * @param {Object} props
 * @param {Object} props.product - 상품 정보 객체
 * @param {string} props.product.productImage - 상품 이미지 키
 * @param {string} [props.product.topBadgeText] - 상단 뱃지 텍스트
 * @param {boolean} [props.product.eventBadge] - 이벤트 뱃지 표시 여부
 * @param {string} [props.product.bottomBannerText] - 하단 배너 텍스트
 * @param {"vertical" | "horizontal" | "simple-horizontal"} [props.layout="vertical"] - 레이아웃 타입
 * @param {number} [props.rank=1] - 순위 (horizontal 레이아웃에서 사용)
 */
const ProductCard = ({ product, layout = "vertical", rank = 1 }) => {
  const { moveTo } = useHistoryController();
  const { addToCart } = useCartStore();
  const {
    productId,
    productImage,
    topBadgeText,
    eventBadge,
    bottomBannerText,
  } = product;
  const handleProductClick = () => {
    moveTo({
      direction: "FORWARD",
      menuId: "DTI001",
      params: { productId },
    });
  };
  const handleCartClick = (e) => {
    e.stopPropagation();
    addToCart({ ...product, quantity: 1 });
  };

  // vertical 레이아웃 (가로 160px)
  if (layout === "vertical") {
    return (
      <div className=" w-2/3" onClick={handleProductClick}>
        <div className="flex flex-col gap-2 w-40 p-1 bg-white rounded-md m-2">
          {/* 상품 이미지 (4px 마진 효과) */}
          <ProductImage
            productImage={productImage}
            topBadgeText={topBadgeText}
            eventBadge={eventBadge}
            bottomBannerText={bottomBannerText}
          />
          <IconButton
            icon="CART"
            alt="담기 버튼"
            className=" top-2 bg-white rounded-full p-1 shadow-md"
            label="담기"
            onClick={handleCartClick}
          />
          <ProductInfo product={product} layout={layout} />
        </div>
      </div>
    );
  }

  // horizontal 레이아웃 (260x160px)
  if (layout === "horizontal") {
    return (
      <div
        className="p-2 bg-white flex flex-row justify-center"
        onClick={handleProductClick}
      >
        <div className="flex flex-row w-68 h-46 bg-white rounded-md p-2 justify-center">
          {/* 이미지 영역 (정사각형 160x160) */}
          <div className="w-30 h-[37.5] shrink-0 mx-2">
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
            <div className="py-2">
              <IconButton
                icon="CART"
                alt="담기 버튼"
                label="담기"
                onClick={handleCartClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // simple-horizontal 레이아웃 (w-full, h-70px, 마진 8px)
  if (layout === "simple-horizontal") {
    return (
      <div
        onClick={handleProductClick}
        className="flex flex-row items-center w-94 h-18 p-2 gap-4 bg-white rounded-md m-2 justify-center"
      >
        <div className="w-14 h-14 shrink-0">
          <ProductImage productImage={productImage} />
        </div>

        <div className="flex-1">
          <ProductInfo product={product} layout={layout} />
        </div>

        <div className="w-20">
          <IconButton
            icon="CART"
            alt="담기 버튼"
            label="담기"
            onClick={handleCartClick}
          />
        </div>
      </div>
    );
  }
};

export default ProductCard;
