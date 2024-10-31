import "/assets/styles/globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "photoswipe/dist/photoswipe.css";

export const metadata = {
  title: "Ruphael School",
  description: "kindergarten, primary and secondaty school",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="font-light">{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
