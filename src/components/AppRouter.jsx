import { Routes, Route, Outlet } from "react-router-dom";
import Error from "../pages/Error";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";

import { publicRoutes, privateRoutes } from "../router";
import Login from "../pages/Login";
import { useContext } from "react";
import { AuthContext } from "../context";
const AppRouter = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  console.log(isAuth)
  return (
    isAuth 
     ?
    <Routes>
      <Route path="/about" element={<About />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/posts/:id" element={<PostIdPage />} />
        <Route path="/login" element={<Login />} />
      {/* {routes.map((route) => (
        <Route
          key={route.path}
          element={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))} */}
      <Route path="*" element={<Error />} />
    </Routes>
    : 
    <Routes>
      <Route path="/login" element={<Login />} />
    <Route path="*" element={<Login />} />
  </Routes>
  );
};

export default AppRouter;
