import Header from './header';
import Search from './search';
import Filter from './filter';
import Card from './card';
import { Container, CardList, Pagination } from './style.ts';

const LostArticlePage = () => {
  const dummyData = Array(6).fill({
    location: '유담관 앞',
    date: '05.08 THU',
    title: '에어팟 Airpods'
  });

  return (
    <Container>
      <Header />
      <Search />
      <Filter />
      <CardList>
        {dummyData.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </CardList>
      <Pagination>
        <button>{'<'}</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>{'>'}</button>
      </Pagination>
    </Container>
  );
};

export default LostArticlePage;