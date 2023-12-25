import { useParams } from 'react-router-dom';
import { BlogItemContent, BlogItemHeader } from '../components';

export default function BlogItem() {
  const { id } = useParams();

  return (
    <>
      <BlogItemHeader />
      <BlogItemContent id={id} />
    </>
  );
}
