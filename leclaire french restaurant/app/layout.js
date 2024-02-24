import Footer from "@/components/GlobalComponents/Footer";
import "./globals.css";
import NavBar from "@/components/GlobalComponents/NavBar";

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
