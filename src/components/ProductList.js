import products from "../products";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const productList = products.map((product) => <ProductItem list={product} />);

  return <div>{productList}</div>;
};

export default ProductList;
