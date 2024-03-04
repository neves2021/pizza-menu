import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const productsData = [
  {
    name: "Iogurte com proteína",
    price: 2,
    photoName: "products/iogurte.jpg",
    soldOut: false,
  },
  {
    name: "Cigarros",
    price: 5,
    photoName: "products/cigarros.jpg",
    soldOut: false,
  },
  {
    name: "Litrosa",
    price: 2,
    photoName: "products/cerveja.jfif",
    soldOut: false,
  },
  {
    name: "Kebab",
    price: 7,
    photoName: "products/kebab.jfif",
    soldOut: false,
  },
  {
    name: "Gomsas",
    price: 2,
    photoName: "products/gomas.png",
    soldOut: true,
  },
  {
    name: "Lasanha vegetariana",
    price: 3,
    photoName: "products/lasanhaveggie.jfif",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Arroios 69</h1>
    </header>
  );
}

function Menu() {
  const products = productsData;
  //const products = [];
  const numProducts = products.length;

  return (
    <main className="menu">
      <h2>Menu</h2>

      {numProducts > 0 ? (
        <>
          <p>
            Se estás aqui é porque és um Amigo de Arroios. Aqui poderás
            encontrar o Dany sem t-shirt a ouvir inúmeras versões da Blue.
          </p>

          <ul className="products">
            {productsData.map((product) => (
              <Product productObj={product} key={product.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Fomos buscar mais jola ao Sefu. Já voltamos.</p>
      )}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        photoName="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}

function Product({ productObj }) {
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`product ${productObj.soldOut ? "sold-out" : ""}`}>
      <img src={productObj.photoName} alt={productObj.name} />
      <div>
        <h3>{productObj.name}</h3>
        <span>{productObj.soldOut ? "SEM STOCK" : productObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 21;
  const closeHour = 5;
  const isOpen = hour >= openHour || hour < closeHour;

  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("Estamos abertos!");
  // else alert("Estamos fechados."); //comentar ctrl + K + C

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>O Martim está em Alvalade. Volta a partir das {openHour}:00.</p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>Estamos abertos até às {closeHour}:00.</p>
      <button className="btn">Encomendar pelo courier</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
