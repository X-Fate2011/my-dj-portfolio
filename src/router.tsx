import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import App from "./App.tsx";
import MixesPage from "./pages/MixesPage.tsx";
import AboutMePage from "./pages/AboutMePage.tsx";
import ImprintPage from "./pages/ImprintPage.tsx";
import PrivacyPage from "./pages/PrivacyPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/mixes", element: <MixesPage /> },
      { path: "/about", element: <AboutMePage /> },
      { path: "/imprint", element: <ImprintPage /> },
      { path: "/privacy", element: <PrivacyPage /> },
    ],
  },
]);
