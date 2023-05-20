import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "./components/Footer/Footer";

export let FavContext = createContext(null);

function App() {
  console.log(`Rendered`);

  let [favstate, setFavstate] = useState();
  const [updated, setUpdated] = useState(false);
  useEffect(() => {
    let count = JSON.parse(localStorage.getItem("favorite"))?.length;
    console.log(count);
    setFavstate(count);
  }, [favstate]);

  return (
    <>
      {/* <FavContext.Provider value={{favstate,setFavstate,updated,setUpdated}}> */}
      <Header navbar={true} />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
