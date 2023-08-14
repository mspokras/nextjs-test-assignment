import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

config.autoAddCss = false;

export const metadata = {
  title: "NextJS Assignment Pokras",
  description: "Test assignment for Mbunity company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <Header />
          <main className="container">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
