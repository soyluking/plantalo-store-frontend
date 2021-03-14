import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';

export default function Product({ product }) {
  return (
    <ItemStyles>
      <Link href={`/product/${product.id}`}>
        <img
          src={product?.photo?.image?.publicUrlTransformed}
          alt={product.photo.altText}
        />
      </Link>
      <div className="productInfo">
        <Title>
          <Link href={`/product/${product.id}`}>{product.name}</Link>
        </Title>
        <PriceTag>{formatMoney(product.price)}</PriceTag>
        <div className="buttonList">
          <Link
            href={{
              pathname: '/update',
              query: { id: product.id },
            }}
          >
            Editar ✏️
          </Link>
          <DeleteProduct id={product.id}>Eliminar 🗑</DeleteProduct>
        </div>
      </div>
    </ItemStyles>
  );
}
