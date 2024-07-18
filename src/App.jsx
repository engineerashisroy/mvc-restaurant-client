import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./pages/Routes/PrivateRoute";
import Home from "./pages/Home/Home/Home";
import Navbar from "./pages/Shared/Navbar";
import Footer from "./pages/Shared/Footer";
import Contact from "./pages/Contact/Contact/Contact";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import OurMenu from "./pages/OurMenu/OurMenu/OurMenu";
import Order from "./pages/Order/Order/Order";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Secret from "./pages/Shared/Secret";
import Cart from "./pages/Dashboard/user/Cart/Cart";
import MyReviews from "./pages/Dashboard/user/MyReviews/MyReviews";
import MyBookings from "./pages/Dashboard/user/MyBookings/MyBookings";
import AllUsers from "./pages/Dashboard/admin/AllUsers";
import Reservation from "./pages/Dashboard/user/Reservation/Reservation";

function App() {
  const location = useLocation();
  // console.log(location);
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("signup") ||
    location.pathname.includes("dashboard");
  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-menu" element={<OurMenu />} />
        <Route path="/order" element={<Order></Order>} />
        <Route path="/order/:category" element={<Order></Order>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        {/* <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard></Dashboard>
            </PrivateRoute>
          }
        /> */}
        {/* demon route  */}
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          {/* user route  */}
          <Route path="cart" element={<Cart></Cart>} />
          <Route path="reservation" element={<Reservation></Reservation>} />
          <Route path="review" element={<MyReviews />} />
          <Route path="bookings" element={<MyBookings />} />

          {/* admin route  */}
          <Route path="users" element={<AllUsers />} />
        </Route>

        <Route
          path="/secret"
          element={
            <PrivateRoute>
              <Secret></Secret>
            </PrivateRoute>
          }
        />
      </Routes>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
}

export default App;
