//동적 이미지 매핑을 위한 코드 - assets 하위 모든 이미지를 자동으로 매핑
const allModules = import.meta.glob(
  "@/assets/**/*.{jpg,jpeg,png,gif,svg,webp}",
  { eager: true },
);

const ImageMappingHelper = {};

for (const path in allModules) {
  const fileName = path
    .split("/")
    .pop()
    .replace(/\.[^.]+$/, "");
  ImageMappingHelper[fileName] = allModules[path].default;
}

export default ImageMappingHelper;
