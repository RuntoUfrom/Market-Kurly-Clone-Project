import { fixDealBannerService } from "@/api/services/bannerService";
import { useEffect, useState } from "react";
import ImageMappingHelper from "@/constants/ImageMappingHelper";

const HOMBeautyDealsContent = () => {
  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      const response = await fixDealBannerService();
      setBannerList(response);
    };
    fetchBanners();
  }, []);

  return (
    <div className="">
      <div className="flex flex-col items-center gap-4">
        {bannerList.map((item) => (
          <img
            key={item.bannerId}
            src={ImageMappingHelper[item.bannerImage]}
            alt={item.title}
          />
        ))}
      </div>
    </div>
  );
};
export default HOMBeautyDealsContent;
