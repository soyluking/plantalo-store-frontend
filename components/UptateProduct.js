import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { SINGLE_ITEM_QUERY } from './SingleProduct';
import useForm from '../lib/useForm';
import FormStyles from './styles/FormStyles';
import ErrorMessage from './ErrorMessage';

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
      name
      description
      price
    }
  }
`;

export default function UptateProduct({ id }) {
  // 1. We need to get existing product
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });
  // 2. We need to get the mutation  to update the product
  const [
    updateProduct,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_PRODUCT_MUTATION);
  // 3. We need the form to handle the updates
  const { inputs, handleChange } = useForm(data?.Product);

  if (loading) return <p>Loading...</p>;

  return (
    <FormStyles
      onSubmit={async (e) => {
        e.preventDefault();
        // submit the input fields to the backend
        await updateProduct({
          variables: {
            id,
            name: inputs.name,
            description: inputs.description,
            price: inputs.price,
          },
        });
      }}
    >
      <ErrorMessage error={error || updateError} />
      <fieldset disabled={updateLoading} aria-busy={updateLoading}>
        {/* <label htmlFor="image">
          Imagen:
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            required
          />
        </label> */}
        <label htmlFor="name">
          Nombre:
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ejemplo: Amelia (Bugambilia)"
            value={inputs.name}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="price">
          Precio:
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Ejemplo: 20000"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Descripción:
          <textarea
            id="description"
            name="description"
            rows="8"
            placeholder="Ejemplo: La mejor planta para interiores, no necesita demasiada agua y adorna de forma increíble..."
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">
          Actualizar Producto <i className="material-icons">edit</i>
        </button>
      </fieldset>
    </FormStyles>
  );
}
