import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            
            <main className="flex-1 min-h-full">
                <Outlet />
            </main>
            
            <Footer />
        </div>
    );
};

export default RootLayout;