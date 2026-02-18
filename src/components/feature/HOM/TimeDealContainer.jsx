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
      <SectionHeader
        main="기회는 왔을때 잡아야한다"
        description="타임딜을 놓치지말고 꼭~"
      />
      <TimeDealComponent product={dealData} endTime={dealData.endTime} />
    </div>
  );
};

export default TimeDealContainer;
