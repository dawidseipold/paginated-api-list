import { notFound } from 'next/navigation';

// Components
import Table from '../../src/components/layout/Table';

const getElement = async (id: number) => {
  const res = await fetch(`https://reqres.in/api/products/${id}`, { next: { revalidate: 10 } });

  if (!res.ok) {
    return undefined;
  }

  return res.json();
};

const Element = async ({ params }: any) => {
  const element = await getElement(params.id);

  if (!element) {
    notFound();
  }

  return <>{element.data && <Table data={element.data} />}</>;
};

export default Element;
