import Head from "next/head";

type titleProps = {title: string}

export function Header({ title }: titleProps ) {
  return (
    <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title} | Readvice</title>
        <link rel="icon" href="/readviceFavicon.ico" />
    </Head>
  )
}