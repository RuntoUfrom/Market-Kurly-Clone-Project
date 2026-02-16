import SectionHeader from "./SectionHeader";
import ProductScrollSection from "@/components/common/ProductScrollSection";
import { useQuery } from "@tanstack/react-query";
import { productListService } from "@/api/services/HOM/productListService";

/**
 * 상품 목록을 페칭하여 ProductScrollSection에 전달하는 Container
 * @param {Object} props
 * @param {string} props.category - 상품 카테고리 (market, beauty, fashion, living)
 * @param {number} [props.page=1] - 페이지 번호
 * @param {number} [props.limit=10] - 페이지당 상품 개수
 * @param {string} [props.title] - 섹션 제목
 * @param {string} [props.description] - 섹션 설명
 * @param {string} [props.emoji] - 섹션 이모지
 * @param {function} props.onClickMore - 전체보기 클릭 핸들러
 */
const ProductScrollSectionContainer = ({
  category,
  page = 1,
  limit = 10,
  title = "",
  description = "",
  emoji = "🎁",
  onClickMore,
}) => {
  const { data } = useQuery({
    queryKey: ["products", category, page, limit],
    queryFn: () => productListService({ category, page, limit }),
  });

  // 데이터 표시
  return (
    <div className="bg-white pt-2">
      <SectionHeader
        main={title}
        description={description}
        isButtonAll={true}
        emoji={emoji}
        onClickMore={onClickMore}
      />
      <ProductScrollSection
        products={data?.data || []}
        onClickMore={onClickMore}
      />
    </div>
  );
};

export default ProductScrollSectionContainer;
