import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./DemoComponent/ClassComponent";
import FunctionComponent from "./DemoComponent/FunctionComponent";
import Ex_Layout from "./Ex_Layout/Ex_Layout";
import DataBinding from "./DataBinding/DataBinding";
import EventHandling from "./EventHandling/EventHandling";
import DemoState from "./DemoState/DemoState";
import ConditionalRendering from "./ConditionalRendering/ConditionalRendering";
import Ex_Car from "./Ex_Car/Ex_Car";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import DemoProps from "./DemoProps/DemoProps";
import Ex_Shoe from "./Ex_Shoe/Ex_Shoe";
import DemoRedux from "./DemoRedux/DemoRedux";
import Ex_Shoe_Redux from "./Ex_Shoe_Redux/Ex_Shoe_Redux";
import DemoUseEffect from "./DemoUseEffect/DemoUseEffect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useRouteCustom from "./routes/useRouteCustom";
import DemoChiTietProduct from "./DemoUseEffect/DemoChiTietProduct";

function App() {
  let routes = useRouteCustom();
  return (
    // <div>
    //   {/* --- Day 1 --- */}
    //   {/* <ClassComponent /> */}
    //   {/* <FunctionComponent /> */}
    //   {/* <Ex_Layout /> */}
    //   {/* <DataBinding /> */}
    //   {/* <DataBinding /> */}
    //   {/* <EventHandling /> */}
    //   {/* --- Day 2 --- */}
    //   {/* <DemoState /> */}
    //   {/* <ConditionalRendering></ConditionalRendering> */}
    //   {/* <ConditionalRendering /> */}
    //   {/* <Ex_Car /> */}
    //   {/* <RenderWithMap /> */}
    //   {/* --- Day 3 --- */}
    //   {/* <DemoProps /> */}
    //   {/* <Ex_Shoe /> */}
    //   {/* --- Day 5 Redux --- */}
    //   {/* <DemoRedux /> */}
    //   {/* <Ex_Shoe_Redux /> */}
    //   <DemoUseEffect />
    // </div>
    routes
    // <Routes>
    //   <Route path="/detail" element={<DemoChiTietProduct />}>
    //     {/* cấu hình các đường dẫn con của detail giúp hiển thị các nội dung khác nhau  */}
    //     <Route path="dtdd" element={<div>Hello dtdd</div>}></Route>
    //     <Route
    //       path="dong-ho-deo-tay"
    //       element={<div>Hello đồng hồ</div>}
    //     ></Route>
    //   </Route>
    // </Routes>
  );
}

export default App;
