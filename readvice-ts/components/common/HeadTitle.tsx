import { TitleProps } from "@/types/common";
import Head from "next/head";

export function HeadTitle({ title }: TitleProps ) {
  return (
    <Head>
        <title>{title} | Readvice</title>
    </Head>
  )
}