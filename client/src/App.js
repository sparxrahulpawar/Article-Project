import React from "react";
import { Routes, Route } from "react-router-dom";
import AddArticle from "./pages/AddArticle";
import EditArticle from "./pages/EditArticle";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ViewArticle from "./pages/ViewArticle";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/article/add" element={<AddArticle />} />
        <Route path="/article/view" element={<ViewArticle />} />
        <Route path="/article/edit/:id" element={<EditArticle />} />
      </Routes>
    </>
  );
}
// export function ProtectedRoutes(props) {
//   if (localStorage.getItem("user")) {
//     return props.children;
//   } else {
//     return <Navigate to="/login" />;
//   }
// }

export default App;
