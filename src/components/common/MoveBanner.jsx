import { useState, useEffect, useRef } from "react";
import NextDirection from "@/assets/common/icons/NextDirectionIcon.svg";
import ImageMappingHelper from "@/constants/ImageMappingHelper";

/**
 * 자동으로 슬라이드되는 배너 컴포넌트
 *
 * @param {Object} props
 * @param {Array<{bannerImage: string, title: string}>} [props.bannerList=[]] - 배너 데이터 목록
 */
const MoveBanner = ({ bannerList = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const touchStartX = useRef(0);

  useEffect(() => {
    if (bannerList.length === 0 || !isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === bannerList.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [bannerList.length, isPlaying, currentIndex]);

  if (bannerList.length === 0) {
    return null;
  }

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? bannerList.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === bannerList.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={ImageMappingHelper[bannerList[currentIndex].bannerImage]}
        alt={bannerList[currentIndex].title}
        className="w-full h-auto object-cover"
      />

      <div className="flex flex-row items-center justify-center gap-2 absolute bottom-2 right-2">
        <div className="p-1 rounded-2xl bg-black/50 flex items-center justify-center">
          <button
            onClick={togglePlay}
            className="flex items-center justify-center w-5 h-5"
          >
            {isPlaying ? (
              <span className="text-white text-xs">| |</span>
            ) : (
              <span className="text-white text-xs ml-0.5">▶</span>
            )}
          </button>
        </div>
        <div className="p-2 pl-3 rounded-2xl bg-black/50 flex  flex-row items-center justify-center">
          <span className="text-white text-xs">
            {currentIndex + 1} / {bannerList.length}
          </span>
          <button
            onClick={() => alert("전체보기 클릭됨")}
            className="text-xs text-white px-2"
          >
            전체보기
          </button>
          <img src={NextDirection} className="w-2 h-2" />
        </div>
      </div>
    </div>
  );
};

export default MoveBanner;
