import EventsListPage from "./pages/EventsListPage/EventsListPage";
import EventDetailsPage from "./pages/EventDetailsPage/EventDetailsPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import MyTicketsPage from "./pages/MyTicketsPage/MyTicketsPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import TermsAndConditions from "./pages/Legals/TermsAndConditions/TermsAndConditions";

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
    path:"/legal/termsandconditions",
    element: <TermsAndConditions/>
  }
];
