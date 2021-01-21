import img from "../pharamcy.jpg";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="black">SHADI'S PHARMACY </h1>
        <p className="black">A better way to shop for health & beauty!</p>
        <img className="style" src={img} alt="logo" />
      </header>
      <body className="App-body">
        <h1>Products</h1>
        <ProductList />
      </body>
    </div>
  );
};

export default Home;
