import Head from "next/head";
import type { FC } from "react";

import { Header } from "./Header";

type LayoutProps = {
  title: string;
};

export const Layout: FC<LayoutProps> = ({ title = "Welcom to Next.js", children }) => (
  <div className="flex min-h-screen flex-col items-center justify-center font-mono text-sm text-gray-600">
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <main className="flex w-screen flex-1 flex-col items-center justify-center">{children}</main>
  </div>
);
