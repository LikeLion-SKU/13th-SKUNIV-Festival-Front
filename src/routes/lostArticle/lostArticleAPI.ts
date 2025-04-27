import axios from "axios";

interface FetchLostItemsParams {
  name?: string;
  sort?: "LATEST" | "OLDEST";
  page?: number;
}

export const fetchLostItems = async ({ name, sort = "LATEST", page = 0 }: FetchLostItemsParams) => {
  const params: Record<string, string | number> = {
    sort,
    page,
  };

  if (name) {
    params.name = name;
  }

  const response = await axios.get("https://api.2025skufestival.site/api/lost-items", { params });
  return response.data.data;
};
