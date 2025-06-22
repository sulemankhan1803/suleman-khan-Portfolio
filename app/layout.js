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
  description: "Welcome to the portfolio of Suleman Khan, an enthusiastic fresher and aspiring Full Stack Developer skilled in JavaScript, React, Node.js, and modern web technologies.",
  icons: {
    icon: '/favicon.png',
  },
  keywords: [
    "Suleman Khan",
    "Fresher Web Developer",
    "Junior Full Stack Developer",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "Node.js Developer",
    "Full Stack Projects",
    "JavaScript Projects",
    "Portfolio Website",
    "Full Stack Portfolio",
    "Web Developer Portfolio",
    "MERN Stack Developer",
    "Aspiring Software Engineer",
    "Entry Level Web Developer"
  ],
  themeColor: "#ffffff",
  openGraph: {
    title: "Suleman Khan | Portfolio",
    description: "Discover the portfolio of Suleman Khan, an aspiring Full Stack Developer and fresher skilled in JavaScript, React, and Node.js.",
    url: "https://suleman-khan-portfolio.vercel.app/",
    siteName: "Suleman Khan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Suleman Khan Portfolio",
      },
    ],
    type: "website",
  },
};



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
