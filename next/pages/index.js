import Header from "../components/Header";
import Product from "../components/Product";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <div>
      <Header title="Home"/>
      <SearchBar />
      <Product />
    </div>
    )
}
