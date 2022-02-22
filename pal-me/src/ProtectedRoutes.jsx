import { useContext } from "react";
import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext }  from "./UserContext";


const useAuth = () => {
  const { user } = useContext(UserContext);
  console.log(user)
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const location = useLocation();
  const isAuth = useAuth();
  return isAuth ? (
    <Outlet />
  ) : (
    //  {from: location} to make the user go back to page that he came from after the he logs in
    // repalce to take the user go back don not to him to the page that he was directered from but thte page before so
    <Navigate to="/" state={{from: location}} replace/>
  );
};

export default ProtectedRoutes;