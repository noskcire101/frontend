import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Homepage from "@/components/routes/home";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import MainAnimatedFrame from "@/hooks/framer-motion/mainAnimatedFrame";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="title" content="Home" />
        <meta name="description" content="Home page Description here" />
        <meta name="keywords" content="Home page Keyword here" />
        <meta property="og:image" content="%PUBLIC_URL%/opengraph-image.jpg" />
        <meta property="og:url" content="https://www.example.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainAnimatedFrame>
        <Homepage />
      </MainAnimatedFrame>
    </>
  );
}
