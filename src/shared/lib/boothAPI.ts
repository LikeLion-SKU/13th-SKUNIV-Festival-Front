import { publicAPI } from "./api";

export const fetchBoothInfo = async (lang: string) => {
  try {
    const response = await publicAPI.get("boothInfo", {
      params: { lang },
    });
    console.log(lang);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("부스 정보를 불러오는 중 오류 발생:", error);
    return [];
  }
};
