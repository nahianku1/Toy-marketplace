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

let router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        
      </Route>

      <Route path="/signin" element={<Signin />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/resetemail" element={<ResetEmail />} />
      <Route path="/reset" element={<Reset />} /> */}
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
