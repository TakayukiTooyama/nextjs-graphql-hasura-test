import type { NextPage } from "next";

import { Layout } from "@/components/Layout";

const Home: NextPage = () => (
  <Layout title="Home">
    <p className="text-3xl font-bold">GraphQL + Next.js</p>
  </Layout>
);

export default Home;
