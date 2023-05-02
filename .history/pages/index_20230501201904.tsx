import Image from "next/image";
import { Source_Code_Pro } from "next/font/google";
import Introduction from "./components/Introduction";
import TimelineElement from "./components/TimelineElement";
import Timeline from "./components/Timeline";

const source = Source_Code_Pro({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${source.className} bg-slate-950`}>
      <Introduction />
      <Timeline>
        <TimelineElement
          title="Rise of Skeuomorphism"
          date="1980s"
          img="skeumorphic.png"
          desc={
            "Skeuomorphism is a useful concept for design. It involves creating a design that mimics its real life counterpart. For example, an icon of a trash can for deleting files, or a floppy disk for the save functionality. It was useful because of its design affordance: a shape that suggests its use. Since graphical interfaces on the computer were new. Computer interfaces would be much more intuitive with skeuomorphism Skeuomorphism designs often had beveled edges, gradients, and reflections."
          }
        />
        <TimelineElement
          title="Xerox Star 8010"
          date="1981"
          img="xerox.jpeg"
          desc={
            "Xerox launched the first personal computer for the office. This was the birth of the first ever graphic user interface (GUI). Norman Lloyd Cox converted the ideal of the office into a metaphor on the computer screen. He represented basic office concepts, like desktop, files, folders, on the computer screen."
          }
        />
        <TimelineElement
          title="Apple’s 1984 Macintosh"
          date="1984"
          img="applemac.jpeg"
          desc={
            "The Apple 1984 Macintosh was the first commercially successful personal computer with a graphic user interface. It helped popularize the idea that computers can be a tool for productivity and creativity. The laptop had a graphic program called MacPaint created by Bill Atkinson and Susan Kare. Creating computer graphics was very intuitive: People used a mouse or a drawing tablet along with a multitude of different graphic tools on a toolbar."
          }
        />
        <TimelineElement
          title="Susan Kare"
          date="1984"
          img="susankare.jpeg"
          desc={
            "Susan Kare is graphic designer  “who gave the Macintosh a smile. Pixel art was the best kind of graphics that computing power could hope for. However, the small amount of pixels were crucial for intuitive interfaces and designs. Susan Kare created the original set of icons for the original Apple Macintosh. She transferred the idea of off-screen iconography to its on screen equivalent, thus allowing for icons to be effective in the digital world. Kare worked without the use of colors because computers could not replicate colors. She created iconic symbols like the “Ok” button, trashcan and command symbol."
          }
        />
      </Timeline>
    </main>
  );
}
