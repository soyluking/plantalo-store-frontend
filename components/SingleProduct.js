import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';
import formatMoney from '../lib/formatMoney';

export const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      photo {
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

const ProductStyles = styled.div`
  display: grid;
  gap: 100px;
  grid-auto-columns: 2fr 1fr;
  grid-auto-flow: column;
  max-width: var(--maxWidth);

  img {
    height: auto;
    width: 100%;
  }

  .price {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorMessage error={error} />;

  const { Product } = data;

  return (
    <ProductStyles>
      <Head>
        <title>{Product.name} | Plántalo</title>
      </Head>
      <div className="details">
        <h1>{Product.name}</h1>
        <p>{Product.description}</p>
        <p className="price">{formatMoney(Product.price)}</p>
      </div>
      <img
        src={Product.photo.image.publicUrlTransformed}
        alt={Product.photo.altText}
      />
    </ProductStyles>
  );
}
