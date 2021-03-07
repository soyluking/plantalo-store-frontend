export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
  };

  const formatter = Intl.NumberFormat('es-CL', options);
  const formattedPrice = formatter.format(amount);

  if (formattedPrice.includes('.')) return formattedPrice;

  return [formattedPrice.slice(0, 2), '.', formattedPrice.slice(2)].join('');
}
