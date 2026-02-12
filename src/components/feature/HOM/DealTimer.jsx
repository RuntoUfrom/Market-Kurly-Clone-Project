import { useState, useEffect } from "react";

const calcRemaining = (endTime) => {
  const diff = new Date(endTime).getTime() - Date.now();
  if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0, isExpired: true };

  return {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isExpired: false,
  };
};

const pad = (num) => String(num).padStart(2, "0");

/**
 * 타임 딜 남은 시간 타이머 컴포넌트
 *
 * @param {Object} props
 * @param {string|Date} props.endTime - 종료 시간
 */
const DealTimer = ({ endTime }) => {
  const [remaining, setRemaining] = useState(() => calcRemaining(endTime));

  useEffect(() => {
    if (remaining.isExpired) return;

    const timer = setInterval(() => {
      const next = calcRemaining(endTime);
      setRemaining(next);
      if (next.isExpired) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime, remaining.isExpired]);

  if (remaining.isExpired) {
    return <div className="text-sm text-gray-400">종료된 이벤트입니다</div>;
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-lg">🕐</span>
      <span className="text-lg font-bold tracking-widest">
        {pad(remaining.hours)} : {pad(remaining.minutes)} :{" "}
        {pad(remaining.seconds)}
      </span>
    </div>
  );
};

export default DealTimer;
