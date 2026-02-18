export const sortProducts = (productList = [], sortOption) => {
  let SortedProductList = productList;

  if (sortOption === "추천순") {
    return SortedProductList;
  } else if (sortOption === "신상품순") {
    SortedProductList = productList.toSorted(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    );
  } else if (sortOption === "판매량순") {
    SortedProductList = productList.toSorted(
      (a, b) => b.salesCount - a.salesCount,
    );
  } else if (sortOption === "혜택순") {
    SortedProductList = productList.toSorted(
      (a, b) => b.discountRate - a.discountRate,
    );
  } else if (sortOption === "높은 가격순") {
    SortedProductList = productList.toSorted((a, b) => {
      const priceA = a.originalPrice * (1 - a.discountRate / 100);
      const priceB = b.originalPrice * (1 - b.discountRate / 100);
      return priceB - priceA;
    });
  } else if (sortOption === "낮은 가격순") {
    SortedProductList = productList.toSorted((a, b) => {
      const priceA = a.originalPrice * (1 - a.discountRate / 100);
      const priceB = b.originalPrice * (1 - b.discountRate / 100);
      return priceA - priceB;
    });
  }
  return SortedProductList;
};
