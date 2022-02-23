import Link from "next/link";
import type { VFC } from "react";

export const Header: VFC = () => (
  <header>
    <nav className="w-screen bg-gray-800">
      <div className="flex h-14 items-center justify-between px-8">
        <div className="flex space-x-4">
          <Link href="/">
            <a data-testid="home-nav" className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700">
              Home
            </a>
          </Link>
          <Link href="/local-state-a">
            <a
              data-testid="makevar-nav"
              className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700"
            >
              makeVar
            </a>
          </Link>
          <Link href="/hasura-main">
            <a
              data-testid="fetchpolicy-nav"
              className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700"
            >
              fetchPolicy(Hasura)
            </a>
          </Link>
          <Link href="/hasura-crud">
            <a data-testid="crud-nav" className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700">
              CRUD(Hasura)
            </a>
          </Link>
          <Link href="/hasura-ssg">
            <a data-testid="ssg-nav" className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700">
              SSG+ISR(Hasura)
            </a>
          </Link>
          <Link href="/hooks-memo">
            <a data-testid="memo-nav" className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700">
              customhook+memo
            </a>
          </Link>
        </div>
      </div>
    </nav>
  </header>
);
