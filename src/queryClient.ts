import { QueryClient } from "react-query";

export default new QueryClient({
  defaultOptions: {
    // see https://tanstack.com/query/v3/docs/framework/react/reference/useQuery
    queries: {
      refetchOnWindowFocus: false,
    },
    // see https://tanstack.com/query/v3/docs/framework/react/reference/useMutation
    mutations: {
      retry: false,
    },
  },
});
