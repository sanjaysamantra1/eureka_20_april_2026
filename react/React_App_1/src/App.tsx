import Body from "./components/body/Body";
import Carousel from "./components/carousel/Carousel";
import Categories from "./components/categories/Categories";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App(){
  return <div>
    <Navbar></Navbar>
    <Categories />
    <Carousel />
    <Body />
    <Footer />
  </div>
}
export default App;
