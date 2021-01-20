import img from "./pharamcy.jpg";
import "./App.css";
import products from "./products";

const style = {
  shopImage: {
    display: "block",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
  },
};
function App() {
  const productList = products.map((product) => (
    <td className="cl">
      <tr>{product.image}</tr>
      <tr className="txt">{product.name}</tr>
      <tr className="prtxt1">{product.price}</tr>
    </td>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="black">SHADI'S PHARMACY </h1>
        <p className="black">A better way to shop for health & beauty!</p>

        <img style={style.shopImage} src={img} alt="logo" />
      </header>
      <body>
        <h1>Products</h1>
        {productList}
      </body>
    </div>
  );
}

export default App;
