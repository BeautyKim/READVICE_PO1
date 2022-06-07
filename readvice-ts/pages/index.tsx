
import Chatbot from "@/components/Chatbot";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Product from "@/components/Product";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div>
      <Header title="Home"/>
      <NavBar />
      <SearchBar />
      <Chatbot />
      <Product />
    </div>
    )
}