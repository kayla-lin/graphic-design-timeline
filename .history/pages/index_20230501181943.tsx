import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} bg-black`}>
      <div className="h-screen w-screen text-white">
        <div title="Digital Revolution Timeline">
          Digital Revolution Timeline
        </div>
      </div>
    </main>
  );
}
