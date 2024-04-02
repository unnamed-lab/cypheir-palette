import Head from "next/head";
import Image from "next/image";
import { Block } from "./ui";
import develop from "../assets/img/develop.svg";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://palette.cypheir.xyz/"
          key="canonical"
        />
        <link
          rel="canonical"
          href="https://color.cypheir.xyz/"
          key="canonical"
        />
        <link
          rel="canonical"
          href="https://colours.cypheir.xyz/"
          key="canonical"
        />
      </Head>
      <Block
        image={develop}
        title="Page Under Construction"
        desc="We’re currently working hard behind the scenes to enhance your browsing experience. Stay tuned for exciting updates! 🚧✨"
        backLink={false}
      />
    </>
  );
}
