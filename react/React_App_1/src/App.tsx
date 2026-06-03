import Body from "./components/body/Body";
import Carousel from "./components/carousel/Carousel";
import Categories from "./components/categories/Categories";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { AuthInterceptor } from "./interceptors/AuthInterceptor";
import { ErrorInterceptor } from "./interceptors/ErrorInterceptor";
import { TimeInterceptor } from "./interceptors/TimeInterceptor";

function App(){
  AuthInterceptor();
  TimeInterceptor();
  ErrorInterceptor();
  
  return <div>
    <Navbar></Navbar>
    {/* <Categories /> */}
    {/* <Carousel /> */}
    <Body />
    <Footer />
  </div>
}
export default App;