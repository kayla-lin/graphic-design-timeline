import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} bg-black`}>
      <div className="h-screen w-screen text-white flex justify-center items-center">
        <div title="Digital Revolution Timeline" className="glitch text-5xl">
          Digital Revolution Timeline
        </div>
      </div>
    </main>
  );
}