import { Source_Code_Pro } from "next/font/google";
import Hero from "./components/Hero";
import TimelineElement from "./components/TimelineElement";
import Timeline from "./components/Timeline";
import ProgressBar from "./components/ProgressBar";
import Head from "next/head";
import Introduction from "./components/Introduction";
import Conclusion from "./components/Conclusion";

const source = Source_Code_Pro({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Graphic Design Timeline | Kayla Lin</title>
      </Head>
      <main className={`${source.className} bg-slate-950 pb-64`}>
        <ProgressBar />
        <Hero />
        <Introduction />
        <Timeline>
          <TimelineElement
            title="Rise of Skeuomorphism"
            date="1980s"
            img="skeumorphic.png"
            desc={[
              "Skeuomorphism involves creating a design that mimics its real life counterpart. For example, an icon of a trash can for deleting files, or a floppy disk for the save functionality. Skeuomorphic designs often had beveled edges, gradients, and reflections.",
              "It is a useful concept for design because of its design affordance: a shape that suggests its use. Since graphical interfaces on the computer were new. Computer interfaces would be much more intuitive with skeuomorphism, since it geared users with background knowledge on what the functionality might be.",
            ]}
          />
          <TimelineElement
            title="Xerox Star 8010"
            date="1981"
            img="xerox.jpeg"
            desc={[
              "Xerox launched the first personal computer for the office. This was the birth of the first ever graphic user interface (GUI). Norman Lloyd Cox converted the ideal of the office into a metaphor on the computer screen. He used skeuomorphism to represent functionality on the computer screen.",
              "Cox used the office as a metaphor for the computer. For example, the main hub, the 'desk', correlated to the computer's desktop. Files hold information and paper in the office. On the computer, files represented an object that held data/information, like text. Folders held multiple files in the office. And on the computer, folders held multiple files just like their real life counterpart.",
            ]}
          />
          <TimelineElement
            title="Apple’s 1984 Macintosh"
            date="1984"
            img="applemac.jpeg"
            desc={[
              "The Apple 1984 Macintosh was the first commercially successful personal computer with a graphic user interface. It helped popularize the idea that computers can be a tool for productivity and creativity.",
              "The laptop had a graphic program called MacPaint created by Bill Atkinson and Susan Kare. Creating computer graphics was very intuitive: Users drew with mouse or a drawing tablet, and then users could change the drawing tool with the toolbar. Anyone with a computer could experiment with graphic design.",
            ]}
          />
          <TimelineElement
            title="Susan Kare"
            date="1984"
            img="susankare.jpeg"
            desc={[
              "Susan Kare is the graphic designer 'who gave the Macintosh a smile'. She created the original set of icons for the Apple Macintosh. Pixel art was the best kind of graphics that computing power could hope for. However, the small amount of pixels were crucial for intuitive interfaces and designs. ",
              "She transferred the idea of off-screen iconography to its on screen equivalent, thus allowing for icons to be effective in the digital world. Kare worked without the use of colors because computers could not replicate colors. She created iconic symbols like the 'Ok' button, trashcan and command symbol.",
            ]}
          />
          <TimelineElement
            title="Andy Warhol"
            date="1985"
            img="warhol.jpeg"
            desc={[
              "In 1985, Andy Warhol became a Commodore International representative. He created a series of 28 digital “experiments” to help advertise the computer, Amiga 1000. Warhol helped others consider the computer as a serious tool for artwork.",
            ]}
          />
          <TimelineElement
            title="David Hockney"
            date="1986"
            img="hockney.jpeg"
            desc={[
              "David Hockney was one of the first artists to consider digital art as a serious medium. In 1986, he created digital paintings using Quantel Paintbox, which was a drawing surface that enabled users to draw computer graphics directly on the computer screen without transferring to another medium. He created a series of paintings for the BBC series, Painting with Light. Hockney still creates art today, but chooses to use an iPad instead of the Paintbox.",
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
              "Later, Congress allowed the web to be used commercially. Companies and entrepreneurs rushed to set up websites to sell goods and services. Thus, this created a shift in the internet towards marketing to consumers.",
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
          />
          <TimelineElement
            title="Flat Design"
            date="2013"
            img="flatdesign.jpeg"
            desc={[
              "Flat design came as a response to the overuse of skeuomorphism. Apple launched iOS 7, which signified the death of skeuomorphism to designs that were flat and simple, inspired by Swiss Modern. Apple used Helvetica Neue Ultra Light, and switched old application icons to new two-dimensional, simple designs.",
              "Skeuomorphism had issues, mainly because it began to hold interfaces back. As the world became more familiar with digital interfaces, skeuomorphism led to cluttered designs and useless details. The visual metaphor was no longer needed.",
            ]}
          />
          <TimelineElement
            title="Isometric Design"
            date="2013"
            img="isometric.webp"
            desc={[
              "Users benefitted from the shift to flat designs, but web designers and UX researchers found that flat design had user experience issues. One example of an issue of that some users may not click a flat button if they do not recognize it as clickable. Flat design evolved into Flat Design 2.0. Instead of completely flat logos, designers started to add highlights, gradients, and drop shadows to add depth and direction, while maintaining minimalism.",
              "This eventually evolved into a new trend of Isometric Design, or flat 3D designs. Isometric designs present a three dimensional view of an object, which “combines some elements of realism from skeuomorphism with the clean, modern approach of flat design”.",
            ]}
          />
          <TimelineElement
            title="Spotify"
            date="2015"
            img="wrapped.jpeg"
            desc={[
              "Spotify is one company herald for its innovative takes design and their ability to stay with the trends. In 2015, Spotify created “Wrapped” a feature for users to see their past history of statistics for the music they listened to. Spotify Wrapped would go viral in 2016 with its new animated design for Wrapped with colorful shapes and animation.",
            ]}
          />
          <TimelineElement
            title="Facebook's Alergia"
            date="2017"
            img="alegria.webp"
            desc={[
              "Alegria is an illustration system developed by creative agency Buck specifically for Facebook. Alegria, is a project to achieve aesthetic illustrations in a short period of time. The Alegria style is easy to standardize and replicate, so artists can keep it consistent and less money could be spent. The style was modified to be simpler for replicability during the development process.",
            ]}
          />
          <TimelineElement
            title="Google's Material Design"
            date="2017"
            img="material.avif"
            desc={[
              "Before Material Design, unfriendly user interfaces were common. There were inconsistencies in web design principles. Material Design is a design system created by Google to help teams build consistent, intuitive interfaces. It is one of the most used design systems to ever exist. Material Design pushed interfaces into a simpler cleaner design that users anticipated, which made web experiences feel more responsive and intuitive. Google also released material.io, which contained guidelines for developers and designers to create beautiful and functional designs.",
              "Material Design combined the best parts of skeuomorphism and flat design. Material Design takes inspiration from real-life objects, but doesn’t copy them. The design system gives them form, depth, while still relying on flat design elements.",
            ]}
            href="https://m3.material.io/"
            hrefTitle="material.io"
          />
          <TimelineElement
            title="Rise and Fall of Corporate Memphis"
            date="2017"
            img="corporate.jpeg"
            desc={[
              "Corporate Memphis, also known as big tech art, is a term to describe a style of illustration associated with Big Tech companies and startups, inspired by Facebook’s Alegria.",
              "With the rise of flat design, and vector graphics needed for websites and icons, Corporate Memphis became popular as they were simple, scalable illustrations to fill in white spaces.The colorful, friendly illustrations also combatted negative perceptions of large tech companies, who were often criticized for their monopoly and capitalistic behaviors. Corporate Memphis is often criticized for being overused, generic, and lazy because of its widespread use.",
            ]}
          />
        </Timeline>
        <Conclusion />
      </main>
    </>
  );
}
