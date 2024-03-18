import Navber from "./Navber";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navber />
      {children}
      <Footer />
    </div>
  );
}
