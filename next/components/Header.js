import Head from "next/head";

export default function Header({ title }) {
  return (
    <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title} | Readvice</title>
        <link rel="icon" href="/readviceFavicon.ico" />
    </Head>
  )
}