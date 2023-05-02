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
          altImg="Skeuomorphism"
          desc={
            "Skeuomorphism is a useful concept for design. It involves creating a design that mimics its real life counterpart. For example, an icon of a trash can for deleting files, or a floppy disk for the save functionality. It was useful because of its design affordance: a shape that suggests its use. Since graphical interfaces on the computer were new. Computer interfaces would be much more intuitive with skeuomorphism Skeuomorphism designs often had beveled edges, gradients, and reflections."
          }
        />
        <TimelineElement
          title="Xerox Star 8010"
          date="1981"
          desc={
            "Xerox launched the first personal computer for the office. This was the birth of the first ever graphic user interface (GUI).  Norman Lloyd Cox converted the ideal of the office into a metaphor on the computer screen. He represented basic office concepts, like desktop, files, folders, on the computer screen."
          }
        />
      </Timeline>
    </main>
  );
}
