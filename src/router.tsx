import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import App from './pages/App.tsx';
import MixesPage from "./pages/MixesPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { path: "/", element: <App /> },
            { path: "/mixes", element: <MixesPage /> },
        ],
    },
]);
