import { Header } from "@/components";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body className="bg-red-500">
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
