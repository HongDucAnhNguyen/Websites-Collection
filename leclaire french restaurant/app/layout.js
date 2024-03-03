import "./globals.css";
import { Providers } from "./providers";
import Footer from "../components/GlobalComponents/Footer";
import NavBar from "../components/GlobalComponents/NavBar";
export const metadata = {
  title: "Leclaire Restaurant",
  description: "Leclaire YYC French Restaurant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar></NavBar>
          {children}
          <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}
