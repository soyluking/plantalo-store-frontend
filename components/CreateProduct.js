import useForm from '../lib/useForm';
import FormStyles from './styles/FormStyles';

export default function CreateProduct() {
  const { inputs, handleChange, handleSubmit } = useForm({
    image: '',
    name: '',
    price: '',
    description: '',
  });

  return (
    <FormStyles onSubmit={handleSubmit}>
      <fieldset>
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
