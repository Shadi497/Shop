import ProductList from "./ProductList";

const ProductItem = (props) => {
  return (
    <div>
      <td className="cl">
        <tr>{props.list.image}</tr>
        <tr className="txt">{props.list.name}</tr>
        <tr className="prtxt1">{props.list.price}</tr>
      </td>
    </div>
  );
};

export default ProductItem;
