import { Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { Navigate } from "react-router-dom";
import Login from "./pages/auth/Login.jsx";
import Signup from "./pages/auth/Signup.jsx";

function Private({ children }) {
  const isLogin = false;

  return isLogin ? children : <Navigate to="/bankai" replace />;
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/dashboard", 
      element: <Private> <Dashboard /></Private>
    },
    {
      path: "/bankai",
      element: <> <h1> this is bankai </h1></>
    },
    {
      path: "/login",
      element: <Login /> 
    }, {
      path: "/signup",
      element: <Signup />
    }

  ]);
  return (
    <>
      <p> another change </p>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
