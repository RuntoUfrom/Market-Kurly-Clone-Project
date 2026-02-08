const imageModules = import.meta.glob(
  "@/assets/foodmarketimages/MarketImage*.*",
  { eager: true },
);

// { "MarketImage01": "/src/assets/foodmarketimages/MarketImage01.jpg", ... }
const marketProductImageMap = {};

for (const path in imageModules) {
  const fileName = path.split("/").pop().replace(/\.[^.]+$/, "");
  marketProductImageMap[fileName] = imageModules[path].default;
}

export default marketProductImageMap;
