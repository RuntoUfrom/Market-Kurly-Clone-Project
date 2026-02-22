import useThemeStore from "@/stores/useThemeStore";
import HOM001 from "@/pages/HOM/HOM001/HOM001";
import HOM002 from "@/pages/HOM/HOM002/HOM002";

const HOM = () => {
  const { theme } = useThemeStore();
  if (theme === "market") {
    return <HOM001 />;
  } else {
    return <HOM002 />;
  }
};
export default HOM;
