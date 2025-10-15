import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "QumAI — AI Content Generator",
  description: "Generate blogs, posts, and captions with AI in seconds.",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
     
        {children}
  
      </body>
    </html>
  );
}
