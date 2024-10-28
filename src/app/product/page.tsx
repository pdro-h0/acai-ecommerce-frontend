import ProductFilter from "../components/products/product-filter";
import ProductList from "../components/products/product-list";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <ProductFilter />
        <ProductList />
      </div>
    </div>
  );
}
