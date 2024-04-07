import { Routes, Route, createBrowserRouter, createRoutesFromElements, Outlet } from "react-router-dom";
import RadixToggle from "../components/RadixTab";
import { ProductCard, ShotCard } from "../cards";
import { CustTab } from "../components";
import RadixTab from "../components/RadixTab";

// export const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Routes>
//         <Route path="/" element={<RadixToggle />}>
//           <Route
//             path="products"
//             element={<ProductCard />}
//           />
//           <Route path="shots" element={<ShotCard />} />
//         </Route>
//       </Routes>
//     )
//   );

export const App = ()=>{
    return (
        <RadixTab/>
      );
}