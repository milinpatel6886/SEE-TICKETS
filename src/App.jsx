import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import EventsListPage from "./pages/Client/EventsListPage";
import EventDetailsPage from "./pages/Client/EventDetailsPage";
import CheckoutPage from "./pages/Client/CheckoutPage";
import BaseLayout from "./layout/BaseLayout";
import { AuthProvider } from "./context/Authcontext/Authcontext";
import { PUBLIC_ROUTES, PROTECTED_ROUTES } from "./routes";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* PUBLIC */}
        {PUBLIC_ROUTES.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        {/* PROTECTED */}
        {/* <Route path="/" element={<ProtectedRoute />}> */}
        <Route element={<BaseLayout />}>
          {PROTECTED_ROUTES.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
        {/* </Route> */}
      </Routes>
    </AuthProvider>
  );
}

export default App;
