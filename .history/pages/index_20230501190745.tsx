import Image from "next/image";
import { Source_Code_Pro } from "next/font/google";
import Introduction from "./components/Introduction";

const source = Source_Code_Pro({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${source.className} bg-slate-950`}>
      <Introduction />
    </main>
  );
}
