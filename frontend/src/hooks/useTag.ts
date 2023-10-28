import { useQuery } from "react-query";
import configAxios from "../configAxios/configAxios";
import useTagStore from "../store-zustand/tag";
const { setTags } = useTagStore();
export const useTag = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["Tags"],
    queryFn: async () => {
      const rs = await configAxios.get("/tags");
      setTags(rs.data);
      return rs.data;
    },
  });
  return {
    tags: data || [],
  };
};
