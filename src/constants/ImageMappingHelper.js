//동적 이미지 매핑을 위한 코드
const imageModules = import.meta.glob(
  "@/assets/foodmarketimages/MarketImage*.*",
  { eager: true },
);

// { "MarketImage01": "/src/assets/foodmarketimages/MarketImage01.jpg", ... }
const ImageMappingHelper = {};

for (const path in imageModules) {
  const fileName = path
    .split("/")
    .pop()
    .replace(/\.[^.]+$/, "");
  ImageMappingHelper[fileName] = imageModules[path].default;
}

export default ImageMappingHelper;
