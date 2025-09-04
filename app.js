// Composant Banner
function Banner() {
  const title = "La maison jungle"
  return (<h1>{title.toUpperCase()}</h1>)
}

// Composant Cart
const Cart = () => {
  const plants = [
    { name: "monstera", price: 8.00 },
    { name: "lierre", price: 10.00 },
    { name: "bouquet", price: 15.00 }
  ];

  // Calcul du total
  const total = plants.reduce((sum, plant) => sum + plant.price, 0);

  return (
    <div>
      <h2>Panier</h2>
      <ul>
        {plants.map((plant, index) => (
          <li key={index}>
            {plant.name} - {plant.price}€
          </li>
        ))}
      </ul>
      <p><strong>Total : {total}€</strong></p>
    </div>
  );
};

// Rendu dans le DOM
ReactDOM.render(
  <div>
    <Banner />
    <Cart />
  </div>,
  document.getElementById('root')
);
