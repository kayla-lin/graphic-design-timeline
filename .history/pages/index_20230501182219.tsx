import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} bg-black`}>
      <div className="h-screen w-screen text-white flex flex-col justify-center items-center">
        <h1 title="Digital Revolution Timeline" className="glitch text-5xl">
          Graphic Design: The Digital Revolution
        </h1>
        <div className="glitch">By Kayla Lin</div>
      </div>
    </main>
  );
}
