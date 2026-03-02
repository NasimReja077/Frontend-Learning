import "./globals.css";
import Navbar from "../components/Navbar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-gray-900 dark:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}