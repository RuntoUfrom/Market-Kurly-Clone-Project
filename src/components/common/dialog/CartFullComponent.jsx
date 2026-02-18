import ProductCartContent from "@/components/feature/CART/ProductCartContent";
import { useState } from "react";
import CheckUnFillIcon from "@/assets/common/icons/CheckUnfillIcon.svg";
import CheckPurpleIcon from "@/assets/common/icons/CheckPurpleIcon.svg";
import BasicSubmitButton from "../button/BasicSubmitButton";
import CartAmount from "@/components/feature/CART/CartAmount";
const CartProductList = [
  {
    productName: "풀무원 국산콩 두부",
    productImage: "https://placehold.co/80x80",
    productDescription: "",
    productOriginalPrice: "2,980원",
    productFinalPrice: "2,480원",
    productQuantityLeft: 3,
    productChecked: true,
  },
  {
    productName: "CJ 비비고 왕교자",
    productImage: "https://placehold.co/80x80",
    productDescription: "CJ 비비고 왕교자",
    productOriginalPrice: "12,900원",
    productFinalPrice: "10,900원",
    productQuantityLeft: null,
    productChecked: true,
  },
  {
    productName: "하림 닭가슴살",
    productImage: "https://placehold.co/80x80",
    productDescription: "하림 닭가슴살",
    productOriginalPrice: "9,800원",
    productFinalPrice: "7,900원",
    productQuantityLeft: 5,
    productChecked: false,
  },
];

const CartFullComponent = ({ data }) => {
  const [selectProduct, setSelectProduct] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [finalPrice, setFinalPrice] = useState(0);
  return (
    <div className="bg-gray-100 h-full flex flex-col">
      <header className="shrink-0 bg-white">
        <div className="flex flex-row gap-2 p-4 bg-white">
          <div>X</div>
          <div>장바구니</div>
        </div>
        <div className="flex flex-row gap-2">
          <img src={CheckUnFillIcon} />
          <div>전체선택</div>
          <div>선택삭제</div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar p-4">
        <div className="flex flex-col mb-6">
          <div className="bg-white">
            {CartProductList.map((product, index) => (
              <ProductCartContent key={index} product={product} />
            ))}

            <div className="bg-gray-200 p-2 m-4 text-sm font-medium text-center rounded-md">
              {`상품 ${finalPrice}원 + 배송비 무료`}
            </div>
          </div>
        </div>
        <CartAmount />
      </main>

      <footer className="shrink-0 bg-white">
        <BasicSubmitButton text="구매하기" variant="fill" />
      </footer>
    </div>
  );
};
export default CartFullComponent;
