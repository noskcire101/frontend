import Head from "next/head";
import Homepage from "@/components/routes/home";
import MainAnimatedFrame from "@/hooks/framer-motion/mainAnimatedFrame";

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
