import { useContext } from "react";
import { Vortex } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";
import Swal from "sweetalert2";

function PrivateRoute({ children }) {
  let location=useLocation()
  console.log(location);
  let { user, loading } = useContext(AuthContext);
  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-45px)]">
        <Vortex
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="200"
          visible={true}
        />
      </div>
    );
  if (user) return children;
  Swal.fire({
    title: "Oooh...",
    text: "You have to log in first to view details!",
    type: "info",
  });
  return <Navigate to="/signin" replace state={location.pathname}></Navigate>;
}

export default PrivateRoute;
