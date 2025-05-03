import axios from "axios";

export const postLostItem = async (formData: FormData) => {
  const url = "https://api.2025skufestival.site/api/lost-items";  // 서버 API URL

  try {
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",  // 파일 전송을 위한 헤더
      },
    });
    return response.data;
  } catch (error) {
    return;
  }
};

export const putLostItem = async (id: number, formData: FormData) => {
  const url = `https://api.2025skufestival.site/api/lost-items/${id}`;

  try {
    const response = await axios.put(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    return;
  }
};

export const getLostItem = async (id: number) => {
  const url = `https://api.2025skufestival.site/api/lost-items/${id}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return;
  }
};