import UptateProduct from '../components/UptateProduct';

export default function UpdatePage({ query }) {
  return (
    <div>
      <UptateProduct id={query.id} />
    </div>
  );
}
