import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { Suspense, createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import { Vortex } from "react-loader-spinner";

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
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-[calc(100vh-45px)]">
            <Vortex
              visible={true}
              height="200"
              width="200"
              ariaLabel="vortex-loading"
              wrapperStyle={{}}
              wrapperClass="vortex-wrapper"
              colors={["red", "green", "blue", "yellow", "orange", "purple"]}
            />
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
