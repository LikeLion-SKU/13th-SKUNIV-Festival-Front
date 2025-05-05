import { useState, useEffect } from "react";
import Search from "./search";
import Filter from "./filter";
import Card from "./card";
import useHeader from "../../shared/hooks/useHeader";
import { fetchLostItems } from "./lostArticleAPI";
import { Container, CardList, Pagination, EmptyMessage } from "./style.ts";

interface LostItem {
  id: number;
  location: string;
  date: string;
  title: string;
  imageUrl: string;
  returned: boolean;
}

const LostArticlePage = () => {
  const [currentPage, setCurrentPage] = useState(0); // 0부터 시작
  const [sort, setSort] = useState<"LATEST" | "OLDEST">("LATEST");
  const [name, setName] = useState("");
  const [lostItems, setLostItems] = useState<LostItem[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  useHeader({
    title: "분실물",
    showHamburger: true,
    canAccessAdmin: false,
    canAccessLost: true,
  });

  useEffect(() => {
    const getLostItems = async () => {
      try {
        const data = await fetchLostItems({ name, sort, page: currentPage });

        const mapped = data.content.map((item: any) => ({
          id: item.id,
          location: item.foundPlace,
          date: item.foundDate,
          title: item.name,
          imageUrl: item.imageUrl,
          returned: item.returned,
        }));

        setLostItems(mapped);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("분실물 목록을 가져오는데 실패했습니다.", error);
      }
    };

    getLostItems();
  }, [name, sort, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <Search
        onSearch={(keyword) => {
          setName(keyword);
          setCurrentPage(0);
        }}
      />
      <Filter
        sort={sort}
        onSortChange={(newSort) => {
          setSort(newSort);
          setCurrentPage(0);
        }}
      />
      {lostItems.length > 0 ? (
        <CardList>
          {lostItems.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </CardList>
      ) : (
        <EmptyMessage>분실물이 없습니다.</EmptyMessage>
      )}

      {totalPages > 1 && (
        <Pagination>
          <button
            className="arrow-left"
            onClick={() => handlePageChange(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
          >
            {"<"}
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={currentPage === i ? "active" : ""}
              onClick={() => handlePageChange(i)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="arrow-right"
            onClick={() => handlePageChange(Math.min(totalPages - 1, currentPage + 1))}
            disabled={currentPage === totalPages - 1}
          >
            {">"}
          </button>
        </Pagination>
      )}
    </Container>
  );
};

export default LostArticlePage;
