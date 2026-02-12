import { moveBannerService } from "@/api/services/HOM/bannerService";
import MoveBanner from "@/components/common/MoveBanner";
import { useEffect, useState } from "react";
import Footer from "@/components/common/layout/Footer";

const HOMLivingContent = () => {
  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      const response = await moveBannerService({ type: "LIVING" });
      setBannerList(response);
    };
    fetchBanners();
  }, []);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <MoveBanner bannerList={bannerList} />
      </div>
      <Footer />
    </div>
  );
};
export default HOMLivingContent;
