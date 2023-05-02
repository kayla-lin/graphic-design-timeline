import Image from "next/image";
import { Inter } from "next/font/google";
import Introduction from "./components/Introduction";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} bg-slate-900`}>
      <Introduction />
    </main>
  );
}
