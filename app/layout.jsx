import { Poppins } from "next/font/google";
import "./globals.css";
// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// Theme provider
import { ThemeProvider } from "@/components/ThemeProvider";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Fauzan Jumdinhar Marsha",
  description: "Portfolio Website with Next js",
  icons: {
    icon: ["/favicon/favicon.ico?v=4"],
    apple: ["favicon//apple-touch-icon.png?v=4"],
    shortcut: ["favicon/apple-touch-icon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
