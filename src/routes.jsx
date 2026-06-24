import EventsListPage from "./pages/EventsListPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import MyTicketsPage from "./pages/MyTicketsPage";
import ProfilePage from "./pages/ProfilePage";
import TermsAndConditions from "./pages/Legals/TermsAndConditions";
import PrivacyPolicy from "./pages/Legals/PrivacyPolicy";
import RefundPolicy from "./pages/Legals/RefundPolicy";
import CookiePolicy from "./pages/Legals/CookiePolicy";
import LoginForm from "./pages/Organiser/LoginForm";
import Dashboard from "./pages/Organiser/OrganiserDashboard";
import CreateEventStep1 from "./pages/Organiser/Events/CreateEventStep1/CreateEventStep1";

export const PUBLIC_ROUTES = [{}];

export const PROTECTED_ROUTES = [
  {
    path: "/",
    element: <EventsListPage />,
  },
  {
    path: "/events/:id",
    element: <EventDetailsPage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
  {
    path: "/my-tickets",
    element: <MyTicketsPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/legal/termsandconditions",
    element: <TermsAndConditions />,
  },
  {
    path: "/legal/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/legal/refund-policy",
    element: <RefundPolicy />,
  },
  {
    path: "/legal/cookie-policy",
    element: <CookiePolicy />,
  },
  {
    path:"/login-form",
    element: <LoginForm/>
  },
  {
    path:"/dashboard",
    element: <Dashboard/>
  },
  {
    path:"/events/create-event1",
    element: <CreateEventStep1/>
  }
];
