import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";

import "../styles/css/globals.css";
import xLogo from "../assets/icons/x.svg";
import gitHub from "../assets/icons/github.svg";
import globe from "../assets/icons/globe.svg";
import discord from "../assets/icons/discord.svg";
import thumbnail from "../assets/img/seoThumb.png";
import Image from "next/image";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const webData = {
  title: "Cypheir Colour Palette - A Cypheir Collaborative Project",
  desc: "The Cypheir Colour Palette draws inspiration from a fusion of creativity, collaboration, and artistic expression. As a collaborative project, it celebrates the diverse perspectives and unique visions of its contributors.",
  siteName: "Cypheir Colour Palette",
  url: "https://palette.cypheir.xyz",
  img: {
    url: "https://res.cloudinary.com/dbeh9dzsh/image/upload/v1712020121/cypheir_creative/thumb/seoThumb_verkz4.png",
    alt: "",
    width: 800,
    height: 600,
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  creator: "@unnamedcodes",
  keywords: [
    "cypheir",
    "cypheir creative",
    "nextjs",
    "developers",
    "cypher",
    "cipher",
    "unnamed",
    "color",
    "colour",
    "palette",
    "colour palette",
    "colour palatte",
    "cypheir-color-scheme",
  ],
};

export const metadata: Metadata = {
  title: webData.title,
  description: webData.desc,
  openGraph: {
    title: webData.title,
    description: webData.desc,
    url: webData.url,
    siteName: webData.siteName,
    images: {
      url: webData.img.url,
      alt: webData.img.alt,
      width: webData.img.width,
      height: webData.img.height,
    },

    locale: "en_UK",
    type: "website",
  },
  // robots: webData.robots,
  twitter: {
    card: "summary_large_image",
    title: webData.title,
    description: webData.desc,
    creator: webData.creator,
    images: webData.img, // Must be an absolute URL
  },
  keywords: webData.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link
            rel="icon"
            href="/icon?<generated>"
            type="image/<generated>"
            sizes="<generated>"
          />
          <link
            rel="apple-touch-icon"
            href="/apple-icon?<generated>"
            type="image/<generated>"
            sizes="<generated>"
          />
        </Head>
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className={`footer`}>
        <div className="footer-credits">
          Copyright &copy;{year} All rights reserved. Made by{" "}
          <span>Unnamed</span> and many others with love. 💙
        </div>
        <div className="footer-social">
          <a
            href="https://twitter.com/cypheir_tech"
            target="_blank"
            rel="noreferrer noopener"
            className="social-icon"
          >
            <Image src={xLogo} alt="Visit Cypheir's X(Twitter) Page" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            className="social-icon"
          >
            <Image src={discord} alt="Discord" />
          </a>
          <a
            href="https://github.com/unnamed-lab/cypheir-creative"
            target="_blank"
            rel="noreferrer noopener"
            className="social-icon"
          >
            <Image src={gitHub} alt="GitHub" />
          </a>
          <a
            href="https://www.cypheir.xyz"
            target="_blank"
            rel="noreferrer noopener"
            className="social-icon"
          >
            <Image src={globe} alt="Web" />
          </a>
        </div>
      </footer>
    </>
  );
}
