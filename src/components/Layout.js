import { Barlow } from "@next/font/google";
import Header from "./Header";
import Footer from "./Footer";
import { useTranslations } from "next-intl";
const barlow = Barlow({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
const Layout = ({ children }) => {
  return (
    <div className={`bg-[#210440] min-h-screen ${barlow.className}`}>
      <Header />
        <main className="lg:min-h-screen select-none">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
