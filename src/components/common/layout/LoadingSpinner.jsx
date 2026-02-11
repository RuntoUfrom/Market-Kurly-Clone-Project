import useLoadingStore from "@/stores/useLoadingStore";
import Layout from "@/components/common/Layout";
function LoadingSpinner() {
  const loadingList = useLoadingStore((state) => state.loadingList);

  if (loadingList.length === 0) return null;

  return (
    <div className="absolute inset-0 z-9999 flex items-center justify-center bg-black/20">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-primary" />
    </div>
  );
}

export default LoadingSpinner;
