import { useState } from 'react';
import Search from './search';
import Filter from './filter';
import Card from './card';
import { Container, CardList, Pagination } from './style.ts';

const LostArticlePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const dummyData = Array(6).fill({
    location: '유담관 앞',
    date: '05.08 THU',
    title: '에어팟 Airpods'
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <Search />
      <Filter />
      <CardList>
        {dummyData.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </CardList>
      <Pagination>
        <button
          className="arrow-left"
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        >
          {'<'}
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={currentPage === i + 1 ? 'active' : ''}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="arrow-right"
          onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        >
          {'>'}
        </button>
      </Pagination>
    </Container>
  );
};

export default LostArticlePage;
