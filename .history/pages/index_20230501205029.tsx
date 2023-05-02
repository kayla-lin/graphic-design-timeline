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
          desc={[
            "Skeuomorphism is a useful concept for design. It involves creating a design that mimics its real life counterpart. For example, an icon of a trash can for deleting files, or a floppy disk for the save functionality. It was useful because of its design affordance: a shape that suggests its use. Since graphical interfaces on the computer were new. Computer interfaces would be much more intuitive with skeuomorphism Skeuomorphism designs often had beveled edges, gradients, and reflections.",
          ]}
        />
        <TimelineElement
          title="Xerox Star 8010"
          date="1981"
          img="xerox.jpeg"
          desc={[
            "Xerox launched the first personal computer for the office. This was the birth of the first ever graphic user interface (GUI). Norman Lloyd Cox converted the ideal of the office into a metaphor on the computer screen. He represented basic office concepts, like desktop, files, folders, on the computer screen.",
          ]}
        />
        <TimelineElement
          title="Apple’s 1984 Macintosh"
          date="1984"
          img="applemac.jpeg"
          desc={[
            "The Apple 1984 Macintosh was the first commercially successful personal computer with a graphic user interface. It helped popularize the idea that computers can be a tool for productivity and creativity. The laptop had a graphic program called MacPaint created by Bill Atkinson and Susan Kare. Creating computer graphics was very intuitive: People used a mouse or a drawing tablet along with a multitude of different graphic tools on a toolbar.",
          ]}
        />
        <TimelineElement
          title="Susan Kare"
          date="1984"
          img="susankare.jpeg"
          desc={[
            "Susan Kare is graphic designer  “who gave the Macintosh a smile. Pixel art was the best kind of graphics that computing power could hope for. However, the small amount of pixels were crucial for intuitive interfaces and designs. Susan Kare created the original set of icons for the original Apple Macintosh.",
            "She transferred the idea of off-screen iconography to its on screen equivalent, thus allowing for icons to be effective in the digital world. Kare worked without the use of colors because computers could not replicate colors. She created iconic symbols like the “Ok” button, trashcan and command symbol.",
          ]}
        />
        <TimelineElement
          title="Andy Warhol"
          date="1985"
          img="warhol.jpeg"
          desc={[
            "In 1985, Andy Warhol became a Commodore International representative. He created a series of 28 digital “experiments” to help advertise the computer, Amiga 1000.",
          ]}
        />
        <TimelineElement
          title="David Hockney"
          date="1986"
          img="hockney.jpeg"
          desc={[
            "David Hockney was one of the first artists to consider digital art as a serious medium. In 1986, he created digital paintings using Quantel Paintbox, which was a drawing surface that enabled users to draw computer graphics directly on the computer screen without transferring to another medium. He created a series of paintings for the BBC series, Painting with Light.",
          ]}
        />
        <TimelineElement
          title="Adobe"
          date="1987"
          img="adobe.jpeg"
          desc={[
            "PostScript was a language used to control output of laser printers. Adobe started to develop different fonts after PostScript’s success.",
            "In  the late 1980s, Apple and Adobe had a disagreement over licensing fees, causing the “font wars”. Adobe offered Display PostScript, a version of PostScript that ran on personal computers, to both Apple and Microsoft. Apple and Microsoft did not want to give control over a vital part of the operating system. Adobe also did not want to pay Apple’s stiff royalties. Apple and Microsoft would join forces to create their own technology similar to PostScript.",
            "During the font wars, Adobe focused on software development and in 1987 introduced Adobe Illustrator, a widely used software for vector graphics. Two years later in 1989, they introduced Adobe Photoshop, an image manipulation program that became the most popular and successful Adobe program.",
          ]}
        />
        <TimelineElement
          title="David Carson"
          date="1989"
          img="carson.png"
          desc={[
            "During the 1990s, there was a movement to move away from Swiss Modern. David Carson was the art director of Beach Culture (1989-91), Surfer (1991-92), and Ray Gun (1992-96). He was well known for his experimental approach to design, and he broke a lot of traditional design rules. He was an inspiration for the experimental nature and techniques that many used in computer graphics.",
          ]}
        />
        <TimelineElement
          title="World Wide Web"
          date="1989"
          img="www.jpeg"
          desc={[
            "Before the World Wide Web, the internet was just used for sending files from one place to another. Tim Berners-Lee, a Swiss computer programmer, introduced the World Wide Web. The World Wide Web was a “web” of information open to anyone.",
            "Users were able to communicate and exchange information globally. This marked a new period of accessibility, especially for artists. Artists could rely less on institutions and easily share information.",
          ]}
        />
        <TimelineElement
          title="Netscape"
          date="1992"
          img="netscape.jpeg"
          desc={[
            "At the University of Illinois, a group of students and researchers created a browser called Mosaic, later known as Netscape. This offered a user friendly way to access the website. Users could see words and computers on the same page, and users could navigate the web with scrollbars and hyperlinks.",
            "Later, Congress allowed the web to be used commercially. Companies and entrepreneurs rushed to set up websites to sell goods and services.",
          ]}
        />
        <TimelineElement
          title="Cascading Style Sheets"
          date="1994"
          img="css.webp"
          desc={[
            "It was difficult to code the website to have designs. Berners-Lee was more interested in the web as a digital directory of employees. Take Pei-Yuan Wei was one of the first who tried to make his own language for styling websites. Wei never quite found success in standardizing his language, but he was an inspiration for his successor Hakon Wium Lie who created Cascading Style Sheets, or just CSS.",
            "CSS revolutionized graphic design. CSS allowed a new level of control over the design of a website. It was possible to create rich, visually appealing designs for a website. CSS helped establish web design as a platform for creativity and popularized the focus on intuitive user experience and interfaces.",
          ]}
        />
        <TimelineElement
          title="Early Net Artists"
          date="1994"
          img="netart.jpeg"
          desc={[
            "The rise of newly aesthetic websites and the internet, paved a way for a sub-culture group of early internet artists concerned with less about aesthetically-pleasing websites, but with the power of the internet.",
            "These artists created interactive viewing experiences with browsers, search engines, and code.",
          ]}
        />
        <TimelineElement
          title="Yael Kanarek"
          date="1995"
          img="kanarek.png"
          desc={[
            "Israeli-American artist Yael Kanarek was one of these experimental artists. She created a project called the World of Awe, which is an online diary that mixes love letters, cyborgs, with 3D models and landscapes.",
          ]}
          href="https://www.worldofawe.net/thejournal/landing/"
          hrefTitle="World of Awe"
        />
        <TimelineElement
          title="Joan Heemskerk"
          date="1995"
          img="jodi.png"
          desc={[
            "Another one of these artists was Dutch artist Joan Heemsherk. He was responsible for many of the best-loved internet artworks of the 90s, including wwwwwwwww.Jodi.org. The website includes a page of random numbers of symbols like a programmer’s terminal window. Viewing the page source HTML code (right click, “View Page Source) reveals the hidden artwork.",
          ]}
          href="https://wwwwwwwww.jodi.org/"
          hrefTitle="wwwwwwwww.Jodi.org"
        />
        <TimelineElement
          title="iPhone"
          date="2007"
          img="iphone.webp"
          desc={[
            "The iPhone revolutionized communication. It changed the way people used phones as devices. People were able to do more than just call or text, and it had incredible portability, being handheld. The interface was sleek, intuitive, and touchscreen. Competing phone companies rushed to create their own touch screen phone.",
            "With the iPhone, the App Store was released which is arguably one of the most significant products in personal computing.  The App Store changed the way software was designed, used, and distributed. The App Store was a hub of applications that any users download applications from. Additionally, any user could upload their own applications. Thus, growing a new field of software development, and interface design that targets mobile applications. There was a need for developers who just focused on developing for mobile platforms. There was also a need for designers to design mobile interfaces and application icons.",
          ]}
          href="https://wwwwwwwww.jodi.org/"
          hrefTitle="wwwwwwwww.Jodi.org"
        />
      </Timeline>
    </main>
  );
}
