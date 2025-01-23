import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import PostCreation from "./components/Postcreation";
import PostViewing from "./components/Postviewing.js";
import PostUpdate from "./components/postupdate";
import PostDeletion from "./components/postdelete.js";
import HtmlForm from "./components/loginform.js";
import RegisterForm from "./components/registrationform.js";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      // loader: () => fetchblogs(),
      errorElement: <h1 className="text-center">error</h1>,
      children: [
        {
          path: "/home",
          element: <Header />,
        },
        {
          path: "/register",
          element: <RegisterForm />,
        },
        {
          path: "/login",
          element: <HtmlForm />,
        },
        {
          path: "/view",
          element: <PostViewing />,
        },
        {
          path: "/create",
          element: <PostCreation />,
        },
        {
          path: "/delete",
          element: <PostDeletion />,
        },
        { path: "/update", element: <PostUpdate /> },
      ],
    },
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
    // <div>
    //   {/* <h1>hello world</h1> */}
    //   <Navbar />
    //   <hr />
    //   <HtmlForm />
    //   <hr />
    //   <Header />
    //   <hr />
    //   <PostCreation />
    //   <hr />

    //   <PostViewing />
    //   <hr />

    //   <PostUpdate />
    //   {/*
    //   <PostDeletion /> */}
    // </div>
  );
}
