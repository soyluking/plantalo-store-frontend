import useForm from '../lib/useForm';

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: 'Amelia',
    price: 123,
    description: 'Planta de Amelia',
  });

  return (
    <form>
      <label htmlFor="name">
        Nombre del producto:
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ejemplo: Amelia (Bugambilia)"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="price">
        Precio del producto:
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Ejemplo: 20000"
          value={inputs.price}
          onChange={handleChange}
        />
      </label>
      <button onClick={clearForm} type="button">
        Clear Form
      </button>
      <button onClick={resetForm} type="button">
        Reset Form
      </button>
    </form>
  );
}
