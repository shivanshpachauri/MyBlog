import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
import Footer from "./components/Footer.js";

const queryclient = new QueryClient();

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          {/* <Header />, */}
          <Footer />
        </>
      ),
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
    <QueryClientProvider client={queryclient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
}
