import { publicAPI } from "../../shared/lib/api";

export const fetchBoothInfo = async (lang: string) => {
  try {
    const response = await publicAPI.get("boothInfo", {
      params: { lang },
    });
    return response.data.data;
  } catch (error) {
    console.error("부스 정보를 불러오는 중 오류 발생:", error);
    return [];
  }
};
