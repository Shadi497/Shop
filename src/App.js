import img from "./pharamcy.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="black">SHADI'S PHARMACY </h1>
        <p className="black">A better way to shop for health & beauty!</p>

        <img className="style" src={img} alt="logo" />
      </header>
    </div>
  );
}

export default App;
