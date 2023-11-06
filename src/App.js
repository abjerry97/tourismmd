import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import Bookings from "./pages/Bookings";
import Featured from "./pages/Featured";
import FooterList from "./pages/FooterList";
import Introduction from "./pages/Introduction";
import MessageUs from "./pages/MessageUs";
import Places from "./pages/Places";


function App() {
  return (
    <div className="">
     <NavBar/>
     <Introduction/>
     <Bookings/>
     <Featured/>
     <Places/>
     <MessageUs/>
     <FooterList/>
     <Footer/>
    </div>
  );
}

export default App;
