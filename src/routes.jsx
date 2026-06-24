import EventsListPage from "./pages/Client/EventsListPage";
import EventDetailsPage from "./pages/Client/EventDetailsPage";
import CheckoutPage from "./pages/Client/CheckoutPage";
import MyTicketsPage from "./pages/Client/Myticketspage";
import ProfilePage from "./pages/Client/Profilepage";
import TermsAndConditions from "./pages/Client/Legals/TermsAndConditions";
import PrivacyPolicy from "./pages/Client/Legals/PrivacyPolicy";
import RefundPolicy from "./pages/Client/Legals/RefundPolicy";
import CookiePolicy from "./pages/Client/Legals/CookiePolicy";
import CustomerHelpCenter from "./pages/Client/HelpCenter/CustomerHelpCenter";
import LoginForm from "./pages/Organiser/LoginForm";
import Dashboard from "./pages/Organiser/OrganiserDashboard";
import CreateEventStep1 from "./pages/Organiser/Events/CreateEventStep1/CreateEventStep1";
import CreateEventStep2 from "./pages/Organiser/Events/CreateEventStep2/CreateEventStep2";
import CreateEventStep3 from "./pages/Organiser/Events/CreateEventStep3/CreateEventStep3";
import CreateEventStep4 from "./pages/Organiser/Events/CreateEventStep4/CreateEventStep4";

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
    path: "/login-form",
    element: <LoginForm />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/events/create-event1",
    element: <CreateEventStep1 />,
  },
  {
    path: "/events/create-event2",
    element: <CreateEventStep2 />,
  },
  {
    path: "/events/create-event3",
    element: <CreateEventStep3 />,
  },
  {
    path: "/events/create-event4",
    element: <CreateEventStep4 />,
  },
  {
    path: "/customer-help-center",
    element: <CustomerHelpCenter />,
  },
];
