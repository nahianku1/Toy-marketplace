import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import AuthProvider from "./AuthProvider.jsx";
import Signin from "./components/Signin/Signin.jsx";
import Register from "./components/Register/Register.jsx";
import AddToys from "./components/AddToys/AddToys.jsx";
import Mytoys from "./components/Mytoys/Mytoys.jsx";
import AllToys from "./components/AllToys/AllToys.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import Blog from "./components/Blog/Blog.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Contact from "./components/Contact/Contact.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import TabProductDetails from "./components/TabProductDetails/TabProductDetails.jsx";

let router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route
          path="/single/:id"
          element={
            <PrivateRoute>
              <ProductDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/tabsingle/:id"
          element={
            <PrivateRoute>
              <TabProductDetails />
            </PrivateRoute>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route
        path="/add-toy"
        element={
          <PrivateRoute>
            <AddToys />
          </PrivateRoute>
        }
      />
      <Route
        path="/my-toys"
        element={
          <PrivateRoute>
            <Mytoys />
          </PrivateRoute>
        }
      />
      <Route path="/all-toys" element={<AllToys />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </AuthProvider>
);
