import BeautyBrandSection from "@/components/feature/HOM/BeautyBrandSection";

const BrandImage = {
  Sulwhasu: [
    { image: "SulwhasuBrand01", text: "상백선 크림 기획세트" },
    { image: "SulwhasuBrand02", text: "자음생 세럼 에센스" },
    { image: "SulwhasuBrand03", text: "윤조 에센스 특별 기획세트" },
    { image: "SulwhasuBrand04", text: "퍼펙팅 쿠션 기획세트" },
    { image: "SulwhasuBrand05", text: "자정 크림 기획세트" },
    { image: "SulwhasuBrand06", text: "진설 세럼" },
    { image: "SulwhasuBrand07", text: "미백 앰플 에센스" },
    { image: "SulwhasuBrand08", text: "탄력 크림 세트" },
    { image: "SulwhasuBrand09", text: "활유 크림 기획세트" },
  ],
  Lancome: [
    { image: "LancomeBrand01", text: "립 이돌 버터 글로우 립밤" },
    { image: "LancomeBrand02", text: "앱솔뤼 로즈 80 크림" },
    { image: "LancomeBrand03", text: "제니피크 앰플 세럼" },
    { image: "LancomeBrand04", text: "비피파시아 세럼" },
    { image: "LancomeBrand05", text: "뮤자 컬러 마스카라" },
    { image: "LancomeBrand06", text: "탕드루 파운데이션" },
    { image: "LancomeBrand07", text: "라 비 에스트 벨 오 드 퍼퓸" },
  ],
  Sisley: [
    { image: "SisleyBrand01", text: "리조마틴 크림" },
    { image: "SisleyBrand02", text: "에클라 마티피앙 마스크" },
    { image: "SisleyBrand03", text: "파이토-블랑 알티마 크림" },
    { image: "SisleyBrand04", text: "안티-아지엔 크림" },
    { image: "SisleyBrand05", text: "타이탄 선크림" },
    { image: "SisleyBrand06", text: "프리티아나 크림" },
  ],
};

const HOMBeautyBrandContent = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col gap-2 p-2">
        <BeautyBrandSection
          main="설화수"
          description="시간의 흐름에 지지 않는 아름다움을 위해"
          brandImageList={BrandImage.Sulwhasu}
        />
        <BeautyBrandSection
          main="시슬리"
          description="순수, 그 영원한 아름다움"
          brandImageList={BrandImage.Sisley}
        />
        <BeautyBrandSection
          main="랑콤"
          description="여성의 아름다움을 위한 피부과학"
          brandImageList={BrandImage.Lancome}
        />
      </div>
    </div>
  );
};
export default HOMBeautyBrandContent;
