import React from "react";
import { useRoutes } from "react-router-dom";
import DemoChiTietProduct from "../DemoUseEffect/DemoChiTietProduct";
import DemoUseEffect from "../DemoUseEffect/DemoUseEffect";
import DemoParams from "../DemoUseEffect/DemoParams";
import DemoScroll from "../DemoUseEffect/DemoScroll";
import DemoForm from "../DemoForm/DemoForm";
import QuanLiNhanVien from "../Ex_Formik/QuanLiNhanVien";
const useRouteCustom = () => {
  let routes = useRoutes([
    {
      path: "/detail",
      element: <DemoChiTietProduct />,
      children: [
        {
          path: "dtdd/:id",
          element: <DemoParams />,
        },
        {
          path: "dong-ho-deo-tay/:id",
          element: <DemoParams />,
        },
      ],
    },
    {
      path: "/detail/:id",
      element: <DemoChiTietProduct />,
    },
    {
      path: "/",
      element: <DemoUseEffect />,
    },
    {
      path: "/use-effect",
      element: <DemoScroll />,
    },
    {
      path: "/form",
      element: <DemoForm />,
    },
    {
      path: "/formik",
      element: <QuanLiNhanVien />,
    },
  ]);
  return routes;
};

export default useRouteCustom;
