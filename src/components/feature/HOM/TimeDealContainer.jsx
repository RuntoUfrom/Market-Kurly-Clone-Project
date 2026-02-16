import { useEffect, useState } from "react";
import { timeDealService } from "@/api/services/HOM/timeDealService";
import TimeDealComponent from "./TimeDealComponent";

const TimeDealContainer = ({ category = "market" }) => {
  const [dealData, setDealData] = useState(null);

  useEffect(() => {
    const fetchTimeDeal = async () => {
      const response = await timeDealService({ category });
      setDealData(response);
    };
    fetchTimeDeal();
  }, [category]);

  if (!dealData) return null;

  return <TimeDealComponent product={dealData} endTime={dealData.endTime} />;
};

export default TimeDealContainer;
