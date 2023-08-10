import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "../styles/globals.css";

export const metadata = {
  title: "NextJS Assignment Pokras",
  description: "Test assignment for Mbunity company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
