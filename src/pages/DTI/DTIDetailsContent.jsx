import ProductDetailImage from "@/assets/ProductShampoo.jpg";

const PRODUCT_NOTICE_DATA = [
  { label: "제품명", value: "상품설명 및 상품이미지 참조" },
  { label: "식품의 유형", value: "상품설명 및 상품이미지 참조" },
  {
    label: "생산자 및 소재지\n(수입품의 경우 생산자, 수입자 및 제조국)",
    value: "상품설명 및 상품이미지 참조",
  },
  {
    label: "제조연월일, 소비기한 또는 품질유지기한",
    value: "상품설명 및 상품이미지 참조",
  },
  {
    label: "포장단위별 내용물의 용량(중량), 수량",
    value: "상품설명 및 상품이미지 참조",
  },
];

const DTIDetailsContent = () => {
  return (
    <div className="flex flex-col justify-center">
      <button className="p-2 bg-gray-300 rounded-2xl text-sm m-6">
        이미지를 클릭하면 더 크게 볼 수 있습니다.
      </button>
      <img src={ProductDetailImage} />
      <div className="px-4 py-6">
        <h3 className="text-base font-bold text-center mb-4">상품고시정보</h3>
        <div className="border-t border-gray-200">
          {PRODUCT_NOTICE_DATA.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[120px_1fr] border-b border-gray-100"
            >
              <span className="text-xs text-gray-500 py-4 pr-2 whitespace-pre-line">
                {item.label}
              </span>
              <span className="text-xs text-gray-700 py-4">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default DTIDetailsContent;
