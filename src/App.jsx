import DialogComponent from "@/components/common/dialog/DialogComponent";
import Layout from "@/components/common/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RootRoute from "@/routes/RootRoute";
import { Suspense } from "react";
//import { useEffect } from "react";
//import useHistoryStore from "@/stores/useHistoryStore";
// import DialogComponent from "@/components/common/dialog/DialogComponent";
// import useCoreStore from "@/stores/useCoreStore";
// import SampleLoading from "@/components/common/sample/SampleLoading";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 3,
      gcTime: 1000 * 60 * 5,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  // const { historyList } = useHistoryStore();
  // const { loading } = useCoreStore();

  // useEffect(() => {
  //   console.log("히스토리 변화 감지", historyList);
  //   console.log("로딩 변화 감지", loading);
  // }, [historyList, loading]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <RootRoute />
          <DialogComponent />
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
