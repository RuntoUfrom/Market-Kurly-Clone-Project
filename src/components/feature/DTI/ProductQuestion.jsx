import LockIcon from "@/assets/common/icons/LockIcon.svg";
import { useState } from "react";

/**
 * 상품 문의/후기 리스트 아이템 컴포넌트
 *
 * @param {Object} props
 * @param {boolean} props.isSecret - 비밀글 여부
 * @param {string} props.title - 문의 제목
 * @param {string} props.userName - 작성자 이름
 * @param {string} props.date - 작성일
 * @param {Object} [props.content] - 문의 내용 및 답변
 * @param {string} [props.content.question] - 문의 내용
 * @param {string} [props.content.answer] - 답변 내용 (null이면 답변 대기)
 */
const ProductQuestion = ({
  isSecret,
  title,
  userName,
  date,
  content = {
    question: null,
    answer: null,
  },
}) => {
  let isAnswer = content.answer !== null;
  const [isOpen, setIsOpen] = useState(false);
  const userSecureName =
    userName.length > 2
      ? userName[0] + "*".repeat(userName.length - 2) + userName.slice(-1)
      : userName[0] + "*";
  return (
    <button
      className="flex flex-col gap-1 bg-white p-2 w-full items-baseline text-left"
      onClick={() => !isSecret && setIsOpen(!isOpen)}
      disabled={isSecret}
    >
      {isSecret ? (
        <div className="flex flex-row gap-1 items-center">
          <p className="text-sm text-gray-500">비밀글 입니다.</p>
          <img src={LockIcon} className="w-3 h-3" />
        </div>
      ) : (
        <div className="text-sm text-gray-900 font-medium">{title}</div>
      )}

      <div className="flex flex-row gap-2">
        {isAnswer ? (
          <div className="text-xs text-primary font-bold">답변완료</div>
        ) : (
          <div className="text-xs text-gray-400">답변대기</div>
        )}
        <div className="text-xs text-gray-400">{userSecureName}</div>
        <div className="text-xs text-gray-400">{date}</div>
      </div>

      {!isSecret && isOpen && (
        <div className="flex flex-col bg-gray-100 w-full rounded-lg mt-2">
          <div className="flex flex-row gap-2 items-center p-2">
            <p className="bg-primary/60 p-1 px-2 text-xs font-bold text-white rounded-2xl shrink-0">
              Q
            </p>
            <p className="text-xs text-gray-900 font-medium">
              {content.question}
            </p>
          </div>
          {isAnswer && (
            <div className="flex flex-row gap-2 items-center p-2">
              <p className="bg-primary p-1 px-2 text-xs font-bold text-white rounded-2xl shrink-0">
                A
              </p>
              <p className="text-xs text-gray-900 font-medium">
                {content.answer}
              </p>
            </div>
          )}
        </div>
      )}
    </button>
  );
};
export default ProductQuestion;
