import img from "./panadol.png";
import img2 from "./brufen.png";
import img3 from "./agiolax.png";

const products = [
  {
    name: "Panadol Extra",
    price: "1.2 BD",
    image: <img src={img} className="img1" />,
  },

  {
    name: "BRUFEN 600",
    price: "1.9 BD",
    image: <img src={img2} className="img1" />,
  },

  {
    name: "Agiolax",
    price: "1.8 BD",
    image: <img src={img3} className="img1" />,
  },
];

export default products;
