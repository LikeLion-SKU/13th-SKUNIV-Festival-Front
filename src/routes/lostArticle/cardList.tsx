import { useEffect, useState } from "react";
import Card from "./card";
import { fetchLostItems } from "./lostArticleAPI";

interface LostItem {
  id: number;
  name: string;
  foundPlace: string;
  foundDate: string;
  returned: boolean;
  imageUrl: string;
}

interface CardListProps {
  name: string;
  sort: "LATEST" | "OLDEST";
}

const CardList = ({ name, sort }: CardListProps) => {
  const [lostItems, setLostItems] = useState<LostItem[]>([]);

  useEffect(() => {
    const getLostItems = async () => {
      try {
        const data = await fetchLostItems({ name, sort });
        setLostItems(data);
      } catch (error) {
        console.error("분실물 목록을 가져오는데 실패했습니다.", error);
      }
    };

    getLostItems();
  }, [name, sort]);

  return (
    <div>
      {lostItems.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          location={item.foundPlace}
          date={item.foundDate}
          title={item.name}
          imageUrl={item.imageUrl}
          returned={item.returned}
        />
      ))}
    </div>
  );
};

export default CardList;
