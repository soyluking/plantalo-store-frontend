import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;

const update = (cache, payload) => {
  cache.evict(cache.identify(payload.data.deleteProduct));
};

export default function DeleteProduct({ id, children }) {
  const [deleteProduct, { loading }] = useMutation(DELETE_PRODUCT_MUTATION);

  return (
    <button
      type="button"
      disabled={loading}
      onClick={async () => {
        if (!confirm('¿Estás seguro que quieres eliminar este producto?'))
          return;
        await deleteProduct({
          variables: { id },
          update,
        }).catch((err) => alert(err.message));
      }}
    >
      {children}
    </button>
  );
}
