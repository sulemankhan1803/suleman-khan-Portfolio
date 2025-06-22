import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight : ["400", "500", "600"]
});

const ovo = Ovo({
  subsets: ["latin"], weight : ["400"]
});

export const metadata = {
 title: "Suleman Khan | Portfolio",
  description: "Explore the professional portfolio of Suleman Khan, a passionate Full Stack Developer skilled in JavaScript, React, Node.js, and more.",
  icons: {
    icon: '/favicon.png',
  },
};



// export const metadata = {
//   title: "Suleman Khan | Portfolio",
//   description: "Explore the professional portfolio of Suleman Khan, a passionate Full Stack Developer skilled in JavaScript, React, Node.js, and more.",
//   icons: {
//     icon: '/icon.png',
//   },
//   keywords: [
//     "Suleman Khan",
//     "Full Stack Developer",
//     "JavaScript Developer",
//     "React Portfolio",
//     "Web Developer",
//     "Frontend Developer",
//     "Backend Developer",
//     "Node.js",
//     "Portfolio Website"
//   ],
//   themeColor: "#ffffff",
//   openGraph: {
//     title: "Portfolio - Suleman Khan",
//     description: "Discover projects, skills, and experience of Full Stack Developer Suleman Khan. Explore modern web apps built using React, Node.js, and MongoDB.",
//     url: "https://yourdomain.com", // Replace with your actual domain
//     siteName: "Suleman Khan Portfolio",
//     images: [
//       {
//         url: "/og-image.png", // Place in public folder
//         width: 1200,
//         height: 630,
//         alt: "Suleman Khan Portfolio",
//       },
//     ],
//     type: "website",
//   },
// };


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark-theme`}
      >
        {children}
      </body>
    </html>
  );
}
