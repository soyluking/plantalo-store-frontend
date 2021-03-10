import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { Router } from 'next/router';
import useForm from '../lib/useForm';
import FormStyles from './styles/FormStyles';
import ErrorMessage from './ErrorMessage';
import { ALL_PRODUCTS_QUERY } from './Products';

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    # Which variables are getting passed in? And what types are they
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        price: $price
        description: $description
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`;

export default function CreateProduct() {
  const { inputs, handleChange, clearForm } = useForm({
    image: '',
    name: '',
    price: '',
    description: '',
  });

  const [createProduct, { error, loading, data }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    }
  );

  return (
    <FormStyles
      onSubmit={async (e) => {
        e.preventDefault();
        // submit the input fields to the backend
        await createProduct();
        clearForm();
        // Go to product's page
        Router.push({
          pathname: `/product/${data.createProduct.id}`,
        });
      }}
    >
      <ErrorMessage error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="image">
          Imagen:
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            required
          />
        </label>
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
          Agregar Producto <i className="material-icons">eco</i>
        </button>
      </fieldset>
    </FormStyles>
  );
}
