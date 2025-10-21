import "./App.css";
import Product from "./data/product";
import ProductCard from "./components/ProductCard";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex items-center justify-center min-h-screen  space-x-4 ">
        <ProductCard items={Product} />
      </div>
    </>
  );
}

export default App;
