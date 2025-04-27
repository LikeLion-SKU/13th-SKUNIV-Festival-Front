import axios from "axios";

export interface LostItemData {
  name: string;
  imageUrl: string;
  foundPlace: string;
  foundDate: string;
}

export const postLostItem = async (data: LostItemData) => {
  try {
    const response = await axios.post("https://api.2025skufestival.site/api/lost-items", data);
    return response.data;
  } catch (error) {
    console.error("분실물 등록 실패:", error);
    throw error;
  }
};

export const uploadImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(
    "https://api.2025skufestival.site/api/image/lost-item/image-upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data.imageUrl;
};
