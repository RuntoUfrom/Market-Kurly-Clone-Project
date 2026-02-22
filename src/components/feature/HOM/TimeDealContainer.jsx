import { useEffect, useState } from "react";
import { timeDealService } from "@/api/services/HOM/timeDealService";
import TimeDealComponent from "./TimeDealComponent";
import SectionHeader from "@/components/common/SectionHeader";

const TimeDealContainer = ({ category = "market", main, description }) => {
  const [dealData, setDealData] = useState(null);

  useEffect(() => {
    const fetchTimeDeal = async () => {
      const response = await timeDealService({ category });
      setDealData(response);
    };
    fetchTimeDeal();
  }, [category]);

  if (!dealData) return null;
  return (
    <div>
      <SectionHeader main={main} description={description} />
      <TimeDealComponent product={dealData} endTime={dealData.endTime} />
    </div>
  );
};

export default TimeDealContainer;
