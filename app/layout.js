import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} bg-[#d9a664] text-[#211A11] min-h-screen flex`}>
        <div className="flex-1 px-8 py-12 ">{children}</div>
      </body>
    </html>
  );
}
