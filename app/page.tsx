import { notFound } from 'next/navigation';

// Components
import Pagination from '../src/components/layout/Pagination';
import Table from '../src/components/layout/Table';

// Types
import type { Data, Element } from '../src/types/api';

interface IProps {
  searchParams: { page: string };
}

const getData = async (page: number) => {
  const res = await fetch(
    `https://reqres.in/api/products?` +
      new URLSearchParams({
        per_page: '5',
        page: page.toString(),
      }),
    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch the data!');
  }

  return res.json();
};

const Home = async ({ searchParams }: IProps) => {
  const data: Data & { data: Element[] } = await getData(parseInt(searchParams.page));

  if (!data.data.length) {
    notFound();
  }

  return (
    <>
      <Table data={data.data} />

      <Pagination
        page={searchParams.page ? parseInt(searchParams.page) : 1}
        pages={data.total_pages}
      />
    </>
  );
};

export default Home;
