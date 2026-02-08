import BasicSubmitButton from "@/components/common/button/BasicSubmitButton";
import useHistoryController from "@/hooks/controllers/useHistoryController";
import LayerUtils from "@/utils/LayerUtils";
import useAuthStore from "@/stores/useAuthStore";
import { useState } from "react";
import AlertComponent from "@/components/common/dialog/AlertComponent";

const LGN001 = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const { moveTo } = useHistoryController();
  const login = useAuthStore((state) => state.login);

  const isDisabled = !userId.trim() || !password.trim();

  const handleLoginClick = () => {
    if (userId === "user001" && password === "001229") {
      login();
      moveTo({ direction: "FORWARD", menuId: "HOM001", options: -1 });
    } else {
      LayerUtils.showCenterPopup(AlertComponent, {
        data: {
          title: "아이디, 비밀번호를 확인해주세요.",
        },
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full px-6">
      <div className="w-full flex flex-col mb-5  overflow-hidden border border-gray-300">
        <input
          type="text"
          placeholder="아이디 입력"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-full h-[52px] px-4 border border-gray-300 text-sm outline-none placeholder:text-gray-400  focus:border-primary transition-colors"
        />
        <input
          type="password"
          placeholder="비밀번호 입력"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-[52px] px-4 border border-gray-300 text-sm outline-none placeholder:text-gray-400  focus:border-primary transition-colors"
        />
      </div>

      <BasicSubmitButton
        text="로그인"
        disabled={isDisabled}
        variant="fill"
        onClick={handleLoginClick}
      />

      <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
        <span className="cursor-pointer">아이디 찾기</span>
        <span>·</span>
        <span className="cursor-pointer">비밀번호 찾기</span>
      </div>
    </div>
  );
};

export default LGN001;
