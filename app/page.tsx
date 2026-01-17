
import Products from "@/components/Products";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Origen from "@/components/Origen";



export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Origen />
        <Footer />
      </main>
    </>
  );
}
