import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <div title="404">
        <h1>Digital Revolution Timeline</h1>
      </div>
    </main>
  );
}
